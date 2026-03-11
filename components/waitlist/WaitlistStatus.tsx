"use client";

import { motion } from "framer-motion";
import { Gift, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "./ShareButtons";

interface WaitlistStatusProps {
  position: number;
  referralCode: string;
  referralCount: number;
  appUrl: string;
}

const X_FOLLOW_URL = "https://x.com/web3school_X";

export function WaitlistStatus({
  position,
  referralCode,
  referralCount,
  appUrl,
}: WaitlistStatusProps) {
  const normalizedAppUrl = appUrl.replace(/\/$/, "");
  const referralLink = referralCode
    ? `${normalizedAppUrl}/signup?ref=${encodeURIComponent(referralCode)}`
    : `${normalizedAppUrl}/signup`;

  return (
    <div className="w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
          <Zap className="h-8 w-8 text-green-400" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-white">
          You&apos;re in the queue!
        </h1>
        <p className="mt-2 text-sm text-white/50">
          We&apos;re onboarding testers now. Do the steps below to move up fast.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
      >
        <p className="mb-1 text-xs uppercase tracking-widest text-white/40">
          Your position
        </p>
        <p className="text-5xl font-heading font-bold text-white">
          #{position}
        </p>
        <p className="mt-2 text-xs text-white/40">
          {referralCount > 0
            ? `You moved up ${referralCount} spot${referralCount === 1 ? "" : "s"} with referrals`
            : "Complete the steps below to move up"}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6 rounded-xl border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20">
            <Zap className="h-3 w-3 text-green-400" />
          </div>
          <p className="text-sm font-semibold text-white">
            Get early access faster - 2 steps
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/50">
              1
            </span>
            <div>
              <p className="text-sm font-medium text-white">Follow us on X</p>
              <p className="text-xs text-white/40">
                Stay updated as we open more spots
              </p>
            </div>
          </div>
          <Button
            asChild
            className="w-full rounded-lg border border-white/10 bg-white/5 font-medium text-white hover:bg-white/10"
          >
            <a href={X_FOLLOW_URL} target="_blank" rel="noopener noreferrer">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow @web3school_X
            </a>
          </Button>
        </div>

        <div className="border-t border-white/5" />

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/50">
              2
            </span>
            <div>
              <p className="text-sm font-medium text-white">
                Post on X about your Web3 journey
              </p>
              <p className="text-xs text-white/40">
                We rotate short templates with either your link or a link-in-bio CTA
              </p>
            </div>
          </div>

          <ShareButtons
            referralCode={referralCode}
            referralLink={referralLink}
          />
        </div>

        {referralCount > 0 && (
          <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
              <Users className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {referralCount} friend{referralCount === 1 ? "" : "s"} joined
                via your link
              </p>
              <p className="text-xs text-white/40">
                You moved up {referralCount} spot
                {referralCount === 1 ? "" : "s"} - keep going
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Gift className="h-4 w-4 text-green-400" />
              <span className="text-sm font-bold text-green-400">
                +{referralCount}
              </span>
            </div>
          </div>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-center text-xs text-white/30"
      >
        We&apos;ll email you when your spot is ready. No spam.
      </motion.p>
    </div>
  );
}
