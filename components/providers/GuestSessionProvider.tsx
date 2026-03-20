"use client";

import { createContext, useContext } from "react";

const GuestSessionContext = createContext(false);

export function GuestSessionProvider({
  children,
  initialGuestSession,
}: {
  children: React.ReactNode;
  initialGuestSession: boolean;
}) {
  return (
    <GuestSessionContext.Provider value={initialGuestSession}>
      {children}
    </GuestSessionContext.Provider>
  );
}

export function useGuestSession() {
  return useContext(GuestSessionContext);
}
