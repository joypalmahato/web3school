/**
 * @component Problem
 * @part-of Web3School — Landing Page
 * @design Pain-first. Three fundamental questions as stat cards.
 */
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const QUESTIONS = [
  {
    number: "01",
    stat: "What?",
    statLabel: "should I learn?",
    title: "No Clear Direction",
    description:
      "You learn random things and never know what actually matters for the career you want. Without a specific path, all that effort goes nowhere.",
  },
  {
    number: "02",
    stat: "Order?",
    statLabel: "what comes first, and what comes next?",
    title: "No Learning Structure",
    description:
      "One-size-fits-all courses weren't built for you. Without a path that adapts to how you think and learn, motivation dies before you finish week two.",
  },
  {
    number: "03",
    stat: "How?",
    statLabel: "do I actually stick with it?",
    title: "Skills Without Evidence",
    description:
      "You can spend months learning and still have nothing to show an employer. No portfolio. No credentials. No way to stand out in a world where everyone claims to know Web3.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Problem() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            The Problem
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading">
            The world has more learning resources than ever —{" "}
            <span className="text-[#A0A0A0]">and people are more confused than ever.</span>
          </h2>
        </div>

        {/* Insight block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[760px] mx-auto mb-14 px-7 py-6 border border-white/[0.07] rounded-2xl bg-white/[0.02]"
        >
          <p className="text-base md:text-lg text-[#888888] leading-relaxed text-center">
            The problem was never access to information.{" "}
            <span className="text-white font-medium">
              Nobody is helping them answer three fundamental questions: What should I learn? In what order? And how do I actually stick with it?
            </span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 max-w-[1040px] mx-auto">
          {QUESTIONS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease }}
              className="group relative bg-[#111111]/60 backdrop-blur-md border border-white/[0.07] rounded-xl p-8 overflow-hidden hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

              {/* Number label */}
              <p className="text-xs font-mono text-[#333333] mb-6 tracking-widest">
                {item.number}
              </p>

              {/* Big stat */}
              <div className="mb-6">
                <p className="text-[44px] font-bold text-white/10 leading-none tracking-tight font-heading group-hover:text-white/[0.15] transition-colors duration-300">
                  {item.stat}
                </p>
                <p className="text-xs text-[#555555] mt-1">{item.statLabel}</p>
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-white/10 mb-6" />

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
