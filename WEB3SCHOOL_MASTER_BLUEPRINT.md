# WEB3SCHOOL — MASTER BUILD BLUEPRINT
## The Complete AI-Powered Web3 Career Discovery & Learning Platform

> **PURPOSE OF THIS DOCUMENT**: This is the single source of truth for building Web3School from zero to production. It is designed to be fed to Claude Code (or any AI coding agent) in sequential chunks. Each chunk is self-contained with enough context to build without losing track of the bigger picture. Read the FULL document before starting any chunk. Reference back to this document constantly.

> **HOW TO USE**: Feed this entire document to Claude Code first as context. Then execute chunk by chunk. Each chunk has a CONTEXT REMINDER at the top so the AI never forgets what it's building. After completing each chunk, run the verification checklist before moving to the next.

---

# ═══════════════════════════════════════════════════════════
# PART 0: PROJECT DNA — NEVER FORGET THIS
# ═══════════════════════════════════════════════════════════

## What Is Web3School?

Web3School is an AI-powered career discovery and skill-building platform. Think "Duolingo for Web3 careers." It solves the #1 problem in education today: people have willpower but no direction.

**One-liner**: "Go from 'I don't know what to learn' to 'I have a marketable skill and I can prove it' — guided by AI every step of the way."

**The 5-step user journey (this is the CORE of the product)**:
1. **DISCOVER** → AI conversation identifies your ideal Web3 career path
2. **PLAN** → Get a personalized 90-day roadmap (week by week, day by day)
3. **LEARN** → AI tutor teaches you, adapts to your pace and style
4. **PROVE** → Build real projects, get a verifiable Skill Passport
5. **GET HIRED** → Get matched to real Web3 jobs, gigs, bounties

**Target User (The "Lost Learner")**:
- Age 18-35, global, unemployed/underemployed or stuck in dead-end job
- High motivation but paralyzed by too many options
- Has started 5 courses and finished none
- Doesn't know WHAT to learn, not just HOW to learn
- May or may not be technical — many paths are non-technical

**Vision**: "Build a future where every person learns with ease and thrives with confidence in the age of AI"

**What We Are NOT**:
- NOT a course library (not competing on content volume)
- NOT a community platform (use existing Discord/Telegram)
- NOT a job board (curated AI matching only)
- NOT a trading/crypto education platform (employable skills only)
- NOT a university or bootcamp (self-paced, AI-guided)
- NOT a token project disguised as EdTech

---

## Tech Stack (Final Decisions — Do Not Deviate)

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | **Next.js 14+ (App Router)** | SSR, API routes, Vercel deployment |
| Language | **TypeScript** (strict mode) | Type safety across entire codebase |
| Styling | **Tailwind CSS 4** | Utility-first, dark theme, responsive |
| UI Components | **shadcn/ui** | Consistent, accessible, customizable |
| Animations | **Framer Motion** | Scroll animations, micro-interactions |
| State Management | **Zustand** | Lightweight, no boilerplate |
| Forms | **React Hook Form + Zod** | Validation, type-safe forms |
| Database | **Supabase (PostgreSQL)** | Auth, DB, realtime, storage, edge functions |
| Auth | **Supabase Auth** | Email/password + Google + GitHub OAuth |
| AI Layer | **Anthropic Claude API** (claude-sonnet-4-5-20250929) | Career discovery, tutoring, assessments |
| AI Orchestration | **Vercel AI SDK** | Streaming, tool use, structured output |
| Email | **Resend** | Transactional emails, waitlist confirmation |
| Payments | **Stripe** (Phase 3) | Subscriptions, employer billing |
| Analytics | **PostHog** | Product analytics, feature flags, session replay |
| Hosting | **Vercel** | Edge deployment, serverless functions |
| Icons | **Lucide React** | Consistent icon set |
| Charts | **Recharts** | Progress dashboards, analytics |
| Rich Text | **Tiptap** (if needed for content) | AI-generated lesson rendering |
| Testing | **Vitest + Playwright** | Unit + E2E tests |

---

## Design System (Apply Everywhere)

### Colors
```
--navy-deep: #0A0A1A        (page backgrounds)
--navy-mid: #0F0F23          (card backgrounds)
--navy-light: #1A1A2E        (elevated surfaces)
--purple-primary: #6C63FF    (primary buttons, accents, links)
--purple-light: #8B83FF      (hover states)
--purple-dark: #5A52E0       (active states)
--cyan-accent: #00D4FF       (secondary accent, highlights)
--green-success: #10B981     (success states, completed)
--amber-warning: #F59E0B     (warnings, streaks)
--red-error: #EF4444         (errors, danger)
--text-primary: #F0F0F8      (headings, important text)
--text-secondary: #AAAACC    (body text)
--text-muted: #666688        (captions, metadata)
--border: #2A2A4A            (borders, dividers)
```

### Typography
```
--font-heading: 'Plus Jakarta Sans', sans-serif  (headings, buttons)
--font-body: 'Inter', sans-serif                  (body text, inputs)
--font-mono: 'JetBrains Mono', monospace          (code blocks)
```

### Component Style Rules
- Cards: `bg-navy-mid border border-border rounded-2xl p-6` with subtle `backdrop-blur-sm`
- Buttons Primary: `bg-purple-primary hover:bg-purple-light text-white rounded-xl px-6 py-3 font-semibold transition-all`
- Buttons Secondary: `border border-purple-primary text-purple-primary hover:bg-purple-primary/10 rounded-xl px-6 py-3`
- Inputs: `bg-navy-deep border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-purple-primary focus:ring-1 focus:ring-purple-primary`
- Glassmorphism cards: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl`
- All interactive elements: `transition-all duration-200`
- Hover on cards: `hover:border-purple-primary/50 hover:shadow-lg hover:shadow-purple-primary/10`
- Mobile-first: Design for 375px first, then scale up

### Animation Rules
- Page sections: Fade-in on scroll using Framer Motion `whileInView`
- Cards: Subtle lift on hover `hover:translate-y-[-2px]`
- Page transitions: Fade between routes
- Loading states: Skeleton screens, never spinners
- Micro-interactions: Button press scale `active:scale-[0.98]`

---

## Database Schema (Supabase PostgreSQL)

```sql
-- ============================================================
-- CORE TABLES
-- ============================================================

-- Users (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  user_type TEXT DEFAULT 'seeker' CHECK (user_type IN ('seeker', 'expert', 'employer')),
  onboarding_completed BOOLEAN DEFAULT false,
  discovery_completed BOOLEAN DEFAULT false,
  current_role_id UUID REFERENCES roles(id),
  current_phase INTEGER DEFAULT 0,
  streak_count INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_active_at TIMESTAMPTZ,
  xp_total INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  timezone TEXT DEFAULT 'UTC',
  preferred_language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Waitlist (Pre-launch)
CREATE TABLE public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  user_type TEXT, -- 'in_web3_no_skills', 'want_to_enter', 'laid_off', 'curious', 'other'
  referral_source TEXT, -- 'twitter', 'discord', 'telegram', 'friend', 'other'
  referral_code TEXT, -- unique code for viral sharing
  referred_by TEXT, -- referral code of who referred them
  waitlist_position INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Roles (76+ career profiles)
CREATE TABLE public.roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('technical', 'semi-technical', 'non-technical', 'creative')),
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  icon TEXT, -- Lucide icon name
  salary_range_min INTEGER,
  salary_range_max INTEGER,
  demand_level TEXT CHECK (demand_level IN ('low', 'medium', 'high', 'very_high')),
  competition_level TEXT CHECK (competition_level IN ('low', 'medium', 'high', 'very_high')),
  key_skills JSONB DEFAULT '[]', -- array of skill names
  personality_traits JSONB DEFAULT '[]', -- ideal personality traits
  day_in_life TEXT, -- description of typical day
  growth_path TEXT, -- career progression description
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Skills
CREATE TABLE public.skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT, -- 'technical', 'soft', 'domain', 'tool'
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Role-Skill mapping
CREATE TABLE public.role_skills (
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  importance TEXT CHECK (importance IN ('essential', 'important', 'nice_to_have')),
  PRIMARY KEY (role_id, skill_id)
);

-- Discovery Sessions (AI career conversation)
CREATE TABLE public.discovery_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'abandoned')),
  conversation_history JSONB DEFAULT '[]', -- array of {role, content, timestamp}
  extracted_traits JSONB DEFAULT '{}', -- personality/skill assessment results
  matched_roles JSONB DEFAULT '[]', -- top 3 matched roles with scores
  primary_role_id UUID REFERENCES roles(id),
  confidence_score FLOAT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Roadmaps (90-day personalized learning plan)
