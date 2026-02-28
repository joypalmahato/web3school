/**
 * @component HowItWorks
 * @part-of Web3School — Landing Page
 * @design 3 steps with icons, CTA at bottom
 * @flow Talk to AI → Get Your Path → Start Learning
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Route, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Talk to Our AI",
    description:
      "Have a 10-minute conversation with our AI career counselor. No quiz. No boring forms. Just a friendly chat about your interests, strengths, and goals.",
  },
  {
    number: "02",
    icon: Route,
    title: "Get Your Path",
    description:
      "Receive your personalized career match and a 90-day learning roadmap broken down day by day. Know exactly what to learn and when.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Start Learning",
    description:
      "Learn with an AI tutor that adapts to you. Build real projects. Earn a verifiable Skill Passport. Get matched to opportunities.",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection className="py-20 md:py-32 bg-navy-deep">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              3 Steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-start gap-6 bg-navy-mid border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-center flex-shrink-0">
                <span className="text-4xl font-heading font-bold text-purple-primary/30">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-purple-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-purple-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-primary/25"
          >
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
