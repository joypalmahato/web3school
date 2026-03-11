import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { ensureSignedUpUser } from "@/lib/waitlist/bootstrap";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";

/**
 * POST /api/profile/create
 * Ensures the signed-in user has a profile row, a linked waitlist row,
 * referral attribution, and referral history.
 */
export async function POST(request: Request) {
  try {
    const { userId, user } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const referredByCode = normalizeReferralCode(
      body.referral_code || request.headers.get("x-referral-code")
    );

    const result = await ensureSignedUpUser({
      userId,
      email: user?.email || body.email || "",
      fullName: user?.profile?.name || body.full_name || "",
      referredByCode,
    });

    const response = NextResponse.json({
      success: true,
      profile: result.profile,
      waitlist: result.waitlistEntry,
    });

    if (referredByCode) {
      response.cookies.delete(REFERRAL_CODE_COOKIE);
    }

    return response;
  } catch (err) {
    console.error("Profile create error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