CREATE TABLE public.roadmaps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id),
  title TEXT NOT NULL,
  description TEXT,
  total_weeks INTEGER DEFAULT 12,
  current_week INTEGER DEFAULT 1,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed', 'abandoned')),
  milestones JSONB DEFAULT '[]', -- structured week-by-week plan
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily Tasks / Lessons
CREATE TABLE public.daily_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  roadmap_id UUID REFERENCES roadmaps(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  day_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  task_type TEXT CHECK (task_type IN ('lesson', 'exercise', 'project', 'quiz', 'reflection')),
  content JSONB DEFAULT '{}', -- AI-generated lesson content
  estimated_minutes INTEGER DEFAULT 15,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'skipped')),
  xp_reward INTEGER DEFAULT 10,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI Tutor Conversations
CREATE TABLE public.tutor_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  task_id UUID REFERENCES daily_tasks(id),
  conversation JSONB DEFAULT '[]',
  tokens_used INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Progress / XP Log
CREATE TABLE public.xp_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  action TEXT NOT NULL, -- 'task_completed', 'streak_maintained', 'quiz_passed', 'project_submitted'
  xp_amount INTEGER NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Streak History
CREATE TABLE public.streak_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  tasks_completed INTEGER DEFAULT 0,
  minutes_learned INTEGER DEFAULT 0,
  streak_maintained BOOLEAN DEFAULT false,
  UNIQUE(user_id, date)
);

-- Skill Passport (Phase 2)
CREATE TABLE public.skill_passports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id),
  skills_verified JSONB DEFAULT '[]', -- array of {skill_id, level, verified_at, evidence_url}
  projects_completed JSONB DEFAULT '[]', -- array of {title, description, url, submitted_at}
  total_score FLOAT DEFAULT 0,
  is_public BOOLEAN DEFAULT true,
  public_slug TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Notifications / Nudges
CREATE TABLE public.nudges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('streak_reminder', 'comeback', 'celebration', 'milestone', 'tip', 'challenge')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  channel TEXT CHECK (channel IN ('in_app', 'email', 'push')),
  is_read BOOLEAN DEFAULT false,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Shareable Result Cards
CREATE TABLE public.result_cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  session_id UUID REFERENCES discovery_sessions(id),
  role_name TEXT NOT NULL,
  role_category TEXT NOT NULL,
  top_traits JSONB DEFAULT '[]',
  match_percentage INTEGER,
  card_image_url TEXT,
  share_slug TEXT UNIQUE NOT NULL,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE discovery_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE tutor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE xp_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE streak_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_passports ENABLE ROW LEVEL SECURITY;
ALTER TABLE nudges ENABLE ROW LEVEL SECURITY;
ALTER TABLE result_cards ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own data
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view own discovery" ON discovery_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own roadmaps" ON roadmaps FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own tasks" ON daily_tasks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own tutor" ON tutor_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own xp" ON xp_log FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own streaks" ON streak_history FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own passport" ON skill_passports FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Anyone can view public passports" ON skill_passports FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view own nudges" ON nudges FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Anyone can view result cards" ON result_cards FOR SELECT USING (true);
CREATE POLICY "Users can create own cards" ON result_cards FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Waitlist is public insert, admin read
CREATE POLICY "Anyone can join waitlist" ON waitlist FOR INSERT WITH CHECK (true);
-- Roles are public read
CREATE POLICY "Anyone can view roles" ON roles FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view skills" ON skills FOR SELECT USING (true);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_daily_tasks_user_date ON daily_tasks(user_id, week_number, day_number);
CREATE INDEX idx_streak_history_user_date ON streak_history(user_id, date);
CREATE INDEX idx_xp_log_user ON xp_log(user_id, created_at);
CREATE INDEX idx_nudges_user_unread ON nudges(user_id, is_read);
CREATE INDEX idx_result_cards_slug ON result_cards(share_slug);
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER roadmaps_updated_at BEFORE UPDATE ON roadmaps FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER skill_passports_updated_at BEFORE UPDATE ON skill_passports FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Auto-assign waitlist position
CREATE OR REPLACE FUNCTION assign_waitlist_position()
RETURNS TRIGGER AS $$
BEGIN
  NEW.waitlist_position = (SELECT COALESCE(MAX(waitlist_position), 0) + 1 FROM waitlist);
  NEW.referral_code = LOWER(SUBSTRING(MD5(NEW.email || NOW()::TEXT) FROM 1 FOR 8));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER waitlist_position BEFORE INSERT ON waitlist FOR EACH ROW EXECUTE FUNCTION assign_waitlist_position();
```

---

## Project Structure

```
web3school/
├── .env.local                    # Environment variables (NEVER commit)
├── .env.example                  # Template for env vars
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── middleware.ts                  # Auth middleware
│
├── app/
│   ├── layout.tsx                # Root layout (fonts, providers, analytics)
│   ├── page.tsx                  # Landing page (/)
│   ├── globals.css               # Tailwind + custom CSS vars
│   │
│   ├── (marketing)/              # Public pages (no auth required)
│   │   ├── layout.tsx            # Marketing layout (navbar + footer)
│   │   ├── page.tsx              # Landing page
│   │   ├── waitlist/
│   │   │   └── page.tsx          # Dedicated waitlist page
│   │   ├── share/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Shareable result card public page
│   │   └── roles/
│   │       ├── page.tsx          # Browse all roles
│   │       └── [slug]/
│   │           └── page.tsx      # Individual role detail page
│   │
│   ├── (auth)/                   # Auth pages
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── callback/page.tsx     # OAuth callback
│   │
│   ├── (app)/                    # Authenticated app (requires login)
│   │   ├── layout.tsx            # App layout (sidebar + topbar)
│   │   ├── discover/
│   │   │   └── page.tsx          # AI career discovery conversation
│   │   ├── results/
│   │   │   └── page.tsx          # Discovery results + role match
│   │   ├── roadmap/
│   │   │   └── page.tsx          # 90-day roadmap view
│   │   ├── learn/
│   │   │   ├── page.tsx          # Today's learning dashboard
│   │   │   └── [taskId]/
│   │   │       └── page.tsx      # Individual lesson/task with AI tutor
│   │   ├── progress/
│   │   │   └── page.tsx          # Progress dashboard, streaks, XP
│   │   ├── passport/
│   │   │   └── page.tsx          # Skill Passport view
│   │   ├── settings/
│   │   │   └── page.tsx          # Profile settings
│   │   └── notifications/
│   │       └── page.tsx          # Nudges and notifications
│   │
│   └── api/
│       ├── waitlist/route.ts               # POST: Join waitlist
│       ├── discovery/
│       │   ├── route.ts                    # POST: Start/continue discovery chat
│       │   └── complete/route.ts           # POST: Finalize discovery, generate results
│       ├── roadmap/
│       │   ├── generate/route.ts           # POST: Generate 90-day roadmap
│       │   └── [id]/route.ts              # GET/PATCH: Roadmap details
│       ├── tasks/
│       │   ├── today/route.ts             # GET: Today's tasks
│       │   ├── [id]/route.ts              # PATCH: Update task status
│       │   └── [id]/tutor/route.ts        # POST: AI tutor conversation
│       ├── streak/route.ts                # GET/POST: Streak management
│       ├── xp/route.ts                    # POST: Award XP
│       ├── share/
│       │   └── generate/route.ts          # POST: Generate shareable card
│       └── webhooks/
│           └── stripe/route.ts            # Stripe webhooks (Phase 3)
│
├── components/
│   ├── ui/                       # shadcn/ui components (auto-generated)
│   ├── landing/                  # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── WhoIsThisFor.tsx
│   │   ├── Comparison.tsx
│   │   ├── RolesPreview.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Mission.tsx
│   │   ├── WaitlistForm.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── app/                      # App components
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── DiscoveryChat.tsx     # AI conversation interface
│   │   ├── RoleMatchCard.tsx     # Role result display
│   │   ├── ShareableCard.tsx     # Shareable result card
│   │   ├── RoadmapTimeline.tsx   # Visual roadmap
│   │   ├── DailyTaskCard.tsx     # Task display
│   │   ├── AITutorChat.tsx       # In-lesson AI tutor
│   │   ├── StreakCounter.tsx     # Streak display with flame
│   │   ├── XPBar.tsx             # XP progress bar
│   │   ├── ProgressRing.tsx      # Circular progress
│   │   ├── SkillTree.tsx         # Visual skill tree
│   │   └── NudgeToast.tsx        # Notification toasts
│   └── shared/                   # Shared components
│       ├── Logo.tsx
│       ├── ThemeProvider.tsx
│       ├── AnimatedSection.tsx   # Framer Motion scroll wrapper
│       ├── GradientText.tsx
│       ├── GlowCard.tsx
│       └── LoadingSkeleton.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Browser Supabase client
│   │   ├── server.ts             # Server Supabase client
│   │   ├── middleware.ts          # Auth middleware helper
│   │   └── types.ts              # Database types (generated)
│   ├── ai/
│   │   ├── client.ts             # Anthropic client setup
│   │   ├── prompts/
│   │   │   ├── discovery.ts      # Career discovery system prompt
│   │   │   ├── tutor.ts          # AI tutor system prompt
│   │   │   ├── roadmap.ts        # Roadmap generation prompt
│   │   │   └── nudge.ts          # Nudge/notification generation
│   │   └── tools/
│   │       ├── role-matcher.ts   # Role matching algorithm
│   │       ├── skill-assessor.ts # Skill gap analysis
│   │       └── content-gen.ts    # Lesson content generation
│   ├── utils/
│   │   ├── cn.ts                 # Class name merger (shadcn)
│   │   ├── format.ts             # Date, number formatting
│   │   └── constants.ts          # App-wide constants
│   ├── hooks/
│   │   ├── useUser.ts            # Current user hook
│   │   ├── useStreak.ts          # Streak data hook
│   │   ├── useXP.ts              # XP data hook
│   │   └── useDiscovery.ts       # Discovery session hook
│   ├── stores/
│   │   ├── user-store.ts         # Zustand user store
│   │   └── app-store.ts          # Zustand app state
│   └── validations/
│       ├── waitlist.ts           # Waitlist form schema
│       ├── discovery.ts          # Discovery input schema
│       └── auth.ts               # Auth form schemas
│
├── data/
│   ├── roles.ts                  # Initial 8 role profiles (seed data)
│   ├── skills.ts                 # Initial skills list
│   └── questions.ts              # Discovery question bank
│
├── public/
│   ├── fonts/                    # Self-hosted fonts
│   ├── og/                       # OG images
│   └── icons/                    # Favicons, app icons
│
└── supabase/
    ├── migrations/               # Database migrations
    │   └── 001_initial_schema.sql
    └── seed.sql                  # Seed data (roles, skills)
