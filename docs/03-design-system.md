# 03 — Design System Brief

> Art Direction: Minimal + Premium dark-first aesthetic
> Benchmark: kled.ai — calm authority, modern restraint, every element earns its place

---

## A. Visual Identity Direction

### A1. Color Palette

The palette is built on near-black foundations with two controlled accent frequencies. No competing hues. Every color has a job.

| Token | Hex | Usage |
|---|---|---|
| `--bg-deep` | `#0A0A0A` | Page background — true near-black, no blue tint |
| `--bg-elevated` | `#111111` | Cards, modals, elevated surfaces |
| `--bg-hover` | `#1A1A1A` | Hover states, active backgrounds |
| `--bg-section` | `#0E0E0E` | Alternate section tint (tonal shift between sections) |
| `--border` | `rgba(255,255,255,0.10)` | Default borders — visible but quiet |
| `--border-hover` | `rgba(255,255,255,0.20)` | Border on hover — slightly more presence |
| `--accent` | `#10B981` | Primary accent — CTAs, progress, success states |
| `--accent-hover` | `#34D399` | Hover state for accent |
| `--accent-glow` | `rgba(16,185,129,0.10)` | Glow halos, subtle background tints |
| `--text-primary` | `#FFFFFF` | Headlines — pure white for maximum contrast |
| `--text-secondary` | `#A0A0A0` | Subheadings, body text — readable but recessed |
| `--text-muted` | `#666666` | Labels, timestamps, tertiary info |
| `--text-disabled` | `#444444` | Disabled, placeholder |

**Why this palette:** True near-black (not navy) matches Kled's approach — clean, neutral, universally premium. Green accent (`#10B981`) is Web3-native (growth, go, trustworthy) without being the cliché blockchain blue. Single accent color prevents visual chaos.

**Note:** This brief proposes a landing-page-specific palette optimized for conversion. The existing app design system (purple `#6C63FF` + cyan `#00D4FF` in DESIGN_SYSTEM.md) continues to govern the dashboard/SaaS product. The landing page acts as a distinct brand surface — minimal, neutral, conversion-focused — that transitions users into the richer product palette upon signup.

### A2. Typography

Two-tier system: display impact + body clarity.

| Role | Font | Source | Why |
|---|---|---|---|
| Display | Inter | Google Fonts | Clean geometric sans. Kled uses Inter. Excellent at 64-80px bold. |
| Body | Inter | Google Fonts | Same family for cohesion. Weight variation creates hierarchy. |
| Code | JetBrains Mono | Google Fonts | Reserved for code blocks in dashboard, not landing page. |

**Type Scale — Desktop:**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| H1 (Hero) | 72px | 700 | 1.05 | -0.03em |
| H2 (Section) | 48px | 700 | 1.1 | -0.02em |
| H3 (Card title) | 24px | 600 | 1.3 | -0.01em |
| Body | 18px | 400 | 1.6 | 0 |
| Body Small | 16px | 400 | 1.6 | 0 |
| Caption | 14px | 400 | 1.5 | 0.01em |
| Overline | 12px | 500 | 1.4 | 0.08em (uppercase) |

**Type Scale — Mobile (375px):**

| Level | Size | Weight |
|---|---|---|
| H1 | 40px | 700 |
| H2 | 32px | 700 |
| H3 | 20px | 600 |
| Body | 16px | 400 |

**Why these sizes:** Large H1 (72px) creates the Kled-style typographic dominance. Tight letter-spacing on headings adds density and confidence. Generous line-height on body ensures readability during longer reads.

### A3. Spacing Rhythm

Base unit: **8px**

| Context | Value | Usage |
|---|---|---|
| Section padding (desktop) | 120px top/bottom | Generous — whitespace is a design element |
| Section padding (mobile) | 64px top/bottom | Scaled down but still airy |
| Content max-width | 1200px | Centered container |
| Text max-width | 680px | Body copy — prevents long line lengths |
| Component gap | 16px / 24px / 32px | Card grids, button groups, stacks |
| Inline spacing | 8px / 12px | Icon + text, label + value |

**Why:** 120px section padding matches Kled's generous breathing room. 680px text max-width ensures optimal reading comfort (65-75 characters per line).

### A4. Border Radius

Philosophy: **Sharp with soft exceptions.**

| Element | Radius |
|---|---|
| Buttons | 6px |
| Cards | 12px |
| Input fields | 6px |
| Badges/tags | 4px |
| Avatars | 50% (circle) |
| Modal | 16px |

**Why:** Predominantly sharp keeps the aesthetic mature and restrained. Slightly rounded cards (12px) prevent a cold/brutalist feel. No pill-shaped buttons — pills read "playful," not "professional."

### A5. Shadow & Depth

Philosophy: **Near-flat with subtle border definition.**

- No drop shadows on cards. Borders define edges.
- Subtle `box-shadow: 0 0 60px rgba(16,185,129,0.05)` for hero glow accents only.
- Glassmorphism reserved for nav bar only: `backdrop-filter: blur(12px)` with `rgba(10,10,10,0.8)` background.
- Elevation communicated through background color shift, not shadow.

---

## B. Component Style Guide

### B1. Buttons

**Primary:**
```
background: #FFFFFF
color: #000000
padding: 14px 28px
border-radius: 6px
font-size: 16px
font-weight: 600
border: none
transition: opacity 0.2s ease
hover: opacity 0.85
```

