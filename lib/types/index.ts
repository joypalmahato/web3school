// lib/types/index.ts — SINGLE SOURCE OF TRUTH FOR ALL TYPES
// Database types for the InsForge PostgreSQL schema.
// Update manually or regenerate when schema changes.
// All components, API routes, and hooks must import types from here.

export type UserType = "seeker" | "expert" | "employer";
export type TaskType = "lesson" | "exercise" | "project" | "quiz" | "reflection";
export type TaskStatus = "pending" | "in_progress" | "completed" | "skipped";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type RoleCategory =
  | "technical"
  | "semi-technical"
  | "non-technical"
  | "creative";
export type DemandLevel = "low" | "medium" | "high" | "very_high";

export type EmploymentStatus =
  | "employed_fulltime"
  | "employed_parttime"
  | "freelancer"
  | "student"
  | "career_changer"
  | "unemployed"
  | "entrepreneur";

export type TechComfort = "beginner" | "familiar" | "comfortable" | "advanced";

export type TimeCommitment =
  | "casual"
  | "part_time"
  | "half_time"
  | "full_time";

export type TargetTimeline =
  | "1_month"
  | "3_months"
  | "6_months"
  | "12_months"
  | "no_rush";

export type Budget = "free_only" | "low" | "medium" | "high" | "no_limit";

export type EducationLevel =
  | "high_school"
  | "some_college"
  | "bachelors"
  | "masters"
  | "phd"
  | "bootcamp"
  | "self_taught";

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Profile {
  id: string;
  user_id?: string;
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
  // Onboarding profile fields
  display_name: string | null;
  headline: string | null;
  location: string | null;
  current_role_title: string | null;
  employment_status: EmploymentStatus | null;
  years_experience: number;
  education_level: EducationLevel | null;
  education_field: string | null;
  tech_comfort: TechComfort | null;
  existing_skills: string[];
  tools_used: string[];
  interest_areas: string[];
  career_goals: string[];
  time_commitment: TimeCommitment | null;
  target_timeline: TargetTimeline | null;
  budget: Budget | null;
  social_links: SocialLinks;
  resume_url: string | null;
  resume_text: string | null;
  ai_profile_summary: string | null;
  onboarding_step: number;
  onboarding_completed_at: string | null;
  profile_completeness: number;
  // Waitlist & approval gating
  is_approved: boolean;
  approved_at: string | null;
  waitlist_id: string | null;
  referral_code: string | null;
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
  status: "in_progress" | "completed" | "abandoned";
  conversation_history: ConversationMessage[];
  extracted_traits: TraitScores;
  matched_roles: RoleMatch[];
  primary_role_id: string | null;
  confidence_score: number | null;
  completed_at: string | null;
  created_at: string;
}

export interface ConversationMessage {
  role: "user" | "assistant";
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
  status: "active" | "paused" | "completed" | "abandoned";
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
  type: "article" | "video" | "tutorial" | "tool";
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
  // Approval & referral tracking
  status: string;
  approved_at: string | null;
  referral_count: number;
  user_id: string | null;
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
  0, // Level 1
  100, // Level 2
  250, // Level 3
  500, // Level 4
  1000, // Level 5
  1750, // Level 6
  2750, // Level 7
  4000, // Level 8
  5500, // Level 9
  7500, // Level 10
] as const;

export function getLevelFromXP(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function getXPForNextLevel(xp: number): {
  current: number;
  needed: number;
  progress: number;
} {
  const level = getLevelFromXP(xp);
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold =
    LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return {
    current: xp - currentThreshold,
    needed: nextThreshold - currentThreshold,
    progress: (xp - currentThreshold) / (nextThreshold - currentThreshold),
  };
}
