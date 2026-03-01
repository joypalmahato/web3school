# 04 — Full Page Build Spec

> Landing page specification for Web3School
> Layout: Centered, full-width sections, typography-dominant
> Background: #0A0A0A | Accent: #10B981 | Reference: kled.ai

---

## Global Specifications

### Background
- Page: `#0A0A0A` — near-black
- Texture: Subtle dot grid at 3% opacity (CSS radial-gradient pattern)
- Alternate sections: `#0E0E0E`

### Typography
- Font: Inter (Google Fonts), weights 400, 500, 600, 700
- H1: 72px, weight 700, `#FFFFFF`, line-height 1.05, letter-spacing -0.03em
- H2: 48px, weight 700, `#FFFFFF`, line-height 1.1, letter-spacing -0.02em
- H3: 24px, weight 600, `#FFFFFF`, line-height 1.3
- Body: 18px, weight 400, `#A0A0A0`, line-height 1.6
- Caption: 14px, weight 400, `#666666`
- Overline: 12px, weight 500, uppercase, letter-spacing 0.08em, `#666666`
- Text max-width: 680px (prevents long line lengths)

### Color System
- Primary text: `#FFFFFF`
- Secondary text: `#A0A0A0`
- Muted text: `#666666`
- Accent: `#10B981`
- Accent hover: `#34D399`
- Borders: `rgba(255,255,255,0.10)`
- Elevated bg: `#111111`

### Container
- Max-width: 1200px, centered
- Padding: 0 24px (mobile: 0 20px)

---

## Section Specifications

### 1. Navigation

```
Position: fixed, top 0, full width, z-index 50
Background: rgba(10,10,10,0.80)
Backdrop-filter: blur(12px)
Border-bottom: 1px solid rgba(255,255,255,0.06)
Height: 64px
Padding: 0 24px

Left: "Web3School" — Inter 18px weight 700, #FFFFFF
Center: "How It Works" · "Roles" · "Blog" — Inter 14px weight 400, #A0A0A0, hover #FFFFFF
Right: "Start Discovery" button — bg #FFFFFF, color #000, padding 10px 20px, radius 6px, font 14px weight 600

Mobile (< 768px): Wordmark + hamburger only. Center links become slide-out menu.
```

### 2. Hero Section

```
Min-height: 100vh
Display: flex, align-items center, justify-content center
Padding: 160px 24px 120px (top accounts for fixed nav)
Text-align: center

Overline: "AI-POWERED CAREER DISCOVERY" — 12px, #666666, uppercase, letter-spacing 0.08em
Gap: 16px below overline

Headline: "Stop Guessing. Start Building." — 72px, weight 700, #FFFFFF
Max-width: 800px, centered
Gap: 24px below headline

Subheadline: "You don't need another course. You need a career path that actually fits your skills."
— 20px, weight 400, #A0A0A0, max-width 600px, centered
Gap: 24px below subheadline

Body: "Web3School's AI assesses your skills in 10 minutes, matches you to one of 50+ Web3 roles, and builds a personalized 90-day roadmap to get you job-ready."
— 18px, weight 400, #A0A0A0, max-width 560px, centered
Gap: 40px below body

CTAs: Inline-flex, gap 16px, centered
  Primary: "Start Discovery — Free" — bg #FFFFFF, color #000, padding 16px 32px, radius 6px, 16px weight 600
  Secondary: "See How It Works" — bg transparent, color #FFFFFF, border 1px rgba(255,255,255,0.20), padding 16px 32px, radius 6px, 16px weight 500

Microcopy: "Free forever. No credit card. 10 minutes to your career match."
— 14px, #666666, gap 16px below CTAs

Mobile (375px): H1 drops to 40px. CTAs stack vertically. Full width buttons.
```

### 3. Social Proof Bar

```
Background: #0E0E0E
Padding: 48px 24px
Border-top: 1px solid rgba(255,255,255,0.06)
Border-bottom: 1px solid rgba(255,255,255,0.06)

Layout: 3 items in horizontal row, separated by 1px dividers at rgba(255,255,255,0.10)
Each item: centered, flex-column

Number: 36px, weight 700, #FFFFFF — "5,000+", "50+", "90-Day"
Label: 14px, weight 400, #666666 — "Active Learners", "Web3 Roles", "Personalized Roadmaps"
Gap between number and label: 4px

Mobile: Stack vertically with 24px gap, no dividers
```

