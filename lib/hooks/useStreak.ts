/**
 * @hook useStreak
 * @part-of Web3School — Gamification
 * @data Returns streak data derived from profile (no extra DB call)
 */
"use client";

import { useUser } from "@/lib/hooks/useUser";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  maintainedToday: boolean;
  isLoading: boolean;
}

export function useStreak(): StreakData {
  const { profile, isLoading } = useUser();
  const maintainedToday = profile?.last_active_at
    ? new Date(profile.last_active_at).toISOString().split("T")[0] ===
      new Date().toISOString().split("T")[0]
    : false;

  return {
    currentStreak: profile?.streak_count ?? 0,
    longestStreak: profile?.longest_streak ?? 0,
    maintainedToday,
    isLoading,
  };
}
