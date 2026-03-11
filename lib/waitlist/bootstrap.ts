import { db } from "@/lib/db";
import { buildReferralCodeSeed, normalizeReferralCode } from "@/lib/referrals";
import type { Profile, WaitlistEntry } from "@/lib/types";

type BootstrapSignedUpUserParams = {
  userId: string;
  email?: string | null;
  fullName?: string | null;
  referredByCode?: string | null;
};

type BootstrappedProfile = Pick<
  Profile,
  | "user_id"
  | "email"
  | "full_name"
  | "is_approved"
  | "approved_at"
  | "onboarding_completed"
  | "discovery_completed"
  | "waitlist_id"
  | "referral_code"
>;

type BootstrappedWaitlistEntry = Pick<
  WaitlistEntry,
  | "id"
  | "email"
  | "name"
  | "status"
  | "user_id"
  | "referral_code"
  | "referred_by"
  | "referral_count"
  | "waitlist_position"
>;

type ReferralEventRecord = {
  id: string;
  referrer_waitlist_id: string;
};

type WaitlistRecord = {
  id: string;
  referral_code: string;
};

async function getProfileByUserId(userId: string) {
  const { data } = await db("profiles")
    .select(
      "user_id, email, full_name, is_approved, approved_at, onboarding_completed, discovery_completed, waitlist_id, referral_code"
    )
    .eq("user_id", userId)
    .limit(1);

  return (data?.[0] as BootstrappedProfile | undefined) ?? null;
}

async function getWaitlistEntry(userId: string, email: string | null) {
  const waitlistByUserId = await db("waitlist")
    .select(
      "id, email, name, status, user_id, referral_code, referred_by, referral_count, waitlist_position"
    )
    .eq("user_id", userId)
    .limit(1);

  if (waitlistByUserId.data?.[0]) {
    return waitlistByUserId.data[0] as BootstrappedWaitlistEntry;
  }

  if (!email) {
    return null;
  }

  const waitlistByEmail = await db("waitlist")
    .select(
      "id, email, name, status, user_id, referral_code, referred_by, referral_count, waitlist_position"
    )
    .eq("email", email)
    .limit(1);

  return (waitlistByEmail.data?.[0] as BootstrappedWaitlistEntry | undefined) ?? null;
}

async function syncReferralCount(referrerWaitlistId: string) {
  const { count } = await db("referral_events")
    .select("*", { count: "exact", head: true })
    .eq("referrer_waitlist_id", referrerWaitlistId);

  await db("waitlist")
    .update({ referral_count: count ?? 0 })
    .eq("id", referrerWaitlistId);
}

async function trackReferralHistory(params: {
  referredByCode: string | null;
  ownReferralCode: string;
  waitlistEntry: BootstrappedWaitlistEntry;
  userId: string;
}) {
  const { referredByCode, ownReferralCode, waitlistEntry, userId } = params;

  if (!referredByCode || referredByCode === ownReferralCode) {
    return;
  }

  try {
    const { data: referrerRows } = await db("waitlist")
      .select("id, referral_code")
      .eq("referral_code", referredByCode)
      .limit(1);

    const referrer = (referrerRows?.[0] as WaitlistRecord | undefined) ?? null;

    if (!referrer || referrer.id === waitlistEntry.id) {
      return;
    }

    const { data: existingEventRows } = await db("referral_events")
      .select("id, referrer_waitlist_id")
      .eq("referred_waitlist_id", waitlistEntry.id)
      .limit(1);

    const existingEvent =
      (existingEventRows?.[0] as ReferralEventRecord | undefined) ?? null;
    const previousReferrerId = existingEvent?.referrer_waitlist_id ?? null;

    if (!existingEvent) {
      await db("referral_events").insert({
        referrer_waitlist_id: referrer.id,
        referred_waitlist_id: waitlistEntry.id,
        referrer_code: referrer.referral_code,
        referred_user_id: userId,
      });
    } else if (existingEvent.referrer_waitlist_id !== referrer.id) {
      await db("referral_events")
        .update({
          referrer_waitlist_id: referrer.id,
          referrer_code: referrer.referral_code,
          referred_user_id: userId,
        })
        .eq("id", existingEvent.id);
    }

    await db("waitlist")
      .update({ referred_by: referrer.referral_code })
      .eq("id", waitlistEntry.id);

    await syncReferralCount(referrer.id);

    if (previousReferrerId && previousReferrerId !== referrer.id) {
      await syncReferralCount(previousReferrerId);
    }
  } catch (error) {
    console.error("Referral history tracking failed:", error);
  }
}

