-- Fix all user_id FKs: were pointing to profiles.id (auto-generated PK),
-- should point to profiles.user_id (the auth user ID).
-- All API code inserts auth user IDs, not profile PKs.

-- discovery_sessions
ALTER TABLE discovery_sessions DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE discovery_sessions ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- daily_tasks
ALTER TABLE daily_tasks DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE daily_tasks ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- nudges
ALTER TABLE nudges DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE nudges ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- result_cards
ALTER TABLE result_cards DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE result_cards ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- roadmaps
ALTER TABLE roadmaps DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE roadmaps ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- skill_passports
ALTER TABLE skill_passports DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE skill_passports ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- streak_history
ALTER TABLE streak_history DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE streak_history ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- tutor_sessions
ALTER TABLE tutor_sessions DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE tutor_sessions ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- xp_log
ALTER TABLE xp_log DROP CONSTRAINT IF EXISTS fk_user_id_profiles_id;
ALTER TABLE xp_log ADD CONSTRAINT fk_user_id_profiles_user_id
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
