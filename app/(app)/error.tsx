"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center gap-4">
      <p className="text-text-secondary text-sm max-w-sm">
        Something went wrong. Please try again or refresh the page.
      </p>
      <Button
        onClick={reset}
        className="bg-white text-black hover:opacity-85 rounded-md px-6"
      >
        Try again
      </Button>
    </div>
  );
}
