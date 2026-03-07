export const COLORS = {
  bg: "#0A0A0F",
  card: "#111118",
  primary: "#6366F1",
  primaryDim: "rgba(99, 102, 241, 0.15)",
  primaryGlow: "rgba(99, 102, 241, 0.08)",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.5)",
  mutedDim: "rgba(255,255,255,0.3)",
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
    description: "A few smart questions about your background, interests, and goals — the AI figures out where you fit in Web3.",
    stat: "Adaptive",
    statLabel: "goes at your pace",
  },
  {
    step: "02",
    icon: "🎯",
    title: "Role Match",
    description: "Get matched to your ideal Web3 role from 89+ careers — DeFi, NFT, Smart Contracts, DAOs, and more.",
    stat: "89+",
    statLabel: "Web3 roles",
  },
  {
    step: "03",
    icon: "🗺️",
    title: "Your Adaptive Roadmap",
    description: "A learning path that evolves as you do — faster when you get it, deeper when you need it. No fixed timeline. Just your progress.",
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
