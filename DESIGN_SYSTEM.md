# Web3School — Design System Brief v2.0

> Art Direction: Minimal + Premium dark-first aesthetic.
> Reference benchmark: kled.ai — calm authority, modern restraint, every element earns its place.

---

## A. Visual Identity Direction

### A1. Color Palette

The palette is built on deep navy foundations with two controlled accent frequencies — purple for brand identity and cyan for interactive highlights. No competing hues. Every color has a job.

| Token                | Hex         | Usage                                                    |
|----------------------|-------------|----------------------------------------------------------|
| `--bg-deep`          | `#0A0A1A`   | Page background — near-black with blue undertone          |
| `--bg-mid`           | `#0F0F23`   | Cards, modals, elevated surfaces                         |
| `--bg-light`         | `#1A1A2E`   | Hover states, active backgrounds, input fields            |
| `--bg-subtle`        | `#12122B`   | Alternate section tint (tonal shift between sections)     |
| `--border`           | `#2A2A4A`   | Default borders — visible but quiet                       |
| `--border-hover`     | `#3A3A6A`   | Border on hover — slightly more presence                  |
| `--purple-primary`   | `#6C63FF`   | Brand primary — CTAs, active states, links                |
| `--purple-light`     | `#8B83FF`   | Hover state for primary, lighter accents                  |
| `--purple-dark`      | `#5A52E0`   | Pressed/active state for primary                          |
| `--purple-glow`      | `#6C63FF1A` | 10% purple — glow halos, subtle bg tints                  |
| `--cyan-accent`      | `#00D4FF`   | Secondary accent — highlights, progress, data viz         |
| `--cyan-glow`        | `#00D4FF1A` | 10% cyan — glow halos, badge backgrounds                  |
| `--text-primary`     | `#F0F0F8`   | Headings, primary body text — warm off-white              |
| `--text-secondary`   | `#AAAACC`   | Subheadings, descriptions — readable but recessed         |
| `--text-muted`       | `#666688`   | Timestamps, labels, tertiary info                         |
| `--text-disabled`    | `#44445A`   | Disabled text, placeholder                                |
| `--success`          | `#10B981`   | Completion, correct answers, positive states              |
| `--warning`          | `#F59E0B`   | Caution, pending, in-progress                             |
| `--error`            | `#EF4444`   | Errors, destructive actions                               |

**Why this palette:** Deep navy (not pure black) reduces eye strain for long learning sessions. Purple signals Web3-native identity (Ethereum ecosystem color language). Cyan provides energetic contrast without overwhelming — used sparingly for progress and achievement moments. The two-accent system prevents visual chaos.

### A2. Typography

Three-tier type system: display impact, body clarity, code precision.

| Role     | Font               | Source       | Why                                                       |
|----------|--------------------|--------------|-----------------------------------------------------------|
| Display  | Plus Jakarta Sans  | Google Fonts | Geometric, confident, modern. Heavier than Inter at large sizes. Web3-appropriate without being "techy." |
| Body     | Inter              | Google Fonts | Industry standard for UI. Optimized for screens, excellent legibility at 14-16px. |
| Code     | JetBrains Mono     | Google Fonts | Best-in-class monospace for code blocks, wallet addresses, technical content. |

**Type Scale — Desktop:**

| Level  | Size   | Weight   | Line Height | Letter Spacing | Font             |
|--------|--------|----------|-------------|----------------|------------------|
| H1     | 56px   | 800      | 1.1         | -0.03em        | Plus Jakarta Sans |
| H2     | 40px   | 700      | 1.15        | -0.02em        | Plus Jakarta Sans |
| H3     | 28px   | 700      | 1.2         | -0.01em        | Plus Jakarta Sans |
| H4     | 22px   | 600      | 1.3         | -0.01em        | Plus Jakarta Sans |
| Body L | 18px   | 400      | 1.6         | 0              | Inter             |
| Body   | 16px   | 400      | 1.6         | 0              | Inter             |
| Body S | 14px   | 400      | 1.5         | 0.01em         | Inter             |
| Caption| 12px   | 500      | 1.4         | 0.02em         | Inter             |
| Code   | 14px   | 400      | 1.6         | 0              | JetBrains Mono    |

