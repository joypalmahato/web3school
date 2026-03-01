import { create } from "zustand";
import type { Profile } from "@/lib/types";

interface UserState {
  profile: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  lastFetched: number | null;
  setProfile: (profile: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  updateProfile: (updates: Partial<Profile>) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  isLoading: true,
  isAuthenticated: false,
  lastFetched: null,
  setProfile: (profile) =>
    set({ profile, isAuthenticated: !!profile, isLoading: false, lastFetched: Date.now() }),
  setLoading: (isLoading) => set({ isLoading }),
  updateProfile: (updates) =>
    set((state) => ({
      profile: state.profile ? { ...state.profile, ...updates } : null,
    })),
  reset: () => set({ profile: null, isAuthenticated: false, isLoading: false, lastFetched: null }),
}));