```

---

## Environment Variables

```env
# .env.local
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Anthropic
ANTHROPIC_API_KEY=your_anthropic_key

# Resend (Email)
RESEND_API_KEY=your_resend_key

# PostHog (Analytics)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Stripe (Phase 3)
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Web3School
```

---

## Initial 8 Web3 Roles (Seed Data)

```typescript
// data/roles.ts
export const INITIAL_ROLES = [
  {
    name: "Community Manager",
    slug: "community-manager",
    category: "non-technical",
    short_description: "Be the bridge between Web3 projects and their communities",
    description: "Community Managers are the heartbeat of Web3 projects. You'll build and nurture Discord/Telegram communities, organize events, create engagement strategies, and be the voice of the project to its users. This role requires strong communication skills, empathy, and the ability to handle conflict. No coding required — just people skills and Web3 knowledge.",
    salary_range_min: 50000,
    salary_range_max: 120000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: ["Discord Management", "Content Writing", "Community Strategy", "Event Planning", "Conflict Resolution", "Analytics"],
    personality_traits: ["empathetic", "communicative", "organized", "patient", "creative"],
    day_in_life: "Morning: Check community channels, respond to questions. Midday: Plan weekly AMA, create announcement for new feature. Afternoon: Analyze engagement metrics, coordinate with marketing team. Evening: Host community call.",
    growth_path: "Community Mod → Community Manager → Head of Community → VP of Community/Growth"
  },
  {
    name: "Smart Contract Developer",
    slug: "smart-contract-developer",
    category: "technical",
    short_description: "Build the code that powers decentralized applications",
    description: "Smart Contract Developers write the self-executing code that runs on blockchains like Ethereum and Solana. You'll build DeFi protocols, NFT contracts, DAOs, and more. This role requires strong programming skills (Solidity, Rust), security awareness, and deep understanding of blockchain architecture. High demand, high salary, but very competitive.",
    salary_range_min: 100000,
    salary_range_max: 270000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: ["Solidity", "Rust", "Security Auditing", "DeFi Protocols", "Testing (Foundry)", "Gas Optimization"],
    personality_traits: ["analytical", "detail-oriented", "security-minded", "patient", "logical"],
    day_in_life: "Morning: Review PRs, check contract security. Midday: Write new smart contract functions, run tests. Afternoon: Gas optimization, peer review. Evening: Study new EIPs and protocol designs.",
    growth_path: "Junior Dev → Mid Dev → Senior Dev → Lead Engineer → Protocol Architect"
  },
  {
    name: "DeFi Analyst",
    slug: "defi-analyst",
    category: "semi-technical",
    short_description: "Analyze protocols, assess risks, find opportunities",
    description: "DeFi Analysts evaluate decentralized finance protocols for risk, returns, and sustainability. You'll analyze tokenomics, liquidity dynamics, smart contract risks, and market trends. Requires strong analytical skills, spreadsheet mastery, and understanding of traditional and decentralized finance.",
    salary_range_min: 80000,
    salary_range_max: 175000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: ["Financial Analysis", "Tokenomics", "Risk Assessment", "Data Analysis", "DeFi Protocols", "Spreadsheet Modeling"],
    personality_traits: ["analytical", "curious", "risk-aware", "detail-oriented", "quantitative"],
    day_in_life: "Morning: Review overnight DeFi metrics, check protocol TVL changes. Midday: Deep-dive analysis of a new lending protocol. Afternoon: Write risk report, present findings to team. Evening: Monitor governance proposals.",
    growth_path: "Junior Analyst → DeFi Analyst → Senior Analyst → Head of Research → Chief Risk Officer"
  },
  {
    name: "NFT Artist / Creator",
    slug: "nft-creator",
    category: "creative",
    short_description: "Create, launch, and market digital art and collectibles",
    description: "NFT Creators combine artistic talent with Web3 knowledge to create and sell digital art, collectibles, and generative art. You'll learn about blockchain minting, marketplace dynamics, community building for artists, and the intersection of art and technology.",
    salary_range_min: 30000,
    salary_range_max: 150000,
    demand_level: "medium",
    competition_level: "high",
    key_skills: ["Digital Art", "NFT Minting", "Marketplace Strategy", "Community Building", "Brand Building", "Smart Contract Basics"],
    personality_traits: ["creative", "entrepreneurial", "visual", "persistent", "community-oriented"],
    day_in_life: "Morning: Create new artwork, experiment with styles. Midday: Engage with collector community on Twitter/Discord. Afternoon: Set up mint, coordinate with marketplace. Evening: Network with other artists, plan next drop.",
    growth_path: "Solo Creator → Established Artist → Collection Lead → Creative Director → Brand Founder"
  },
  {
    name: "On-Chain Researcher",
    slug: "on-chain-researcher",
    category: "semi-technical",
    short_description: "Track wallets, analyze data, uncover alpha",
    description: "On-Chain Researchers analyze blockchain data to uncover trends, track whale wallets, identify emerging protocols, and provide actionable insights. Requires comfort with data tools (Dune Analytics, Nansen), SQL knowledge, and deep understanding of blockchain transactions.",
    salary_range_min: 70000,
    salary_range_max: 160000,
    demand_level: "high",
    competition_level: "low",
    key_skills: ["Dune Analytics", "SQL", "Blockchain Data", "Research Writing", "Data Visualization", "Critical Thinking"],
    personality_traits: ["investigative", "data-driven", "curious", "thorough", "independent"],
    day_in_life: "Morning: Run Dune queries, check unusual on-chain activity. Midday: Deep research into wallet clusters and fund flows. Afternoon: Write analysis thread or report. Evening: Monitor new contract deployments.",
    growth_path: "Junior Researcher → On-Chain Analyst → Lead Researcher → Head of Research → Chief Intelligence Officer"
  },
  {
    name: "Web3 Content Creator",
    slug: "web3-content-creator",
    category: "non-technical",
    short_description: "Write threads, newsletters, and content that educates",
    description: "Web3 Content Creators produce educational and engaging content about blockchain, crypto, and decentralized technology. You'll write Twitter threads, newsletters, blog posts, video scripts, and documentation. Strong writing skills and ability to simplify complex topics are essential.",
    salary_range_min: 50000,
    salary_range_max: 130000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: ["Copywriting", "Technical Writing", "Social Media Strategy", "SEO", "Newsletter Management", "Storytelling"],
    personality_traits: ["communicative", "curious", "creative", "consistent", "empathetic"],
    day_in_life: "Morning: Research trending topics, draft Twitter thread. Midday: Write newsletter issue, create blog post outline. Afternoon: Edit and publish, engage with comments. Evening: Plan content calendar for next week.",
    growth_path: "Writer → Content Creator → Content Lead → Head of Content → VP of Marketing"
  },
  {
    name: "Protocol Researcher",
    slug: "protocol-researcher",
    category: "technical",
    short_description: "Deep-dive into whitepapers, governance, and mechanism design",
    description: "Protocol Researchers study the theoretical and practical foundations of blockchain protocols. You'll analyze whitepapers, evaluate governance mechanisms, study consensus algorithms, and contribute to protocol design. Requires strong technical foundation and academic rigor.",
    salary_range_min: 90000,
    salary_range_max: 200000,
    demand_level: "medium",
    competition_level: "low",
    key_skills: ["Whitepaper Analysis", "Game Theory", "Mechanism Design", "Cryptography Basics", "Technical Writing", "Governance Systems"],
    personality_traits: ["intellectual", "rigorous", "patient", "detail-oriented", "theoretical"],
    day_in_life: "Morning: Read new whitepapers and research papers. Midday: Analyze governance proposal, model incentive structures. Afternoon: Write research report, peer review. Evening: Attend protocol research calls.",
    growth_path: "Junior Researcher → Protocol Researcher → Senior Researcher → Research Lead → Chief Scientist"
  },
  {
    name: "Blockchain QA Tester",
    slug: "blockchain-qa-tester",
    category: "semi-technical",
    short_description: "Test smart contracts, find bugs, ensure security",
    description: "Blockchain QA Testers ensure smart contracts and dApps work correctly and securely. You'll write test cases, perform manual and automated testing, identify vulnerabilities, and work closely with developers to fix issues. A great entry point into Web3 for people with attention to detail.",
    salary_range_min: 60000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "low",
    key_skills: ["Test Writing", "Bug Reporting", "Security Basics", "Foundry/Hardhat", "Edge Case Thinking", "Documentation"],
    personality_traits: ["meticulous", "skeptical", "systematic", "persistent", "observant"],
    day_in_life: "Morning: Review new code changes, plan test cases. Midday: Run test suites, document edge cases. Afternoon: File bug reports, verify fixes. Evening: Learn about new vulnerability patterns.",
    growth_path: "Junior QA → QA Tester → Senior QA → QA Lead → Security Engineer"
  }
];
```

---

## AI System Prompts

### Career Discovery System Prompt

```typescript
// lib/ai/prompts/discovery.ts
export const DISCOVERY_SYSTEM_PROMPT = `You are Web3School's AI Career Discovery Engine. Your job is to have a natural, friendly, 10-minute conversation with someone to discover their ideal Web3 career path.

## YOUR PERSONALITY
- Warm, encouraging, slightly casual but professional
- You're like a smart friend who happens to know everything about Web3 careers
- Never condescending. Never use jargon without explaining it.
- Short responses (2-4 sentences max). This is a CONVERSATION, not a lecture.
- Ask ONE question at a time. Never multiple questions.

## YOUR GOAL
Through natural conversation (NOT a quiz), assess the person across these 6 dimensions:
1. **Technical Aptitude** (0-100): Comfort with code, data, systems thinking
2. **Creative Drive** (0-100): Interest in design, art, content, storytelling  
3. **Social Orientation** (0-100): Preference for working with people vs solo
4. **Analytical Thinking** (0-100): Love of data, research, problem-solving
5. **Risk Tolerance** (0-100): Comfort with uncertainty, entrepreneurial spirit
6. **Communication Strength** (0-100): Writing, presenting, explaining

## CONVERSATION FLOW (8-12 messages total)
1. **Opening** (1 msg): Warm greeting, ask what brought them here
2. **Background** (2-3 msgs): What they do now, what they've tried before, what frustrates them
3. **Interests** (2-3 msgs): What excites them, what they'd do for free, what they avoid
4. **Work Style** (2-3 msgs): Solo vs team, structured vs flexible, creative vs analytical
5. **Web3 Awareness** (1-2 msgs): What they know about Web3, what interests them
6. **Wrap-up** (1 msg): Summarize what you heard, express confidence in finding their path

## RULES
- NEVER recommend a role during the conversation. That comes AFTER.
- NEVER ask "on a scale of 1-10" type questions. Keep it natural.
- If someone says "I don't know" — that's useful data. Explore it gently.
- Mirror their energy. If they're excited, match it. If they're anxious, be calming.
- Remember everything they say. Reference it later to show you're listening.
- At the end, tell them you're analyzing their responses and to click "See My Results"

## AVAILABLE ROLES (don't mention these by name during conversation)
- Community Manager (non-technical, social, organized)
- Smart Contract Developer (technical, logical, detail-oriented)
- DeFi Analyst (analytical, quantitative, risk-aware)
- NFT Artist/Creator (creative, entrepreneurial, visual)
- On-Chain Researcher (investigative, data-driven, independent)
- Web3 Content Creator (communicative, creative, consistent)
- Protocol Researcher (intellectual, theoretical, rigorous)
- Blockchain QA Tester (meticulous, systematic, observant)

## OUTPUT FORMAT
When the conversation is complete, output a JSON block (hidden from user) with:
{
  "traits": {
    "technical_aptitude": 0-100,
    "creative_drive": 0-100,
    "social_orientation": 0-100,
    "analytical_thinking": 0-100,
    "risk_tolerance": 0-100,
    "communication_strength": 0-100
  },
  "matched_roles": [
    { "role_slug": "...", "match_score": 0-100, "reasoning": "..." },
    { "role_slug": "...", "match_score": 0-100, "reasoning": "..." },
    { "role_slug": "...", "match_score": 0-100, "reasoning": "..." }
  ],
  "summary": "2-3 sentence summary of the person",
  "conversation_complete": true
}`;

