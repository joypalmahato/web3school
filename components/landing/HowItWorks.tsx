/**
 * @component HowItWorks
 * @part-of Web3School — Landing Page
 * @design 3 numbered steps with green accent numbers. Centered vertical layout.
 * @spec docs/04-page-build-spec.md — Solution Section (How It Works)
 */
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const STEPS = [
  {
    number: "01",
    title: "Talk to Our AI",
    description:
      "A 10-minute conversation that maps your existing skills, interests, and goals to the Web3 role you're built for.",
  },
  {
    number: "02",
    title: "Get Your Roadmap",
    description:
      "Receive a personalized 90-day learning plan with daily tasks, curated resources, and clear milestones.",
  },
  {
    number: "03",
    title: "Learn, Prove, Get Hired",
    description:
      "Study with an adaptive AI tutor, build your Skill Passport with verified projects, and get matched to real job opportunities.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="py-16 md:py-24 lg:py-32 bg-[#0E0E0E]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            How It Works
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            From Confused to Hired.
            <br />
            Three Steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-[640px] mx-auto flex flex-col gap-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease,
              }}
              className="flex items-start gap-6"
            >
              <span className="text-[48px] md:text-[48px] font-bold text-green-success leading-none min-w-[64px] font-heading">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-base text-[#A0A0A0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
