"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Profile } from "@/lib/types";
import { calculateProfileCompleteness } from "@/lib/utils/profileCompleteness";

interface OnboardingCompleteProps {
  profile: Profile;
}

export function OnboardingComplete({ profile }: OnboardingCompleteProps) {
  const { percentage } = calculateProfileCompleteness(profile);
  const [displayPercent, setDisplayPercent] = useState(0);

  // Animate the counter
  useEffect(() => {
    const target = percentage;
    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [percentage]);

  const displayName = profile.display_name || profile.full_name || "there";

  return (
    <div className="w-full max-w-lg mx-auto text-center py-12">
      {/* Celebration animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
        className="relative mx-auto mb-8 w-24 h-24"
      >
        {/* Pulsing glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-primary/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative w-24 h-24 bg-purple-primary/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-purple-primary" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-heading font-bold text-text-primary mb-3"
      >
        You&apos;re all set, {displayName}!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-text-secondary mb-8"
      >
        Your profile is ready. The AI will use everything you shared to give you
        hyper-personalized career recommendations.
      </motion.p>

      {/* Completeness counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-navy-mid border border-border rounded-xl p-6 mb-8"
      >
        <p className="text-text-muted text-sm mb-2">Profile completeness</p>
        <p className="text-5xl font-heading font-bold text-purple-primary mb-3">
          {displayPercent}%
        </p>
        <div className="w-full h-2 bg-navy-deep rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/discover"
          className="inline-flex items-center gap-2 bg-white text-black rounded-xl px-8 py-4 font-semibold text-lg transition-all hover:opacity-85 active:scale-[0.98]"
        >
          Start AI Discovery
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