export const TUTOR_SYSTEM_PROMPT = `You are Web3School's AI Tutor. You teach Web3 skills through conversation.

## YOUR PERSONALITY
- Patient, encouraging, adaptive
- You explain things simply first, then add complexity if the learner wants it
- Use analogies from everyday life to explain Web3 concepts
- Celebrate small wins. Never make someone feel stupid.

## YOUR APPROACH
1. Start each lesson with a brief overview of what they'll learn and WHY it matters
2. Teach in small chunks (1 concept at a time)
3. After each chunk, check understanding with a quick question
4. If they struggle, try a different explanation approach (visual, analogy, step-by-step)
5. End with a summary and a micro-exercise they can complete

## DIFFICULTY LEVELS
Adapt based on the learner's responses:
- ELI5: Absolute beginner, use everyday analogies
- Beginner: Basic concepts with simple examples
- Intermediate: More technical, assume some foundation
- Advanced: Deep technical details, edge cases
- Expert: Peer-level discussion, advanced patterns

## RULES
- Keep responses SHORT (3-5 sentences per chunk)
- Use code examples only when appropriate for the role
- Always connect concepts to real Web3 use cases
- If the learner seems frustrated, acknowledge it and simplify
- If the learner seems bored, increase complexity

## CONTEXT
You'll receive the learner's current role, skill level, and the specific topic/lesson they're working on. Adapt accordingly.`;
```

---

# ═══════════════════════════════════════════════════════════
# BUILD CHUNKS — EXECUTE IN ORDER
# ═══════════════════════════════════════════════════════════

## HOW TO EXECUTE CHUNKS

For each chunk:
1. Read the CONTEXT REMINDER to re-orient yourself
2. Read the DELIVERABLES to know exactly what to build
3. Build everything listed
4. Run the VERIFICATION checklist
5. Commit to git with the chunk name
6. Move to next chunk

If at any point you lose context about what Web3School is, scroll back to PART 0: PROJECT DNA.

---

# ─────────────────────────────────────────────────────────
# CHUNK 1: PROJECT SCAFFOLDING & INFRASTRUCTURE
# Estimated time: 30-45 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building Web3School — an AI-powered Web3 career discovery and learning platform. This chunk sets up the project skeleton. Nothing visible to users yet. Just infrastructure.

### DELIVERABLES

1. **Initialize Next.js project**
   ```bash
   npx create-next-app@latest web3school --typescript --tailwind --eslint --app --src=false --import-alias "@/*"
   ```

2. **Install all dependencies**
   ```bash
   # Core
   npm install @supabase/supabase-js @supabase/ssr zustand framer-motion
   
   # UI
   npm install class-variance-authority clsx tailwind-merge lucide-react
   npx shadcn@latest init
   npx shadcn@latest add button card input label select textarea badge dialog dropdown-menu separator skeleton toast tabs avatar progress sheet tooltip
   
   # Forms
   npm install react-hook-form @hookform/resolvers zod
   
   # AI
   npm install ai @anthropic-ai/sdk
   
   # Email
   npm install resend
   
   # Charts
   npm install recharts
   
   # Analytics
   npm install posthog-js
   
   # Dev
   npm install -D vitest @testing-library/react playwright
   ```

3. **Configure Tailwind** with the custom design system colors, fonts, and animations from PART 0

4. **Set up Supabase clients** (`lib/supabase/client.ts` and `lib/supabase/server.ts`)

5. **Set up auth middleware** (`middleware.ts`) — protect `/discover`, `/roadmap`, `/learn`, `/progress`, `/passport`, `/settings`

6. **Set up Zustand stores** (`lib/stores/user-store.ts`, `lib/stores/app-store.ts`)

7. **Set up utility functions** (`lib/utils/cn.ts`, `lib/utils/format.ts`, `lib/utils/constants.ts`)

8. **Set up shared components** (`components/shared/Logo.tsx`, `ThemeProvider.tsx`, `AnimatedSection.tsx`, `GlowCard.tsx`, `LoadingSkeleton.tsx`)

9. **Create .env.example** with all required variables listed

10. **Create the complete database migration file** (`supabase/migrations/001_initial_schema.sql`) using the schema from PART 0

11. **Create seed data files** (`data/roles.ts`, `data/skills.ts`)

### VERIFICATION CHECKLIST
- [ ] `npm run dev` starts without errors
- [ ] Tailwind custom colors work (`bg-navy-deep`, `text-purple-primary`, etc.)
- [ ] Supabase client initializes (check console, no connection errors)
- [ ] All shadcn components imported successfully
- [ ] Middleware redirects unauthenticated users from protected routes
- [ ] `git commit -m "chunk-1: project scaffolding and infrastructure"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 2: LANDING PAGE (COMPLETE)
# Estimated time: 60-90 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building Web3School's landing page — the first thing visitors see. It must tell a story: Problem → Solution → Social Proof → Action (waitlist signup). Dark theme, premium feel, Web3-native but not "crypto degen." The goal is waitlist signups.

