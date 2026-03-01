-- 006_waitlist_approval.sql
-- Adds approval gating on profiles and referral/status tracking on waitlist.

-- Approval gating on profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS is_approved BOOLEAN DEFAULT false;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS waitlist_id UUID REFERENCES waitlist(id);
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS referral_code TEXT;

-- Extra tracking on waitlist
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'waiting';
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS referral_count INTEGER DEFAULT 0;
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS user_id UUID;

-- Auto-generate referral_code (name-based) + waitlist_position on insert
CREATE OR REPLACE FUNCTION generate_waitlist_defaults() RETURNS TRIGGER AS $$
DECLARE
  base_name TEXT;
  suffix TEXT;
BEGIN
  IF NEW.referral_code IS NULL THEN
    -- Build name-based code: lowercase first name + 4-char random suffix
    base_name := lower(regexp_replace(split_part(COALESCE(NEW.name, 'user'), ' ', 1), '[^a-zA-Z0-9]', '', 'g'));
    IF base_name = '' THEN base_name := 'user'; END IF;
    suffix := substr(md5(random()::text), 1, 4);
    NEW.referral_code := base_name || '-' || suffix;
  END IF;
  IF NEW.waitlist_position IS NULL THEN
    SELECT COALESCE(MAX(waitlist_position), 0) + 1 INTO NEW.waitlist_position FROM waitlist;
  END IF;
  RETURN NEW;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS waitlist_auto_defaults ON waitlist;
CREATE TRIGGER waitlist_auto_defaults BEFORE INSERT ON waitlist
  FOR EACH ROW EXECUTE FUNCTION generate_waitlist_defaults();

-- Auto-generate referral_code (name-based) on profile insert
CREATE OR REPLACE FUNCTION generate_profile_referral_code() RETURNS TRIGGER AS $$
DECLARE
  base_name TEXT;
  suffix TEXT;
BEGIN
  IF NEW.referral_code IS NULL THEN
    base_name := lower(regexp_replace(split_part(COALESCE(NEW.full_name, 'user'), ' ', 1), '[^a-zA-Z0-9]', '', 'g'));
    IF base_name = '' THEN base_name := 'user'; END IF;
    suffix := substr(md5(random()::text), 1, 4);
    NEW.referral_code := base_name || '-' || suffix;
  END IF;
  RETURN NEW;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS profile_referral_code ON profiles;
CREATE TRIGGER profile_referral_code BEFORE INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION generate_profile_referral_code();

-- Indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON waitlist(referral_code);
CREATE INDEX IF NOT EXISTS idx_profiles_referral_code ON profiles(referral_code);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);
