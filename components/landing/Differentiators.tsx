/**
 * @component Differentiators
 * @part-of Web3School — Landing Page
 * @design Direct comparison table: Everywhere Else vs Web3School.
 */
"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const ROWS = [
  {
    dimension: "Starting point",
    others: "A generic syllabus — same for everyone",
    us: "A role match built around your skills and goals",
  },
  {
    dimension: "Learning path",
    others: "Fixed order, fixed pace, fixed content",
    us: "Adapts to how fast — or slow — you actually learn",
  },
  {
    dimension: "When you're stuck",
    others: "Platform moves on anyway",
    us: "AI restructures the lesson until it clicks",
  },
  {
    dimension: "What you finish with",
    others: "A completion badge no one takes seriously",
    us: "A Skill Passport with verified, demonstrated expertise",
  },
  {
    dimension: "Cost",
    others: "Paid course, subscription, or bootcamp fees",
    us: "Always free",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Differentiators() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            Why Web3School
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            Not Another Course Platform.
            <br />
            <span className="text-[#A0A0A0]">Here&apos;s the actual difference.</span>
          </h2>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden max-w-[600px] mx-auto space-y-3">
          {/* Column header labels */}
          <div className="grid grid-cols-2 gap-3 px-1 mb-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] text-center">Everywhere Else</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] text-center">Web3School</p>
          </div>
          {ROWS.map((row, index) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07, ease }}
              className="border border-white/[0.08] rounded-xl overflow-hidden"
            >
              <div className="px-4 py-2 bg-white/[0.02] border-b border-white/[0.06]">
                <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">{row.dimension}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-3 py-4 flex items-start gap-2 border-r border-white/[0.06]">
                  <X className="w-3.5 h-3.5 text-red-500/60 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#555555] leading-relaxed">{row.others}</p>
                </div>
                <div className="px-3 py-4 flex items-start gap-2 bg-[#10B981]/[0.04]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white leading-relaxed">{row.us}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-col table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="hidden md:block max-w-[900px] mx-auto border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#111111]/80">
            <div className="px-6 py-4 border-b border-white/[0.06]" />
            <div className="px-6 py-4 border-b border-l border-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555555]">
                Everywhere Else
              </p>
            </div>
            <div className="px-6 py-4 border-b border-l border-white/[0.06] bg-[#10B981]/[0.04]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">
                Web3School
              </p>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, index) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07, ease }}
              className={`grid grid-cols-[1fr_1fr_1fr] ${index < ROWS.length - 1 ? "border-b border-white/[0.06]" : ""}`}
            >
              <div className="px-6 py-5 flex items-center">
                <p className="text-xs font-semibold text-[#555555] uppercase tracking-wide">
                  {row.dimension}
                </p>
              </div>
              <div className="px-6 py-5 border-l border-white/[0.06] flex items-start gap-3">
                <X className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#555555] leading-relaxed">{row.others}</p>
              </div>
              <div className="px-6 py-5 border-l border-white/[0.06] bg-[#10B981]/[0.03] flex items-start gap-3">
                <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white leading-relaxed">{row.us}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