### DELIVERABLES

Build ALL 10 sections of the landing page. Each section is a separate component in `components/landing/`.

**Section 1: Navbar** (`Navbar.tsx`)
- Sticky, transparent background that becomes solid on scroll
- Logo (left), nav links (center): How It Works, Roles, Mission
- CTA button (right): "Join Waitlist"
- Mobile: hamburger menu with slide-out sheet

**Section 2: Hero** (`Hero.tsx`)
- Headline: "Don't Know What to Learn? Let AI Figure It Out for You."
- Subheadline: "Web3School is your AI career counselor, tutor, and accountability partner. Go from confused to skilled to hired — in 90 days."
- Primary CTA: "Join the Waitlist" → scrolls to waitlist form
- Secondary CTA: "See How It Works" → scrolls to solution section
- Background: Subtle animated gradient (use CSS, not heavy libraries)
- Animated particles or grid pattern (subtle, CSS-based)

**Section 3: Problem** (`Problem.tsx`)
- Title: "The World Has More Learning Resources Than Ever. People Are More Confused Than Ever."
- 3 problem cards with icons, glassmorphism style:
  - "Too Many Options, Zero Direction" — You open YouTube — 10,000 tutorials. You open Twitter — everyone's selling a course. You don't even know WHAT to learn. You're not lazy. You're lost.
  - "Start, Stop, Repeat" — You've started 5 courses and finished none. It's not a motivation problem — it's a structure problem. Nobody is holding you accountable.
  - "Skills Without Proof" — Even if you learn something, how do you prove it? Certificates are worthless. Employers want evidence.
- Bold statement below: "No platform today solves the complete journey from confused → skilled → employed. Until now."
- Add real stats: "48% of graduates feel unprepared" | "5.5% course completion rate" | "87% of companies report talent shortages"

**Section 4: Solution** (`Solution.tsx`)
- Title: "Your AI-Powered Career Compass, Tutor, and Launchpad"
- 5-step visual timeline (horizontal desktop, vertical mobile):
  1. Discover (Compass icon) — "AI conversation identifies your ideal career in 10 minutes"
  2. Plan (Map icon) — "Personalized 90-day roadmap, day by day"
  3. Learn (Brain icon) — "AI tutor adapts to your pace and style"
  4. Prove (Shield icon) — "Build projects, earn a Skill Passport"
  5. Get Hired (Rocket icon) — "Matched to real Web3 opportunities"
- Animate steps sequentially on scroll

**Section 5: Who Is This For** (`WhoIsThisFor.tsx`)
- Title: "Built for People Who Are Ready to Change Their Lives"
- 4 persona cards:
  - "The Airdrop Hunter" — In Web3 but zero marketable skills
  - "The Career Changer" — Laid off or stuck, needs to reskill
  - "The Curious Outsider" — Interested in Web3 but don't know where to start
  - "The Halfway Learner" — Started 10 things, finished none

**Section 6: Comparison** (`Comparison.tsx`)
- Title: "This Is Not Another Course Platform"
- Side-by-side comparison table: Others vs Web3School
- Bold statement: "ChatGPT gives you information. Web3School gives you transformation."

**Section 7: Roles Preview** (`RolesPreview.tsx`)
- Title: "Explore Web3 Career Paths"
- Subtitle: "Starting with 8 high-demand roles. Expanding to all of tech."
- Grid of 8 role cards (from seed data), each showing: name, category tag, short description
- Scrollable carousel on mobile

**Section 8: How It Works** (`HowItWorks.tsx`)
- Title: "Get Started in 3 Steps"
- Step 1: "Talk to Our AI" — 10-minute conversation
- Step 2: "Get Your Path" — Matched role + 90-day roadmap
- Step 3: "Start Learning" — Daily AI-guided lessons
- CTA: "Join the Waitlist"

**Section 9: Mission** (`Mission.tsx`)
- Large centered quote: "To make sure that no one with the willpower to learn ever stays stuck because they didn't know where to start."
- 3 stat cards: "76+ Role Profiles" | "8 Careers at Launch" | "90-Day Roadmaps"

**Section 10: Waitlist Form** (`WaitlistForm.tsx`)
- Title: "Be the First to Get Your AI Career Match"
- Form fields: Name, Email, "What best describes you?" (dropdown), "How did you hear about us?" (optional dropdown)
- Submit button: "Join the Waitlist 🚀"
- Success state: "You're in! 🎉" + waitlist position + share buttons (Twitter, copy link)
- Generates unique referral code
- Sends confirmation email via Resend

**Section 11: Footer** (`Footer.tsx`)
- Logo, social links (Twitter, Discord, Telegram), tagline, copyright

**API Route: POST /api/waitlist** (`app/api/waitlist/route.ts`)
- Validates input with Zod
- Inserts into Supabase `waitlist` table
- Sends confirmation email via Resend
- Returns waitlist position and referral code

### PAGE ASSEMBLY
- `app/(marketing)/layout.tsx` — Marketing layout with Navbar + Footer
- `app/(marketing)/page.tsx` — Assembles all sections in order
- Add smooth scrolling, section IDs for navigation
- Add proper meta tags and OG image

