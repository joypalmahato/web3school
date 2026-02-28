/**
 * @hook useStreak
 * @part-of Web3School — Gamification
 * @data Fetches current streak from InsForge streak_history
 * @flow Returns streak count, longest streak, whether maintained today
 */
"use client";

import { useState, useEffect, useCallback } from "react";
import { getInsforgeClient } from "@/lib/insforge/client";
import { useUserStore } from "@/lib/stores/user-store";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  maintainedToday: boolean;
  isLoading: boolean;
}

export function useStreak(): StreakData {
  const { profile } = useUserStore();
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [maintainedToday, setMaintainedToday] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStreak = useCallback(async () => {
    if (!profile) {
      setIsLoading(false);
      return;
    }

    const insforge = getInsforgeClient();
    const today = new Date().toISOString().split("T")[0];

    // Check if user has a streak entry for today
    const { data: todayEntry } = await insforge.database
      .from("streak_history")
      .select("id")
      .eq("user_id", profile.user_id || profile.id)
      .eq("date", today)
      .single();

    setMaintainedToday(!!todayEntry);
    setCurrentStreak(profile.streak_count || 0);
    setLongestStreak(profile.longest_streak || 0);
    setIsLoading(false);
  }, [profile]);

  useEffect(() => {
    fetchStreak();
  }, [fetchStreak]);

  return { currentStreak, longestStreak, maintainedToday, isLoading };
}
