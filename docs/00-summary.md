# Web3School — UI/UX Design System Documentation

> Complete 6-step design pipeline output for Web3School landing page redesign.
> Benchmark: kled.ai | Aesthetic: Minimal + Premium dark-first

---

## Documents

### [01 — Website Blueprint](./01-website-blueprint.md)
Full page structure, UX flow from hero to CTA, content hierarchy per section, layout patterns, conversion triggers, and 3 hero headline directions.

### [02 — Conversion Copy](./02-conversion-copy.md)
Hero section copy in 3 variations (benefit-led, problem-led, identity-led) with headlines, subheadlines, body copy, CTA options, and microcopy. Includes recommendation to lead with Variation B.

### [03 — Design System Brief](./03-design-system.md)
Complete visual identity: color palette, typography scale, spacing rhythm, border radius, shadow philosophy, button/card/nav component specs, motion rules, and layout grid system.

### [04 — Full Page Build Spec](./04-page-build-spec.md)
Pixel-level specification for every section of the landing page with exact sizes, colors, spacing, and interaction details.

### [04 — Landing Page HTML/CSS](./04-landing-page.html)
Working single-file implementation of the landing page spec with responsive design, scroll animations, and all 10 sections. Open in browser to preview.

### [05 — UX Audit](./05-ux-audit.md)
Review of the current live site against the kled.ai benchmark. Includes 3 critical fixes, 3 polish improvements, 1 quick win, and a revised headline recommendation.

### [06 — Headline Split Tests](./06-headline-split-tests.md)
5 headline variations for A/B testing (ultra-short, outcome, pain, identity, contrarian) with matching CTAs, rationale, predicted performance, and a phased testing plan.

---

## Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Primary accent | `#10B981` (green) | Web3-native, signals growth, avoids cliché blockchain blue |
| Hero headline | "Stop Guessing. Start Building." | Problem-aware, 4 words, maximum punch at display size |
| CTA style | White solid on dark | Highest possible contrast — Kled pattern |
| Section count | 8 (down from 10+) | Restraint converts. Every section must earn its place. |
| Solution steps | 3 (down from 5) | Three is cognitively digestible. Five creates overwhelm. |
| Role display | Horizontal carousel | Discovery mechanic > static grid. Matches Kled's approach. |
| Comparison table | Removed | Too dense, breaks visual rhythm, not Kled-aligned |

---

## Implementation Priority

1. **Hero redesign** — highest-impact single change (copy + visual)
2. **Content reduction** — cut sections, simplify steps, remove table
3. **Social proof bar** — add platform-specific stats after hero
4. **Typography + spacing** — increase H1 to 72px, double section padding
5. **Scroll animations** — fade-up on scroll, staggered hero load
6. **Role carousel** — replace grid with horizontal scroll
7. **A/B testing** — deploy headline variations via PostHog