### VERIFICATION CHECKLIST
- [ ] All 10 sections render correctly on desktop (1440px)
- [ ] All 10 sections render correctly on mobile (375px)
- [ ] Scroll animations work (fade-in on scroll)
- [ ] Waitlist form submits successfully (check Supabase table)
- [ ] Confirmation email sends (check Resend dashboard)
- [ ] Referral code generates and displays
- [ ] Social share buttons work (Twitter intent, copy link)
- [ ] Navbar becomes opaque on scroll
- [ ] All CTAs scroll to correct sections
- [ ] Page loads in under 3 seconds (Lighthouse check)
- [ ] `git commit -m "chunk-2: complete landing page with waitlist"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 3: AUTHENTICATION SYSTEM
# Estimated time: 30-45 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building Web3School's auth system. Users sign up to access the AI career discovery tool. Auth is handled by Supabase. Keep the auth pages consistent with the dark theme design system.

### DELIVERABLES

1. **Signup Page** (`app/(auth)/signup/page.tsx`)
   - Full name, email, password fields
   - "Or continue with" — Google, GitHub OAuth buttons
   - Link to login page
   - Dark theme, centered card layout
   - After signup → redirect to /discover (onboarding)

2. **Login Page** (`app/(auth)/login/page.tsx`)
   - Email, password fields
   - "Or continue with" — Google, GitHub OAuth
   - "Forgot password?" link
   - Link to signup page
   - After login → redirect to /learn (if onboarded) or /discover (if not)

3. **OAuth Callback** (`app/(auth)/callback/page.tsx`)
   - Handles Supabase OAuth callback
   - Exchanges code for session
   - Redirects appropriately

4. **Middleware Update** (`middleware.ts`)
   - Check if user has completed onboarding
   - If not onboarded → redirect to /discover
   - If onboarded → allow access to app routes

5. **User Hook** (`lib/hooks/useUser.ts`)
   - Returns current user profile from Supabase
   - Includes loading/error states
   - Auto-refreshes on auth state change

6. **Auth Validation Schemas** (`lib/validations/auth.ts`)

### VERIFICATION CHECKLIST
- [ ] Can create account with email/password
- [ ] Can login with email/password
- [ ] Google OAuth works (if configured)
- [ ] GitHub OAuth works (if configured)
- [ ] Profile auto-creates on signup (check profiles table)
- [ ] Middleware redirects unauthenticated users
- [ ] Middleware redirects non-onboarded users to /discover
- [ ] Logout works and redirects to landing page
- [ ] `git commit -m "chunk-3: authentication system"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 4: AI CAREER DISCOVERY (Phase 0 Core Feature)
# Estimated time: 90-120 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building the CORE FEATURE of Web3School — the AI Career Discovery conversation. This is a 10-minute chat between the user and Claude AI that identifies their ideal Web3 career. This is what makes Web3School unique. It must feel magical, personal, and insightful.

### DELIVERABLES

1. **Discovery Page** (`app/(app)/discover/page.tsx`)
   - Full-screen chat interface (like ChatGPT but branded)
   - Dark background, clean message bubbles
   - AI messages on left (with Web3School avatar), user messages on right
   - Text input at bottom with send button
   - Progress indicator showing rough conversation progress (e.g., "Step 2 of 5")
   - "See My Results" button appears after conversation is complete
   - Typing indicator while AI is responding

2. **Discovery Chat Component** (`components/app/DiscoveryChat.tsx`)
   - Streaming AI responses (show text as it generates)
   - Auto-scroll to latest message
   - Save conversation history to Supabase after each exchange
   - Handle edge cases: empty messages, very long messages, API errors
   - Conversation memory: AI references previous answers

3. **API Route: Discovery Chat** (`app/api/discovery/route.ts`)
   - Accepts: conversation history, user message
   - Uses Claude API with streaming (Vercel AI SDK)
   - System prompt from `lib/ai/prompts/discovery.ts`
   - Returns streaming response
   - After ~10 exchanges, AI signals conversation is complete

4. **API Route: Complete Discovery** (`app/api/discovery/complete/route.ts`)
   - Accepts: full conversation history
   - Sends to Claude with instruction to analyze and output JSON
   - Extracts: traits, matched roles (top 3), summary
   - Saves to `discovery_sessions` table
   - Updates user profile with `discovery_completed = true` and `current_role_id`
   - Returns matched roles with scores

5. **Results Page** (`app/(app)/results/page.tsx`)
   - Shows primary matched role with large card and match percentage
   - Shows 2 alternative roles as smaller cards
   - For each role: name, category, match score, key reasons why
   - Detailed breakdown of user traits (radar/spider chart)
   - "Choose This Path" button for primary role → creates roadmap
   - "Explore Other Roles" to pick an alternative
   - "Share Your Result" → generates shareable card

6. **Role Match Card** (`components/app/RoleMatchCard.tsx`)
   - Visually appealing card showing role name, icon, match %, category tag
   - Brief explanation of why it's a match
   - Click to see full role details

7. **Shareable Result Card** (`components/app/ShareableCard.tsx`)
   - Beautiful card designed for Twitter/X sharing (1200x628px ratio)
   - Shows: role name, match %, top 3 traits, Web3School branding
   - "Generate & Share" button creates image and share link

8. **API Route: Share Card** (`app/api/share/generate/route.ts`)
   - Generates unique slug for sharing
   - Saves to `result_cards` table
   - Returns share URL

9. **Public Share Page** (`app/(marketing)/share/[slug]/page.tsx`)
   - Displays result card publicly (no auth required)
   - Shows role name, match %, traits
   - "Get Your Own Career Match" CTA → signup page
   - Increments view count
   - Proper OG meta tags for Twitter/social preview

10. **Role Matcher Algorithm** (`lib/ai/tools/role-matcher.ts`)
    - Takes 6 trait scores and returns ranked roles
    - Scoring: personality-role 35%, skill-role 25%, interest 20%, goal compatibility 20%
    - Returns top 3 with reasoning

### VERIFICATION CHECKLIST
- [ ] Discovery conversation flows naturally (test full conversation)
- [ ] AI responses stream in real-time
- [ ] Conversation saves to Supabase after each exchange
- [ ] After ~10 exchanges, AI signals completion
- [ ] "See My Results" navigates to results page
- [ ] Results show primary role + 2 alternatives with match scores
- [ ] Trait radar chart displays correctly
- [ ] "Choose This Path" updates profile and creates roadmap seed
- [ ] Shareable card generates with correct data
- [ ] Public share page works without auth
- [ ] Share link produces correct OG preview on Twitter
- [ ] Full flow: signup → discover → results → share works end-to-end
- [ ] `git commit -m "chunk-4: AI career discovery and results"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 5: APP LAYOUT & NAVIGATION
# Estimated time: 30-45 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building the authenticated app shell — the sidebar, topbar, and navigation for logged-in users who have completed discovery. This is the frame around all Phase 1 features (roadmap, learning, progress).

### DELIVERABLES

1. **App Layout** (`app/(app)/layout.tsx`)
   - Sidebar (desktop) + bottom nav (mobile)
   - Topbar with user avatar, streak counter, XP display
   - Main content area

2. **Sidebar** (`components/app/Sidebar.tsx`)
   - Logo at top
   - Nav items with icons: Dashboard, Roadmap, Learn, Progress, Passport, Settings
   - Active state highlighting
   - Streak flame + count at bottom
   - Collapsible on desktop (icon-only mode)

3. **TopBar** (`components/app/TopBar.tsx`)
   - Page title (dynamic based on route)
   - Streak counter with flame animation
   - XP display with level
   - Notification bell with unread count
   - User avatar dropdown (profile, settings, logout)

4. **Streak Counter** (`components/app/StreakCounter.tsx`)
   - Flame icon that animates when streak is active
   - Shows current streak count
   - Tooltip with streak details
   - Glows when streak is maintained today

5. **XP Bar** (`components/app/XPBar.tsx`)
   - Shows current XP / XP needed for next level
   - Animated progress bar
   - Level badge

6. **Streak Hook** (`lib/hooks/useStreak.ts`)
   - Fetches current streak from Supabase
   - Calculates if streak is maintained today
   - Returns streak count, longest streak, today's status

7. **XP Hook** (`lib/hooks/useXP.ts`)
   - Fetches total XP and current level
   - Calculates level thresholds
   - Returns XP, level, progress to next level

### VERIFICATION CHECKLIST
- [ ] Sidebar renders with all nav items
- [ ] Active nav item highlights correctly
- [ ] Sidebar collapses on mobile to bottom nav
- [ ] TopBar shows streak, XP, notifications
- [ ] Streak counter shows correct count
- [ ] XP bar shows correct level and progress
- [ ] User avatar dropdown works (profile, settings, logout)
- [ ] Navigation between app pages works
- [ ] `git commit -m "chunk-5: app layout and navigation"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 6: ROADMAP & DAILY LEARNING ENGINE (Phase 1 Core)
# Estimated time: 90-120 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building Web3School's 90-day personalized learning roadmap and daily task system. After a user discovers their career match, they get a week-by-week, day-by-day plan generated by AI. Each day has a micro-lesson (3-5 minutes) that they complete to build their streak. This is the RETENTION ENGINE — the Duolingo-style habit loop.

