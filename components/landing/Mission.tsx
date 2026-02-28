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
  { value: "76+", label: "Career Roles Mapped" },
  { value: "8", label: "Roles at Launch" },
  { value: "90-Day", label: "Personalized Roadmaps" },
];

export function Mission() {
  return (
    <AnimatedSection id="mission" className="py-20 md:py-32 bg-navy-mid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary leading-snug max-w-4xl mx-auto">
            &ldquo;Build a future where every person learns with ease and
            thrives with confidence in the{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              age of AI
            </span>
            .&rdquo;
          </p>
          <cite className="block mt-6 text-text-muted text-sm not-italic">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-deep border border-border rounded-2xl p-8 text-center hover:border-purple-primary/30 transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-text-secondary mt-2 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
