import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

/**
 * POST /api/profile/create
 * Creates a profile row + waitlist entry after InsForge signup.
 * InsForge has no handle_new_user trigger, so we do it explicitly.
 */
export async function POST(request: Request) {
  try {
    const { userId, user } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if profile already exists
    const { data: existing } = await db("profiles")
      .select("user_id")
      .eq("user_id", userId)
      .single();

    if (existing) {
      return NextResponse.json({ success: true, message: "Profile already exists" });
    }

    const body = await request.json().catch(() => ({}));
    const email = user?.email || body.email || "";
    const fullName = user?.profile?.name || body.full_name || "";
    const referralCode: string | undefined = body.referral_code;

    // Generate name-based referral code: firstname-xxxx
    const firstName = fullName.split(" ")[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") || "user";
    const suffix = Math.random().toString(36).substring(2, 6);
    const myReferralCode = `${firstName}-${suffix}`;

    const { error } = await db("profiles").insert({
      user_id: userId,
      email,
      full_name: fullName,
      discovery_completed: false,
      onboarding_completed: false,
      xp_total: 0,
      level: 1,
      is_approved: false,
      approved_at: null,
      referral_code: myReferralCode,
    });

    if (error) {
      console.error("Profile creation error:", error);
      return NextResponse.json(
        { error: "Failed to create profile" },
        { status: 500 }
      );
    }

    // Auto-create waitlist entry for the new user
    try {
      const { data: existingWaitlist } = await db("waitlist")
        .select("id")
        .eq("email", email)
        .single();

      if (existingWaitlist) {
        // Link existing waitlist entry to this user
        await db("waitlist")
          .update({ user_id: userId, status: "signed_up", referral_code: myReferralCode })
          .eq("id", existingWaitlist.id);
      } else {
        await db("waitlist").insert({
          name: fullName,
          email,
          status: "signed_up",
          user_id: userId,
          referred_by: referralCode || null,
          referral_code: myReferralCode,
        });
      }

      // If a referral code was provided, increment the referrer's count
      if (referralCode) {
        const { data: referrer } = await db("waitlist")
          .select("id, referral_count")
          .eq("referral_code", referralCode)
          .single();

        if (referrer) {
          await db("waitlist")
            .update({ referral_count: (referrer.referral_count || 0) + 1 })
            .eq("id", referrer.id);
        }
      }
    } catch (waitlistErr) {
      // Waitlist creation is non-fatal
      console.error("Waitlist entry error:", waitlistErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Profile create error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
