/**
 * @component Differentiators
 * @part-of Web3School — Landing Page
 * @design 3-column centered grid with icon + title + description.
 * @spec docs/04-page-build-spec.md — Differentiators
 */
"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Target } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const DIFFS = [
  {
    icon: Sparkles,
    title: "AI-Powered, Not One-Size-Fits-All",
    description:
      "Every roadmap is generated specifically for your skills, goals, and pace.",
  },
  {
    icon: Award,
    title: "Proof, Not Just Participation",
    description:
      "Your Skill Passport verifies what you can actually do — not just what you watched.",
  },
  {
    icon: Target,
    title: "Career-First, Not Content-First",
    description:
      "We start with where you want to end up, then work backwards.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Differentiators() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            Not Another Course Platform
          </h2>
          <p className="mt-4 text-lg text-[#A0A0A0] max-w-[600px] mx-auto">
            Web3School is the only platform that takes you from assessment to
            employment.
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
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease,
              }}
              className="text-center"
            >
              <diff.icon className="w-8 h-8 text-green-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                {diff.title}
              </h3>
              <p className="text-base text-[#A0A0A0]">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
