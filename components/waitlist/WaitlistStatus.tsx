"use client";

import { motion } from "framer-motion";
import { Users, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "./ShareButtons";

interface WaitlistStatusProps {
  position: number;
  referralCode: string;
  referralCount: number;
  appUrl: string;
}

const X_FOLLOW_URL = "https://x.com/Web3School_";

export function WaitlistStatus({
  position,
  referralCode,
  referralCount,
  appUrl,
}: WaitlistStatusProps) {
  const referralLink = `${appUrl}/signup?ref=${referralCode}`;

  return (
    <div className="w-full max-w-lg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Zap className="w-8 h-8 text-green-400" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-white">
          You&apos;re in the queue!
        </h1>
        <p className="text-white/50 mt-2 text-sm">
          We&apos;re onboarding testers now. Do the steps below to move up fast.
        </p>
      </motion.div>

      {/* Position badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-4 text-center"
      >
        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
          Your position
        </p>
        <p className="text-5xl font-heading font-bold text-white">
          #{position}
        </p>
        <p className="text-white/40 text-xs mt-2">
          {referralCount > 0
            ? `You moved up ${referralCount} spot${referralCount === 1 ? "" : "s"} with referrals`
            : "Complete the steps below to move up"}
        </p>
      </motion.div>

      {/* Get access faster card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="w-3 h-3 text-green-400" />
          </div>
          <p className="text-white font-semibold text-sm">
            Get early access faster — 2 steps
          </p>
        </div>

        {/* Step 1: Follow */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold flex-shrink-0">
              1
            </span>
            <div>
              <p className="text-white text-sm font-medium">
                Follow us on X
              </p>
              <p className="text-white/40 text-xs">
                Stay updated as we open more spots
              </p>
            </div>
          </div>
          <Button
            asChild
            className="w-full bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium rounded-lg"
          >
            <a href={X_FOLLOW_URL} target="_blank" rel="noopener noreferrer">
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow @Web3School_
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Step 2: Tweet */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold flex-shrink-0">
              2
            </span>
            <div>
              <p className="text-white text-sm font-medium">
                Tweet about exploring your Web3 career
              </p>
              <p className="text-white/40 text-xs">
                Every signup from your link moves you up the queue
              </p>
            </div>
          </div>

          {/* Tweet preview */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <p className="text-white/70 text-xs leading-relaxed">
              Just signed up on{" "}
              <span className="text-white font-medium">@Web3School_</span> to
              find my Web3 career path 🚀
              <br />
              <br />
              AI matches me to the right Web3 role → adaptive learning with the
              latest tools &amp; tech → skill passport to prove it.
              <br />
              <br />
              If you&apos;re in crypto or trying to break in, join early and
              build yours too 👇
              <br />
              <span className="text-green-400 text-xs mt-1 block truncate">
                {referralLink}
              </span>
            </p>
          </div>

          <ShareButtons referralLink={referralLink} />
        </div>

        {/* Referral count */}
        {referralCount > 0 && (
          <div className="flex items-center gap-3 bg-green-500/5 rounded-xl border border-green-500/20 px-4 py-3">
            <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">
                {referralCount} friend{referralCount === 1 ? "" : "s"} joined
                via your link
              </p>
              <p className="text-white/40 text-xs">
                You moved up {referralCount} spot
                {referralCount === 1 ? "" : "s"} — keep going
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Gift className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-bold text-sm">
                +{referralCount}
              </span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white/30 text-xs text-center mt-6"
      >
        We&apos;ll email you when your spot is ready. No spam.
      </motion.p>
    </div>
  );
}
