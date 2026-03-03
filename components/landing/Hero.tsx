/**
 * @component Hero
 * @part-of Web3School — Landing Page
 * @design Manifesto-style. Live social proof ticker. Rotating match card.
 */
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const RECENT_MATCHES = [
  { name: "Priya S.", role: "DeFi Analyst", fit: 94 },
  { name: "Marcus T.", role: "Smart Contract Dev", fit: 91 },
  { name: "Aiko R.", role: "Community Manager", fit: 97 },
  { name: "Jordan K.", role: "NFT Artist", fit: 88 },
  { name: "Fatima A.", role: "Protocol Researcher", fit: 93 },
];

export function Hero() {
  const [matchIndex, setMatchIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatchIndex((i) => (i + 1) % RECENT_MATCHES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = RECENT_MATCHES[matchIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 pt-40 pb-24 lg:pt-44 lg:pb-32 text-center">

        {/* Live counter pill */}
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
            <span className="text-white font-medium">23 people</span> matched their Web3 career in the last 24 hours
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[42px] md:text-[66px] lg:text-[88px] font-bold text-white leading-[1.02] tracking-[-0.04em] font-heading"
        >
          The Next Economy
          <br />
          Is Being Built.
          <br />
          <span className="text-[#10B981]">Find Your Place In It.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-7 text-lg md:text-xl text-[#A0A0A0] max-w-[620px] mx-auto leading-relaxed"
        >
          Web3 will create more wealth than the last three tech booms combined.
          Web3School finds exactly which role fits you — then gets you there in 90 days.
        </motion.p>

        {/* Proof dots */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-5 text-sm text-[#555555] tracking-wide"
        >
          10-min AI assessment &nbsp;·&nbsp; 89+ Web3 career paths &nbsp;·&nbsp; Personalized 90-day roadmap &nbsp;·&nbsp; Zero guesswork
        </motion.p>

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
            Discover Your Web3 Career — Free
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
          Free forever. No credit card. Join 2,400+ people already building their Web3 future.
        </motion.p>

        {/* Rotating live match card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-14 flex justify-center"
        >
          <div className="relative h-[52px] flex items-center">
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
                  <p className="text-xs text-[#555555]">{current.name} just matched</p>
                  <p className="text-sm text-white font-medium">
                    {current.role}{" "}
                    <span className="text-[#10B981]">— {current.fit}% fit</span>
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
