/**
 * @component NudgeToast
 * @part-of Web3School — Gamification
 * @design Slide-in notification for streak reminders, celebrations, tips
 */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Star, Trophy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type NudgeType = "streak" | "celebration" | "milestone" | "tip";

interface Nudge {
  id: string;
  type: NudgeType;
  title: string;
  message: string;
}

const NUDGE_ICONS: Record<NudgeType, React.ComponentType<{ className?: string }>> = {
  streak: Flame,
  celebration: Sparkles,
  milestone: Trophy,
  tip: Star,
};

const NUDGE_COLORS: Record<NudgeType, string> = {
  streak: "border-amber-warning/30 bg-amber-warning/5",
  celebration: "border-purple-primary/30 bg-purple-primary/5",
  milestone: "border-cyan-accent/30 bg-cyan-accent/5",
  tip: "border-green-success/30 bg-green-success/5",
};

const NUDGE_ICON_COLORS: Record<NudgeType, string> = {
  streak: "text-amber-warning",
  celebration: "text-purple-primary",
  milestone: "text-cyan-accent",
  tip: "text-green-success",
};

export function NudgeToast() {
  const [nudges, setNudges] = useState<Nudge[]>([]);

  useEffect(() => {
    const fetchNudges = async () => {
      try {
        const res = await fetch("/api/nudges");
        if (!res.ok) return;
        const data = await res.json();
        if (data.nudges?.length) {
          setNudges(data.nudges);
        }
      } catch {
        // Silently fail — nudges are non-critical
      }
    };

    // Fetch nudges after a short delay to not block initial render
    const timer = setTimeout(fetchNudges, 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismissNudge = (id: string) => {
    setNudges((prev) => prev.filter((n) => n.id !== id));
  };

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (nudges.length === 0) return;

    const timer = setTimeout(() => {
      setNudges((prev) => prev.slice(1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [nudges]);

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 md:left-auto md:right-6 z-40 space-y-2 max-w-sm">
      <AnimatePresence>
        {nudges.slice(0, 3).map((nudge) => {
          const Icon = NUDGE_ICONS[nudge.type];
          return (
            <motion.div
              key={nudge.id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              className={cn(
                "border rounded-xl p-4 shadow-lg backdrop-blur-sm",
                NUDGE_COLORS[nudge.type]
              )}
            >
              <div className="flex items-start gap-3">
                <Icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0 mt-0.5",
                    NUDGE_ICON_COLORS[nudge.type]
                  )}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary text-sm font-semibold">
                    {nudge.title}
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">
                    {nudge.message}
                  </p>
                </div>
                <button
                  onClick={() => dismissNudge(nudge.id)}
                  className="text-text-muted hover:text-text-primary transition-colors flex-shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
