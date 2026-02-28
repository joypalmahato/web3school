# ══════════════════════════════════════════════════════════════
# WEB3SCHOOL — CLAUDE CODE EXECUTION GUIDE
# The Missing Layer: How to Actually Build This with AI Agents
# ══════════════════════════════════════════════════════════════

> **WHAT THIS IS**: This guide tells Claude Code (and any AI agent system) EXACTLY how to execute the Master Blueprint. Read the Master Blueprint first (WEB3SCHOOL_MASTER_BLUEPRINT.md), then use THIS file as your execution protocol.

> **CRITICAL RULE**: Before EVERY chunk, re-read the "PROJECT DNA" section of the Master Blueprint. This prevents context drift. Copy-paste the PROJECT DNA into your agent's context window if it starts losing track.

---

# ═══════════════════════════════════════════════════════════
# SECTION 1: CLAUDE CODE CONFIGURATION
# ═══════════════════════════════════════════════════════════

## 1.1 Initial Setup Command

Paste this FIRST into Claude Code before anything else:

```
You are building Web3School — an AI-powered Web3 career discovery and learning platform ("Duolingo for Web3 careers"). You have access to a Master Blueprint document that contains:
- Complete tech stack (Next.js 14, TypeScript, Tailwind, Supabase, Claude API)
- Full database schema (15+ tables with RLS policies)
- Design system (colors, fonts, component patterns)
- AI system prompts (career discovery + tutor)
- Project file structure (60+ files)
- 11 sequential build chunks

Your job is to execute these chunks one at a time. NEVER skip ahead. ALWAYS verify each chunk before moving on. If you lose context about what you're building, the one-liner is: "Go from 'I don't know what to learn' to 'I have a marketable skill and I can prove it' — guided by AI every step of the way."

Tech decisions are FINAL. Do not substitute libraries, change the database, or modify the design system unless explicitly told to.
```

## 1.2 Claude Code Settings (claude-code.config / CLAUDE.md)

Create a `CLAUDE.md` file in the project root. Claude Code reads this automatically:

```markdown
# CLAUDE.md — Project Rules for Web3School

## IDENTITY
This is Web3School: AI-powered Web3 career discovery platform.
One-liner: "Duolingo for Web3 careers."

## RULES
- TypeScript strict mode everywhere. No `any` types.
- All components must be React Server Components by default. Use 'use client' only when needed.
- All API routes validate input with Zod schemas.
- All database queries use the Supabase typed client.
- All pages must have loading.tsx and error.tsx siblings.
- All forms use React Hook Form + Zod.
- All animations use Framer Motion.
- Never use inline styles. Always Tailwind.
- Mobile-first: design for 375px, then md: and lg: breakpoints.
- Dark theme ONLY. No light mode toggle.
- Commit after every chunk with message format: "chunk-N: description"

## DESIGN TOKENS
Primary: #6C63FF | Cyan: #00D4FF | BG: #0A0A1A | Card: #0F0F23
Heading font: Plus Jakarta Sans | Body: Inter | Code: JetBrains Mono

## DATABASE
Supabase PostgreSQL. RLS on all user tables. Service role key for API routes only.

## AI
Claude API via Vercel AI SDK. Model: claude-sonnet-4-5-20250929. Stream all responses.

## DEPENDENCIES (locked versions — do not upgrade without reason)
next@14 | react@18 | @supabase/supabase-js@2 | @supabase/ssr@0 | zustand@4
framer-motion@11 | ai@3 | @anthropic-ai/sdk@0 | zod@3 | react-hook-form@7
recharts@2 | lucide-react@0 | resend@3 | posthog-js@1

## FILE NAMING
- Components: PascalCase (Hero.tsx, DiscoveryChat.tsx)
- Utilities: camelCase (formatDate.ts, cn.ts)
- API routes: route.ts inside folder structure
- Types: types.ts or in the same file if small
- Constants: SCREAMING_SNAKE_CASE for values

## TESTING
- Vitest for unit tests
- Playwright for E2E
- Test files co-located: Component.test.tsx next to Component.tsx
```

## 1.3 MCP Servers to Connect

