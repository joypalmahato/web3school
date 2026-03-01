-- 004_onboarding_profile.sql
-- Adds onboarding profile fields to the profiles table.

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS display_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS headline TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS current_role_title TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS employment_status TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS years_experience INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS education_level TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS education_field TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS tech_comfort TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS existing_skills JSONB DEFAULT '[]';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS tools_used JSONB DEFAULT '[]';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS interest_areas JSONB DEFAULT '[]';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS career_goals JSONB DEFAULT '[]';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS time_commitment TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS target_timeline TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS budget TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS social_links JSONB DEFAULT '{}';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS resume_url TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS resume_text TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS ai_profile_summary TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS onboarding_step INTEGER DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS onboarding_completed_at TIMESTAMPTZ;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS profile_completeness INTEGER DEFAULT 0;
