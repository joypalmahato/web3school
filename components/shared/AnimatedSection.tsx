/**
 * @component AnimatedSection
 * @part-of Web3School — Shared Components
 * @design Framer Motion whileInView wrapper for scroll animations
 */
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionVariants = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: AnimatedSectionProps) {
  const offset = directionVariants[direction];

  return (
    <motion.section
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0, 0, 0.2, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
