import { create } from "zustand";

interface AppState {
  sidebarOpen: boolean;
  activePage: string;
  notifications: number;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActivePage: (page: string) => void;
  setNotifications: (count: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  activePage: "discover",
  notifications: 0,
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActivePage: (activePage) => set({ activePage }),
  setNotifications: (notifications) => set({ notifications }),
}));
