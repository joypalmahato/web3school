-- 007_referral_events.sql
-- Stores one auditable referral event per referred waitlist signup.

CREATE TABLE IF NOT EXISTS public.referral_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_waitlist_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
  referred_waitlist_id UUID NOT NULL UNIQUE REFERENCES waitlist(id) ON DELETE CASCADE,
  referrer_code TEXT NOT NULL,
  referred_user_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE referral_events ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_referral_events_referrer_waitlist
  ON referral_events(referrer_waitlist_id);

CREATE INDEX IF NOT EXISTS idx_referral_events_referred_user
  ON referral_events(referred_user_id);
