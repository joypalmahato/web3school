/**
 * @component ProofBar
 * @part-of Web3School — Landing Page
 * @design Horizontal stats row with dividers. Platform-specific social proof.
 * @spec docs/04-page-build-spec.md — Social Proof Bar
 */
"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5,200+", label: "Active Learners" },
  { value: "50+", label: "Web3 Roles" },
  { value: "90-Day", label: "Personalized Roadmaps" },
];

export function ProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0E0E0E] border-y border-white/[0.06] py-12 px-6"
    >
      <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
        {STATS.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            {index > 0 && (
              <div className="hidden sm:block w-px h-12 bg-white/10 mx-12" />
            )}
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white font-heading">
                {stat.value}
              </p>
              <p className="text-sm text-[#666666] mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
