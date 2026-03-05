/**
 * @component ProgressRing
 * @part-of Web3School — Gamification
 * @design Circular SVG progress indicator with animated fill and center text
 */
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const RING_COLORS: Record<string, [string, string]> = {
  green:  ["#10B981", "#34D399"],
  violet: ["#7C3AED", "#8B5CF6"],
  amber:  ["#D97706", "#EAB308"],
  blue:   ["#1D4ED8", "#3B82F6"],
  orange: ["#EA580C", "#F97316"],
};

interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  className?: string;
  color?: keyof typeof RING_COLORS;
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  label,
  sublabel,
  className,
  color = "green",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(progress, 100) / 100) * circumference;
  const [colorStart, colorEnd] = RING_COLORS[color] ?? RING_COLORS.green;
  const gradientId = `ringGradient-${color}`;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-navy-deep"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-heading font-bold text-text-primary">
          {label ?? `${Math.round(progress)}%`}
        </span>
        {sublabel && (
          <span className="text-text-muted text-xs">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
