/**
 * @component RoleMatchCard
 * @part-of Web3School — Discovery Results
 * @design Visually appealing card with role info, match %, category tag
 */
"use client";

import { motion } from "framer-motion";
import {
  Users, Code, TrendingUp, Palette, Search, PenTool, BookOpen, Bug,
  Megaphone, FolderKanban, Layers, ShieldCheck, Server, Coins,
  Building2, BarChart3, Scale, Gamepad2, Globe, Figma,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORY_BADGE_COLORS } from "@/lib/utils/constants";
import { cn } from "@/lib/utils";
import type { RoleCategory } from "@/lib/types";

interface RoleMatchCardProps {
  roleName: string;
  roleSlug: string;
  category: RoleCategory;
  matchScore: number;
  reasoning: string;
  isPrimary?: boolean;
  onSelect?: () => void;
}

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

export function RoleMatchCard({
  roleName,
  roleSlug,
  category,
  matchScore,
  reasoning,
  isPrimary = false,
  onSelect,
}: RoleMatchCardProps) {
  const Icon = ROLE_ICONS[roleSlug] || Code;
  const badgeClass = CATEGORY_BADGE_COLORS[category] || CATEGORY_BADGE_COLORS.technical;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "border rounded-2xl p-6 transition-all duration-300",
        isPrimary
          ? "bg-navy-mid border-purple-primary/50 shadow-lg shadow-purple-primary/10"
          : "bg-navy-mid border-border hover:border-purple-primary/30"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex-shrink-0 rounded-xl flex items-center justify-center",
            isPrimary ? "w-16 h-16 bg-purple-primary/15" : "w-12 h-12 bg-purple-primary/10"
          )}
        >
          <Icon className={cn("text-purple-primary", isPrimary ? "w-8 h-8" : "w-6 h-6")} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className={cn("font-heading font-bold text-text-primary", isPrimary ? "text-xl" : "text-lg")}>
              {roleName}
            </h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${badgeClass}`}>
              {category.replace("-", " ")}
            </span>
          </div>
          {/* Match score */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 h-2 bg-navy-deep rounded-full overflow-hidden max-w-32">
              <motion.div
                className="h-full bg-[#10B981] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${matchScore}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <span className="text-purple-primary font-heading font-bold text-sm">
              {matchScore}% match
            </span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            {reasoning}
          </p>
        </div>
      </div>

      {onSelect && (
        <Button
          onClick={onSelect}
          className={cn(
            "w-full mt-4 rounded-xl font-semibold transition-all active:scale-[0.98]",
            isPrimary
              ? "bg-purple-primary hover:bg-purple-light text-white py-5"
              : "border border-purple-primary text-purple-primary hover:bg-purple-primary/10 bg-transparent py-4"
          )}
        >
          {isPrimary ? "Choose This Path" : "Select Instead"}
        </Button>
      )}
    </motion.div>
  );
}