### DELIVERABLES

1. **Roadmap Generation API** (`app/api/roadmap/generate/route.ts`)
   - Input: user profile, matched role, skill gap
   - Uses Claude to generate a 12-week structured roadmap
   - Each week has: theme, learning objectives, 5 daily tasks (Mon-Fri)
   - Each task has: title, description, type (lesson/exercise/project/quiz/reflection), estimated_minutes, difficulty
   - Saves to `roadmaps` + `daily_tasks` tables
   - Returns the roadmap structure

2. **Roadmap Generation Prompt** (`lib/ai/prompts/roadmap.ts`)
   - System prompt that generates structured, progressive curriculum
   - Week 1-3: Foundation (basics, terminology, tools)
   - Week 4-6: Core Skills (hands-on practice)
   - Week 7-9: Intermediate (real-world application)
   - Week 10-11: Advanced (portfolio projects)
   - Week 12: Portfolio Compilation (skill passport prep)
   - Each task must be completable in 5-15 minutes
   - Output format: structured JSON

3. **Roadmap Page** (`app/(app)/roadmap/page.tsx`)
   - Visual timeline showing all 12 weeks
   - Current week expanded, showing daily tasks
   - Past weeks show completion status (green checkmarks)
   - Future weeks show locked state (greyed out, preview of theme)
   - Progress percentage overall
   - "Jump to Today" button

4. **Roadmap Timeline Component** (`components/app/RoadmapTimeline.tsx`)
   - Vertical timeline with week nodes
   - Each node expands to show 5 daily tasks
   - Visual indicators: completed, current, upcoming, locked
   - Animate on load

5. **Daily Learning Page** (`app/(app)/learn/page.tsx`)
   - "Today's Plan" dashboard
   - Shows today's task(s) with title, description, type, estimated time
   - Streak status at top ("Day 14 🔥 Keep it going!")
   - "Start Lesson" button → navigates to individual task
   - "Quick Review" of yesterday's completion
   - Motivational AI-generated message based on progress

6. **Individual Task Page** (`app/(app)/learn/[taskId]/page.tsx`)
   - Task title, description, and learning objectives
   - AI-generated lesson content (rendered as rich text)
   - Embedded AI Tutor chat for questions
   - "Mark as Complete" button
   - XP reward animation on completion
   - "Next Task" navigation

7. **AI Tutor Chat** (`components/app/AITutorChat.tsx`)
   - Collapsible chat panel on the lesson page
   - User can ask questions about the current lesson
   - AI responds using tutor system prompt with lesson context
   - Streaming responses
   - Chat history maintained per task

8. **API Route: Tutor Chat** (`app/api/tasks/[id]/tutor/route.ts`)
   - Accepts: task context, conversation history, user message
   - Uses Claude with tutor system prompt
   - Includes task content and user's role/level as context
   - Streams response

9. **API Route: Complete Task** (`app/api/tasks/[id]/route.ts`)
   - PATCH: Mark task as completed
   - Awards XP (saves to xp_log)
   - Updates streak (saves to streak_history)
   - Updates profile (xp_total, streak_count, last_active_at)
   - Checks for milestone achievements
   - Returns updated stats

10. **API Route: Today's Tasks** (`app/api/tasks/today/route.ts`)
    - GET: Returns today's tasks based on roadmap progress
    - Calculates which week/day the user is on
    - If task content not yet generated, generates it via AI
    - Returns tasks with content

11. **Streak Management API** (`app/api/streak/route.ts`)
    - GET: Current streak data
    - POST: Check and update streak for today
    - Logic: If user completed at least 1 task today → streak maintained
    - If streak broken → reset to 0, save to history

12. **XP Award API** (`app/api/xp/route.ts`)
    - POST: Award XP for various actions
    - Actions: task_completed (10 XP), streak_maintained (5 XP bonus), quiz_passed (20 XP), project_submitted (50 XP)
    - Check for level-ups
    - Return new totals

### VERIFICATION CHECKLIST
- [ ] Roadmap generates successfully with 12 weeks of content
- [ ] Roadmap page displays timeline correctly
- [ ] Current week expanded, others collapsed
- [ ] Daily learning page shows today's tasks
- [ ] Can navigate to individual task
- [ ] Lesson content renders properly
- [ ] AI Tutor chat works within lesson
- [ ] Marking task complete awards XP
- [ ] Streak updates correctly
- [ ] XP animation plays on completion
- [ ] Level-up triggers when threshold crossed
- [ ] "Next Task" navigates correctly
- [ ] Full flow: roadmap → today → lesson → complete → streak update
- [ ] `git commit -m "chunk-6: roadmap and daily learning engine"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 7: PROGRESS DASHBOARD & GAMIFICATION
# Estimated time: 45-60 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building the progress tracking and gamification layer. This is what makes users come back daily — visible progress, streaks, XP, levels, and celebrations. Think Duolingo's progress system. Every metric should be visual and satisfying.

### DELIVERABLES

1. **Progress Dashboard** (`app/(app)/progress/page.tsx`)
   - Streak section: current streak (large number + flame), longest streak, calendar heatmap (GitHub-style) of past 90 days
   - XP section: total XP, current level, progress bar to next level, recent XP history
   - Learning stats: tasks completed, hours learned, current week, overall progress %
   - Skills section: spider/radar chart of skill development
   - Weekly summary: what you learned this week
   - Achievement badges (if any milestones hit)

2. **Calendar Heatmap Component**
   - 90-day grid showing activity (like GitHub contributions)
   - Color intensity based on tasks completed per day
   - Hover to see details per day

3. **Skill Radar Chart**
   - Using Recharts RadarChart
   - Shows 6 skill dimensions from discovery
   - Animates on load

4. **Progress Ring Component** (`components/app/ProgressRing.tsx`)
   - Circular SVG progress indicator
   - Animated fill
   - Center text showing percentage

5. **Celebration/Milestone System**
   - Toast notifications for: 7-day streak, 30-day streak, first lesson, first week, halfway, completion
   - Confetti animation for major milestones
   - XP bonus for milestones

6. **Nudge Toast Component** (`components/app/NudgeToast.tsx`)
   - Slides in from bottom-right
   - Shows streak reminders, celebration messages, tips
   - Auto-dismiss after 5 seconds
   - Click to view details

### VERIFICATION CHECKLIST
- [ ] Progress dashboard shows all stats correctly
- [ ] Calendar heatmap renders past 90 days
- [ ] Streak section shows current and longest streak
- [ ] XP bar and level display correctly
- [ ] Skill radar chart renders
- [ ] Weekly summary generates
- [ ] Milestone celebrations trigger at correct thresholds
- [ ] Nudge toasts appear and dismiss correctly
- [ ] `git commit -m "chunk-7: progress dashboard and gamification"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 8: SKILL PASSPORT (Phase 2 Preview)
# Estimated time: 45-60 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building Web3School's Skill Passport — a verifiable portfolio that proves what a user can actually do. This replaces worthless certificates with evidence-based skill verification. It's public-facing and shareable with employers.

### DELIVERABLES

1. **Passport Page** (`app/(app)/passport/page.tsx`)
   - Card-style passport view showing:
     - User name, avatar, role, level
     - Skills list with proficiency levels (0-100 bars)
     - Projects completed with descriptions and links
     - Roadmap completion percentage
     - Total XP and streak stats
   - "Make Public" toggle
   - "Share Passport" button (generates public link)
   - "Download as PDF" (future feature, placeholder button)

2. **Public Passport Page** (`app/(marketing)/passport/[slug]/page.tsx`)
   - Beautiful public view of someone's Skill Passport
   - No auth required
   - Shows same info as private view
   - "Build Your Own Passport" CTA → signup

3. **Skill Tree Component** (`components/app/SkillTree.tsx`)
   - Visual tree/graph showing skill progression
   - Nodes for each skill area
   - Connections showing dependencies
   - Color-coded by completion status

