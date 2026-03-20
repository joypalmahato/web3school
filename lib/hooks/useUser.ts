/**
 * @hook useUser
 * @part-of Web3School — Authentication
 * @data Returns current user profile from InsForge
 * @flow Auto-refreshes on auth state change, provides loading/error states
 */
"use client";

import { useCallback, useEffect, useState } from "react";
import { useGuestSession } from "@/components/providers/GuestSessionProvider";
import { exitGuestMode, hasGuestSessionCookie } from "@/lib/guest/client";
import { useGuestStore } from "@/lib/guest/store";
import { getInsforgeClient } from "@/lib/insforge/client";
import { useUserStore } from "@/lib/stores/user-store";
import type { Profile } from "@/lib/types";

const CACHE_TTL = 300_000; // 5 minutes

export function useUser() {
  const initialGuestSession = useGuestSession();
  const { profile, isLoading, isAuthenticated, lastFetched, setProfile, setLoading, reset } =
    useUserStore();
  const guestProfile = useGuestStore((state) => state.profile);
  const guestIsActive = useGuestStore((state) => state.isActive);
  const activateGuest = useGuestStore((state) => state.activate);
  const [guestCookieActive, setGuestCookieActive] = useState(initialGuestSession);
  const isGuest = guestCookieActive || guestIsActive;

  useEffect(() => {
    setGuestCookieActive(hasGuestSessionCookie());
  }, [initialGuestSession]);

  useEffect(() => {
    if (guestCookieActive && !guestIsActive) {
      activateGuest();
    }
  }, [activateGuest, guestCookieActive, guestIsActive]);

  const fetchProfile = useCallback(async (force = false) => {
    if (isGuest) {
      return;
    }

    if (!force && profile && lastFetched && Date.now() - lastFetched < CACHE_TTL) {
      return;
    }

    const insforge = getInsforgeClient();
    setLoading(true);

    try {
      const { data: userData } = await insforge.auth.getCurrentUser();

      if (!userData?.user) {
        reset();
        return;
      }

      const { data, error } = await insforge.database
        .from("profiles")
        .select("*")
        .eq("user_id", userData.user.id)
        .single();

      if (error || !data) {
        reset();
        return;
      }

      setProfile(data as Profile);
    } finally {
      setLoading(false);
    }
  }, [isGuest, profile, lastFetched, setProfile, setLoading, reset]);

  useEffect(() => {
    if (isGuest) {
      reset();
      return;
    }

    fetchProfile();
  }, [fetchProfile, isGuest, reset]);

  const signOut = async () => {
    if (isGuest) {
      exitGuestMode();
      reset();
      return;
    }

    const insforge = getInsforgeClient();
    try {
      await insforge.auth.signOut();
    } catch {
      // ignore — still clear local state
    }
    reset();
  };

  return {
    profile: isGuest ? guestProfile : profile,
    isLoading: isGuest ? false : isLoading,
    isAuthenticated: isGuest ? true : isAuthenticated,
    isGuest,
    signOut,
    refreshProfile: () => {
      if (!isGuest) {
        void fetchProfile(true);
      }
    },
  };
}