**Type Scale — Mobile (375px base):**

| Level  | Size   | Weight   |
|--------|--------|----------|
| H1     | 36px   | 800      |
| H2     | 28px   | 700      |
| H3     | 22px   | 700      |
| H4     | 18px   | 600      |
| Body   | 16px   | 400      |
| Body S | 14px   | 400      |

**Why these sizes:** H1 at 56px creates the bold, statement-making hero text seen on kled.ai. Tight letter-spacing on headings adds density and confidence. Body at 16px with 1.6 line-height prioritizes readability for learning content — users will be reading paragraphs, not just scanning.

### A3. Spacing Rhythm

Base unit: **4px**. All spacing is a multiple of 4.

| Token     | Value  | Usage                                           |
|-----------|--------|-------------------------------------------------|
| `space-1` | 4px    | Icon-to-label gaps, tight padding                |
| `space-2` | 8px    | Inline element gaps, small padding               |
| `space-3` | 12px   | Button padding (vertical), input padding         |
| `space-4` | 16px   | Card internal padding (tight), list gaps         |
| `space-5` | 20px   | Component separation within sections             |
| `space-6` | 24px   | Card internal padding (standard)                 |
| `space-8` | 32px   | Section header to content gap                    |
| `space-10`| 40px   | Between grouped components                       |
| `space-16`| 64px   | Section top/bottom padding (mobile)              |
| `space-20`| 80px   | Section top/bottom padding (tablet)              |
| `space-24`| 96px   | Section top/bottom padding (desktop)             |
| `space-32`| 128px  | Hero section vertical padding                    |

**Principle:** When in doubt, add more space. Whitespace is the primary luxury signal. Sections should breathe. Content should never feel cramped. Match kled.ai's generous 80-100px section spacing on desktop.

### A4. Border Radius

Philosophy: **Soft-modern** — consistently rounded, never sharp, never pill-shaped (except badges/tags).

| Element          | Radius   | Why                                                |
|------------------|----------|----------------------------------------------------|
| Buttons          | 10px     | Soft enough to feel modern, structured enough for UI |
| Cards            | 16px     | Generous rounding signals premium. Matches kled.ai. |
| Modals/Dialogs   | 20px     | Slightly more to feel elevated and focused          |
| Input fields     | 10px     | Matches buttons for visual consistency              |
| Badges/Tags      | 9999px   | Full pill shape — small elements benefit from max rounding |
| Avatars          | 50%      | Circular                                            |
| Tooltips         | 8px      | Subtle, doesn't compete with cards                  |

### A5. Shadow & Depth

Philosophy: **Near-flat with selective glow**. No drop shadows on cards. Depth comes from background color layering (deep > mid > light). Glow is reserved for interactive/important elements.

| Effect             | Value                                         | Usage                                |
|--------------------|-----------------------------------------------|--------------------------------------|
| No shadow          | `none`                                        | Default for all cards and surfaces   |
| Border depth       | `1px solid var(--border)`                     | Primary depth indicator              |
| Subtle glow        | `0 0 20px var(--purple-glow)`                 | Hover on primary cards               |
| Active glow        | `0 0 30px var(--purple-glow)`                 | Selected/active states               |
| Cyan glow          | `0 0 20px var(--cyan-glow)`                   | Achievement moments, progress milestones |
| Glass surface      | `background: rgba(15,15,35,0.6); backdrop-filter: blur(12px); border: 1px solid var(--border)` | Nav bar, floating elements |

**Why no drop shadows:** On dark backgrounds, traditional shadows are invisible or create muddy edges. Color-layered depth (bg-deep behind bg-mid cards) is cleaner and more intentional. Glow effects feel native to Web3 aesthetic.

---

## B. Component Style Guide

### B1. Buttons

Three tiers. Primary drives action. Secondary provides alternatives. Ghost disappears until needed.

**Primary Button:**
```
Background:     var(--purple-primary)
Text:           #FFFFFF
Font:           Inter 600, 15px
Padding:        12px 24px
Border-radius:  10px
Border:         none
Hover:          var(--purple-light), translateY(-1px), shadow 0 0 20px var(--purple-glow)
Active:         var(--purple-dark), translateY(0)
Disabled:       opacity 0.4, cursor not-allowed
Transition:     all 200ms ease
```

