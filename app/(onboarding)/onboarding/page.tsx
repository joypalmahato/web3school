import { auth } from "@insforge/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import type { Profile } from "@/lib/types";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

export const metadata = {
  title: "Complete Your Profile — Web3School",
};

export default async function OnboardingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const { data: profile } = await db("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (!profile) {
    redirect("/login");
  }

  const typedProfile = profile as Profile;

  if (typedProfile.onboarding_completed) {
    redirect("/discover");
  }

  return <OnboardingFlow initialProfile={typedProfile} />;
}
