import { auth } from "@insforge/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
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

  // Profile may not exist yet (e.g. profile/create failed silently during signup).
  // Create it here so the user isn't stuck in a redirect loop.
  if (!profile) {
    const { data: created } = await db("profiles")
      .insert({
        user_id: userId,
        email: user?.email || "",
        full_name: user?.profile?.name || "",
        onboarding_completed: false,
        discovery_completed: false,
        xp_total: 0,
        level: 1,
      })
      .select("*")
      .single();

    profile = created;
  }

  // If insert also failed, show onboarding with empty defaults
  const typedProfile = (profile || {}) as Profile;

  if (typedProfile.onboarding_completed) {
    redirect("/discover");
  }

  return <OnboardingFlow initialProfile={typedProfile} />;
}
