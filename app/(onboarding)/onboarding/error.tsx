"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function OnboardingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Onboarding error:", error);
  }, [error]);

  return (
    <div className="w-full max-w-md text-center py-20">
      <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
        Something went wrong
      </h2>
      <p className="text-text-secondary mb-6">
        We couldn&apos;t load the onboarding flow. Please try again.
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={reset}
          className="bg-white text-black rounded-lg px-6 py-3 font-semibold transition-all hover:opacity-85 active:scale-[0.98]"
        >
          Try again
        </button>
        <Link
          href="/discover"
          className="bg-navy-mid border border-border text-text-primary rounded-lg px-6 py-3 font-semibold transition-all hover:bg-navy-light"
        >
          Skip for now
        </Link>
      </div>
    </div>
  );
}
