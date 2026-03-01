/**
 * @component Hero
 * @part-of Web3School — Landing Page
 * @design Centered, typography-dominant. White CTA on dark. No gradient text.
 * @spec docs/04-page-build-spec.md — Hero Section
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 pt-40 pb-24 lg:pt-44 lg:pb-32 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4"
        >
          AI-Powered Career Discovery
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[40px] md:text-[56px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-[-0.03em] font-heading"
        >
          Stop Guessing.
          <br />
          Start Building.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-6 text-lg md:text-xl text-[#A0A0A0] max-w-[600px] mx-auto"
        >
          You don&apos;t need another course. You need a career path that
          actually fits your skills.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-6 text-base md:text-lg text-[#A0A0A0] max-w-[560px] mx-auto leading-relaxed"
        >
          Web3School&apos;s AI assesses your skills in 10 minutes, matches you
          to one of 50+ Web3 roles, and builds a personalized 90-day roadmap to
          get you job-ready.
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
            Start Discovery — Free
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
          className="mt-4 text-sm text-[#666666]"
        >
          Free forever. No credit card. 10 minutes to your career match.
        </motion.p>
      </div>
    </section>
  );
}
