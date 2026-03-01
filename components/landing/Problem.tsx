/**
 * @component Problem
 * @part-of Web3School — Landing Page
 * @design 3 problem cards in clean grid. No stats bar. No bold statement.
 * @spec docs/04-page-build-spec.md — Problem Section
 */
"use client";

import { motion } from "framer-motion";
import { Compass, RotateCcw, FileQuestion } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const PROBLEMS = [
  {
    icon: Compass,
    title: "Too Many Options",
    description:
      "Thousands of resources, zero structure. You jump between YouTube, Twitter threads, and free courses without knowing what actually matters for your goals.",
  },
  {
    icon: RotateCcw,
    title: "Start, Stop, Repeat",
    description:
      "You've started three courses this year and finished none. Without a clear career target, motivation dies. The 5.5% course completion rate proves it.",
  },
  {
    icon: FileQuestion,
    title: "Skills Without Proof",
    description:
      "Even when you learn something, you can't prove it. No portfolio. No credentials. No way to show employers what you actually know.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Problem() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            The Problem
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            Everyone Wants to Break Into Web3.
            <br />
            <span className="text-[#A0A0A0]">Almost No One Does.</span>
          </h2>
          <p className="mt-4 text-lg text-[#A0A0A0]">
            It&apos;s not a lack of motivation. It&apos;s a lack of direction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease,
              }}
              className="bg-[#111111] border border-white/[0.08] rounded-xl p-8 hover:border-white/[0.16] transition-colors duration-200"
            >
              <problem.icon className="w-6 h-6 text-[#A0A0A0] mb-5" />
              <h3 className="text-xl font-semibold text-white mb-3 font-heading">
                {problem.title}
              </h3>
              <p className="text-base text-[#A0A0A0] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
