/**
 * @component Comparison
 * @part-of Web3School — Landing Page
 * @design Side-by-side comparison table, dark theme
 * @flow Shows why Web3School is different from alternatives
 */
"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const COMPARISONS = [
  {
    feature: "Career Discovery",
    others: "Browse courses yourself",
    web3school: "AI finds your ideal path in 10 minutes",
  },
  {
    feature: "Learning Plan",
    others: "Generic course syllabus",
    web3school: "Personalized 90-day roadmap, day by day",
  },
  {
    feature: "Teaching Method",
    others: "Watch videos passively",
    web3school: "AI tutor adapts to your pace",
  },
  {
    feature: "Accountability",
    others: "None — you're on your own",
    web3school: "Streaks, nudges, and progress tracking",
  },
  {
    feature: "Proof of Skills",
    others: "Certificate nobody trusts",
    web3school: "Verifiable Skill Passport with real projects",
  },
];

export function Comparison() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading">
            This Is Not Another{" "}
            <span className="text-[#A0A0A0]">Course Platform</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/[0.08]">
            <div className="p-4 md:p-6">
              <span className="text-[#666666] text-sm font-medium">Feature</span>
            </div>
            <div className="p-4 md:p-6 border-l border-white/[0.08]">
              <span className="text-[#666666] text-sm font-medium">Others</span>
            </div>
            <div className="p-4 md:p-6 border-l border-white/[0.08] bg-[#10B981]/[0.04]">
              <span className="text-[#10B981] text-sm font-bold">Web3School</span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0, 0, 0.2, 1] }}
              className="grid grid-cols-3 border-b border-white/[0.08] last:border-b-0"
            >
              <div className="p-4 md:p-6 flex items-center">
                <span className="text-white text-sm font-medium">{row.feature}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-white/[0.08] flex items-center gap-2">
                <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-[#666666] text-sm">{row.others}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-white/[0.08] bg-[#10B981]/[0.04] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span className="text-white text-sm">{row.web3school}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0, 0, 0.2, 1] }}
          className="text-center text-[22px] md:text-[28px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading mt-12 max-w-[760px] mx-auto"
        >
          ChatGPT gives you <span className="text-[#A0A0A0]">information</span>.{" "}
          Web3School gives you <span className="text-white">transformation</span>.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
