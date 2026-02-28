/**
 * @hook useXP
 * @part-of Web3School — Gamification
 * @data Fetches total XP and calculates current level + progress
 * @flow Returns xp, level, progress percentage to next level
 */
"use client";

import { useUserStore } from "@/lib/stores/user-store";
import { getLevelFromXP, getXPForNextLevel } from "@/lib/types";

interface XPData {
  totalXP: number;
  level: number;
  currentLevelXP: number;
  neededForNext: number;
  progress: number;
}

export function useXP(): XPData {
  const { profile } = useUserStore();
  const totalXP = profile?.xp_total || 0;
  const level = getLevelFromXP(totalXP);
  const { current, needed, progress } = getXPForNextLevel(totalXP);

  return {
    totalXP,
    level,
    currentLevelXP: current,
    neededForNext: needed,
    progress,
  };
}
