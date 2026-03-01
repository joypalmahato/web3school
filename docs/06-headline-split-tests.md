# 06 — Headline Split Testing

> 5 variations of the hero headline + matching CTA button text
> Context: Web3School — AI career discovery for aspiring Web3 professionals
> Goal: Drive clicks to "Start Discovery" and begin the AI career assessment

---

## Control (Current Baseline)

**Headline:** Your Web3 Career Starts Here
**CTA:** Get Started Free

**Notes:** Generic. "Starts Here" is used by thousands of sites. No specificity, no emotional trigger, no outcome. Serves as the baseline to beat.

---

## Variation 1 — Ultra-Short + Punchy

**Headline:**
### Stop Guessing. Start Building.

**CTA:** Start Discovery

**Why it works:**
- 4 words total. Maximum punch at 72px display size.
- "Stop/Start" creates immediate momentum and tension.
- "Guessing" names the exact emotional state of the target audience.
- "Building" implies tangible output — not just learning, but creating.
- No jargon. Works for complete beginners and career switchers alike.

**Predicted performance:** High CTR. Problem-awareness copy outperforms benefit copy in cold traffic because it creates recognition ("that's me").

---

## Variation 2 — Outcome-Focused

**Headline:**
### Your Web3 Career in 90 Days

**CTA:** Get My Roadmap

**Why it works:**
- Specific timeframe (90 days) makes the promise concrete and testable.
- "Your" personalizes the outcome — it's not generic career advice.
- Implies a structured path exists (roadmap thinking).
- "90 Days" creates soft urgency — a start date implies a timeline.
- CTA "Get My Roadmap" is specific to the product's core deliverable.

**Predicted performance:** Strong for audiences already considering a career switch. The specificity of "90 Days" filters for high-intent visitors who want a plan, not just information.

---

## Variation 3 — Pain-Focused

**Headline:**
### Lost in Web3? AI Finds Your Path.

**CTA:** Find My Career

**Why it works:**
- "Lost" directly names the feeling the audience won't admit publicly.
- Question format creates an involuntary mental response ("yes, that's me").
- "AI Finds" positions the product as the solution in the same breath.
- "Your Path" is personal and singular — not "a path" but "your path."
- Short enough for display size but long enough to be complete.

**Predicted performance:** Effective for the "confused but motivated" segment (the largest audience). Pain-aware copy creates strong emotional hooks. Risk: "Lost" could feel slightly negative — monitor bounce rate.

---

## Variation 4 — Identity-Focused

**Headline:**
### Become Web3's Next Hire

**CTA:** Start My Transformation

**Why it works:**
- "Become" triggers identity-level thinking (not "learn" but "become").
- "Web3's Next Hire" is specific and aspirational — they see themselves in the outcome.
- Implies scarcity and momentum — "next" suggests a pipeline of successful hires.
- No mention of AI or tools — focuses entirely on who the user becomes.
- CTA "Start My Transformation" elevates the action beyond a simple assessment.

**Predicted performance:** Strong for retargeting and warm audiences who already know what Web3 is. May underperform on cold traffic where "Web3's Next Hire" could feel aspirational rather than actionable.

---

## Variation 5 — Curiosity / Contrarian

**Headline:**
### You Don't Need Another Course

**CTA:** See What You Need

**Why it works:**
- Directly challenges the assumption visitors arrive with ("I need to take a course").
- Creates cognitive dissonance — they came looking for learning, and you're telling them to stop.
- Contrarian positioning differentiates immediately from every other EdTech landing page.
- "Another" implies they've already tried and failed — names past behavior without judgment.
- CTA "See What You Need" creates curiosity gap — what DO I need?

**Predicted performance:** Highest potential for viral sharing and social amplification (contrarian hooks perform well on Twitter/X). Risk: Some visitors may bounce if the headline feels dismissive. Needs strong subheadline support: "You need a career path. AI builds yours in 10 minutes."

---

## Testing Matrix

| Variation | Style | Headline | CTA | Test Priority |
|---|---|---|---|---|
| Control | Baseline | Your Web3 Career Starts Here | Get Started Free | — |
| V1 | Ultra-short | Stop Guessing. Start Building. | Start Discovery | **Test First** |
| V2 | Outcome | Your Web3 Career in 90 Days | Get My Roadmap | Test Second |
| V3 | Pain | Lost in Web3? AI Finds Your Path. | Find My Career | Test Third |
| V4 | Identity | Become Web3's Next Hire | Start My Transformation | Test Fourth |
| V5 | Contrarian | You Don't Need Another Course | See What You Need | Test Fifth |

---

## Recommended Testing Plan

**Phase 1:** Control vs V1 (Stop Guessing. Start Building.)
This is the highest-confidence challenger. Problem-aware, ultra-short, action-oriented. If it beats control, it becomes the new baseline.

**Phase 2:** V1 winner vs V2 (Your Web3 Career in 90 Days)
Tests whether specificity (90 days) outperforms emotional hooks (Stop Guessing). Different mechanisms — worth isolating.

**Phase 3:** Phase 2 winner vs V5 (You Don't Need Another Course)
The contrarian angle is the biggest swing. If it works, it dramatically changes positioning. If it fails, you've confirmed the audience prefers direct benefit/pain framing.

**Metric:** Primary = CTA click-through rate. Secondary = scroll depth (do they read more or bounce?). Run each test for minimum 1,000 unique visitors or 7 days, whichever comes first.

**Tools:** PostHog (already in stack per CLAUDE.md) for A/B testing and funnel analysis.

---

## Subheadline Pairings

For completeness, here's the recommended subheadline for each variation:

| Variation | Subheadline |
|---|---|
| V1 | You don't need another course. You need a career path that fits your skills. |
| V2 | AI maps your skills to the perfect Web3 role and builds your personalized roadmap. |
| V3 | Web3School's AI assesses your skills and matches you to the role you're built for. |
| V4 | From skill assessment to job-ready in 90 days — guided by AI every step. |
| V5 | You need a career path. AI builds yours in 10 minutes. |