**Secondary Button:**
```
Background:     transparent
Text:           var(--text-primary)
Font:           Inter 600, 15px
Padding:        12px 24px
Border-radius:  10px
Border:         1px solid var(--border)
Hover:          border-color var(--border-hover), bg var(--bg-light)
Active:         bg var(--bg-light), border-color var(--purple-primary)
Transition:     all 200ms ease
```

**Ghost Button:**
```
Background:     transparent
Text:           var(--text-secondary)
Font:           Inter 500, 15px
Padding:        8px 16px
Border-radius:  10px
Border:         none
Hover:          text var(--text-primary), bg var(--bg-light)
Active:         bg var(--bg-light)
Transition:     all 150ms ease
```

**Sizing:**

| Size  | Padding      | Font Size | Min Height |
|-------|-------------|-----------|------------|
| sm    | 8px 16px    | 13px      | 36px       |
| md    | 12px 24px   | 15px      | 44px       |
| lg    | 16px 32px   | 16px      | 52px       |

### B2. Cards

Cards are the primary content container. Used for: Skill Passport entries, Role Discovery results, Roadmap milestones, Daily Tasks, Lesson modules.

**Default Card:**
```
Background:     var(--bg-mid)
Border:         1px solid var(--border)
Border-radius:  16px
Padding:        24px
Shadow:         none
Hover:          border-color var(--border-hover)
Transition:     border-color 200ms ease
```

**Interactive Card (clickable):**
```
Background:     var(--bg-mid)
Border:         1px solid var(--border)
Border-radius:  16px
Padding:        24px
Shadow:         none
Cursor:         pointer
Hover:          border-color var(--purple-primary)/30, translateY(-2px), shadow 0 0 24px var(--purple-glow)
Active:         translateY(0)
Transition:     all 250ms ease
```

**Featured/Primary Card:**
```
Background:     var(--bg-mid)
Border:         1px solid var(--purple-primary)/50
Border-radius:  16px
Padding:        24px
Shadow:         0 0 30px var(--purple-glow)
```

**Card Content Spacing:**
```
Header (icon + title):       gap 12px, margin-bottom 16px
Body text:                   margin-bottom 16px
Footer (actions/metadata):   margin-top auto (push to bottom via flex)
Between stacked cards:       gap 12px
```

**Card Grid Layouts:**
```
Mobile (375px):    1 column, full width
Tablet (768px):    2 columns, 16px gap
Desktop (1024px+): 3 columns, 16px gap
Dashboard grid:    Auto-fit, minmax(320px, 1fr)
```

### B3. Navigation Bar

Minimal. Near-transparent. Few links. Clean CTA. Matches kled.ai's restrained nav approach.

```
Position:           fixed top, full width
Height:             64px
Background:         rgba(10, 10, 26, 0.7)
Backdrop-filter:    blur(12px)
Border-bottom:      1px solid var(--border)
Padding:            0 24px (mobile), 0 40px (desktop)
Z-index:            50
Max-content-width:  1200px, centered
```

**Nav Structure:**
```
[Logo]                              [Nav Links]              [CTA Button]

Left:   Logo (text or mark, no tagline)
Center: 3-4 links max (Plus Jakarta Sans, 14px, 500 weight, text-secondary)
Right:  Single primary button (sm size) + avatar (when authenticated)
```

**Link States:**
```
Default:    var(--text-secondary)
Hover:      var(--text-primary), no underline
Active:     var(--text-primary), subtle bottom indicator (2px, purple-primary)
Transition: color 150ms ease
```

**Mobile Nav:**
```
Height:             56px
Backdrop-filter:    blur(12px)
Links:              Hidden — use hamburger menu or bottom tab bar
Bottom tab bar:     Fixed bottom, 5 icons max, 64px height, same glass bg
```

### B4. Icon Style

Style: **Outline (stroke-based)**, 1.5px stroke weight.
Library: Lucide React (already in project).

```
Default size:       20px (within buttons/nav), 24px (standalone)
Default color:      var(--text-secondary)
Interactive hover:  var(--text-primary)
Active/selected:    var(--purple-primary)
Decorative large:   32-40px, var(--text-muted) or var(--purple-primary)/40
```

