/**
 * @component WhoIsThisFor
 * @part-of Web3School — Landing Page
 * @design 4 persona cards, glassmorphism, dark theme
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
    accent: "purple-primary",
  },
  {
    icon: RefreshCw,
    title: "The Career Changer",
    description:
      "Laid off, stuck, or just done with your 9-to-5. You know Web3 is the future, but you need to reskill fast — and you need proof you can do the work.",
    accent: "cyan-accent",
  },
  {
    icon: HelpCircle,
    title: "The Curious Outsider",
    description:
      "You keep hearing about blockchain, DeFi, NFTs. You're interested but have no idea where to start. The jargon alone is overwhelming.",
    accent: "green-success",
  },
  {
    icon: ListChecks,
    title: "The Halfway Learner",
    description:
      "You've started 10 courses, watched 100 videos, joined 50 Discords. You know bits of everything but nothing deeply. It's time to finish something.",
    accent: "amber-warning",
  },
];

export function WhoIsThisFor() {
  return (
    <AnimatedSection className="py-20 md:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
            Built for People Who Are{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              Ready to Change Their Lives
            </span>
          </h2>
        </div>

        {/* Persona cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-mid border border-border rounded-2xl p-6 hover:border-purple-primary/30 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div
                className={`w-12 h-12 bg-${persona.accent}/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <persona.icon
                  className={`w-6 h-6 text-${persona.accent}`}
                />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                {persona.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
