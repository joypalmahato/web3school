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
    .select("is_approved, onboarding_completed, discovery_completed, referral_code")
    .eq("user_id", userId)
    .single();

  const typedProfile = profile as Pick<
    Profile,
    "is_approved" | "onboarding_completed" | "discovery_completed" | "referral_code"
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

  // Use referral code from profile or waitlist (profile takes priority)
  const referralCode = typedProfile?.referral_code || typedEntry?.referral_code || "";

  return (
    <>
      {/* Override auth layout hero bg — waitlist uses plain site background */}
      <div className="fixed inset-0" style={{ background: "#0A0A0A", zIndex: -5 }} />
      <WaitlistStatus
        position={typedEntry?.waitlist_position ?? 0}
        referralCode={referralCode}
        referralCount={typedEntry?.referral_count ?? 0}
        appUrl={appUrl}
      />
    </>
  );
}
