"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getLevelFromXP, type Profile } from "@/lib/types";
import { getDefaultGuestProfile, GUEST_PRIMARY_ROLE_SLUG } from "@/lib/guest/demo-data";

interface GuestState {
  isActive: boolean;
  profile: Profile;
  selectedRoleSlug: string;
  completedTaskIds: string[];
  readNotificationIds: string[];
  passportPublic: boolean;
  activate: () => void;
  deactivate: () => void;
  updateProfile: (updates: Partial<Profile>) => void;
  completeTask: (taskId: string, xpReward: number) => void;
  markAllNotificationsRead: () => void;
  togglePassportPublic: (isPublic: boolean) => void;
}

function createGuestState() {
  return {
    isActive: false,
    profile: getDefaultGuestProfile(),
    selectedRoleSlug: GUEST_PRIMARY_ROLE_SLUG,
    completedTaskIds: ["guest-task-wallet-flow", "guest-task-state-model"],
    readNotificationIds: [],
    passportPublic: true,
  };
}

export const useGuestStore = create<GuestState>()(
  persist(
    (set) => ({
      ...createGuestState(),
      activate: () =>
        set((state) => ({
          ...state,
          isActive: true,
        })),
      deactivate: () => set(createGuestState()),
      updateProfile: (updates) =>
        set((state) => {
          const xpTotal = updates.xp_total ?? state.profile.xp_total;
          return {
            profile: {
              ...state.profile,
              ...updates,
              xp_total: xpTotal,
              level: getLevelFromXP(xpTotal),
              updated_at: new Date().toISOString(),
            },
          };
        }),
      completeTask: (taskId, xpReward) =>
        set((state) => {
          if (state.completedTaskIds.includes(taskId)) {
            return state;
          }

          const lastActiveDate = state.profile.last_active_at?.split("T")[0];
          const today = new Date().toISOString().split("T")[0];
          const shouldIncrementStreak = lastActiveDate !== today;
          const nextXP = state.profile.xp_total + xpReward;
          const nextStreak = shouldIncrementStreak
            ? state.profile.streak_count + 1
            : state.profile.streak_count;

          return {
            completedTaskIds: [...state.completedTaskIds, taskId],
            profile: {
              ...state.profile,
              xp_total: nextXP,
              level: getLevelFromXP(nextXP),
              streak_count: nextStreak,
              longest_streak: Math.max(nextStreak, state.profile.longest_streak),
              last_active_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          };
        }),
      markAllNotificationsRead: () =>
        set((state) => ({
          readNotificationIds: [
            "guest-notification-1",
            "guest-notification-2",
            "guest-notification-3",
            ...state.readNotificationIds,
          ],
        })),
      togglePassportPublic: (passportPublic) => set({ passportPublic }),
    }),
    {
      name: "web3school-guest-demo",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isActive: state.isActive,
        profile: state.profile,
        selectedRoleSlug: state.selectedRoleSlug,
        completedTaskIds: state.completedTaskIds,
        readNotificationIds: state.readNotificationIds,
        passportPublic: state.passportPublic,
      }),
    }
  )
);
