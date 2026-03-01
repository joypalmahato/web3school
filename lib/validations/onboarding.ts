import { z } from "zod/v4";

export const step1Schema = z.object({
  full_name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  display_name: z.string().max(50, "Display name is too long").optional().or(z.literal("")),
  avatar_url: z.string().url().optional().or(z.literal("")).or(z.literal(null)),
  location: z.string().max(100).optional().or(z.literal("")),
});

export type Step1Data = z.infer<typeof step1Schema>;

export const step2Schema = z.object({
  employment_status: z.enum([
    "employed_fulltime",
    "employed_parttime",
    "freelancer",
    "student",
    "career_changer",
    "unemployed",
    "entrepreneur",
  ]),
  current_role_title: z.string().max(100).optional().or(z.literal("")),
  years_experience: z.number().min(0).max(50),
  education_level: z
    .enum([
      "high_school",
      "some_college",
      "bachelors",
      "masters",
      "phd",
      "bootcamp",
      "self_taught",
    ])
    .optional(),
  education_field: z.string().max(100).optional().or(z.literal("")),
});

export type Step2Data = z.infer<typeof step2Schema>;

export const step3Schema = z.object({
  tech_comfort: z.enum(["beginner", "familiar", "comfortable", "advanced"]),
  existing_skills: z.array(z.string()),
  tools_used: z.array(z.string()),
});

export type Step3Data = z.infer<typeof step3Schema>;

export const step4Schema = z.object({
  interest_areas: z
    .array(z.string())
    .min(1, "Pick at least one interest")
    .max(5, "Max 5 interests"),
  career_goals: z
    .array(z.string())
    .min(1, "Pick at least one goal")
    .max(3, "Max 3 goals"),
  time_commitment: z.enum(["casual", "part_time", "half_time", "full_time"]),
  target_timeline: z.enum(["1_month", "3_months", "6_months", "12_months", "no_rush"]),
});

export type Step4Data = z.infer<typeof step4Schema>;

export const step5Schema = z.object({
  headline: z.string().max(160, "Headline is too long").optional().or(z.literal("")),
  social_links: z.object({
    twitter: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    github: z.string().url().optional().or(z.literal("")),
    portfolio: z.string().url().optional().or(z.literal("")),
  }),
  resume_url: z.string().url().optional().or(z.literal("")).or(z.literal(null)),
  budget: z.enum(["free_only", "low", "medium", "high", "no_limit"]).optional(),
});

export type Step5Data = z.infer<typeof step5Schema>;

export type OnboardingStepData = Step1Data | Step2Data | Step3Data | Step4Data | Step5Data;

export const stepSchemas = [step1Schema, step2Schema, step3Schema, step4Schema, step5Schema] as const;
