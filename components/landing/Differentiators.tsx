/**
 * @component Differentiators
 * @part-of Web3School — Landing Page
 * @design 3-column centered grid with icon + title + description.
 */
"use client";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, Compass } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const DIFFS = [
  {
    icon: Compass,
    title: "Role-First, Not Content-First",
    description:
      "Most platforms hand you a syllabus. Web3School starts by finding your role — then builds everything around it. You never learn something that doesn't matter for where you're going.",
  },
  {
    icon: Brain,
    title: "The Platform Learns With You",
    description:
      "Moving fast? It accelerates. Stuck? It restructures the lesson until the concept clicks. No other platform does this — they just move on.",
  },
  {
    icon: ShieldCheck,
    title: "Proof That Actually Means Something",
    description:
      "You finish with a Skill Passport — verified projects and demonstrated expertise, not a certificate that just says you clicked through a course.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Differentiators() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            Why Web3School
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            Built Different. On Purpose.
          </h2>
          <p className="mt-4 text-lg text-[#A0A0A0] max-w-[520px] mx-auto">
            Three things no other learning platform does — and why they matter for your career.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-[1000px] mx-auto">
          {DIFFS.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="bg-[#111111]/60 border border-white/[0.07] rounded-xl p-7 hover:border-white/[0.14] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center mb-5">
                <diff.icon className="w-5 h-5 text-[#10B981]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                {diff.title}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
