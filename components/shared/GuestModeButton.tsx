"use client";

import * as React from "react";
import { PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { enterGuestMode } from "@/lib/guest/client";
import type { VariantProps } from "class-variance-authority";

type GuestModeButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    redirectTarget?: string | null;
    label?: string;
  };

export function GuestModeButton({
  className,
  variant = "outline",
  size = "default",
  redirectTarget,
  label = "Try Guest Demo",
  onClick,
  ...props
}: GuestModeButtonProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const nextPath = enterGuestMode(redirectTarget);
    router.push(nextPath);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...props}
    >
      <PlayCircle className="w-4 h-4" />
      {label}
    </Button>
  );
}
