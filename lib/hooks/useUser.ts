/**
 * @hook useUser
 * @part-of Web3School — Authentication
 * @data Returns current user profile from InsForge
 * @flow Auto-refreshes on auth state change, provides loading/error states
 */
"use client";

import { useEffect, useCallback } from "react";
import { getInsforgeClient } from "@/lib/insforge/client";
import { useUserStore } from "@/lib/stores/user-store";
import type { Profile } from "@/lib/types";

const CACHE_TTL = 300_000; // 5 minutes

export function useUser() {
  const { profile, isLoading, isAuthenticated, lastFetched, setProfile, setLoading, reset } =
    useUserStore();

  const fetchProfile = useCallback(async (force = false) => {
    if (!force && profile && lastFetched && Date.now() - lastFetched < CACHE_TTL) {
      return;
    }

    const insforge = getInsforgeClient();
    setLoading(true);

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
  }, [profile, lastFetched, setProfile, setLoading, reset]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const signOut = async () => {
    const insforge = getInsforgeClient();
    await insforge.auth.signOut();
    reset();
  };

  return {
    profile,
    isLoading,
    isAuthenticated,
    signOut,
    refreshProfile: () => fetchProfile(true),
  };
}
