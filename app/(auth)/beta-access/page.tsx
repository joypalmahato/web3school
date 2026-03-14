import { auth } from "@insforge/nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { sanitizeAuthRedirectPath } from "@/lib/insforge/redirect";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";
import { ensureSignedUpUser } from "@/lib/waitlist/bootstrap";
import type { Profile } from "@/lib/types";

export const metadata = {
  title: "Beta Access - Web3School",
};

type BetaAccessPageProps = {
  searchParams?: Promise<{ redirect?: string | string[] }>;
};

export default async function BetaAccessPage({
  searchParams,
}: BetaAccessPageProps) {
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
    console.error("Beta access bootstrap error:", bootstrapError);
  }

  const { data: profile } = await db("profiles")
    .select("onboarding_completed, discovery_completed")
    .eq("user_id", userId)
    .single();

  const typedProfile = profile as Pick<
    Profile,
    "onboarding_completed" | "discovery_completed"
  > | null;

  if (!typedProfile?.onboarding_completed) {
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