### 4. Problem Section

```
Background: #0A0A0A
Padding: 120px 24px

Overline: "THE PROBLEM" — 12px, #666666, uppercase, centered
Gap: 16px
Headline: "Everyone Wants to Break Into Web3. Almost No One Does." — 48px, weight 700, #FFFFFF, max-width 800px, centered
Gap: 16px
Subheadline: "It's not a lack of motivation. It's a lack of direction." — 18px, #A0A0A0, centered
Gap: 64px

Cards: 3-column grid (CSS Grid), gap 24px, max-width 1000px, centered
Each card:
  Background: #111111
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 12px
  Padding: 32px

  Icon: Lucide icon, 24px, #A0A0A0, margin-bottom 20px
  Title: 20px, weight 600, #FFFFFF, margin-bottom 12px
  Body: 16px, weight 400, #A0A0A0, line-height 1.6

  Card 1: Compass icon → "Too Many Options" → "Thousands of resources, zero structure. You jump between YouTube, Twitter threads, and free courses without knowing what actually matters for your goals."
  Card 2: RotateCcw icon → "Start, Stop, Repeat" → "You've started three courses this year and finished none. Without a clear career target, motivation dies. The 5.5% course completion rate proves it."
  Card 3: FileQuestion icon → "Skills Without Proof" → "Even when you learn something, you can't prove it. No portfolio. No credentials. No way to show employers what you actually know."

Hover: border-color rgba(255,255,255,0.16)
Mobile: Single column stack
```

### 5. Solution Section (How It Works)

```
Background: #0E0E0E
Padding: 120px 24px

Overline: "HOW IT WORKS" — 12px, #666666, uppercase, centered
Gap: 16px
Headline: "From Confused to Hired. Three Steps." — 48px, weight 700, #FFFFFF, centered
Gap: 64px

Steps: Vertical stack, max-width 640px, centered, gap 48px
Each step:
  Layout: flex, align-items start, gap 24px

  Step number: 48px, weight 700, #10B981 (accent green)
  Content: flex-column
    Title: 24px, weight 600, #FFFFFF, margin-bottom 8px
    Description: 16px, weight 400, #A0A0A0

  Step 1: "01" → "Talk to Our AI" → "A 10-minute conversation that maps your existing skills, interests, and goals to the Web3 role you're built for."
  Step 2: "02" → "Get Your Roadmap" → "Receive a personalized 90-day learning plan with daily tasks, curated resources, and clear milestones."
  Step 3: "03" → "Learn, Prove, Get Hired" → "Study with an adaptive AI tutor, build your Skill Passport with verified projects, and get matched to real job opportunities."

Connector: 1px solid rgba(255,255,255,0.06), vertical line from step number to step number (left side, positioned at center of number column)

Mobile: Same layout, step numbers 36px
```

### 6. Product Preview

```
Background: #0A0A0A
Padding: 80px 24px 120px

Layout: Centered
Image container: max-width 960px, centered
Border: 1px solid rgba(255,255,255,0.10)
Border-radius: 12px
Overflow: hidden
Box-shadow: 0 0 80px rgba(16,185,129,0.06) — subtle green glow

Content: Product screenshot or video showing the career discovery interface
Aspect-ratio: 16/9

Caption below (optional): 14px, #666666, centered, margin-top 24px
```

### 7. Roles Carousel

