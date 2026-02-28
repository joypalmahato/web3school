/**
 * @component Solution
 * @part-of Web3School — Landing Page
 * @design 5-step visual timeline, horizontal desktop, vertical mobile
 * @flow Discover → Plan → Learn → Prove → Get Hired
 */
"use client";

import { motion } from "framer-motion";
import { Compass, Map, Brain, Shield, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const STEPS = [
  {
    icon: Compass,
    title: "Discover",
    description: "AI conversation identifies your ideal career in 10 minutes",
    color: "text-purple-primary",
    bgColor: "bg-purple-primary/10",
    borderColor: "border-purple-primary/30",
  },
  {
    icon: Map,
    title: "Plan",
    description: "Personalized 90-day roadmap, day by day",
    color: "text-cyan-accent",
    bgColor: "bg-cyan-accent/10",
    borderColor: "border-cyan-accent/30",
  },
  {
    icon: Brain,
    title: "Learn",
    description: "AI tutor adapts to your pace and style",
    color: "text-green-success",
    bgColor: "bg-green-success/10",
    borderColor: "border-green-success/30",
  },
  {
    icon: Shield,
    title: "Prove",
    description: "Build projects, earn a Skill Passport",
    color: "text-amber-warning",
    bgColor: "bg-amber-warning/10",
    borderColor: "border-amber-warning/30",
  },
  {
    icon: Rocket,
    title: "Get Hired",
    description: "Matched to real Web3 opportunities",
    color: "text-red-error",
    bgColor: "bg-red-error/10",
    borderColor: "border-red-error/30",
  },
];

export function Solution() {
  return (
    <AnimatedSection id="solution" className="py-20 md:py-32 bg-navy-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
            Your AI-Powered Career{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              Compass, Tutor, and Launchpad
            </span>
          </h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-primary via-cyan-accent to-green-success" />

            <div className="grid grid-cols-5 gap-4">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div
                    className={`w-32 h-32 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center mb-5 relative z-10`}
                  >
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  {/* Step number */}
                  <span className="text-xs text-text-muted font-mono mb-1">
                    STEP {index + 1}
                  </span>
                  <h3
                    className={`text-lg font-heading font-bold ${step.color} mb-2`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}
              >
                <step.icon className={`w-7 h-7 ${step.color}`} />
              </div>
              <div>
                <span className="text-xs text-text-muted font-mono">
                  STEP {index + 1}
                </span>
                <h3
                  className={`text-lg font-heading font-bold ${step.color}`}
                >
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
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
