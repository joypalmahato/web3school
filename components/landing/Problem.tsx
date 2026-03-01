/**
 * @component Problem
 * @part-of Web3School — Landing Page
 * @design 3 problem cards + stats bar, dark theme
 * @flow Establishes the problem before presenting the solution
 */
"use client";

import { motion } from "framer-motion";
import { Compass, RotateCcw, Award } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const PROBLEMS = [
  {
    icon: Compass,
    title: "Too Many Options, Zero Direction",
    description:
      "You open YouTube — 10,000 tutorials. You open Twitter — everyone's selling a course. You don't even know WHAT to learn. You're not lazy. You're lost.",
  },
  {
    icon: RotateCcw,
    title: "Start, Stop, Repeat",
    description:
      "You've started 5 courses and finished none. It's not a motivation problem — it's a structure problem. Nobody is holding you accountable.",
  },
  {
    icon: Award,
    title: "Skills Without Proof",
    description:
      "Even if you learn something, how do you prove it? Certificates are worthless. Employers want evidence.",
  },
];

const STATS = [
  { value: "48%", label: "of graduates feel unprepared" },
  { value: "5.5%", label: "course completion rate" },
  { value: "87%", label: "of companies report talent shortages" },
];

export function Problem() {
  return (
    <AnimatedSection className="section-padding bg-navy-deep">
      <div className="container-ds">
        {/* Title */}
        <div className="text-center max-w-heading mx-auto mb-16">
          <h2 className="text-heading-2 text-text-primary">
            The World Has More Learning Resources Than Ever.{" "}
            <span className="text-text-secondary">
              People Are More Confused Than Ever.
            </span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
              className="bg-navy-mid border border-border rounded-2xl p-8 card-interactive"
            >
              <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-heading-4 text-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0, 0, 0.2, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 bg-navy-mid rounded-2xl border border-border"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-purple-primary">
                {stat.value}
              </p>
              <p className="text-text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0, 0, 0.2, 1] }}
          className="text-center text-heading-3 text-text-primary max-w-heading mx-auto"
        >
          No platform today solves the complete journey from{" "}
          <span className="text-purple-primary">confused</span> →{" "}
          <span className="text-cyan-accent">skilled</span> →{" "}
          <span className="text-green-success">employed</span>.{" "}
          <span className="text-text-secondary">Until now.</span>
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
