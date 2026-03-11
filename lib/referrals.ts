export const REFERRAL_CODE_COOKIE = "web3school_referral_code";

export function normalizeReferralCode(
  value: string | null | undefined
): string | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");

  if (!normalized) {
    return null;
  }

  return normalized.slice(0, 64);
}

export function buildReferralCodeSeed(name: string | null | undefined): string {
  const baseName =
    name
      ?.split(" ")[0]
      ?.toLowerCase()
      .replace(/[^a-z0-9]/g, "") || "user";
  const suffix = Math.random().toString(36).slice(2, 6);

  return `${baseName}-${suffix}`;
}