**Secondary (Ghost):**
```
background: transparent
color: #FFFFFF
padding: 14px 28px
border-radius: 6px
font-size: 16px
font-weight: 500
border: 1px solid rgba(255,255,255,0.20)
transition: border-color 0.2s ease, background 0.2s ease
hover: border-color rgba(255,255,255,0.40), background rgba(255,255,255,0.05)
```

**Text/Link:**
```
background: none
color: #A0A0A0
padding: 0
font-size: 16px
font-weight: 400
text-decoration: none
hover: color #FFFFFF
```

### B2. Cards

```
background: #111111
border: 1px solid rgba(255,255,255,0.08)
border-radius: 12px
padding: 32px
transition: border-color 0.2s ease
hover: border-color rgba(255,255,255,0.16)
```

No shadow. No gradient. Border defines the edge. Content speaks.

**Card variants:**
- **Role Card:** Icon + title + one-line description. 240px min-width for carousel.
- **Problem Card:** Large emoji or icon + title + 2-line description. Equal-width in 3-col grid.
- **Step Card:** Large number + title + description. Vertical stack.

### B3. Navigation

```
position: fixed
top: 0
width: 100%
z-index: 50
background: rgba(10,10,10,0.80)
backdrop-filter: blur(12px)
border-bottom: 1px solid rgba(255,255,255,0.06)
padding: 16px 0
height: 64px
```

**Contents:**
- Left: Wordmark "Web3School" — Inter 18px weight 700, white
- Center: 3 nav links — Inter 14px weight 400, `#A0A0A0`, hover `#FFFFFF`
- Right: "Start Discovery" — primary button style, scaled down (12px 20px padding)

**Mobile:** Hamburger menu. Wordmark + hamburger only. Menu slides from right.

### B4. Icons

- Library: Lucide Icons
- Style: Outline, 1.5px stroke weight
- Size: 20px default, 24px for cards, 16px inline with text
- Color: Inherits text color (usually `#A0A0A0`, active `#FFFFFF`)

---

## C. Motion & Interaction Rules

### C1. Hover States

| Element | Hover Effect |
|---|---|
| Primary button | Opacity 0.85 |
| Ghost button | Border brightens, subtle bg fill |
| Cards | Border brightens (0.08 → 0.16 opacity) |
| Nav links | Color `#A0A0A0` → `#FFFFFF` |
| Text links | Color shift + no underline |

All transitions: `0.2s ease` — fast enough to feel responsive, slow enough to feel smooth.

### C2. Page Load Animation

Hero content fades up with stagger:
1. Headline — `opacity 0→1, translateY 20px→0` — delay 0ms
2. Subheadline — same — delay 100ms
3. Body copy — same — delay 200ms
4. CTAs — same — delay 300ms
5. Product preview — same — delay 400ms

Duration: 600ms each. Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo).

### C3. Scroll Behavior

- Sections fade in on scroll: `opacity 0→1, translateY 30px→0`
- Trigger: When element enters viewport (IntersectionObserver, threshold 0.1)
- Duration: 600ms, same easing as page load
- No parallax. No horizontal transforms. Just vertical fade-up.
- Role carousel: Horizontal scroll with momentum. Subtle scroll indicators (fade edges).

### C4. Page Transitions

- Smooth scroll for anchor links (nav → section)
- `scroll-behavior: smooth` on `<html>`
- No page transition animations for landing page (single page)

---

## D. Layout System

### D1. Grid

```
Container: max-width 1200px, centered, padding 0 24px
Columns: 12-column grid (CSS Grid)
Gutter: 24px
Breakpoints:
  - Mobile: 375px — 1 column
  - Tablet: 768px — 2 columns (6+6)
  - Desktop: 1024px — 3 columns (4+4+4) or 2 columns (6+6)
  - Wide: 1200px — full grid available
```

### D2. Hero Layout

Centered stack. All content center-aligned.

```
Section: full viewport height (min-height: 100vh), flex, center
Content: max-width 800px
Headline: full width within content
Subheadline: max-width 600px
Body: max-width 560px
CTAs: inline-flex, gap 16px, centered
Product preview: max-width 960px, below CTAs with 48px gap
```

### D3. Section Alternation

Sections alternate between two near-identical dark tones:
- Odd sections: `#0A0A0A` (page bg)
- Even sections: `#0E0E0E` (section bg)

This creates subtle visual rhythm without borders, lines, or decorative elements. The tonal shift is felt more than seen.

### D4. Whitespace as Design

- Minimum 120px between sections (desktop)
- 48px between section title and content
- 32px between related elements (cards in a grid)
- 16px between tightly coupled elements (icon + label)
- Whitespace scales down proportionally on mobile (0.6x factor)

---

## Constraints & Guardrails

1. **No gradients** unless explicitly specified for a glow effect
2. **No competing accent colors** — green is the only accent on landing page
3. **No decorative illustrations** — photography or product screenshots only
4. **No rounded pill buttons** — 6px radius max
5. **No light mode** — dark is the only theme
6. **No animation on scroll that blocks content** — content must be visible without animation completing
7. **Every element must justify its presence** — if it doesn't aid comprehension or conversion, remove it
8. **Match Kled's restraint** — when in doubt, do less, not more