export async function ensureSignedUpUser({
  userId,
  email,
  fullName,
  referredByCode,
}: BootstrapSignedUpUserParams) {
  const normalizedEmail = email?.trim().toLowerCase() || null;
  const normalizedName = fullName?.trim() || "";
  const normalizedReferredBy = normalizeReferralCode(referredByCode);

  let profile = await getProfileByUserId(userId);
  const ownReferralCode =
    normalizeReferralCode(profile?.referral_code) ||
    buildReferralCodeSeed(normalizedName || normalizedEmail || userId);

  if (!profile) {
    const { data: createdProfile, error: profileError } = await db("profiles")
      .insert({
        user_id: userId,
        email: normalizedEmail || "",
        full_name: normalizedName,
        discovery_completed: false,
        onboarding_completed: false,
        xp_total: 0,
        level: 1,
        is_approved: false,
        approved_at: null,
        referral_code: ownReferralCode,
      })
      .select(
        "user_id, email, full_name, is_approved, approved_at, onboarding_completed, discovery_completed, waitlist_id, referral_code"
      )
      .single();

    if (profileError || !createdProfile) {
      throw profileError || new Error("Failed to create profile");
    }

    profile = createdProfile as BootstrappedProfile;
  } else {
    const profileUpdates: Record<string, unknown> = {};

    if (!profile.email && normalizedEmail) {
      profileUpdates.email = normalizedEmail;
    }

    if (!profile.full_name && normalizedName) {
      profileUpdates.full_name = normalizedName;
    }

    if (!profile.referral_code) {
      profileUpdates.referral_code = ownReferralCode;
    }

    if (Object.keys(profileUpdates).length > 0) {
      const { data: updatedProfile } = await db("profiles")
        .update(profileUpdates)
        .eq("user_id", userId)
        .select(
          "user_id, email, full_name, is_approved, approved_at, onboarding_completed, discovery_completed, waitlist_id, referral_code"
        )
        .single();

      if (updatedProfile) {
        profile = updatedProfile as BootstrappedProfile;
      }
    }
  }

  let waitlistEntry = await getWaitlistEntry(
    userId,
    normalizedEmail || profile.email || null
  );

  if (!waitlistEntry) {
    if (!normalizedEmail && !profile.email) {
      throw new Error("Cannot create waitlist entry without an email address");
    }

    const { data: createdWaitlist, error: waitlistError } = await db("waitlist")
      .insert({
        name: normalizedName || profile.full_name || "Web3School User",
        email: normalizedEmail || profile.email,
        status: "signed_up",
        user_id: userId,
        referred_by: normalizedReferredBy,
        referral_code: ownReferralCode,
      })
      .select(
        "id, email, name, status, user_id, referral_code, referred_by, referral_count, waitlist_position"
      )
      .single();

    if (waitlistError || !createdWaitlist) {
      throw waitlistError || new Error("Failed to create waitlist entry");
    }

    waitlistEntry = createdWaitlist as BootstrappedWaitlistEntry;
  } else {
    const waitlistUpdates: Record<string, unknown> = {};

    const nextName = normalizedName || profile.full_name;
    const nextEmail = normalizedEmail || profile.email;

    if (waitlistEntry.user_id !== userId) {
      waitlistUpdates.user_id = userId;
    }

    if (waitlistEntry.status !== "signed_up") {
      waitlistUpdates.status = "signed_up";
    }

    if (nextName && waitlistEntry.name !== nextName) {
      waitlistUpdates.name = nextName;
    }

    if (nextEmail && waitlistEntry.email !== nextEmail) {
      waitlistUpdates.email = nextEmail;
    }

    if (!waitlistEntry.referral_code || waitlistEntry.referral_code !== ownReferralCode) {
      waitlistUpdates.referral_code = ownReferralCode;
    }

    if (
      normalizedReferredBy &&
      normalizedReferredBy !== ownReferralCode &&
      waitlistEntry.referred_by !== normalizedReferredBy
    ) {
      waitlistUpdates.referred_by = normalizedReferredBy;
    }

    if (Object.keys(waitlistUpdates).length > 0) {
      const { data: updatedWaitlist } = await db("waitlist")
        .update(waitlistUpdates)
        .eq("id", waitlistEntry.id)
        .select(
          "id, email, name, status, user_id, referral_code, referred_by, referral_count, waitlist_position"
        )
        .single();

      if (updatedWaitlist) {
        waitlistEntry = updatedWaitlist as BootstrappedWaitlistEntry;
      }
    }
  }

  const waitlistId = waitlistEntry.id;
  const profileUpdates: Record<string, unknown> = {};

  if (profile.waitlist_id !== waitlistId) {
    profileUpdates.waitlist_id = waitlistId;
  }

  if (profile.referral_code !== ownReferralCode) {
    profileUpdates.referral_code = ownReferralCode;
  }

  if (Object.keys(profileUpdates).length > 0) {
    const { data: updatedProfile } = await db("profiles")
      .update(profileUpdates)
      .eq("user_id", userId)
      .select(
        "user_id, email, full_name, is_approved, approved_at, onboarding_completed, discovery_completed, waitlist_id, referral_code"
      )
      .single();

    if (updatedProfile) {
      profile = updatedProfile as BootstrappedProfile;
    }
  }

  await trackReferralHistory({
    referredByCode: normalizedReferredBy,
    ownReferralCode,
    waitlistEntry,
    userId,
  });

  const refreshedWaitlistEntry =
    (await getWaitlistEntry(userId, normalizedEmail || profile.email || null)) ??
    waitlistEntry;

  return {
    profile,
    waitlistEntry: refreshedWaitlistEntry,
  };
}
