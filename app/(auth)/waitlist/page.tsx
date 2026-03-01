import { auth } from "@insforge/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import type { Profile, WaitlistEntry } from "@/lib/types";
import { WaitlistStatus } from "@/components/waitlist/WaitlistStatus";

export const metadata = {
  title: "Waitlist — Web3School",
};

export default async function WaitlistPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signup");
  }

  const { data: profile } = await db("profiles")
    .select("is_approved, onboarding_completed, discovery_completed")
    .eq("user_id", userId)
    .single();

  const typedProfile = profile as Pick<
    Profile,
    "is_approved" | "onboarding_completed" | "discovery_completed"
  > | null;

  // Approved users skip waitlist
  if (typedProfile?.is_approved) {
    if (typedProfile.discovery_completed) {
      redirect("/learn");
    } else if (typedProfile.onboarding_completed) {
      redirect("/discover");
    } else {
      redirect("/onboarding");
    }
  }

  // Fetch waitlist entry
  const { data: waitlistEntry } = await db("waitlist")
    .select("waitlist_position, referral_code, referral_count")
    .eq("user_id", userId)
    .single();

  const typedEntry = waitlistEntry as Pick<
    WaitlistEntry,
    "waitlist_position" | "referral_code" | "referral_count"
  > | null;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.io";

  return (
    <WaitlistStatus
      position={typedEntry?.waitlist_position ?? 0}
      referralCode={typedEntry?.referral_code ?? ""}
      referralCount={typedEntry?.referral_count ?? 0}
      appUrl={appUrl}
    />
  );
}
