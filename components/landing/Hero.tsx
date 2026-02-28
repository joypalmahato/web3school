/**
 * @component Hero
 * @part-of Web3School — Landing Page
 * @design Animated gradient mesh background, grid overlay, dark theme
 * @flow Two CTAs: "Join the Waitlist" (primary) → #waitlist, "See How It Works" → #solution
 */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 via-navy-deep to-cyan-accent/10 animate-pulse-glow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-primary" />
          <span className="text-sm text-purple-light font-medium">
            AI-Powered Career Discovery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary leading-tight tracking-tight"
        >
          Don&apos;t Know What to Learn?{" "}
          <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
            Let AI Figure It Out for You.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
        >
          Web3School is your AI career counselor, tutor, and accountability
          partner. Go from confused to skilled to hired — in 90 days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-primary/25"
          >
            <a href="#waitlist">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-purple-primary text-purple-primary hover:bg-purple-primary/10 rounded-xl px-8 py-6 text-lg font-semibold transition-all"
          >
            <a href="#solution">See How It Works</a>
          </Button>
        </motion.div>

        {/* Social proof hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-text-muted text-sm"
        >
          Join 100+ early adopters already on the waitlist
        </motion.p>
      </div>
    </section>
  );
}
