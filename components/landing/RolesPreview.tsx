/**
 * @component RolesPreview
 * @part-of Web3School — Landing Page
 * @design Grid of 8 role cards from seed data, scrollable on mobile
 * @flow Explore Web3 Career Paths preview
 */
"use client";

import { motion } from "framer-motion";
import {
  Users,
  Code,
  TrendingUp,
  Palette,
  Search,
  PenTool,
  BookOpen,
  Bug,
} from "lucide-react";
import { INITIAL_ROLES } from "@/data/roles";
import { CATEGORY_BADGE_COLORS } from "@/lib/utils/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { RoleCategory } from "@/lib/types";

const ROLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "community-manager": Users,
  "smart-contract-developer": Code,
  "defi-analyst": TrendingUp,
  "nft-creator": Palette,
  "on-chain-researcher": Search,
  "web3-content-creator": PenTool,
  "protocol-researcher": BookOpen,
  "blockchain-qa-tester": Bug,
};

export function RolesPreview() {
  return (
    <AnimatedSection id="roles" className="py-20 md:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              Web3 Career Paths
            </span>
          </h2>
        </div>
        <p className="text-text-secondary text-center mb-16 text-lg">
          Starting with 8 high-demand roles. Expanding to all of tech.
        </p>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_ROLES.map((role, index) => {
            const Icon = ROLE_ICONS[role.slug] || Code;
            const badgeClass =
              CATEGORY_BADGE_COLORS[role.category as RoleCategory];

            return (
              <motion.div
                key={role.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-navy-mid border border-border rounded-2xl p-6 hover:border-purple-primary/30 transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-purple-primary" />
                </div>
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${badgeClass}`}
                >
                  {role.category.replace("-", " ")}
                </span>
                <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                  {role.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                  {role.short_description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {INITIAL_ROLES.map((role) => {
            const Icon = ROLE_ICONS[role.slug] || Code;
            const badgeClass =
              CATEGORY_BADGE_COLORS[role.category as RoleCategory];

            return (
              <div
                key={role.slug}
                className="flex-shrink-0 w-72 snap-center bg-navy-mid border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-primary" />
                </div>
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${badgeClass}`}
                >
                  {role.category.replace("-", " ")}
                </span>
                <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                  {role.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {role.short_description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
