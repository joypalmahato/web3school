import { auth } from "@insforge/nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";
import { ensureSignedUpUser } from "@/lib/waitlist/bootstrap";
import type { Profile } from "@/lib/types";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

export const metadata = {
  title: "Complete Your Profile — Web3School",
};

export default async function OnboardingPage() {
  const { userId, user } = await auth();

  if (!userId) {
    redirect("/login");
  }

  let { data: profile } = await db("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (!profile) {
    const cookieStore = await cookies();
    const referredByCode = normalizeReferralCode(
      cookieStore.get(REFERRAL_CODE_COOKIE)?.value
    );

    try {
      const bootstrap = await ensureSignedUpUser({
        userId,
        email: user?.email || "",
        fullName: user?.profile?.name || "",
        referredByCode,
      });

      profile = bootstrap.profile;
    } catch (bootstrapError) {
      console.error("Onboarding bootstrap error:", bootstrapError);
    }
  }

  // If insert also failed, show onboarding with empty defaults
  const typedProfile = (profile || {}) as Profile;

  if (typedProfile.onboarding_completed) {
    redirect("/discover");
  }

  return <OnboardingFlow initialProfile={typedProfile} />;
}
