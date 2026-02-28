/**
 * @component GlowCard
 * @part-of Web3School — Shared Components
 * @design Glassmorphism card with glow effect on hover
 */
"use client";

import { cn } from "@/lib/utils/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "purple-primary",
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6",
        "transition-all duration-300",
        `hover:border-${glowColor}/50 hover:shadow-lg hover:shadow-${glowColor}/10`,
        "hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
