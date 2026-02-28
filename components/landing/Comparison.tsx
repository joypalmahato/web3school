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
  {
    feature: "Job Matching",
    others: "Apply to hundreds of listings",
    web3school: "AI matches you to real opportunities",
  },
];

export function Comparison() {
  return (
    <AnimatedSection className="py-20 md:py-32 bg-navy-mid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
            This Is Not Another{" "}
            <span className="text-text-secondary">Course Platform</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="bg-navy-deep border border-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-4 md:p-6">
              <span className="text-text-muted text-sm font-medium">
                Feature
              </span>
            </div>
            <div className="p-4 md:p-6 border-l border-border">
              <span className="text-text-muted text-sm font-medium">
                Others
              </span>
            </div>
            <div className="p-4 md:p-6 border-l border-border bg-purple-primary/5">
              <span className="text-purple-primary text-sm font-bold">
                Web3School
              </span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="grid grid-cols-3 border-b border-border last:border-b-0"
            >
              <div className="p-4 md:p-6 flex items-center">
                <span className="text-text-primary text-sm font-medium">
                  {row.feature}
                </span>
              </div>
              <div className="p-4 md:p-6 border-l border-border flex items-center gap-2">
                <X className="w-4 h-4 text-red-error flex-shrink-0" />
                <span className="text-text-muted text-sm">{row.others}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-border bg-purple-primary/5 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-success flex-shrink-0" />
                <span className="text-text-primary text-sm">
                  {row.web3school}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-heading font-semibold text-text-primary mt-12 max-w-3xl mx-auto"
        >
          ChatGPT gives you <span className="text-text-secondary">information</span>.{" "}
          Web3School gives you{" "}
          <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
            transformation
          </span>
          .
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
