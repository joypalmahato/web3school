/**
 * @component HowItWorks
 * @part-of Web3School — Landing Page
 * @design 5 steps. Adaptive engine made explicit. NOT a course platform positioning.
 */
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Zap, RefreshCw, BookOpen } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "AI Finds Where You Belong",
    description:
      "A focused AI conversation maps your existing skills, background, and goals — then matches you to the exact role you're built for. No quiz. No guessing. Real analysis.",
    chips: null,
  },
  {
    number: "02",
    title: "Your Path Is Built For You — Only You",
    description:
      "You don't get a course. You get a personalized roadmap built around your role, your background, and your goals. There's no fixed timeline — some people finish in 6 weeks, others take 5 months. The platform moves at your speed, not a calendar's.",
    chips: null,
  },
  {
    number: "03",
    title: "The Platform Learns As You Learn",
    description:
      "This is where Web3School is fundamentally different. The platform doesn't just deliver content — it watches how you learn and continuously adjusts.",
    chips: [
      { icon: Zap, label: "Learning fast?", detail: "Platform accelerates your roadmap" },
      { icon: BookOpen, label: "Concept unclear?", detail: "AI breaks it down further with examples" },
      { icon: RefreshCw, label: "Still not clicking?", detail: "Platform restructures the entire approach" },
    ],
  },
  {
    number: "04",
    title: "Bite-Sized Lessons With a Personal AI Tutor",
    description:
      "Every lesson comes with an AI tutor that answers your specific questions in context. Ask anything, get clarity, move forward — no timer, no pressure, just progress.",
    chips: null,
  },
  {
    number: "05",
    title: "Prove It. Own Your Career.",
    description:
      "You don't finish with a certificate. You finish with a Skill Passport — verified projects, demonstrated expertise, and sector + AI + Web3 literacy that makes you the person your industry cannot function without.",
    chips: null,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            How It Works
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading">
            From Confused to Irreplaceable.
            <br />
            <span className="text-[#A0A0A0]">A System That Adapts to You.</span>
          </h2>
          <p className="mt-5 text-base text-[#666666] max-w-[520px] mx-auto">
            Every other platform gives everyone the same path. Web3School builds
            a path that evolves with how fast — or slow — you actually learn.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-[680px] mx-auto flex flex-col gap-0">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="flex items-start gap-4 md:gap-6 group"
            >
              {/* Left: number + connecting line */}
              <div className="flex flex-col items-center min-w-[44px] md:min-w-[64px]">
                <span className="text-[28px] md:text-[48px] font-bold text-[#10B981] leading-none font-heading">
                  {step.number}
                </span>
                {index < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-3 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-12 ${index === STEPS.length - 1 ? "pb-0" : ""}`}>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  {step.description}
                </p>

                {/* Adaptive chips — only on step 03 */}
                {step.chips && (
                  <div className="mt-5 flex flex-col gap-3">
                    {step.chips.map((chip) => (
                      <div
                        key={chip.label}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg border border-white/[0.07] bg-[#111111]/60 backdrop-blur-md"
                      >
                        <div className="mt-0.5 w-7 h-7 rounded-md bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                          <chip.icon className="w-3.5 h-3.5 text-[#10B981]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{chip.label}</p>
                          <p className="text-xs text-[#666666] mt-0.5">{chip.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
