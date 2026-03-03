/**
 * @component Hero
 * @part-of Web3School — Landing Page
 * @moto v2: From confusion to irreplaceable.
 * @design Manifesto-style. Live proof. Rotating match card. Adaptive learning angle.
 */
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const LIVE_MATCHES = [
  { name: "Priya S.", sector: "Healthcare", milestone: "AI + Web3 literacy unlocked", fit: 96 },
  { name: "Marcus T.", sector: "Finance", milestone: "DeFi fundamentals — week 3", fit: 91 },
  { name: "Aiko R.", sector: "Legal", milestone: "Smart contract basics complete", fit: 94 },
  { name: "Jordan K.", sector: "Creative", milestone: "NFT + IP rights roadmap started", fit: 88 },
  { name: "Fatima A.", sector: "Engineering", milestone: "Protocol research path matched", fit: 97 },
];

export function Hero() {
  const [matchIndex, setMatchIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatchIndex((i) => (i + 1) % LIVE_MATCHES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = LIVE_MATCHES[matchIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 pt-40 pb-24 lg:pt-44 lg:pb-32 text-center">

        {/* Live pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-xs text-[#A0A0A0]">
            <span className="text-white font-medium">23 people</span> started their path to irreplaceable today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[42px] md:text-[66px] lg:text-[88px] font-bold text-white leading-[1.02] tracking-[-0.04em] font-heading"
        >
          Don&apos;t Just Get Hired.
          <br />
          <span className="text-[#10B981]">Become Irreplaceable.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-7 text-lg md:text-xl text-[#A0A0A0] max-w-[640px] mx-auto leading-relaxed"
        >
          Whatever field you&apos;re in — Web3School builds a learning path that
          adapts to how <em>you</em> learn, teaching your sector&apos;s fundamentals,
          AI tools, and Web3 skills until you&apos;re the person your industry
          cannot function without.
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {[
            { label: "Adapts to your pace", desc: "Fast or slow — the platform adjusts" },
            { label: "Any sector", desc: "Your field + AI + Web3 literacy" },
            { label: "Non-replaceable", desc: "Not just hired — indispensable" },
          ].map((pillar) => (
            <div key={pillar.label} className="text-center">
              <p className="text-sm font-semibold text-white">{pillar.label}</p>
              <p className="text-xs text-[#555555] mt-0.5">{pillar.desc}</p>
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
            className="inline-flex items-center justify-center bg-white text-black font-semibold text-base px-8 py-4 rounded-md hover:opacity-85 transition-opacity duration-200 w-full sm:w-auto"
          >
            Find Your Path — Free
          </Link>
          <a
            href="#how-it-works"
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
          Free forever. No credit card. From confused to unstoppable.
        </motion.p>

        {/* Rotating live match card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-14 flex justify-center"
        >
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
                <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center text-sm font-semibold text-[#10B981]">
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
                  Live
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
