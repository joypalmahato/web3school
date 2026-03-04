/**
 * @component WhoIsThisFor
 * @part-of Web3School — Landing Page
 * @design 4 persona cards, dark theme
 * @flow Identifies target users to build emotional connection
 */
"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCw, HelpCircle, ListChecks } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const PERSONAS = [
  {
    icon: Zap,
    title: "The Airdrop Hunter",
    description:
      "You're in Web3 — you farm, you flip, you grind. But you have zero marketable skills. What happens when the airdrops dry up?",
  },
  {
    icon: RefreshCw,
    title: "The Web2 Pro",
    description:
      "You're a developer, designer, or marketer with real skills. You know Web3 needs people like you — but you don't know which Web3 role your skills translate to.",
  },
  {
    icon: HelpCircle,
    title: "The Crypto Watcher",
    description:
      "You hold crypto, follow Web3 Twitter, and understand the culture better than most. You've been watching from the sidelines long enough. You want in.",
  },
  {
    icon: ListChecks,
    title: "The Halfway Learner",
    description:
      "You've started 10 courses, watched 100 videos, joined 50 Discords. You know bits of everything but nothing deeply. It's time to finish something.",
  },
];

export function WhoIsThisFor() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.03em] font-heading">
            Built for People Who Are{" "}
            <span className="text-[#A0A0A0]">Ready to Change Their Lives</span>
          </h2>
        </div>

        {/* Persona cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
              className="bg-[#111111] border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.16] transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-200">
                <persona.icon className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                {persona.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
