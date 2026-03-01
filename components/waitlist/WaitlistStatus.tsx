"use client";

import { motion } from "framer-motion";
import { Users, Hash, Gift } from "lucide-react";
import { ShareButtons } from "./ShareButtons";

interface WaitlistStatusProps {
  position: number;
  referralCode: string;
  referralCount: number;
  appUrl: string;
}

export function WaitlistStatus({
  position,
  referralCode,
  referralCount,
  appUrl,
}: WaitlistStatusProps) {
  const referralLink = `${appUrl}/signup?ref=${referralCode}`;

  return (
    <div className="w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="w-20 h-20 bg-white/5 border border-border rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Hash className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-text-primary">
          You&apos;re on the waitlist!
        </h1>
        <p className="text-text-secondary mt-2">
          We&apos;re opening spots gradually. Hang tight.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-navy-mid border border-border rounded-xl p-8 space-y-6"
      >
        {/* Position badge */}
        <div className="text-center py-4 bg-navy-deep rounded-xl border border-border">
          <p className="text-text-muted text-sm mb-1">Your position</p>
          <p className="text-5xl font-heading font-bold text-white">
            #{position}
          </p>
        </div>

        {/* Referral link */}
        <div className="space-y-3">
          <p className="text-text-primary font-medium text-sm">
            Share your link to move up the list
          </p>
          <div className="bg-navy-deep border border-border rounded-lg px-4 py-3 flex items-center gap-2">
            <code className="text-sm text-text-secondary truncate flex-1">
              {referralLink}
            </code>
          </div>
          <ShareButtons referralLink={referralLink} />
        </div>

        {/* Referral count */}
        <div className="flex items-center gap-3 bg-navy-deep rounded-xl border border-border px-4 py-3">
          <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-text-secondary" />
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">
              {referralCount === 0
                ? "No referrals yet"
                : `You've referred ${referralCount} friend${referralCount === 1 ? "" : "s"}`}
            </p>
            <p className="text-text-muted text-xs">
              Every friend who joins moves you closer to the front
            </p>
          </div>
          {referralCount > 0 && (
            <div className="ml-auto flex items-center gap-1">
              <Gift className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">
                {referralCount}
              </span>
            </div>
          )}
        </div>

        {/* Footer text */}
        <p className="text-text-muted text-sm text-center">
          We&apos;ll send you an email when it&apos;s your turn.
        </p>
      </motion.div>
    </div>
  );
}
