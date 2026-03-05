/**
 * @component Hero
 * @part-of Web3School — Landing Page
 * @ab-test variant=a (Angle 2: The School) | variant=b (Angle 5: Future-Proof)
 * @tracking PostHog events: hero_variant_viewed, hero_cta_clicked
 */
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import posthog from "posthog-js";

const ease = [0.16, 1, 0.3, 1] as const;

const LIVE_MATCHES = [
  { name: "Alex K.", sector: "DeFi Analyst", milestone: "On-chain research path matched", fit: 94 },
  { name: "Priya S.", sector: "Smart Contract Dev", milestone: "Solidity fundamentals — week 2", fit: 97 },
  { name: "Marcus T.", sector: "Community Manager", milestone: "DAO operations roadmap started", fit: 91 },
  { name: "Aiko R.", sector: "NFT Creator", milestone: "NFT + IP rights module complete", fit: 88 },
  { name: "Jordan K.", sector: "Protocol Researcher", milestone: "ZK research path unlocked", fit: 95 },
];

// ---------------------------------------------------------------------------
// Copy variants
// ---------------------------------------------------------------------------

const VARIANTS = {
  a: {
    headline1: "The School That Finds Your Path.",
    headline2: "Then Builds It With You.",
    sub: "Web3School starts with a short AI conversation, matches you to the right role, then teaches it the way your brain works — at your pace, until you can prove it.",
    pillars: [
      { label: "Your role, found for you", desc: "Quick AI chat → precise role match" },
      { label: "Learns how you learn", desc: "Adapts pace and style to you" },
      { label: "Skill Passport you can show", desc: "Proof, not just a certificate" },
    ],
    cta: "Start Your Discovery",
    microcopy: "Free to join. Built for your role, your pace, your proof.",
  },
  b: {
    headline1: "Everyone Fears Being Replaced.",
    headline2: "Become the Person They Can't Replace.",
    sub: "AI is reshaping every field. Web3 is rewriting how value moves. Web3School finds your specific role, builds your path, and adapts until you're irreplaceable.",
    pillars: [
      { label: "AI + Web3 for your role", desc: "Not generic — built for your path" },
      { label: "Adapts to how you learn", desc: "Fast or slow, the platform adjusts" },
      { label: "Proof, not just certificates", desc: "A Skill Passport you can show" },
    ],
    cta: "Start Your Discovery",
    microcopy: "Free to join. Built for people who want to be irreplaceable.",
  },
} as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Hero({ variant = "a" }: { variant?: "a" | "b" }) {
  const [matchIndex, setMatchIndex] = useState(0);
  const copy = VARIANTS[variant];

  // Rotate the live match card
  useEffect(() => {
    const interval = setInterval(() => {
      setMatchIndex((i) => (i + 1) % LIVE_MATCHES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track which variant this visitor sees
  useEffect(() => {
    posthog.capture("hero_variant_viewed", { variant });
  }, [variant]);

  const current = LIVE_MATCHES[matchIndex];

  const trackCta = (cta: "primary" | "secondary") => {
    posthog.capture("hero_cta_clicked", { variant, cta });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 pt-40 pb-24 lg:pt-44 lg:pb-32 text-center">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]"
        >
          <span className="inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          <span className="text-xs text-[#A0A0A0]">
            <span className="text-white font-medium">Now open</span> · Free to join
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[38px] md:text-[60px] lg:text-[78px] font-bold text-white leading-[1.05] tracking-[-0.04em] font-heading"
        >
          {copy.headline1}
          <br />
          <span className="text-[#10B981]">{copy.headline2}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-7 text-lg md:text-xl text-[#A0A0A0] max-w-[640px] mx-auto leading-relaxed"
        >
          {copy.sub}
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {copy.pillars.map((pillar) => (
            <div key={pillar.label} className="text-center">
              <p className="text-sm font-semibold text-white">{pillar.label}</p>
              <p className="text-xs text-[#888888] mt-0.5">{pillar.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/signup"
            onClick={() => trackCta("primary")}
            className="inline-flex items-center justify-center bg-white text-black font-semibold text-base px-8 py-4 rounded-md hover:opacity-85 transition-opacity duration-200 w-full sm:w-auto"
          >
            {copy.cta}
          </Link>
          <a
            href="#how-it-works"
            onClick={() => trackCta("secondary")}
            className="inline-flex items-center justify-center bg-transparent text-white font-medium text-base px-8 py-4 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200 w-full sm:w-auto"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-4 text-sm text-[#555555]"
        >
          {copy.microcopy}
        </motion.p>

        {/* Example match card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] uppercase tracking-widest text-[#444444]">Example paths</p>
          <div className="relative h-[56px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={matchIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-sm font-semibold text-white/60">
                  {current.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#555555]">
                    {current.name} · {current.sector}
                  </p>
                  <p className="text-sm text-white font-medium">
                    {current.milestone}
                  </p>
                </div>
                <div className="ml-1 text-[#10B981] text-[10px] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {current.fit}% fit
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
