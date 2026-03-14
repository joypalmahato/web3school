"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { PostHogProvider } from "@/components/shared/PostHogProvider";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PostHogProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </PostHogProvider>
    </ThemeProvider>
  );
}
