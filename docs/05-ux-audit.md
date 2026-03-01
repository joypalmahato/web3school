# 05 — UX Audit Framework

> Reviewing web3school-lime.vercel.app against kled.ai benchmark
> Evaluating: hierarchy, CTA clarity, whitespace, typography, trust, mobile

---

## Current State Assessment

The current Web3School landing page is content-rich but visually overloaded compared to the kled.ai benchmark. It attempts to communicate everything at once rather than guiding the eye through a deliberate sequence. The structure is sound — the sections exist in a logical order — but the execution lacks the restraint and polish that converts browsers into users.

---

## Evaluation

### 1. Visual Hierarchy

**Current state:** Weak. Multiple elements compete for attention in every section. The hero has a gradient text headline, two CTAs, login text, and a subheadline all fighting for the eye. The problem section uses three stat callouts AND three problem cards — double the content needed. The solution section lists 5 steps (should be 3), then repeats them.

**Kled benchmark:** One focal point per viewport. The eye moves in a single direction: headline → subheadline → CTA. Nothing competes.

**Verdict:** The page has content-hierarchy, not visual-hierarchy. Needs aggressive reduction.

### 2. CTA Clarity

**Current state:** Mixed. "Start Your Discovery — Free" is clear and benefit-oriented, but it competes with "See How It Works" (secondary) AND a "Log in" text link. The CTA also uses rounded-xl buttons (pill shape) that feel more playful than premium.

**3-second test:** A first-time visitor can identify the main action, but it doesn't feel urgent or distinct enough from surrounding elements. The purple gradient button blends into the purple-heavy palette.

**Kled benchmark:** Single primary CTA with maximum contrast (white on dark). No visual competition.

**Verdict:** CTA text is good. CTA styling needs higher contrast — white solid button on dark background, not purple on purple.

### 3. Whitespace

**Current state:** Inconsistent. Some sections have generous padding (py-32) but content within sections is cramped. Cards are tightly packed. The problem section's stat bar sits directly above the problem cards with minimal breathing room. The comparison table is dense.

**Kled benchmark:** Extreme whitespace. 120px+ between sections. Content floats in negative space. Every element has room to breathe.

**Verdict:** Section padding needs to double. Internal component spacing needs 50% more room. Remove the comparison table entirely — it's the densest, least Kled-like element on the page.

### 4. Typography

**Current state:** Three fonts used correctly (Plus Jakarta Sans, Inter, JetBrains Mono) but headline sizes are too small for the "large display" aesthetic. Hero headline appears to be around 40-48px on desktop when it should be 64-72px for the Kled effect. Gradient text effects on headings add visual noise. Line lengths appear uncontrolled — body copy may run too wide.

**Kled benchmark:** Headlines are massive (60-80px), bold, pure white. No gradients. No effects. Just size and weight doing the work.

**Verdict:** Increase H1 to 72px. Remove all gradient text effects. Add max-width constraints on body copy (680px). Let typography size create hierarchy, not color tricks.

### 5. Trust Signals

**Current state:** Stats are present ("48% of graduates feel unprepared", "5.5% completion rate", "87% talent shortage") but they're industry stats, not Web3School stats. They prove the problem exists, not that Web3School solves it. No user count, no testimonials, no logos.

**Kled benchmark:** Minimal but credible — specific numbers, brand logos, or simple social proof.

**Verdict:** Replace industry stats with platform stats: "5,000+ Learners", "50+ Roles", "90-Day Roadmaps". These are specific to Web3School and demonstrate traction. Add them as a proof bar immediately after the hero.

### 6. Mobile Considerations

**Current concerns:**
- Comparison table will be unreadable on mobile (too many columns)
- 5-step solution section is too long — requires excessive scrolling
- Navigation has too many items for mobile header
- Gradient text effects may have contrast issues on smaller screens
- Role cards section (20 roles across 4 categories) is overwhelming on mobile
- Persona section (4 cards) creates a very long scroll

**Kled benchmark:** Mobile-first. Every section works as a single-column stack. Nothing is dense.

**Verdict:** The page has too many sections for mobile. Cut to 8 sections max (currently 10+). Eliminate the comparison table and reduce persona section.

