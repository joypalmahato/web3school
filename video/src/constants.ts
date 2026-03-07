export const COLORS = {
  bg: "#0A0A0A",
  card: "#111111",
  primary: "#10B981",
  primaryDim: "rgba(16, 185, 129, 0.15)",
  primaryGlow: "rgba(16, 185, 129, 0.12)",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.55)",
  mutedDim: "rgba(255,255,255,0.35)",
  border: "rgba(255,255,255,0.08)",
} as const;

export const FONTS = {
  heading: '"Plus Jakarta Sans", sans-serif',
  body: '"Inter", sans-serif',
} as const;

export const FPS = 30;
export const W = 1920;
export const H = 1080;

// All scene durations in frames
export const SCENE = {
  hook: 4 * FPS,       // 120f
  brand: 5 * FPS,      // 150f
  features: 16 * FPS,  // 480f (4 features × 4s each)
  cta: 5 * FPS,        // 150f
} as const;

export const TOTAL_FRAMES =
  SCENE.hook + SCENE.brand + SCENE.features + SCENE.cta; // 900f = 30s

export const TRANSITION = 18; // frames for fade in/out within each scene

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
