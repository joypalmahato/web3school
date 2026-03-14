-- 008_open_beta.sql
-- Opens Web3School beta access for all existing and future users.

ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS beta_access_emailed_at TIMESTAMPTZ;

ALTER TABLE profiles
ALTER COLUMN is_approved SET DEFAULT true;

UPDATE profiles
SET
  is_approved = true,
  approved_at = COALESCE(approved_at, NOW())
WHERE COALESCE(is_approved, false) = false
   OR approved_at IS NULL;

ALTER TABLE waitlist
ALTER COLUMN status SET DEFAULT 'approved';

UPDATE waitlist
SET
  status = 'approved',
  approved_at = COALESCE(approved_at, NOW())
WHERE COALESCE(status, '') <> 'approved'
   OR approved_at IS NULL;
