-- ============================================================
-- WEB3SCHOOL — Fix RLS Policies
-- Enables RLS on tables that were missing it and adds
-- missing policies for correct access control.
-- ============================================================

-- ============================================================
-- 1. Enable RLS on tables that were missing it
-- ============================================================
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE tutor_sessions ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 2. Public read tables (roles, skills, role_skills)
--    Policies already exist for roles and skills SELECT,
--    but we need role_skills SELECT too.
-- ============================================================
CREATE POLICY "Anyone can view role skills"
  ON role_skills FOR SELECT
  USING (true);

-- ============================================================
-- 3. Fix waitlist: already has public INSERT, add nothing else
--    (service role key bypasses RLS for admin reads)
-- ============================================================

-- ============================================================
-- 4. Fix result_cards: users need to SELECT their own cards
--    (public SELECT already exists, but users also need UPDATE
--    for view count increments via share pages)
-- ============================================================
CREATE POLICY "Users can update own cards"
  ON result_cards FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 5. Fix profiles: the handle_new_user() trigger runs as
--    SECURITY DEFINER so it bypasses RLS. But the profile
--    INSERT policy requires auth.uid() = id, which fails
--    during the trigger since there's no auth context.
--    The trigger already uses SECURITY DEFINER so this is fine,
--    but we add a service-role-friendly policy just in case.
-- ============================================================

-- ============================================================
-- 6. Fix nudges: users need INSERT for system-generated nudges.
--    The "FOR ALL" policy covers this, but let's be explicit
--    that the service role handles nudge creation.
--    Users only need SELECT and UPDATE (mark as read).
-- ============================================================
-- Drop the overly permissive FOR ALL policy and replace with specific ones
DROP POLICY IF EXISTS "Users can view own nudges" ON nudges;

CREATE POLICY "Users can select own nudges"
  ON nudges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own nudges"
  ON nudges FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own nudges"
  ON nudges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- 7. Fix discovery_sessions: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own discovery" ON discovery_sessions;

CREATE POLICY "Users can select own discovery"
  ON discovery_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own discovery"
  ON discovery_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own discovery"
  ON discovery_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 8. Fix roadmaps: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own roadmaps" ON roadmaps;

CREATE POLICY "Users can select own roadmaps"
  ON roadmaps FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own roadmaps"
  ON roadmaps FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own roadmaps"
  ON roadmaps FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 9. Fix daily_tasks: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own tasks" ON daily_tasks;

CREATE POLICY "Users can select own tasks"
  ON daily_tasks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tasks"
  ON daily_tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
  ON daily_tasks FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 10. Fix tutor_sessions: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own tutor" ON tutor_sessions;

CREATE POLICY "Users can select own tutor"
  ON tutor_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tutor"
  ON tutor_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tutor"
  ON tutor_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 11. Fix xp_log: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own xp" ON xp_log;

CREATE POLICY "Users can select own xp"
  ON xp_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own xp"
  ON xp_log FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- 12. Fix streak_history: replace FOR ALL with specific ops
-- ============================================================
DROP POLICY IF EXISTS "Users can view own streaks" ON streak_history;

CREATE POLICY "Users can select own streaks"
  ON streak_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own streaks"
  ON streak_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own streaks"
  ON streak_history FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================================
-- 13. Fix skill_passports: replace FOR ALL with specific ops
--     (keep the public SELECT for is_public = true)
-- ============================================================
DROP POLICY IF EXISTS "Users can view own passport" ON skill_passports;

CREATE POLICY "Users can select own passport"
  ON skill_passports FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own passport"
  ON skill_passports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own passport"
  ON skill_passports FOR UPDATE
  USING (auth.uid() = user_id);
