import { z } from "zod/v4";

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.email("Please enter a valid email address"),
  user_type: z.enum(
    ["in_web3_no_skills", "want_to_enter", "laid_off", "curious", "other"],
    { message: "Please select an option" }
  ),
  referral_source: z
    .enum(["twitter", "discord", "telegram", "friend", "other"])
    .optional(),
  referred_by: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const USER_TYPE_OPTIONS = [
  { value: "in_web3_no_skills", label: "I'm in Web3 but need real skills" },
  { value: "want_to_enter", label: "I want to break into Web3" },
  { value: "laid_off", label: "I'm changing careers / reskilling" },
  { value: "curious", label: "Just curious about Web3" },
  { value: "other", label: "Something else" },
] as const;

export const REFERRAL_SOURCE_OPTIONS = [
  { value: "twitter", label: "Twitter / X" },
  { value: "discord", label: "Discord" },
  { value: "telegram", label: "Telegram" },
  { value: "friend", label: "A friend" },
  { value: "other", label: "Other" },
] as const;