### VERIFICATION CHECKLIST
- [ ] Passport page shows user's skills and projects
- [ ] Public passport page loads without auth
- [ ] Share link generates correctly
- [ ] Skill tree visualizes progression
- [ ] `git commit -m "chunk-8: skill passport"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 9: SETTINGS, NOTIFICATIONS & POLISH
# Estimated time: 45-60 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building the settings page, notification system, and polishing the entire app. This is the quality layer that makes Web3School feel professional and complete.

### DELIVERABLES

1. **Settings Page** (`app/(app)/settings/page.tsx`)
   - Profile section: name, email, avatar, timezone
   - Notification preferences: email reminders, push notifications, frequency
   - Learning preferences: daily goal (minutes), preferred difficulty
   - Account section: change password, delete account
   - Appearance section: (dark mode is default and only option for now)

2. **Notification System**
   - In-app notifications page showing all nudges
   - Mark as read functionality
   - Categories: streak reminders, celebrations, tips, milestones
   - Email notifications for streak reminders (via Resend cron)

3. **Error Handling & Loading States**
   - Error boundary components for all pages
   - Loading skeletons for all data-fetching components
   - Empty states for pages with no data
   - Toast notifications for all user actions

4. **SEO & Meta Tags**
   - Dynamic meta tags for all pages
   - OG images for sharing (landing, result cards, passports)
   - Sitemap generation
   - robots.txt

5. **Performance Optimization**
   - Image optimization with next/image
   - Code splitting for heavy components
   - Lazy loading for below-fold sections
   - API route response caching where appropriate

6. **Accessibility**
   - Proper heading hierarchy on all pages
   - ARIA labels on all interactive elements
   - Keyboard navigation for all features
   - Color contrast compliance (WCAG AA minimum)

7. **Analytics Integration**
   - PostHog setup in root layout
   - Track key events: page_view, waitlist_signup, discovery_started, discovery_completed, task_completed, streak_maintained
   - Feature flags setup (for future A/B testing)

### VERIFICATION CHECKLIST
- [ ] Settings page saves all preferences
- [ ] Notifications display and mark as read
- [ ] All pages have loading skeletons
- [ ] All pages have error states
- [ ] All pages have empty states
- [ ] Meta tags render correctly (check with social preview tools)
- [ ] Lighthouse score: Performance 90+, Accessibility 90+
- [ ] Keyboard navigation works on all interactive elements
- [ ] PostHog events fire correctly
- [ ] `git commit -m "chunk-9: settings, notifications, and polish"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 10: ROLES PAGES & PUBLIC CONTENT
# Estimated time: 30-45 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are building public-facing role exploration pages. These serve two purposes: (1) SEO — people searching "how to become a Web3 community manager" land here, and (2) conversion — every role page has a CTA to sign up and discover their match.

### DELIVERABLES

1. **Roles Index Page** (`app/(marketing)/roles/page.tsx`)
   - Grid of all 8 role cards
   - Filter by category (all, technical, semi-technical, non-technical, creative)
   - Search by name
   - Each card links to detail page

2. **Role Detail Page** (`app/(marketing)/roles/[slug]/page.tsx`)
   - Hero section with role name, category, salary range, demand level
   - "A Day in the Life" section
   - Key skills with progress bars showing importance
   - Career growth path
   - Ideal personality traits
   - "Is This Your Path?" CTA → discovery
   - Related roles section

3. **SEO Optimization**
   - Dynamic meta titles: "How to Become a [Role] in Web3 — Web3School"
   - Structured data (JSON-LD) for job/education content
   - Canonical URLs

### VERIFICATION CHECKLIST
- [ ] Roles index shows all 8 roles
- [ ] Category filter works
- [ ] Role detail page loads with all sections
- [ ] CTAs link to signup/discovery
- [ ] Meta tags are correct for each role
- [ ] `git commit -m "chunk-10: roles pages and public content"`

---

# ─────────────────────────────────────────────────────────
# CHUNK 11: DEPLOYMENT & LAUNCH PREP
# Estimated time: 30-45 minutes
# ─────────────────────────────────────────────────────────

### CONTEXT REMINDER
You are preparing Web3School for production deployment. This includes environment setup, Vercel configuration, database setup, and launch checklist.

### DELIVERABLES

1. **Vercel Configuration**
   - `vercel.json` with proper settings
   - Environment variables configured in Vercel dashboard
   - Custom domain setup instructions
   - Edge function configuration for API routes

2. **Supabase Production Setup**
   - Run migrations on production database
   - Seed initial roles and skills data
   - Configure auth providers (Google, GitHub)
   - Set up email templates in Supabase
   - Enable RLS policies

3. **Resend Email Setup**
   - Waitlist confirmation email template
   - Streak reminder email template
   - Welcome email template
   - Verify domain for email delivery

4. **PostHog Production Setup**
   - Production project key
   - Configure event tracking
   - Set up dashboards: Signup funnel, Discovery completion, Retention

5. **Security Checklist**
   - All API routes validate auth
   - Rate limiting on public endpoints (waitlist, share pages)
   - Input sanitization on all forms
   - CORS configuration
   - Environment variables not exposed to client

6. **README.md**
   - Project overview
   - Setup instructions
   - Environment variables guide
   - Deployment instructions
   - Architecture overview

### VERIFICATION CHECKLIST
- [ ] Production deployment works on Vercel
- [ ] Database migrations run successfully
- [ ] Auth works in production
- [ ] Emails send from production
- [ ] Analytics track in production
- [ ] All API routes are protected
- [ ] Rate limiting active on public endpoints
- [ ] `git commit -m "chunk-11: deployment and launch prep"`

---

# ═══════════════════════════════════════════════════════════
# COMPLETION CRITERIA
# ═══════════════════════════════════════════════════════════

When all 11 chunks are complete, Web3School should have:

✅ **Landing page** with waitlist form, all 10 sections, and email confirmation
✅ **Authentication** with email/password and OAuth
✅ **AI Career Discovery** — full conversational flow with Claude
✅ **Results & Sharing** — matched roles, trait analysis, shareable cards
✅ **90-Day Roadmap** — AI-generated, personalized, week-by-week plan
✅ **Daily Learning Engine** — micro-lessons with AI tutor chat
✅ **Gamification** — streaks, XP, levels, milestone celebrations
✅ **Progress Dashboard** — stats, heatmap, skill radar, weekly summary
✅ **Skill Passport** — verifiable, public, shareable
✅ **Role Pages** — SEO-optimized public pages for all 8 roles
✅ **Settings & Notifications** — preferences, nudges, email reminders
✅ **Production Deployment** — Vercel, Supabase, Resend, PostHog

This is Phase 0 + Phase 1 of the Web3School roadmap — enough to launch, get users, prove retention, and raise seed funding.

---

# ═══════════════════════════════════════════════════════════
# AGENT TEAM INSTRUCTIONS (For Multi-Agent Systems)
# ═══════════════════════════════════════════════════════════

If using an agent swarm or multi-agent system (like Claude Code with sub-agents, Cursor Composer, or similar), assign chunks to specialized agents:

### Agent 1: Infrastructure Agent
- **Chunks**: 1, 3, 11
- **Skills**: Next.js setup, Supabase, auth, deployment
- **Dependencies**: Must complete Chunk 1 before all others

### Agent 2: Frontend Agent
- **Chunks**: 2, 5, 7, 10
- **Skills**: React, Tailwind, Framer Motion, responsive design
- **Dependencies**: Needs Chunk 1 complete

### Agent 3: AI/Backend Agent
- **Chunks**: 4, 6
- **Skills**: Claude API, Vercel AI SDK, prompt engineering, API routes
- **Dependencies**: Needs Chunks 1 + 3 complete

### Agent 4: Polish Agent
- **Chunks**: 8, 9
- **Skills**: UX polish, accessibility, SEO, performance
- **Dependencies**: Needs Chunks 1-7 complete

### Execution Order
```
Phase A (parallel): Agent 1 → Chunk 1
Phase B (parallel): Agent 2 → Chunk 2 | Agent 1 → Chunk 3
Phase C (parallel): Agent 3 → Chunk 4 | Agent 2 → Chunk 5
Phase D (parallel): Agent 3 → Chunk 6 | Agent 2 → Chunk 7
Phase E (parallel): Agent 2 → Chunk 10 | Agent 4 → Chunk 8
Phase F: Agent 4 → Chunk 9
Phase G: Agent 1 → Chunk 11
```

### Communication Protocol Between Agents
- After each chunk, the completing agent writes a CHANGELOG.md entry
- All agents share the same git repository
- Before starting a chunk, the agent pulls latest and reads CHANGELOG.md
- If a chunk depends on another agent's work, wait for that chunk's git commit
- All agents reference this MASTER_BLUEPRINT.md for design decisions — never deviate

---

**END OF MASTER BLUEPRINT**

*Last updated: February 2026*
*Version: 1.0*
*Total estimated build time: 8-12 hours*
