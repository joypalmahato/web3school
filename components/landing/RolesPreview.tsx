/**
 * @component RolesPreview
 * @part-of Web3School — Landing Page
 * @design Grid of featured role cards from seed data, scrollable on mobile
 * @flow Explore Web3 Career Paths preview
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, Code, TrendingUp, Palette, Search, PenTool, BookOpen, Bug,
  Megaphone, FolderKanban, Layers, ShieldCheck, Server, Coins,
  Building2, BarChart3, Scale, Gamepad2, Globe, Figma, ArrowRight,
} from "lucide-react";
import { INITIAL_ROLES } from "@/data/roles";
import { CATEGORY_BADGE_COLORS } from "@/lib/utils/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { RoleCategory } from "@/lib/types";

const ROLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "community-manager": Users,
  "web3-content-creator": PenTool,
  "web3-marketing-strategist": Megaphone,
  "web3-project-manager": FolderKanban,
  "smart-contract-developer": Code,
  "protocol-researcher": BookOpen,
  "fullstack-dapp-developer": Layers,
  "smart-contract-auditor": ShieldCheck,
  "blockchain-infra-engineer": Server,
  "defi-analyst": TrendingUp,
  "on-chain-researcher": Search,
  "blockchain-qa-tester": Bug,
  "tokenomics-designer": Coins,
  "dao-operations-lead": Building2,
  "web3-data-analyst": BarChart3,
  "crypto-compliance-specialist": Scale,
  "nft-creator": Palette,
  "web3-ux-designer": Figma,
  "web3-game-designer": Gamepad2,
  "metaverse-architect": Globe,
};

// Show a diverse mix of 8 roles on the landing page
const FEATURED_SLUGS = [
  "community-manager",
  "smart-contract-developer",
  "defi-analyst",
  "nft-creator",
  "web3-ux-designer",
  "fullstack-dapp-developer",
  "tokenomics-designer",
  "web3-content-creator",
];

const FEATURED_ROLES = FEATURED_SLUGS
  .map((slug) => INITIAL_ROLES.find((r) => r.slug === slug))
  .filter(Boolean);

export function RolesPreview() {
  return (
    <AnimatedSection id="roles" className="section-padding bg-navy-deep">
      <div className="container-ds">
        {/* Title */}
        <div className="text-center max-w-heading mx-auto mb-4">
          <h2 className="text-heading-2 text-text-primary">
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
              Web3 Career Paths
            </span>
          </h2>
        </div>
        <p className="text-body-lg text-text-secondary text-center mb-16">
          20 roles across technical, creative, and non-technical tracks.
        </p>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_ROLES.map((role, index) => {
            if (!role) return null;
            const Icon = ROLE_ICONS[role.slug] || Code;
            const badgeClass =
              CATEGORY_BADGE_COLORS[role.category as RoleCategory];

            return (
              <motion.div
                key={role.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
                className="bg-navy-mid border border-border rounded-2xl p-6 card-interactive group cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
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
        <div className="md:hidden scroll-carousel -mx-6 px-6">
          {FEATURED_ROLES.map((role) => {
            if (!role) return null;
            const Icon = ROLE_ICONS[role.slug] || Code;
            const badgeClass =
              CATEGORY_BADGE_COLORS[role.category as RoleCategory];

            return (
              <div
                key={role.slug}
                className="w-72 bg-navy-mid border border-border rounded-2xl p-6"
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

        {/* View all roles link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, ease: [0, 0, 0.2, 1] }}
          className="text-center mt-10"
        >
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 text-purple-primary hover:text-purple-light font-semibold transition-fast"
          >
            View all {INITIAL_ROLES.length} roles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
