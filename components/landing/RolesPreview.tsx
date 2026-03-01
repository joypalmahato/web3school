/**
 * @component RolesPreview
 * @part-of Web3School — Landing Page
 * @design Horizontal scroll carousel of role cards with fade edges.
 * @spec docs/04-page-build-spec.md — Roles Carousel
 */
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  Palette,
  Code,
  MessageCircle,
  PenTool,
  Database,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const ROLES = [
  {
    icon: ShieldCheck,
    title: "Smart Contract Auditor",
    description: "Find vulnerabilities before hackers do",
  },
  {
    icon: Users,
    title: "Community Manager",
    description: "Build and lead Web3 communities",
  },
  {
    icon: TrendingUp,
    title: "DeFi Analyst",
    description: "Analyze protocols and yield strategies",
  },
  {
    icon: Palette,
    title: "NFT Creator",
    description: "Design digital art and collectibles",
  },
  {
    icon: Code,
    title: "Solidity Developer",
    description: "Write the smart contracts that power DeFi",
  },
  {
    icon: MessageCircle,
    title: "Web3 Marketer",
    description: "Drive growth for crypto projects",
  },
  {
    icon: PenTool,
    title: "Web3 UX Designer",
    description: "Design interfaces for decentralized apps",
  },
  {
    icon: Database,
    title: "Blockchain Data Analyst",
    description: "Turn on-chain data into insights",
  },
];

export function RolesPreview() {
  return (
    <AnimatedSection id="roles" className="py-16 md:py-24 lg:py-32 bg-[#0E0E0E]">
      {/* Header */}
      <div className="text-center px-6 mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
          Explore Roles
        </p>
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
          50+ Web3 Careers. One Is Yours.
        </h2>
        <p className="mt-4 text-lg text-[#A0A0A0] max-w-[600px] mx-auto">
          Browse real career paths — from Community Manager to Smart Contract
          Developer.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />

        <div className="scroll-carousel px-6">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="min-w-[280px] flex-shrink-0 scroll-snap-align-start bg-[#111111] border border-white/[0.08] rounded-xl p-7 hover:border-white/[0.16] transition-colors duration-200"
            >
              <role.icon className="w-8 h-8 text-green-success mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                {role.title}
              </h3>
              <p className="text-sm text-[#A0A0A0]">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View all link */}
      <div className="text-center mt-10 px-6">
        <Link
          href="/roles"
          className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white text-sm font-medium transition-colors duration-200"
        >
          View all roles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
