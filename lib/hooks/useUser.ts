/**
 * @hook useUser
 * @part-of Web3School — Authentication
 * @data Returns current user profile from Supabase
 * @flow Auto-refreshes on auth state change, provides loading/error states
 */
"use client";

import { useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useUserStore } from "@/lib/stores/user-store";
import type { Profile } from "@/lib/types";

export function useUser() {
  const { profile, isLoading, isAuthenticated, setProfile, setLoading, reset } =
    useUserStore();

  const fetchProfile = useCallback(async () => {
    const supabase = createClient();
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      reset();
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error || !data) {
      reset();
      return;
    }

    setProfile(data as Profile);
  }, [setProfile, setLoading, reset]);

  useEffect(() => {
    fetchProfile();

    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchProfile();
      } else {
        reset();
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchProfile, reset]);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    reset();
  };

  return {
    profile,
    isLoading,
    isAuthenticated,
    signOut,
    refreshProfile: fetchProfile,
  };
}
