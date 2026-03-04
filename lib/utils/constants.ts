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
  twitter: "https://twitter.com/web3school",
  discord: "https://discord.gg/web3school",
  telegram: "https://t.me/web3school",
  github: "https://github.com/web3school",
} as const;

export const ROLE_CATEGORIES = {
  technical: { label: "Technical", color: "text-cyan-accent" },
  "semi-technical": { label: "Semi-Technical", color: "text-purple-primary" },
  "non-technical": { label: "Non-Technical", color: "text-green-success" },
  creative: { label: "Creative", color: "text-amber-warning" },
} as const;

export const CATEGORY_BADGE_COLORS = {
  technical: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20",
  "semi-technical":
    "bg-purple-primary/10 text-purple-primary border-purple-primary/20",
  "non-technical":
    "bg-green-success/10 text-green-success border-green-success/20",
  creative: "bg-amber-warning/10 text-amber-warning border-amber-warning/20",
} as const;
