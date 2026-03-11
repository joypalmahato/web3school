export const APP_NAME = "Web3School";
export const APP_DESCRIPTION =
  "AI-Powered Web3 Career Discovery & Learning Platform";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const APP_TAGLINE =
  "Go from 'I don't know what to learn' to 'I have a marketable skill and I can prove it' — guided by AI every step of the way.";

export const DISCOVERY_MAX_MESSAGES = 20;
export const DISCOVERY_MIN_MESSAGES = 8;

export const ROADMAP_TOTAL_WEEKS = 12;
export const ROADMAP_DAYS_PER_WEEK = 5;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

// TODO: Replace with live Gitbook URL when ready
export const WHITEPAPER_URL = "https://web3school.gitbook.io/whitepaper";

export const SOCIAL_LINKS = {
  twitter: "https://x.com/web3school_X",
  discord: "https://discord.gg/web3school",
  telegram: "https://t.me/web3school",
  github: "https://github.com/web3school",
} as const;

export const ROLE_CATEGORIES = {
  technical: { label: "Technical", color: "text-[#10B981]" },
  "semi-technical": { label: "Semi-Technical", color: "text-[#6366F1]" },
  "non-technical": { label: "Non-Technical", color: "text-[#F59E0B]" },
  creative: { label: "Creative", color: "text-[#EC4899]" },
} as const;

export const CATEGORY_BADGE_COLORS = {
  technical: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
  "semi-technical": "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20",
  "non-technical": "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  creative: "bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/20",
} as const;
