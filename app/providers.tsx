"use client";

import { InsforgeBrowserProvider, type InitialAuthState } from "@insforge/nextjs";
import { getInsforgeClient } from "@/lib/insforge/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PostHogProvider } from "@/components/shared/PostHogProvider";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export function Providers({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: InitialAuthState;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const client = getInsforgeClient() as any;

  return (
    <ThemeProvider>
      <InsforgeBrowserProvider
        client={client}
        afterSignInUrl="/discover"
        initialState={initialState}
      >
        <PostHogProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </PostHogProvider>
      </InsforgeBrowserProvider>
    </ThemeProvider>
  );
}