```
Background: #0E0E0E
Padding: 120px 0

Overline: "EXPLORE ROLES" — 12px, #666666, uppercase, centered, padding 0 24px
Gap: 16px
Headline: "50+ Web3 Careers. One Is Yours." — 48px, weight 700, #FFFFFF, centered, padding 0 24px
Gap: 16px
Subheadline: "Browse real career paths — from Community Manager to Smart Contract Developer." — 18px, #A0A0A0, centered, padding 0 24px
Gap: 48px

Carousel: Horizontal scroll, overflow-x auto, scroll-snap-type x mandatory
Padding: 0 24px (left edge starts with container padding)
Gap: 16px between cards
Scrollbar: hidden (webkit-scrollbar display none)

Each card:
  Min-width: 280px
  Scroll-snap-align: start
  Background: #111111
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 12px
  Padding: 28px

  Icon: Lucide icon, 32px, #10B981, margin-bottom 16px
  Role title: 18px, weight 600, #FFFFFF, margin-bottom 8px
  Description: 14px, weight 400, #A0A0A0

  Hover: border-color rgba(255,255,255,0.16)

Fade edges: Left and right gradient overlays (bg-deep → transparent) to indicate scrollability

Sample roles (8 cards):
  1. Shield → "Smart Contract Auditor" → "Find vulnerabilities before hackers do"
  2. Users → "Community Manager" → "Build and lead Web3 communities"
  3. TrendingUp → "DeFi Analyst" → "Analyze protocols and yield strategies"
  4. Palette → "NFT Creator" → "Design digital art and collectibles"
  5. Code → "Solidity Developer" → "Write the smart contracts that power DeFi"
  6. Megaphone → "Web3 Marketer" → "Drive growth for crypto projects"
  7. PenTool → "Web3 UX Designer" → "Design interfaces for decentralized apps"
  8. Database → "Blockchain Data Analyst" → "Turn on-chain data into insights"

Mobile: Same horizontal scroll, cards min-width 260px
```

### 8. Differentiators

```
Background: #0A0A0A
Padding: 120px 24px

Headline: "Not Another Course Platform" — 48px, weight 700, #FFFFFF, centered
Gap: 16px
Subheadline: "Web3School is the only platform that takes you from assessment to employment." — 18px, #A0A0A0, max-width 600px, centered
Gap: 64px

Layout: 3-column grid, gap 24px, max-width 1000px, centered
Each item:
  Text-align: center
  Icon: Lucide icon, 32px, #10B981, margin-bottom 16px
  Title: 20px, weight 600, #FFFFFF, margin-bottom 8px
  Description: 16px, weight 400, #A0A0A0

  1. Sparkles → "AI-Powered, Not One-Size-Fits-All" → "Every roadmap is generated specifically for your skills, goals, and pace."
  2. Award → "Proof, Not Just Participation" → "Your Skill Passport verifies what you can actually do — not just what you watched."
  3. Target → "Career-First, Not Content-First" → "We start with where you want to end up, then work backwards."

Mobile: Single column, centered
```

### 9. Final CTA

```
Background: #0E0E0E
Padding: 120px 24px
Text-align: center

Headline: "Ready to Find Your Web3 Career?" — 48px, weight 700, #FFFFFF, centered
Gap: 16px
Subheadline: "10 minutes. One conversation. A clear path forward." — 18px, #A0A0A0, centered
Gap: 40px

CTA: "Start Discovery — Free" — bg #FFFFFF, color #000, padding 18px 40px, radius 6px, 18px weight 600
Hover: opacity 0.85

Microcopy: "No credit card required" — 14px, #666666, margin-top 16px
```

### 10. Footer

```
Background: #0A0A0A
Border-top: 1px solid rgba(255,255,255,0.06)
Padding: 48px 24px

Layout: flex, justify-content space-between, align-items center, max-width 1200px, centered

Left: "Web3School" — Inter 16px weight 600, #FFFFFF
Center: "© 2026 Web3School" — 14px, #666666
Right: Social icons (Twitter, Discord) — Lucide icons, 20px, #666666, hover #FFFFFF, gap 16px

Mobile: Stack vertically, centered, gap 24px
```

---

## Micro-Interactions Summary

| Element | Interaction | Duration | Easing |
|---|---|---|---|
| Hero load | Staggered fade-up (headline → sub → CTA) | 600ms each, 100ms delay | cubic-bezier(0.16,1,0.3,1) |
| Section scroll | Fade-up on viewport entry | 600ms | cubic-bezier(0.16,1,0.3,1) |
| Primary button hover | Opacity 1 → 0.85 | 200ms | ease |
| Ghost button hover | Border brightens, bg fills | 200ms | ease |
| Card hover | Border brightens | 200ms | ease |
| Nav link hover | Color #A0A0A0 → #FFFFFF | 200ms | ease |
| Carousel | Horizontal momentum scroll | Native | Native |

---

## File Output

The working HTML/CSS implementation is saved separately at `docs/04-landing-page.html`.
