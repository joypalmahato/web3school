import { NextRequest, NextResponse } from "next/server";
import {
  buildPostAuthRedirectPath,
  POST_AUTH_REDIRECT_COOKIE,
  sanitizeAuthRedirectPath,
  withAuthRedirect,
} from "@/lib/insforge/redirect";
import { sendBetaAccessEmail } from "@/lib/emails/sendBetaAccessEmail";
import { ensureSignedUpUser } from "@/lib/waitlist/bootstrap";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";

function decodeCookieValue(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function redirectToLogin(
  origin: string,
  errorCode: string,
  redirectPath: string | null
) {
  const loginUrl = new URL(withAuthRedirect("/login", redirectPath), origin);
  loginUrl.searchParams.set("error", errorCode);

  const response = NextResponse.redirect(loginUrl);
  response.cookies.delete("insforge_pkce");
  response.cookies.delete(POST_AUTH_REDIRECT_COOKIE);

  return response;
}

export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url);
  const code = request.nextUrl.searchParams.get("insforge_code");
  const codeVerifier = request.cookies.get("insforge_pkce")?.value;
  const redirectPath = sanitizeAuthRedirectPath(
    decodeCookieValue(request.cookies.get(POST_AUTH_REDIRECT_COOKIE)?.value)
  );
  const referredByCode = normalizeReferralCode(
    decodeCookieValue(request.cookies.get(REFERRAL_CODE_COOKIE)?.value)
  );

  if (!code) {
    return redirectToLogin(origin, "no_code", redirectPath);
  }

  if (!codeVerifier) {
    return redirectToLogin(origin, "session_expired", redirectPath);
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!;
    const anonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;

    const exchangeRes = await fetch(`${baseUrl}/api/auth/oauth/exchange`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
      },
      body: JSON.stringify({
        code,
        code_verifier: codeVerifier,
      }),
    });

    if (!exchangeRes.ok) {
      const err = await exchangeRes.text();
      console.error("OAuth exchange failed:", err);
      return redirectToLogin(origin, "exchange_failed", redirectPath);
    }

    const tokenData = await exchangeRes.json();

    if (!tokenData.accessToken || !tokenData.user) {
      console.error("No token/user in exchange response");
      return redirectToLogin(origin, "no_token", redirectPath);
    }

    try {
      await ensureSignedUpUser({
        userId: tokenData.user.id,
        email: tokenData.user.email || "",
        fullName: tokenData.user.profile?.name || "",
        referredByCode,
      });
    } catch (bootstrapError) {
      console.error("OAuth bootstrap error:", bootstrapError);
    }

    try {
      await sendBetaAccessEmail({
        userId: tokenData.user.id,
        email: tokenData.user.email || "",
        name: tokenData.user.profile?.name || "",
      });
    } catch (emailError) {
      console.error("OAuth beta access email error:", emailError);
    }

    const response = NextResponse.redirect(
      new URL(buildPostAuthRedirectPath(redirectPath), origin)
    );

    response.cookies.set("insforge-session", tokenData.accessToken, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    response.cookies.set(
      "insforge-user",
      JSON.stringify({
        id: tokenData.user.id,
        email: tokenData.user.email,
        profile: tokenData.user.profile || null,
      }),
      {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    response.cookies.delete("insforge_pkce");
    response.cookies.delete(POST_AUTH_REDIRECT_COOKIE);
    response.cookies.delete(REFERRAL_CODE_COOKIE);

    return response;
  } catch (err) {
    console.error("OAuth callback error:", err);
    return redirectToLogin(origin, "server_error", redirectPath);
  }
}
