/**
 * @component RolesPreview
 * @part-of Web3School — Landing Page
 * @design Horizontal scroll carousel of role cards with fade edges and thematic filter tabs.
 * @spec docs/04-page-build-spec.md — Roles Carousel
 */
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { INITIAL_ROLES, type RoleSeedData } from "@/data/roles";

type ThematicGroup =
  | "all"
  | "web3"
  | "ai-ml"
  | "development"
  | "design"
  | "data"
  | "marketing"
  | "product"
  | "creator";

const THEMATIC_TABS: { label: string; value: ThematicGroup }[] = [
  { label: "All", value: "all" },
  { label: "Web3", value: "web3" },
  { label: "AI/ML", value: "ai-ml" },
  { label: "Development", value: "development" },
  { label: "Design", value: "design" },
  { label: "Data", value: "data" },
  { label: "Marketing", value: "marketing" },
  { label: "Product", value: "product" },
  { label: "Creator", value: "creator" },
];

const SLUG_TO_THEMATIC: Record<string, ThematicGroup> = {
  // Web3 & Blockchain
  "community-manager": "web3",
  "web3-content-creator": "web3",
  "web3-marketing-strategist": "web3",
  "web3-project-manager": "web3",
  "smart-contract-developer": "web3",
  "protocol-researcher": "web3",
  "fullstack-dapp-developer": "web3",
  "smart-contract-auditor": "web3",
  "blockchain-infra-engineer": "web3",
  "defi-analyst": "web3",
  "on-chain-researcher": "web3",
  "blockchain-qa-tester": "web3",
  "tokenomics-designer": "web3",
  "dao-operations-lead": "web3",
  "web3-data-analyst": "web3",
  "crypto-compliance-specialist": "web3",
  "nft-creator": "web3",
  "web3-ux-designer": "web3",
  "web3-game-designer": "web3",
  "metaverse-architect": "web3",
  "mev-researcher": "web3",
  "web3-product-manager": "web3",
  "blockchain-devrel": "web3",
  "zk-engineer": "web3",
  "cross-chain-developer": "web3",
  // AI & Machine Learning
  "prompt-engineer": "ai-ml",
  "ai-product-manager": "ai-ml",
  "ml-engineer": "ai-ml",
  "ai-safety-researcher": "ai-ml",
  "ai-content-strategist": "ai-ml",
  "computer-vision-engineer": "ai-ml",
  "nlp-engineer": "ai-ml",
  "ai-ethics-consultant": "ai-ml",
  "ai-automation-specialist": "ai-ml",
  "fine-tuning-specialist": "ai-ml",
  "ai-agent-developer": "ai-ml",
  "mlops-engineer": "ai-ml",
  // Software Development
  "frontend-developer": "development",
  "backend-developer": "development",
  "full-stack-developer": "development",
  "mobile-developer": "development",
  "devops-cloud-engineer": "development",
  "api-developer": "development",
  "systems-architect": "development",
  "qa-test-automation": "development",
  "developer-relations": "development",
  "open-source-maintainer": "development",
  // Design & Creative
  "ui-ux-designer": "design",
  "product-designer": "design",
  "motion-designer": "design",
  "3d-artist": "design",
  "brand-designer": "design",
  "design-systems-engineer": "design",
  "ux-researcher": "design",
  "creative-director": "design",
  "video-editor": "design",
  // Data & Analytics
  "data-analyst": "data",
  "data-engineer": "data",
  "data-scientist": "data",
  "bi-analyst": "data",
  "analytics-engineer": "data",
  "growth-analyst": "data",
  "quantitative-researcher": "data",
  // Marketing & Growth
  "growth-marketer": "marketing",
  "seo-specialist": "marketing",
  "content-marketing-manager": "marketing",
  "social-media-manager": "marketing",
  "email-marketing-specialist": "marketing",
  "paid-ads-specialist": "marketing",
  "performance-marketer": "marketing",
  "community-builder": "marketing",
  "cro-specialist": "marketing",
  // Product & Strategy
  "product-manager": "product",
  "technical-product-manager": "product",
  "product-analyst": "product",
  "scrum-master": "product",
  "technical-writer": "product",
  "program-manager": "product",
  "business-analyst": "product",
  // Freelance & Creator Economy
  "no-code-developer": "creator",
  "automation-consultant": "creator",
  "newsletter-creator": "creator",
  "youtube-creator": "creator",
  "course-creator": "creator",
  "podcast-producer": "creator",
  "technical-blogger": "creator",
  "indie-hacker": "creator",
  "notion-consultant": "creator",
  "ai-tool-reviewer": "creator",
};

const THEMATIC_LABEL: Record<ThematicGroup, string> = {
  all: "All",
  web3: "Web3",
  "ai-ml": "AI / ML",
  development: "Development",
  design: "Design",
  data: "Data",
  marketing: "Marketing",
  product: "Product",
  creator: "Creator",
};

function getThematicGroup(role: RoleSeedData): ThematicGroup {
  return SLUG_TO_THEMATIC[role.slug] ?? "web3";
}

export { SLUG_TO_THEMATIC, type ThematicGroup };

export function RolesPreview() {
  const [activeTab, setActiveTab] = useState<ThematicGroup>("web3");
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const displayRoles = useMemo(() => {
    if (activeTab === "all") return INITIAL_ROLES;
    return INITIAL_ROLES.filter(
      (role) => getThematicGroup(role) === activeTab
    );
  }, [activeTab]);

  // Reset scroll and restart auto-slide when tab changes
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollLeft = 0;

    const timer = setInterval(() => {
      if (isPaused.current || !carousel) return;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [activeTab]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.pageX - carouselRef.current.offsetLeft;
    dragStartScroll.current = carouselRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = dragStartScroll.current - (x - dragStartX.current) * 1.5;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setTimeout(() => { isPaused.current = false; }, 800);
  };

  return (
    <AnimatedSection id="roles" className="py-16 md:py-24 lg:py-32">
      {/* Header */}
      <div className="text-center px-6 mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
          Explore Roles
        </p>
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
          {INITIAL_ROLES.length}+ Digital Careers. One Is Yours.
        </h2>
        <p className="mt-4 text-lg text-[#A0A0A0] max-w-[600px] mx-auto">
          Browse real career paths across Web3, AI, development, design, data,
          marketing, and more.
        </p>
      </div>

      {/* Thematic filter tabs */}
      <div className="px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {THEMATIC_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? "bg-white text-black"
                  : "bg-[#111111] text-[#A0A0A0] hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />

        <div
          ref={carouselRef}
          className="scroll-carousel px-6 cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; isDragging.current = false; }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          {displayRoles.map((role) => (
            <Link
              key={role.slug}
              href={`/roles/${role.slug}`}
              draggable={false}
              onClick={(e) => { if (isDragging.current) e.preventDefault(); }}
              className="min-w-[280px] flex-shrink-0 scroll-snap-align-start bg-[#111111]/60 backdrop-blur-md border border-white/[0.08] rounded-xl p-7 hover:border-white/[0.16] transition-colors duration-200 block"
            >
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[#A0A0A0] mb-3">
                {THEMATIC_LABEL[getThematicGroup(role)]}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                {role.name}
              </h3>
              <p className="text-sm text-[#A0A0A0] line-clamp-2">
                {role.short_description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* View all link */}
      <div className="text-center mt-10 px-6">
        <Link
          href="/roles"
          className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white text-sm font-medium transition-colors duration-200"
        >
          View all {INITIAL_ROLES.length} roles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
