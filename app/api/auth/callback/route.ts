/**
 * Server-side OAuth callback handler.
 *
 * Receives ?insforge_code=xxx, reads the PKCE verifier from the
 * insforge_pkce cookie, exchanges the code for tokens server-side,
 * sets auth cookies (insforge-session + insforge-user), creates
 * profile if needed, and redirects.
 *
 * This bypasses the client-side SDK's detectAuthCallback() which
 * relies on sessionStorage for the PKCE verifier (unreliable across
 * cross-origin OAuth redirect chains).
 */
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url);
  const code = request.nextUrl.searchParams.get("insforge_code");
  const codeVerifier = request.cookies.get("insforge_pkce")?.value;

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=no_code`);
  }

  if (!codeVerifier) {
    return NextResponse.redirect(`${origin}/login?error=session_expired`);
  }

  try {
    // Exchange the OAuth code for tokens server-side
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
      return NextResponse.redirect(`${origin}/login?error=exchange_failed`);
    }

    const tokenData = await exchangeRes.json();

    if (!tokenData.accessToken || !tokenData.user) {
      console.error("No token/user in exchange response");
      return NextResponse.redirect(`${origin}/login?error=no_token`);
    }

    // Create profile if needed
    const userId = tokenData.user.id;
    const email = tokenData.user.email || "";
    const fullName = tokenData.user.profile?.name || "";
    let redirectPath = "/waitlist";

    try {
      const { data: existing } = await db("profiles")
        .select("user_id, onboarding_completed, discovery_completed, is_approved")
        .eq("user_id", userId)
        .single();

      if (!existing) {
        // Generate name-based referral code: firstname-xxxx
        const firstName = fullName.split(" ")[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") || "user";
        const suffix = Math.random().toString(36).substring(2, 6);
        const oauthReferralCode = `${firstName}-${suffix}`;

        await db("profiles").insert({
          user_id: userId,
          email,
          full_name: fullName,
          discovery_completed: false,
          onboarding_completed: false,
          xp_total: 0,
          level: 1,
          is_approved: false,
          approved_at: null,
          referral_code: oauthReferralCode,
        });

        // Auto-create waitlist entry for OAuth users
        try {
          const { data: existingWaitlist } = await db("waitlist")
            .select("id")
            .eq("email", email)
            .single();

          if (!existingWaitlist) {
            await db("waitlist").insert({
              name: fullName,
              email,
              status: "signed_up",
              user_id: userId,
              referral_code: oauthReferralCode,
            });
          } else {
            await db("waitlist")
              .update({ user_id: userId, status: "signed_up", referral_code: oauthReferralCode })
              .eq("id", existingWaitlist.id);
          }
        } catch {
          // Non-fatal
        }

        redirectPath = "/waitlist";
      } else if (!existing.is_approved) {
        redirectPath = "/waitlist";
      } else if (existing.discovery_completed) {
        redirectPath = "/learn";
      } else if (existing.onboarding_completed) {
        redirectPath = "/discover";
      } else {
        redirectPath = "/onboarding";
      }
    } catch (dbErr) {
      console.error("Profile check/create error:", dbErr);
    }

    // Build redirect response with auth cookies
    const response = NextResponse.redirect(`${origin}${redirectPath}`);

    // Set InsForge auth cookies (names must match @insforge/nextjs cookies.ts)
    response.cookies.set("insforge-session", tokenData.accessToken, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Set user info cookie for SSR
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

    // Clear the PKCE cookie
    response.cookies.delete("insforge_pkce");

    return response;
  } catch (err) {
    console.error("OAuth callback error:", err);
    return NextResponse.redirect(`${origin}/login?error=server_error`);
  }
}
