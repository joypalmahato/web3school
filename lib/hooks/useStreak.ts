/**
 * @hook useStreak
 * @part-of Web3School — Gamification
 * @data Returns streak data derived from profile (no extra DB call)
 */
"use client";

import { useState, useEffect, useCallback } from "react";
import { useUserStore } from "@/lib/stores/user-store";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  maintainedToday: boolean;
  isLoading: boolean;
}

export function useStreak(): StreakData {
  const { profile } = useUserStore();
  const [maintainedToday, setMaintainedToday] = useState(false);
  const [checked, setChecked] = useState(false);

  const checkToday = useCallback(async () => {
    if (!profile) {
      setChecked(true);
      return;
    }

    // Check last_active_at instead of making a DB query
    if (profile.last_active_at) {
      const lastActive = new Date(profile.last_active_at).toISOString().split("T")[0];
      const today = new Date().toISOString().split("T")[0];
      setMaintainedToday(lastActive === today);
    }
    setChecked(true);
  }, [profile]);

  useEffect(() => {
    checkToday();
  }, [checkToday]);

  return {
    currentStreak: profile?.streak_count || 0,
    longestStreak: profile?.longest_streak || 0,
    maintainedToday,
    isLoading: !checked,
  };
}
