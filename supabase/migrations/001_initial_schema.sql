-- ============================================================
-- WEB3SCHOOL — Initial Database Schema
-- ============================================================

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
  current_role_id UUID,
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
  user_type TEXT,
  referral_source TEXT,
  referral_code TEXT,
  referred_by TEXT,
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
  icon TEXT,
  salary_range_min INTEGER,
  salary_range_max INTEGER,
  demand_level TEXT CHECK (demand_level IN ('low', 'medium', 'high', 'very_high')),
  competition_level TEXT CHECK (competition_level IN ('low', 'medium', 'high', 'very_high')),
  key_skills JSONB DEFAULT '[]',
  personality_traits JSONB DEFAULT '[]',
  day_in_life TEXT,
  growth_path TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add foreign key to profiles after roles table exists
ALTER TABLE public.profiles ADD CONSTRAINT profiles_current_role_id_fkey FOREIGN KEY (current_role_id) REFERENCES roles(id);

-- Skills
CREATE TABLE public.skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT,
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
  conversation_history JSONB DEFAULT '[]',
  extracted_traits JSONB DEFAULT '{}',
  matched_roles JSONB DEFAULT '[]',
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
  milestones JSONB DEFAULT '[]',
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
  content JSONB DEFAULT '{}',
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
  action TEXT NOT NULL,
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
  skills_verified JSONB DEFAULT '[]',
  projects_completed JSONB DEFAULT '[]',
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
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
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
