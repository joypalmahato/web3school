/**
 * @component XPBar
 * @part-of Web3School — Gamification
 * @design Animated progress bar with level badge
 */
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useXP } from "@/lib/hooks/useXP";

interface XPBarProps {
  compact?: boolean;
}

export function XPBar({ compact = false }: XPBarProps) {
  const { totalXP, level, currentLevelXP, neededForNext, progress } = useXP();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-2 cursor-default",
            compact ? "min-w-[80px]" : "min-w-[120px]"
          )}
        >
          {/* Level badge */}
          <div className="flex items-center gap-1">
            <Star
              className={cn(
                "text-purple-primary",
                compact ? "w-3.5 h-3.5" : "w-4 h-4"
              )}
            />
            <span
              className={cn(
                "font-heading font-bold text-purple-primary",
                compact ? "text-xs" : "text-sm"
              )}
            >
              {level}
            </span>
          </div>

          {/* Progress bar */}
          <div
            className={cn(
              "flex-1 bg-navy-deep rounded-full overflow-hidden",
              compact ? "h-1.5" : "h-2"
            )}
          >
            <motion.div
              className="h-full bg-[#10B981] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress * 100, 100)}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-navy-mid border-border text-text-primary"
      >
        <div className="space-y-1 text-xs">
          <p className="font-semibold">Level {level}</p>
          <p className="text-text-muted">
            {totalXP.toLocaleString()} XP total
          </p>
          <p className="text-text-secondary">
            {currentLevelXP} / {neededForNext} XP to next level
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
