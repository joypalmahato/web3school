/**
 * @component Hero
 * @part-of Web3School - Landing Page
 * @ab-test variant=a (Angle 2: The School) | variant=b (Angle 5: Future-Proof)
 * @tracking PostHog events: hero_variant_viewed, hero_cta_clicked
 */
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import posthog from "posthog-js";
import { GuestModeButton } from "@/components/shared/GuestModeButton";

const ease = [0.16, 1, 0.3, 1] as const;

const LIVE_MATCHES = [
  {
    name: "Alex K.",
    sector: "DeFi Analyst",
    milestone: "On-chain research path matched",
  },
  {
    name: "Priya S.",
    sector: "Smart Contract Dev",
    milestone: "Solidity fundamentals - chapter 2",
  },
  {
    name: "Marcus T.",
    sector: "Community Manager",
    milestone: "DAO operations roadmap started",
  },
  {
    name: "Aiko R.",
    sector: "NFT Creator",
    milestone: "NFT + IP rights module complete",
  },
  {
    name: "Jordan K.",
    sector: "Protocol Researcher",
    milestone: "ZK research path unlocked",
  },
];

const VARIANTS = {
  a: {
    headline1: "You know crypto.",
    headline2: "Now turn it into a career.",
    sub: "The Web3 career platform for the AI age.",
    pillars: [
      { label: "Match", desc: "Quick AI chat -> precise role match" },
      { label: "Learn", desc: "Adapts pace and style to you" },
      { label: "Prove", desc: "A Skill Passport you can show" },
    ],
    cta: "Start Your Discovery",
    microcopy: "Match. Learn. Prove. Land your Web3 career.",
  },
  b: {
    headline1: "You know crypto.",
    headline2: "Now turn it into a career.",
    sub: "The Web3 career platform for the AI age.",
    pillars: [
      { label: "Match", desc: "Quick AI chat -> precise role match" },
      { label: "Learn", desc: "Adapts pace and style to you" },
      { label: "Prove", desc: "A Skill Passport you can show" },
    ],
    cta: "Start Your Discovery",
    microcopy: "Match. Learn. Prove. Land your Web3 career.",
  },
} as const;

export function Hero({ variant = "a" }: { variant?: "a" | "b" }) {
  const [matchIndex, setMatchIndex] = useState(0);
  const copy = VARIANTS[variant];

  useEffect(() => {
    const interval = setInterval(() => {
      setMatchIndex((i) => (i + 1) % LIVE_MATCHES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    posthog.capture("hero_variant_viewed", { variant });
  }, [variant]);

  const current = LIVE_MATCHES[matchIndex];

  const trackCta = (cta: "primary" | "secondary") => {
    posthog.capture("hero_cta_clicked", { variant, cta });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
          <span className="text-xs text-[#A0A0A0]">
            <span className="font-medium text-white">Open beta</span> · Instant
            access
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-heading text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-[60px] lg:text-[78px]"
        >
          {copy.headline1}
          <br />
          <span className="text-[#10B981]">{copy.headline2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-[#A0A0A0] md:text-xl"
        >
          {copy.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          {copy.pillars.map((pillar) => (
            <div key={pillar.label} className="text-center">
              <p className="text-sm font-semibold text-white">{pillar.label}</p>
              <p className="mt-0.5 text-xs text-[#888888]">{pillar.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          <Link
            href="/signup"
            onClick={() => trackCta("primary")}
            className="inline-flex w-full items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-black transition-opacity duration-200 hover:opacity-85 sm:w-auto"
          >
            {copy.cta}
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => trackCta("secondary")}
            className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.05] sm:w-auto"
          >
            See How It Works
          </Link>
          <GuestModeButton
            variant="ghost"
            className="w-full text-white hover:bg-white/[0.05] sm:w-auto"
            label="Open Guest Demo"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-4 text-sm text-[#555555]"
        >
          {copy.microcopy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] uppercase tracking-widest text-[#444444]">
            Example paths
          </p>
          <div className="relative flex h-[56px] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={matchIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-sm font-semibold text-white/60">
                  {current.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#555555]">
                    {current.name} · {current.sector}
                  </p>
                  <p className="text-sm font-medium text-white">
                    {current.milestone}
                  </p>
                </div>
                <div className="ml-1 rounded-full bg-[#10B981]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#10B981]">
                  Matched
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
