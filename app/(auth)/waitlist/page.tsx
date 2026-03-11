import { auth } from "@insforge/nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { WaitlistStatus } from "@/components/waitlist/WaitlistStatus";
import { db } from "@/lib/db";
import { sanitizeAuthRedirectPath } from "@/lib/insforge/redirect";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";
import { ensureSignedUpUser } from "@/lib/waitlist/bootstrap";
import type { Profile, WaitlistEntry } from "@/lib/types";

export const metadata = {
  title: "Waitlist - Web3School",
};

type WaitlistPageProps = {
  searchParams?:
    | Promise<{ redirect?: string | string[] }>
    | { redirect?: string | string[] };
};

export default async function WaitlistPage({
  searchParams,
}: WaitlistPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const redirectParam = Array.isArray(resolvedSearchParams?.redirect)
    ? resolvedSearchParams.redirect[0]
    : resolvedSearchParams?.redirect;
  const safeRedirect = sanitizeAuthRedirectPath(redirectParam);

  const { userId, user } = await auth();

  if (!userId) {
    redirect("/signup");
  }

  const cookieStore = await cookies();
  const referredByCode = normalizeReferralCode(
    cookieStore.get(REFERRAL_CODE_COOKIE)?.value
  );

  try {
    await ensureSignedUpUser({
      userId,
      email: user?.email || "",
      fullName: user?.profile?.name || "",
      referredByCode,
    });
  } catch (bootstrapError) {
    console.error("Waitlist bootstrap error:", bootstrapError);
  }

  const { data: profile } = await db("profiles")
    .select("is_approved, onboarding_completed, discovery_completed, referral_code")
    .eq("user_id", userId)
    .single();

  const typedProfile = profile as Pick<
    Profile,
    "is_approved" | "onboarding_completed" | "discovery_completed" | "referral_code"
  > | null;

  if (typedProfile?.is_approved) {
    if (!typedProfile.onboarding_completed) {
      redirect("/onboarding");
    }

    if (!typedProfile.discovery_completed) {
      redirect("/discover");
    }

    if (safeRedirect) {
      redirect(safeRedirect);
    }

    redirect("/learn");
  }

  const { data: waitlistEntry } = await db("waitlist")
    .select("waitlist_position, referral_code, referral_count")
    .eq("user_id", userId)
    .single();

  const typedEntry = waitlistEntry as Pick<
    WaitlistEntry,
    "waitlist_position" | "referral_code" | "referral_count"
  > | null;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.io";
  const referralCode =
    typedProfile?.referral_code || typedEntry?.referral_code || "";

  return (
    <WaitlistStatus
      position={typedEntry?.waitlist_position ?? 0}
      referralCode={referralCode}
      referralCount={typedEntry?.referral_count ?? 0}
      appUrl={appUrl}
    />
  );
}
