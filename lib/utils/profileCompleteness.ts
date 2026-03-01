import type { Profile } from "@/lib/types";

interface CompletenessResult {
  percentage: number;
  filled: string[];
  missing: string[];
}

const WEIGHTS: Record<string, { weight: number; check: (p: Profile) => boolean }> = {
  name: {
    weight: 10,
    check: (p) => !!p.full_name && p.full_name.trim().length > 0,
  },
  employment: {
    weight: 10,
    check: (p) => !!p.employment_status,
  },
  skills: {
    weight: 10,
    check: (p) => Array.isArray(p.existing_skills) && p.existing_skills.length > 0,
  },
  interests: {
    weight: 10,
    check: (p) => Array.isArray(p.interest_areas) && p.interest_areas.length > 0,
  },
  goals: {
    weight: 10,
    check: (p) => Array.isArray(p.career_goals) && p.career_goals.length > 0,
  },
  tech_comfort: {
    weight: 10,
    check: (p) => !!p.tech_comfort,
  },
  time: {
    weight: 5,
    check: (p) => !!p.time_commitment,
  },
  timeline: {
    weight: 5,
    check: (p) => !!p.target_timeline,
  },
  location: {
    weight: 5,
    check: (p) => !!p.location && p.location.trim().length > 0,
  },
  education: {
    weight: 5,
    check: (p) => !!p.education_level,
  },
  social_links: {
    weight: 10,
    check: (p) => {
      if (!p.social_links || typeof p.social_links !== "object") return false;
      return Object.values(p.social_links).some((v) => !!v && String(v).trim().length > 0);
    },
  },
  resume: {
    weight: 10,
    check: (p) => !!p.resume_url,
  },
};

export function calculateProfileCompleteness(profile: Profile): CompletenessResult {
  const filled: string[] = [];
  const missing: string[] = [];
  let earnedWeight = 0;

  for (const [key, { weight, check }] of Object.entries(WEIGHTS)) {
    if (check(profile)) {
      filled.push(key);
      earnedWeight += weight;
    } else {
      missing.push(key);
    }
  }

  return {
    percentage: earnedWeight,
    filled,
    missing,
  };
}
