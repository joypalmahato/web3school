/**
 * @component Problem
 * @part-of Web3School — Landing Page
 * @design Pain-first. Big stats. Numbered cards with red accent border-top.
 */
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const PROBLEMS = [
  {
    number: "01",
    stat: "Most",
    statLabel: "people who try to break into Web3 never land a role",
    title: "No Clear Direction",
    description:
      "Thousands of YouTube videos, Twitter threads, and free courses. Zero structure. You learn random things and never know what actually matters for the career you want.",
  },
  {
    number: "02",
    stat: "~5%",
    statLabel: "average completion rate for online courses (research on MOOCs, 2023)",
    title: "Generic Learning Doesn't Stick",
    description:
      "One-size-fits-all courses weren't built for you. Without a path that adapts to how you think and learn, motivation dies before you finish week two.",
  },
  {
    number: "03",
    stat: "Few",
    statLabel: "self-taught Web3 learners can actually prove their skills to employers",
    title: "Skills Without Evidence",
    description:
      "You can spend months learning and still have nothing to show an employer. No portfolio. No credentials. No way to stand out in a world where everyone says they know AI and Web3.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Problem() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            The Problem
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading">
            The World Is Moving Fast.
            <br />
            <span className="text-[#A0A0A0]">Most People Are Standing Still.</span>
          </h2>
          <p className="mt-5 text-lg text-[#666666] max-w-[520px] mx-auto">
            It&apos;s not a lack of ability. It&apos;s the absence of a clear,
            personalized path that actually adapts to you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 max-w-[1040px] mx-auto">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease }}
              className="group relative bg-[#111111]/60 backdrop-blur-md border border-white/[0.07] rounded-xl p-8 overflow-hidden hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

              {/* Number label */}
              <p className="text-xs font-mono text-[#333333] mb-6 tracking-widest">
                {problem.number}
              </p>

              {/* Big stat */}
              <div className="mb-6">
                <p className="text-[44px] font-bold text-white/10 leading-none tracking-tight font-heading group-hover:text-white/[0.15] transition-colors duration-300">
                  {problem.stat}
                </p>
                <p className="text-xs text-[#555555] mt-1">{problem.statLabel}</p>
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-white/10 mb-6" />

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                {problem.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
