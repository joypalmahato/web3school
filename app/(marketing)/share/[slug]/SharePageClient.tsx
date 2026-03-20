"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";

interface SharePageClientProps {
  roleName: string;
  roleCategory: string;
  matchPercentage: number;
  topTraits: string[];
  viewCount: number;
}

export function SharePageClient({
  roleName,
  roleCategory,
  matchPercentage,
  topTraits,
  viewCount,
}: SharePageClientProps) {
  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg space-y-6"
      >
        {/* Card */}
        <div className="bg-[#111111] border border-border rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6">
            {/* Branding */}
            <div className="flex items-center justify-between">
          <Logo size="sm" href="/" />
              <span className="text-text-muted text-xs font-mono">
                CAREER MATCH
              </span>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold text-text-primary">
                {roleName}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-purple-primary font-heading font-bold text-2xl">
                  {matchPercentage}% Match
                </span>
                <span className="text-xs text-text-muted bg-navy-deep/50 px-2 py-1 rounded-full border border-border">
                  {roleCategory.replace("-", " ")}
                </span>
              </div>
            </div>

            {/* Top Traits */}
            {topTraits.length > 0 && (
              <div className="space-y-2">
                <p className="text-text-muted text-xs font-mono">
                  TOP STRENGTHS
                </p>
                <div className="flex flex-wrap gap-2">
                  {topTraits.map((trait) => (
                    <span
                      key={trait}
                      className="text-sm bg-purple-primary/10 text-purple-light px-3 py-1.5 rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* View count */}
            <div className="flex items-center gap-1.5 text-text-muted text-xs">
              <Eye className="w-3.5 h-3.5" />
              <span>
                {viewCount} {viewCount === 1 ? "view" : "views"}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-text-secondary">
            Want to discover your ideal Web3 career path?
          </p>
          <Button
            asChild
            className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-8 py-5 text-lg font-semibold w-full"
          >
            <Link href="/signup">
              Get Your Own Career Match
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-text-muted text-xs">
            Free 10-minute AI conversation. No credit card required.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
