/**
 * @component ThemeProvider
 * @part-of Web3School — Shared Components
 * @design Dark theme ONLY. No light mode toggle.
 */
"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
