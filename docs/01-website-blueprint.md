# 01 — Website Blueprint

> Web3School Landing Page — Structure, Flow & Conversion Architecture

---

## Page Structure (Sections in Order)

### 1. Navigation Bar
**Purpose:** Orient the visitor, establish brand, provide escape hatches.
**Layout:** Sticky, near-transparent. Wordmark left, 3 links center, CTA right.
**Links:** How It Works · Roles · Blog
**CTA:** "Start Discovery" — solid, always visible.

### 2. Hero
**Purpose:** Capture attention in 3 seconds. Communicate the core promise. Drive first click.
**Layout:** Centered, typography-dominant. Stacked vertically: headline → subheadline → body → dual CTAs.
**Visual Priority:**
1. Headline (largest element on page — 64-80px)
2. CTA buttons (primary + ghost, side by side)
3. Subheadline (muted, clarifying)
4. Product preview or short loop video below CTAs

### 3. Social Proof Bar
**Purpose:** Reduce skepticism immediately after the hero promise.
**Layout:** Horizontal row, 3 stats separated by subtle dividers.
**Content:** "5,000+ Learners" · "50+ Web3 Roles" · "90-Day Roadmaps"
**Visual Priority:** Numbers large and white, labels small and muted.

### 4. Problem Section
**Purpose:** Make the visitor feel seen. Name their frustration before presenting the solution.
**Layout:** Centered headline + 3-column card grid below.
**Content:**
- "Too many options, zero direction"
- "Start courses, never finish"
- "Skills but no proof"
**Visual Priority:** Section headline > card titles > card descriptions.

### 5. Solution Section (How It Works)
**Purpose:** Show the clear path from confused → skilled → hired.
**Layout:** Centered headline + vertical numbered steps (1-2-3 format, not 5).
**Content:**
1. **Talk to AI** — 10-minute career discovery conversation
2. **Get Your Roadmap** — Personalized 90-day learning plan
3. **Learn, Prove, Get Hired** — AI tutor + Skill Passport + job matching
**Visual Priority:** Step numbers (large) > step titles > step descriptions.

### 6. Product Preview
**Purpose:** Show, don't tell. Let them see the actual interface.
**Layout:** Full-width centered. Single product screenshot or embedded demo with a subtle glow border.
**Visual Priority:** The screenshot itself is the content. Minimal surrounding text.

### 7. Role Discovery Teaser
**Purpose:** Spark curiosity about specific careers. Make it personal.
**Layout:** Horizontal scroll carousel of role cards (like Kled's stories section).
**Content:** 6-8 role cards showing role title + one-line description + icon.
**Visual Priority:** Role titles > icons > descriptions.

### 8. Trust / Differentiation
**Purpose:** Answer "why this over everything else?"
**Layout:** Centered, compact. Short comparison or 3 key differentiators.
**Content:** Not a full table — 3 punchy differentiator statements with icons.
**Visual Priority:** Differentiator headlines > supporting copy.

### 9. Final CTA
**Purpose:** Catch users who scrolled the full page. Last conversion opportunity.
**Layout:** Centered, generous padding. Headline + single CTA button.
**Content:** Restated value prop + "Start Discovery — Free"
**Visual Priority:** CTA button > headline.

### 10. Footer
**Purpose:** Legal, social links, brand reinforcement.
**Layout:** Minimal. Wordmark + social icons + copyright. Single row.

---

## UX Flow: Hero → Conversion

```
Landing → Hero (3s hook)
  ↓
Read headline → Understand promise
  ↓
See CTAs → Option A: Click "Start Discovery" (fast converters)
  ↓ (scrollers continue)
Social Proof Bar → "Others are doing this"
  ↓
Problem Section → "They understand my situation"
  ↓
Solution Section → "There's a clear path"
  ↓
Product Preview → "This looks real and polished"
  ↓
Role Cards → "I can see myself in one of these"
  ↓
Differentiators → "This is different from what I've tried"
  ↓
Final CTA → "Start Discovery" (slow converters)
```

**Two conversion points:** Hero CTA (top) and Final CTA (bottom). The entire page between them is persuasion architecture — each section resolves one objection.

---

## Content Hierarchy Per Section

| Section | Primary (Largest) | Secondary | Tertiary |
|---|---|---|---|
| Hero | Headline | CTA buttons | Subheadline, body |
| Proof Bar | Numbers | Labels | Dividers |
| Problem | Section title | Card titles | Card body text |
| Solution | Step numbers + titles | Step descriptions | Connector lines |
| Product Preview | Screenshot | Caption | — |
| Roles | Role card titles | Icons | Descriptions |
| Differentiators | Statement headlines | Icons | Supporting copy |
| Final CTA | CTA button | Headline | — |

---

## Layout Patterns Per Section

| Section | Pattern | Reason |
|---|---|---|
| Hero | Centered stack | Typography-dominant, no distractions. Kled approach. |
| Proof Bar | Horizontal row | Scannable, efficient use of space. |
| Problem | Centered title + 3-col grid | Cards create visual rhythm, easy to scan. |
| Solution | Centered numbered list | Linear path = linear layout. Simple, clear. |
| Product Preview | Full-width centered | Screenshot needs room to breathe. |
| Roles | Horizontal scroll carousel | Discovery mechanic — swipe to explore. |
| Differentiators | Centered stack or 3-col | Depends on content length. |
| Final CTA | Centered, padded | Maximum focus on the button. |

---

## Key Conversion Triggers

### Social Proof
- Learner count in proof bar
- "Join 5,000+ learners" near CTA

### Urgency (Soft)
- "90-day roadmap" implies a start date
- "Start today" language in CTA

### Trust Signals
- "Free — no credit card" microcopy under primary CTA
- Real product screenshot (not mockup)
- Specific numbers (50+ roles, not "many roles")

### Friction Reduction
- "10 minutes" — time investment is small
- "AI does the work" — low effort for user
- No signup form visible on landing page — CTA goes straight to discovery flow

### Identity
- Role cards let users self-identify ("I could be a DeFi Analyst")
- Persona-aware copy throughout

---

## 3 Hero Headline Directions

### Direction A — Outcome-Led
> **Your Web3 Career in 90 Days**
> AI discovers your path, builds your roadmap, and gets you hired.

### Direction B — Problem-Led
> **Stop Guessing. Start Building.**
> AI maps your skills to the Web3 role you're built for.

### Direction C — Identity-Led
> **Become the Web3 Professional You're Meant to Be**
> From skill assessment to job-ready in 90 days — guided by AI.

---

## Design Principles (Guiding All Sections)

1. **One focal point per section.** If everything is bold, nothing is.
2. **Typography does the heavy lifting.** Minimal decoration, maximum type impact.
3. **Whitespace is content.** Generous padding between sections (120-160px).
4. **Dark tonal shifts.** Sections separated by subtle background color changes, not borders.
5. **Progressive disclosure.** Don't show everything at once. Each scroll reveals one new idea.
