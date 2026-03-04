/**
 * @component Mission
 * @part-of Web3School — Landing Page
 * @design Large quote text with 3 stat cards, dark theme
 * @flow Establishes credibility and vision
 */
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const STATS = [
  { value: "90+", label: "Career Roles Mapped" },
  { value: "8", label: "Roles at Launch" },
  { value: "90-Day", label: "Personalized Roadmaps" },
];

export function Mission() {
  return (
    <AnimatedSection id="mission" className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading max-w-[760px] mx-auto">
            &ldquo;Build a future where every person learns with ease and thrives
            with confidence in the{" "}
            <span className="text-[#10B981]">age of AI</span>.&rdquo;
          </p>
          <cite className="block mt-6 text-[#666666] text-sm not-italic">
            — Web3School Mission
          </cite>
        </motion.blockquote>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
              className="bg-[#111111] border border-white/[0.08] rounded-2xl p-8 text-center hover:border-white/[0.16] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-200"
            >
              <p className="text-4xl md:text-5xl font-heading font-bold text-white">
                {stat.value}
              </p>
              <p className="text-[#A0A0A0] mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
