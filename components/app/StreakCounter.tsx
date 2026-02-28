/**
 * @component StreakCounter
 * @part-of Web3School — Gamification
 * @design Flame icon with animation, streak count, tooltip details
 */
"use client";

import { Flame } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useStreak } from "@/lib/hooks/useStreak";

interface StreakCounterProps {
  compact?: boolean;
}

export function StreakCounter({ compact = false }: StreakCounterProps) {
  const { currentStreak, longestStreak, maintainedToday } = useStreak();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-1.5 cursor-default",
            compact ? "text-sm" : "text-base"
          )}
        >
          <Flame
            className={cn(
              "transition-all duration-300",
              compact ? "w-4 h-4" : "w-5 h-5",
              maintainedToday
                ? "text-amber-warning drop-shadow-[0_0_6px_rgba(245,158,11,0.5)] animate-pulse"
                : currentStreak > 0
                  ? "text-amber-warning/70"
                  : "text-text-muted"
            )}
          />
          <span
            className={cn(
              "font-heading font-bold",
              maintainedToday ? "text-amber-warning" : "text-text-secondary"
            )}
          >
            {currentStreak}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-navy-mid border-border text-text-primary"
      >
        <div className="space-y-1 text-xs">
          <p className="font-semibold">
            {currentStreak} day streak{currentStreak !== 1 ? "s" : ""}
          </p>
          <p className="text-text-muted">Best: {longestStreak} days</p>
          <p className={maintainedToday ? "text-green-success" : "text-amber-warning"}>
            {maintainedToday ? "Maintained today!" : "Complete a task to maintain"}
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