---

## Top 3 Critical Fixes (High Impact — Do First)

### Fix 1: Reduce Content by 40%
**What:** Remove the comparison table section entirely. Reduce the solution from 5 steps to 3. Remove the persona section (move to a blog post). Cut from 10+ sections to 8.

**Why:** The page tries to answer every objection before the user has formed one. Kled's power comes from restraint. Every section the user doesn't see is a section that can't distract from the CTA. The comparison table is the biggest offender — it's dense, hard to scan, and breaks the visual rhythm.

**Impact:** Faster page load, cleaner scroll experience, stronger focus on CTA.

### Fix 2: Redesign Hero with Maximum Contrast CTA
**What:** Increase headline to 72px, remove gradient text, switch primary CTA to solid white button (white bg, black text), remove the login text link from hero, center-align everything with generous spacing.

**Why:** The hero is the single highest-impact element on the page. Currently it's good but not distinctive. A white CTA button on dark background creates the strongest possible contrast — Kled uses this exact pattern. Gradient text reduces readability at display sizes.

**Impact:** Higher click-through rate on primary CTA. Stronger first impression. Feels instantly more premium.

### Fix 3: Add Platform-Specific Social Proof Bar
**What:** Add a horizontal stats bar immediately after the hero: "5,000+ Learners" · "50+ Web3 Roles" · "90-Day Roadmaps". Replace industry problem stats with these platform-specific numbers.

**Why:** Industry stats ("48% of graduates feel unprepared") prove the market exists but don't prove Web3School works. Platform-specific numbers create the impression of traction and trust. Users trust platforms other users already trust.

**Impact:** Immediate credibility boost. Reduces the "is this real?" hesitation.

---

## Top 3 Improvements (Polish Layer)

### Improvement 1: Implement Scroll Fade Animations
**What:** Add subtle fade-up-on-scroll (opacity 0→1, translateY 30px→0) for each section. Stagger hero elements on page load (headline → sub → CTA with 100ms delays).

**Why:** Kled uses smooth, restrained scroll animations that make the page feel alive without being distracting. Currently the Web3School page is static — all content renders immediately, creating a "wall of text" feeling.

### Improvement 2: Add Horizontal Role Carousel
**What:** Replace the 4-category role grid (20 roles) with a single horizontal scroll carousel showing 8 featured roles. Users swipe to explore.

**Why:** 20 roles in a grid is overwhelming. A carousel creates a discovery mechanic — users interact by scrolling horizontally, which feels exploratory (matching the product's discovery theme). Kled uses horizontal scroll for their stories section to great effect.

### Improvement 3: Tonal Section Shifts
**What:** Alternate section backgrounds between `#0A0A0A` and `#0E0E0E` — a barely-visible shift that creates visual rhythm without borders or dividers.

**Why:** Currently sections are separated by padding alone. Subtle background tonal shifts (like Kled uses) create clear section boundaries without adding visual weight. The eye subconsciously registers the shift.

---

## Quick Win (Under 5 Minutes)

### Add Microcopy Under Primary CTA

Add this line directly under the "Start Discovery" button:

> "Free forever. No credit card. 10 minutes to your career match."

**Font:** 14px, `#666666`, centered.

**Why:** This single line eliminates the top 3 conversion objections simultaneously:
1. "Does it cost money?" → Free forever
2. "Will they charge me?" → No credit card
3. "How long will this take?" → 10 minutes

This is the highest-ROI line of copy on the entire page. It takes 30 seconds to add and directly impacts conversion.

---

## Revised Headline

**Current:** "AI-Powered Career Discovery" (generic, feature-focused)

**Revised:** "Stop Guessing. Start Building." (action-oriented, problem-aware)

**Why the current headline is weak:**
- "AI-Powered" is a feature, not a benefit — every product claims AI now
- "Career Discovery" is a category, not a promise
- It doesn't create emotional resonance or urgency
- It could describe 100 different products

**Why the revision works:**
- "Stop Guessing" names the exact pain (directionless learning)
- "Start Building" implies tangible output (not just more learning)
- The Stop/Start structure creates momentum
- 4 words. No wasted space. Works at 72px.