If your Claude Code setup supports MCP servers, connect these:

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server"],
      "env": {
        "SUPABASE_URL": "${NEXT_PUBLIC_SUPABASE_URL}",
        "SUPABASE_SERVICE_ROLE_KEY": "${SUPABASE_SERVICE_ROLE_KEY}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

**What these do:**
- **Supabase MCP**: Claude Code can directly query/modify your database, run migrations, manage auth — without you copy-pasting SQL.
- **Filesystem MCP**: Claude Code can read/write files across the project efficiently.
- **GitHub MCP**: Claude Code can commit, push, create PRs directly.

## 1.4 Recommended Extensions/Tools

Tell Claude Code to install these globally before starting:
```bash
# Ensure Node 20+ and npm 10+
node --version && npm --version

# Global tools
npm install -g supabase typescript vercel

# Login to services
supabase login
vercel login
```

---

# ═══════════════════════════════════════════════════════════
# SECTION 2: AGENT SWARM ARCHITECTURE
# ═══════════════════════════════════════════════════════════

## 2.1 Why Agent Swarm?

Building Web3School is ~60+ files, ~15,000+ lines of code. A single agent session will hit context limits. The solution: split work across specialized agents that each handle a domain.

## 2.2 Agent Definitions

### 🏗️ AGENT: ARCHITECT (Orchestrator)
```
ROLE: Project setup, infrastructure, deployment, coordination
CHUNKS: 1, 3, 11
SKILLS: Next.js config, Supabase setup, Vercel deployment, auth, middleware
CONTEXT FILE: Read CLAUDE.md + Master Blueprint PART 0 + database schema
ALWAYS RUNS FIRST: Sets up the project skeleton that all other agents need
```

### 🎨 AGENT: DESIGNER (Frontend)
```
ROLE: All visual components, landing page, app UI, responsive design
CHUNKS: 2, 5, 7, 10
SKILLS: React, Tailwind CSS, Framer Motion, shadcn/ui, responsive design
CONTEXT FILE: Read CLAUDE.md + Master Blueprint design system + landing page copy
CRITICAL: Must follow design tokens exactly. No creative deviations on colors/fonts.
```

### 🧠 AGENT: AI-ENGINEER (Backend + AI)
```
ROLE: AI discovery engine, tutor, roadmap generation, all API routes
CHUNKS: 4, 6
SKILLS: Claude API, Vercel AI SDK, prompt engineering, streaming, Supabase queries
CONTEXT FILE: Read CLAUDE.md + Master Blueprint AI prompts + database schema + role data
CRITICAL: AI system prompts must be copied EXACTLY from the blueprint. Do not improvise.
```

### ✨ AGENT: POLISHER (QA + UX)
```
ROLE: Error handling, loading states, accessibility, SEO, performance, notifications
CHUNKS: 8, 9
SKILLS: React error boundaries, meta tags, ARIA, Lighthouse optimization, email templates
CONTEXT FILE: Read CLAUDE.md + all existing components (needs project to be mostly built)
RUNS LAST: Needs chunks 1-7 complete before starting
```

## 2.3 Agent Execution Protocol

```
┌──────────────────────────────────────────────────────┐
│                  EXECUTION TIMELINE                   │
├──────────┬──────────┬──────────┬────────────────────┤
│ PHASE A  │ PHASE B  │ PHASE C  │ PHASE D            │
│          │          │          │                     │
│ 🏗️ Ch.1  │ 🎨 Ch.2  │ 🧠 Ch.4  │ 🧠 Ch.6            │
│          │ 🏗️ Ch.3  │ 🎨 Ch.5  │ 🎨 Ch.7            │
│          │          │          │                     │
├──────────┴──────────┼──────────┼────────────────────┤
│ PHASE E             │ PHASE F  │ PHASE G            │
│                     │          │                     │
│ 🎨 Ch.10            │ ✨ Ch.9  │ 🏗️ Ch.11           │
│ ✨ Ch.8             │          │                     │
└─────────────────────┴──────────┴────────────────────┘
```

### Between-Agent Communication Protocol:

After EACH chunk, the completing agent writes to `CHANGELOG.md`:

```markdown
## Chunk N: [Name] — [Agent] — [Date]
### Files Created
- path/to/file.tsx (purpose)
### Files Modified
- path/to/existing.tsx (what changed)
### Database Changes
- New table: table_name
- New RLS policy: policy_name
### API Routes Added
- POST /api/route — description
### Environment Variables Needed
- NEW_VAR_NAME — what it's for
### Dependencies Added
- package-name@version
### Known Issues
- Issue description (if any)
### Status: ✅ VERIFIED
```

Before starting a chunk, the next agent:
1. `git pull` (get latest code)
2. Read `CHANGELOG.md` for all previous chunks
3. Read `CLAUDE.md` for project rules
4. Read the specific chunk instructions from Master Blueprint
5. Begin building

## 2.4 Single-Agent Execution (If Not Using Swarm)

If you're running one Claude Code instance, execute chunks sequentially. Between chunks:

```bash
# After each chunk
git add -A
git commit -m "chunk-N: description"
# Paste this context anchor at the start of the next chunk session:
```

**Context Anchor (paste between sessions):**
```
CONTEXT: I am building Web3School — AI-powered Web3 career discovery platform.
TECH: Next.js 14, TypeScript, Tailwind, Supabase, Claude API, Vercel AI SDK.
DESIGN: Dark theme. Navy #0A0A1A, Purple #6C63FF, Cyan #00D4FF.
DATABASE: Supabase PostgreSQL with 15 tables. RLS enabled.
COMPLETED: [list chunks completed so far]
CURRENT: Chunk [N] — [Name]
Read CLAUDE.md in project root for all rules.
Read CHANGELOG.md for what's been built so far.
Now execute Chunk [N] from the Master Blueprint.
```

---

# ═══════════════════════════════════════════════════════════
# SECTION 3: ANTI-CONTEXT-LOSS SYSTEM
# ═══════════════════════════════════════════════════════════

## 3.1 The Problem

AI agents lose context in 3 ways:
1. **Session reset** — new chat window forgets everything
2. **Context overflow** — too many files pushed out earlier instructions
3. **Style drift** — agent starts making different design/code decisions

## 3.2 The Solution: Context Anchors

Every chunk in the Master Blueprint has a `CONTEXT REMINDER` at the top. But that's not enough for long sessions. Use these additional techniques:

### Technique 1: CLAUDE.md File (Persistent Rules)
Already described above. Claude Code reads this automatically every session.

### Technique 2: Component Header Comments
Every React component should start with a comment block:

```tsx
/**
 * @component DiscoveryChat
 * @part-of Web3School — AI Career Discovery
 * @design Dark theme, navy bg, purple accents
 * @data Saves to discovery_sessions table via /api/discovery
 * @flow User → 10-min AI conversation → Results page → Role match
 */
```

### Technique 3: Shared Types File (Single Source of Truth)
Create `lib/types/index.ts` early. All agents reference it:

```typescript
// lib/types/index.ts — SINGLE SOURCE OF TRUTH FOR ALL TYPES
// This file is generated from the Supabase schema.
// Do not modify manually. Run `supabase gen types typescript` to regenerate.
// All components, API routes, and hooks must import types from here.

export type UserType = 'seeker' | 'expert' | 'employer';
export type TaskType = 'lesson' | 'exercise' | 'project' | 'quiz' | 'reflection';
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'skipped';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type RoleCategory = 'technical' | 'semi-technical' | 'non-technical' | 'creative';
export type DemandLevel = 'low' | 'medium' | 'high' | 'very_high';

export interface Profile {
  id: string;
  full_name: string | null;
  email: string;
  avatar_url: string | null;
  user_type: UserType;
  onboarding_completed: boolean;
  discovery_completed: boolean;
  current_role_id: string | null;
  current_phase: number;
  streak_count: number;
  longest_streak: number;
  last_active_at: string | null;
  xp_total: number;
  level: number;
  timezone: string;
  preferred_language: string;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: string;
  name: string;
  slug: string;
  category: RoleCategory;
  description: string;
  short_description: string;
  icon: string | null;
  salary_range_min: number | null;
  salary_range_max: number | null;
  demand_level: DemandLevel | null;
  competition_level: DemandLevel | null;
  key_skills: string[];
  personality_traits: string[];
  day_in_life: string | null;
  growth_path: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface DiscoverySession {
  id: string;
  user_id: string;
  status: 'in_progress' | 'completed' | 'abandoned';
  conversation_history: ConversationMessage[];
  extracted_traits: TraitScores;
  matched_roles: RoleMatch[];
  primary_role_id: string | null;
  confidence_score: number | null;
  completed_at: string | null;
  created_at: string;
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface TraitScores {
  technical_aptitude: number;
  creative_drive: number;
  social_orientation: number;
  analytical_thinking: number;
  risk_tolerance: number;
  communication_strength: number;
}

export interface RoleMatch {
  role_slug: string;
  match_score: number;
  reasoning: string;
}

export interface Roadmap {
  id: string;
  user_id: string;
  role_id: string;
  title: string;
  description: string | null;
  total_weeks: number;
  current_week: number;
  status: 'active' | 'paused' | 'completed' | 'abandoned';
  milestones: WeekMilestone[];
  created_at: string;
  updated_at: string;
}

export interface WeekMilestone {
  week: number;
  theme: string;
  objectives: string[];
  tasks: DailyTaskSummary[];
}

export interface DailyTaskSummary {
  day: number;
  title: string;
  type: TaskType;
  estimated_minutes: number;
}

export interface DailyTask {
  id: string;
  roadmap_id: string;
  user_id: string;
  week_number: number;
  day_number: number;
  title: string;
  description: string | null;
  task_type: TaskType;
  content: TaskContent;
  estimated_minutes: number;
  difficulty: Difficulty;
  status: TaskStatus;
  xp_reward: number;
  completed_at: string | null;
  created_at: string;
}

export interface TaskContent {
  lesson_text?: string;
  exercise_prompt?: string;
  quiz_questions?: QuizQuestion[];
  project_brief?: string;
  resources?: Resource[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'tutorial' | 'tool';
}

export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  user_type: string | null;
  referral_source: string | null;
  referral_code: string;
  referred_by: string | null;
  waitlist_position: number;
  created_at: string;
}

export interface ResultCard {
  id: string;
  user_id: string | null;
  session_id: string | null;
  role_name: string;
  role_category: string;
  top_traits: string[];
  match_percentage: number;
  card_image_url: string | null;
  share_slug: string;
  view_count: number;
  created_at: string;
}

// XP System
export const XP_REWARDS = {
  TASK_COMPLETED: 10,
  STREAK_MAINTAINED: 5,
  QUIZ_PASSED: 20,
  PROJECT_SUBMITTED: 50,
  WEEK_COMPLETED: 100,
  MILESTONE_7_DAY: 50,
  MILESTONE_30_DAY: 200,
  MILESTONE_60_DAY: 500,
  MILESTONE_90_DAY: 1000,
} as const;

export const LEVEL_THRESHOLDS = [
  0,     // Level 1
  100,   // Level 2
  250,   // Level 3
  500,   // Level 4
  1000,  // Level 5
  1750,  // Level 6
  2750,  // Level 7
  4000,  // Level 8
  5500,  // Level 9
  7500,  // Level 10
] as const;

export function getLevelFromXP(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function getXPForNextLevel(xp: number): { current: number; needed: number; progress: number } {
  const level = getLevelFromXP(xp);
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return {
    current: xp - currentThreshold,
    needed: nextThreshold - currentThreshold,
    progress: (xp - currentThreshold) / (nextThreshold - currentThreshold),
  };
}
```

### Technique 4: Checkpoint Verification Script

Create this script and run it after every chunk:

```bash
#!/bin/bash
# verify-chunk.sh — Run after each chunk to verify build state

echo "══════════════════════════════════════════"
echo "WEB3SCHOOL — Chunk Verification"
echo "══════════════════════════════════════════"

# 1. Build check
echo "🔨 Running build..."
npm run build 2>&1 | tail -5

# 2. Type check
echo "📝 Running type check..."
npx tsc --noEmit 2>&1 | tail -10

# 3. Lint check
echo "🔍 Running lint..."
npm run lint 2>&1 | tail -5

# 4. File count
echo "📁 File count:"
find app components lib -name "*.tsx" -o -name "*.ts" | wc -l

# 5. Route check
echo "🛣️ API Routes:"
find app/api -name "route.ts" | sort

# 6. Component check
echo "🧩 Components:"
find components -name "*.tsx" | sort

# 7. Environment check
echo "🔑 Environment variables:"
if [ -f .env.local ]; then
  grep -c "=" .env.local
  echo "variables configured"
else
  echo "⚠️  .env.local MISSING"
fi

echo "══════════════════════════════════════════"
echo "Verification complete. Fix any errors before next chunk."
```

---

# ═══════════════════════════════════════════════════════════
# SECTION 4: CHUNK-BY-CHUNK AGENT COMMANDS
# ═══════════════════════════════════════════════════════════

These are the EXACT commands to paste into Claude Code for each chunk.
They include context anchors, specific instructions, and verification steps.

## CHUNK 1 — Paste This Into Claude Code:

```
TASK: Execute Chunk 1 — Project Scaffolding & Infrastructure

CONTEXT: I am starting a new project called Web3School. It's an AI-powered Web3 career discovery platform. Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, shadcn/ui, Supabase, Claude API, Vercel AI SDK, Framer Motion, Zustand, React Hook Form + Zod, Resend, PostHog, Recharts.

DO THE FOLLOWING IN ORDER:

1. Create the Next.js project:
npx create-next-app@latest web3school --typescript --tailwind --eslint --app --src=false --import-alias "@/*"
cd web3school

2. Install ALL dependencies (copy exact list from Master Blueprint)

3. Initialize shadcn/ui and add ALL components listed in the blueprint

4. Create CLAUDE.md in project root with the rules I specified

5. Configure tailwind.config.ts with these EXACT custom values:
- Colors: navy-deep (#0A0A1A), navy-mid (#0F0F23), navy-light (#1A1A2E), purple-primary (#6C63FF), purple-light (#8B83FF), purple-dark (#5A52E0), cyan-accent (#00D4FF), green-success (#10B981), amber-warning (#F59E0B), red-error (#EF4444), text-primary (#F0F0F8), text-secondary (#AAAACC), text-muted (#666688), border (#2A2A4A)
- Fonts: Plus Jakarta Sans (heading), Inter (body), JetBrains Mono (mono)
- Add custom animations: fadeIn, slideUp, slideDown, pulse-glow

6. Update globals.css with CSS custom properties matching the design system

7. Create the complete project file structure (all folders, even if files are empty placeholders)

8. Set up Supabase clients:
- lib/supabase/client.ts (browser client using createBrowserClient)
- lib/supabase/server.ts (server client using createServerClient with cookies)
- lib/supabase/middleware.ts (middleware helper)

9. Set up middleware.ts protecting these routes: /discover, /results, /roadmap, /learn, /progress, /passport, /settings, /notifications

10. Create Zustand stores:
- lib/stores/user-store.ts (user profile, loading state)
- lib/stores/app-store.ts (sidebar state, active page, notifications)

11. Create utility files:
- lib/utils/cn.ts (clsx + twMerge)
- lib/utils/format.ts (date formatting, number formatting, relative time)
- lib/utils/constants.ts (app name, URLs, limits)

12. Create shared components:
- components/shared/Logo.tsx (SVG logo or text logo)
- components/shared/ThemeProvider.tsx (dark mode provider)
- components/shared/AnimatedSection.tsx (Framer Motion whileInView wrapper)
- components/shared/GlowCard.tsx (glassmorphism card with glow effect)
- components/shared/GradientText.tsx (gradient text wrapper)
- components/shared/LoadingSkeleton.tsx (skeleton loading component)

13. Create lib/types/index.ts with ALL TypeScript interfaces from the blueprint

14. Create .env.example with all required variables

15. Create the database migration file: supabase/migrations/001_initial_schema.sql (copy ENTIRE schema from blueprint)

16. Create seed data files: data/roles.ts (all 8 roles), data/skills.ts

17. Create verify-chunk.sh script

VERIFY: Run `npm run dev` — it should start without errors. Run `npm run build` — it should build successfully. All custom Tailwind classes should work.

COMMIT: git add -A && git commit -m "chunk-1: project scaffolding and infrastructure"
```

## CHUNK 2 — Paste This Into Claude Code:

```
TASK: Execute Chunk 2 — Complete Landing Page

CONTEXT: Web3School project is scaffolded (Chunk 1 done). Now build the ENTIRE landing page — this is the first thing users see. It must convert visitors to waitlist signups. Dark theme, premium feel, Web3-native but not "crypto degen."

DESIGN RULES:
- Background: #0A0A1A
- Cards: bg-[#0F0F23] with border-[#2A2A4A], rounded-2xl
- Primary button: bg-[#6C63FF] hover:bg-[#8B83FF] text-white rounded-xl
- Text: headings #F0F0F8, body #AAAACC, muted #666688
- All sections: Framer Motion fadeIn on scroll
- Mobile-first: stack everything vertically on mobile

BUILD THESE 11 FILES IN ORDER:

1. components/landing/Navbar.tsx
- Sticky, transparent → solid on scroll (use useScroll from framer-motion)
- Logo left, nav links center (How It Works, Roles, Mission), CTA right
- Mobile: Sheet component from shadcn for slide-out menu

2. components/landing/Hero.tsx
- Headline: "Don't Know What to Learn? Let AI Figure It Out for You."
- Subheadline: "Web3School is your AI career counselor, tutor, and accountability partner. Go from confused to skilled to hired — in 90 days."
- Two CTAs: "Join the Waitlist" (primary), "See How It Works" (secondary/outline)
- Background: CSS animated gradient mesh (no heavy library)
- Add subtle grid pattern overlay with low opacity

3. components/landing/Problem.tsx
- Title: "The World Has More Learning Resources Than Ever. People Are More Confused Than Ever."
- 3 glassmorphism cards with Lucide icons
- Add real stats below cards: "48% feel unprepared" | "5.5% completion" | "87% talent shortage"
- Bold closing: "No platform today solves the complete journey from confused → skilled → employed. Until now."

4. components/landing/Solution.tsx
- 5-step horizontal timeline (desktop), vertical (mobile)
- Steps: Discover → Plan → Learn → Prove → Get Hired
- Each step has icon, title, description
- Animate steps sequentially on scroll

5. components/landing/WhoIsThisFor.tsx
- 4 persona cards: Airdrop Hunter, Career Changer, Curious Outsider, Halfway Learner
- Each card has title, description, subtle icon

6. components/landing/Comparison.tsx
- Side-by-side: "Others" vs "Web3School" — 6 rows
- Bold: "ChatGPT gives you information. Web3School gives you transformation."

7. components/landing/RolesPreview.tsx
- Grid of 8 role cards from data/roles.ts
- Each: name, category tag (colored), short description
- Horizontal scroll on mobile

8. components/landing/HowItWorks.tsx
- 3 steps: Talk to AI → Get Your Path → Start Learning
- CTA: "Join the Waitlist"

9. components/landing/Mission.tsx
- Large quote text
- 3 stat cards: "76+ Roles" | "8 at Launch" | "90-Day Roadmaps"

10. components/landing/WaitlistForm.tsx
- Form: name, email, user_type (select), referral_source (optional select)
- React Hook Form + Zod validation
- Submit → POST /api/waitlist
- Success state: position number, share buttons (Twitter intent, copy link)
- Generate unique referral code

11. components/landing/Footer.tsx
- Logo, social links, tagline, copyright

ALSO BUILD:
- app/api/waitlist/route.ts — validates with Zod, inserts to Supabase, sends email via Resend, returns position + referral code
- app/(marketing)/layout.tsx — wraps Navbar + Footer
- app/(marketing)/page.tsx — assembles all sections with section IDs for nav links
- Add smooth scroll CSS behavior
- Add proper <head> meta tags and OG image placeholder

VERIFY: 
- All sections render on desktop (1440px) and mobile (375px)
- Waitlist form submits (even if Supabase isn't connected, the API route should be functional)
- Scroll animations trigger on scroll
- All CTAs scroll to correct sections
- Lighthouse score check

COMMIT: git add -A && git commit -m "chunk-2: complete landing page with waitlist"
```

## CHUNKS 3-11 — Same Pattern

Follow the exact same format from the Master Blueprint. Each chunk paste includes:
1. TASK statement
2. CONTEXT anchor (what's been built, what's next)
3. DESIGN RULES reminder (always include color codes)
4. BUILD instructions (numbered, specific files)
5. VERIFY checklist
6. COMMIT command

---

# ═══════════════════════════════════════════════════════════
# SECTION 5: TROUBLESHOOTING & RECOVERY
# ═══════════════════════════════════════════════════════════

## 5.1 If Claude Code Loses Context Mid-Chunk

Paste this recovery prompt:
```
RECOVERY: I'm building Web3School. You were working on Chunk [N].
Here's what was already done in this chunk: [list completed files]
Here's what still needs to be built: [list remaining files]
Design: dark theme, #0A0A1A bg, #6C63FF purple accent.
Continue from where you left off. Read CLAUDE.md for project rules.
```

## 5.2 If Build Breaks

```
The build is failing. Run these diagnostics:
1. npm run build 2>&1 | head -50
2. npx tsc --noEmit 2>&1 | head -30
3. Check if all imports resolve
4. Check if Supabase types are generated: npx supabase gen types typescript --local > lib/supabase/types.ts
Fix the errors one by one, starting with type errors.
```

## 5.3 If Design Drifts

```
DESIGN RESET: You are drifting from the design system. Here are the exact values:
- Page bg: bg-[#0A0A1A]
- Card bg: bg-[#0F0F23] border border-[#2A2A4A] rounded-2xl
- Button primary: bg-[#6C63FF] hover:bg-[#8B83FF] text-white rounded-xl px-6 py-3
- Button secondary: border border-[#6C63FF] text-[#6C63FF] rounded-xl px-6 py-3
- Heading text: text-[#F0F0F8] font-['Plus_Jakarta_Sans']
- Body text: text-[#AAAACC] font-['Inter']
- Muted text: text-[#666688]
Apply these to ALL components going forward. Fix any components that deviate.
```

## 5.4 If AI Responses Feel Wrong

The AI discovery and tutor prompts are the HEART of the product. If they feel off:
```
PROMPT FIX: The AI responses don't match the intended personality.
DISCOVERY AI should be: warm, encouraging, slightly casual, short responses (2-4 sentences), asks ONE question at a time, never condescending, like a smart friend who knows Web3.
TUTOR AI should be: patient, adaptive, celebrates small wins, teaches in chunks, uses analogies, Socratic method.
Re-read the system prompts in lib/ai/prompts/ and adjust.
```

---

# ═══════════════════════════════════════════════════════════
# SECTION 6: POST-BUILD CHECKLIST
# ═══════════════════════════════════════════════════════════

After all 11 chunks are complete, verify EVERYTHING:

## Functional Checklist
- [ ] Landing page loads, all 10 sections visible
- [ ] Waitlist form submits, confirmation email sends
- [ ] User can sign up with email/password
- [ ] User can sign up with Google/GitHub OAuth
- [ ] New user redirected to /discover
- [ ] AI career discovery conversation works (10 exchanges)
- [ ] Results page shows matched role + alternatives
- [ ] Shareable result card generates
- [ ] Public share page loads without auth
- [ ] "Choose This Path" creates roadmap
- [ ] Roadmap shows 12-week timeline
- [ ] Daily learning page shows today's tasks
- [ ] Individual lesson page renders content
- [ ] AI tutor chat works within lessons
- [ ] Marking task complete awards XP
- [ ] Streak counter updates correctly
- [ ] Progress dashboard shows all stats
- [ ] Skill passport page displays data
- [ ] Public passport page loads without auth
- [ ] Settings page saves preferences
- [ ] Notifications page shows nudges
- [ ] Roles index page shows 8 roles
- [ ] Individual role pages load with all sections
- [ ] All pages have loading states
- [ ] All pages have error states
- [ ] Mobile responsive on all pages

## Performance Checklist
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse SEO: 90+
- [ ] First Contentful Paint: < 1.5s
- [ ] Total Bundle Size: < 500KB (first load)

## Security Checklist
- [ ] All API routes check auth (except public routes)
- [ ] RLS enabled on all user tables
- [ ] Service role key only used server-side
- [ ] No env vars exposed to client (except NEXT_PUBLIC_*)
- [ ] Input validation on all forms and API routes
- [ ] CORS properly configured

---

# ═══════════════════════════════════════════════════════════
# SECTION 7: QUICK REFERENCE CARD
# ═══════════════════════════════════════════════════════════

Print this and keep visible:

```
WEB3SCHOOL QUICK REFERENCE
═══════════════════════════
Product: AI career discovery → personalized learning → Skill Passport → job matching
User: "The Lost Learner" — has willpower but no direction
Stack: Next.js 14 | TypeScript | Tailwind | Supabase | Claude API
Design: Dark (#0A0A1A) | Purple (#6C63FF) | Cyan (#00D4FF)

11 CHUNKS:
1. Scaffold    │ 2. Landing     │ 3. Auth
4. Discovery   │ 5. App Layout  │ 6. Roadmap+Learn
7. Progress    │ 8. Passport    │ 9. Polish
10. Roles      │ 11. Deploy

AGENTS:
🏗️ Architect: 1,3,11  │  🎨 Designer: 2,5,7,10
🧠 AI-Engineer: 4,6   │  ✨ Polisher: 8,9

ANTI-CONTEXT-LOSS:
→ CLAUDE.md in root (auto-read)
→ Component headers with @part-of tags
→ Shared types in lib/types/index.ts
→ CHANGELOG.md between agents
→ Context anchor paste between sessions
→ verify-chunk.sh after every chunk
```

---

**END OF EXECUTION GUIDE**

*This file + the Master Blueprint = everything Claude Code needs to build Web3School from zero to production.*