**Why outline:** Outline icons feel lighter, more modern, and more premium than filled icons. They don't compete with text content. Matches the minimal aesthetic — filled icons are visually heavy for a dark theme.

---

## C. Motion & Interaction Rules

### C1. Core Timing Tokens

| Token              | Duration | Easing                    | Usage                           |
|--------------------|----------|---------------------------|---------------------------------|
| `--duration-fast`  | 150ms    | ease                      | Color changes, opacity toggles  |
| `--duration-base`  | 200ms    | ease                      | Button states, border changes   |
| `--duration-smooth`| 300ms    | ease-out                  | Card hovers, layout shifts      |
| `--duration-enter` | 500ms    | cubic-bezier(0,0,0.2,1)  | Page/section entrance           |
| `--duration-exit`  | 200ms    | ease-in                   | Element removal                 |

**Principle:** Motion should be felt, not watched. If you notice the animation, it's too slow or too dramatic. Target: kled.ai's invisible smoothness.

### C2. Hover States

| Element       | Effect                                                     |
|---------------|-------------------------------------------------------------|
| Buttons       | Background color shift + translateY(-1px) + glow            |
| Cards         | Border color brighten + translateY(-2px) + glow             |
| Links         | Color shift to text-primary, no underline                   |
| Icons         | Color shift to text-primary or purple-primary               |
| Nav links     | Color shift only — no movement, no underline                |
| Inputs        | Border color to purple-primary/50                           |

**What never animates on hover:** Font size, font weight, padding, margin, border-radius, layout properties. Only visual properties (color, shadow, transform) animate.

### C3. Page Load / Enter Animations

All entrance animations use Framer Motion. No CSS-only entrance animations.

```tsx
// Standard section entrance
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}

// Stagger children (cards in a grid)
staggerChildren: 0.08  // 80ms between each child

// Hero text entrance
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
```

**Rules:**
- Fade-in + subtle upward slide (y: 20px). Never slide from left/right.
- Never exceed 30px of travel distance.
- Never exceed 600ms duration.
- Stagger delays: 80ms between siblings, 150ms between groups.
- Hero section animates first, supporting content follows.

### C4. Scroll Behavior

```
Scroll reveal:      Framer Motion whileInView, triggerOnce
Threshold:          0.15 (trigger when 15% visible)
Animation:          Same as page load (opacity 0 > 1, y 20 > 0)
Duration:           400-500ms

Horizontal scroll:  Native overflow-x-auto with snap
                    scroll-snap-type: x mandatory
                    scroll-snap-align: start (on children)
                    Hide scrollbar: scrollbar-width: none
                    Show peek of next card (8-16px visible)

Smooth scroll:      scroll-behavior: smooth on html
                    Anchor links use smooth scrolling
```

**What we don't do:**
- No parallax effects
- No scroll-jacking
- No sticky scroll sections
- No horizontal scroll on full page sections
- No bounce/spring physics (too playful for this aesthetic)

---

## D. Layout System

### D1. Grid Structure

```
Container max-width:    1200px
Container padding:      24px (mobile), 40px (tablet), 0 (desktop, centered)
Column system:          CSS Grid, not flexbox grids
Gutter:                 16px (mobile), 24px (desktop)
```

**Column Configurations:**

| Layout       | Columns | Usage                                      |
|-------------|---------|---------------------------------------------|
| Full-width  | 1       | Hero, CTA sections, text blocks             |
| Split       | 2       | Feature + visual, text + illustration       |
| Card grid   | 3       | Role cards, skill cards, lesson cards        |
| Dense grid  | 4       | Small stat cards, icon grids                |
| Dashboard   | Auto-fit minmax(300px, 1fr) | Adaptive dashboard content |

### D2. Hero Layout

Centered. Typography dominant. Minimal supporting elements.

