export const COLORS = {
  bg: "#0A0A0A",
  primary: "#059669",          // deep green — readable on light bg
  primaryDim: "rgba(5,150,105,0.18)",
  primaryGlow: "rgba(5,150,105,0.25)",
  // Text on light background
  text: "#0D1B2A",             // deep navy — main text
  textMuted: "rgba(13,27,42,0.62)", // secondary text
  textDim: "rgba(13,27,42,0.38)",   // tertiary / captions
  // Overlay on top of bg image
  overlay: "rgba(255,255,255,0.60)",
  border: "rgba(13,27,42,0.12)",
  // legacy (kept for any fallback)
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.55)",
  mutedDim: "rgba(255,255,255,0.35)",
} as const;

export const FONTS = {
  heading: '"Plus Jakarta Sans", sans-serif',
  body: '"Inter", sans-serif',
} as const;

export const FPS = 30;
export const W = 1920;
export const H = 1080;

export const SCENE = {
  hook: 4 * FPS,
  brand: 5 * FPS,
  features: 16 * FPS,
  cta: 5 * FPS,
} as const;

export const TOTAL_FRAMES =
  SCENE.hook + SCENE.brand + SCENE.features + SCENE.cta;

export const TRANSITION = 18;

export const FEATURES = [
  {
    step: "01",
    icon: "💬",
    title: "Discovery Chat",
    description: "A few smart questions — the AI figures out exactly where you fit in Web3.",
    stat: "Adaptive",
    statLabel: "goes at your pace",
  },
  {
    step: "02",
    icon: "🎯",
    title: "Role Match",
    description: "Matched to your ideal Web3 role from 89+ careers — DeFi, NFTs, DAOs, and more.",
    stat: "89+",
    statLabel: "Web3 roles",
  },
  {
    step: "03",
    icon: "🗺️",
    title: "Adaptive Roadmap",
    description: "A learning path that evolves as you do — faster when you get it, deeper when you need it.",
    stat: "Evolves",
    statLabel: "as you learn",
  },
  {
    step: "04",
    icon: "🏆",
    title: "Skill Passport",
    description: "Proof of your skills — not just a certificate. A living record of what you can actually do.",
    stat: "100%",
    statLabel: "verifiable",
  },
] as const;
