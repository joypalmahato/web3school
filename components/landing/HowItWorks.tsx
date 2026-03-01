/**
 * @component HowItWorks
 * @part-of Web3School — Landing Page
 * @design 3 steps with icons, CTA at bottom, accent gradient background
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
    <AnimatedSection className="section-padding bg-accent-section">
      <div className="container-ds">
        {/* Title */}
        <div className="text-center max-w-heading mx-auto mb-16">
          <h2 className="text-heading-2 text-text-primary">
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
              className="flex flex-col md:flex-row items-start gap-6 bg-navy-mid border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-center flex-shrink-0">
                <span className="text-4xl font-heading font-bold text-text-disabled">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-purple-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-purple-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-heading-4 text-text-primary mb-2">
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
          transition={{ ease: [0, 0, 0.2, 1] }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-purple-primary hover:bg-purple-light text-white rounded-lg px-8 py-6 text-lg font-semibold transition-smooth active:scale-[0.98] hover:glow-purple-md shadow-lg shadow-purple-primary/25"
          >
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