```
Structure:
    [Top padding: 128px desktop / 80px mobile]
    [Eyebrow — 12px, uppercase, letter-spacing 0.1em, text-secondary or cyan]
    [gap: 16px]
    [H1 — 56px/36px, 800 weight, max-width 720px, centered]
    [gap: 16px]
    [Subtitle — 18px/16px, 400 weight, text-secondary, max-width 560px, centered]
    [gap: 32px]
    [CTA cluster — 1-2 buttons, centered]
    [gap: 64px]
    [Optional: product preview, screenshot, or embedded element]
    [Bottom padding: 96px desktop / 64px mobile]

Text alignment: center
Max heading width: 720px (prevents overly long lines)
Max subtitle width: 560px (tighter for readability)
```

**Why centered:** Centered heroes feel more authoritative and minimal than left-aligned alternatives. Matches kled.ai. For a discovery platform, the centered layout says: "this is about you, the learner."

### D3. Section Alternation

Dark-on-dark with tonal shifts. No jarring color changes between sections.

```
Section A:  bg var(--bg-deep)     #0A0A1A
Section B:  bg var(--bg-subtle)   #12122B   (barely perceptible shift)
Section C:  bg var(--bg-deep)     #0A0A1A
Section D:  bg var(--bg-subtle)   #12122B

Each section:
    Padding:        96px 0 (desktop) / 64px 0 (mobile)
    Content:        max-width 1200px, centered
    Border:         No visible borders between sections
    Transition:     The bg shift is enough to signal "new context"
```

**Accent sections (rare, for high-impact moments):**
```
Background:     linear-gradient(135deg, var(--purple-primary)/5, var(--cyan-accent)/5)
Border-top:     1px solid var(--border)
Border-bottom:  1px solid var(--border)
Usage:          CTA sections, testimonial highlights, pricing
```

### D4. Whitespace Principles

1. **Section padding is non-negotiable.** Minimum 64px vertical on mobile, 96px on desktop.
2. **Content never touches edges.** Minimum 24px horizontal padding on mobile.
3. **Heading-to-content gap is generous.** 32px minimum after section headings.
4. **Cards breathe internally.** 24px padding minimum inside cards.
5. **Between sections > within sections > within components.** Spacing hierarchy must be maintained.
6. **If it feels spacious enough, add 20% more.** The target audience is used to polished Web3 products. Cramped = cheap.

---

## E. Semantic Color Coding (Role Categories)

Used across Skill Passport, Role Discovery, and Roadmap components.

| Category        | Color          | Background (10%)    | Border (20%)        |
|-----------------|----------------|---------------------|---------------------|
| Technical       | `#00D4FF` cyan | `#00D4FF1A`         | `#00D4FF33`         |
| Semi-technical  | `#6C63FF` purple| `#6C63FF1A`        | `#6C63FF33`         |
| Non-technical   | `#10B981` green| `#10B9811A`         | `#10B98133`         |
| Creative        | `#F59E0B` amber| `#F59E0B1A`         | `#F59E0B33`         |

---

## F. Responsive Breakpoints

| Name     | Width     | Target                              |
|----------|-----------|--------------------------------------|
| base     | 0-639px   | Mobile phones (375px design target)  |
| sm       | 640px     | Large phones, landscape              |
| md       | 768px     | Tablets, small laptops               |
| lg       | 1024px    | Laptops, desktops                    |
| xl       | 1280px    | Large desktops                       |

Design mobile-first. Every component starts at 375px and scales up.

---

## G. Do / Don't Quick Reference

| DO                                        | DON'T                                      |
|-------------------------------------------|--------------------------------------------|
| Use whitespace as a design element        | Cram content to "fill" space               |
| Let typography carry the message          | Add decorative elements for their own sake |
| Use glow effects sparingly for emphasis   | Apply glow to everything                   |
| Keep nav to 3-4 items max                 | Build mega-menus or dropdowns              |
| Use tonal background shifts for sections  | Use colored section backgrounds            |
| Animate with subtle fade + y-translate    | Use bounces, springs, or rotations         |
| Use outline icons consistently            | Mix filled and outline icons               |
| Design for one clear action per screen    | Present multiple competing CTAs            |
| Let content determine layout width        | Force everything to full-width             |
| Use 2 accent colors max (purple + cyan)   | Introduce additional accent colors          |

---

*This design system is the single source of truth for all Web3School UI decisions. When in doubt: remove, don't add. Simplify, don't decorate. Breathe, don't compress.*
