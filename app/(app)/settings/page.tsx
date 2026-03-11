/**
 * @component SettingsPage
 * @part-of Web3School — Settings & Preferences
 * @design Profile, onboarding fields, notifications, learning prefs, account management
 */
"use client";

import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  Save,
  User,
  Camera,
  Bell,
  BookOpen,
  Shield,
  Moon,
  Check,
  Briefcase,
  Wrench,
  Target,
  Link2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/lib/hooks/useUser";
import { cn } from "@/lib/utils";
import type { SocialLinks } from "@/lib/types";

interface SettingsData {
  full_name: string;
  email: string;
  avatar_url: string;
  timezone: string;
  // Onboarding: About You
  display_name: string;
  location: string;
  headline: string;
  // Onboarding: Career
  employment_status: string;
  current_role_title: string;
  years_experience: number;
  education_level: string;
  // Onboarding: Skills & Tools
  existing_skills: string;
  tools_used: string;
  tech_comfort: string;
  // Onboarding: Goals
  interest_areas: string[];
  career_goals: string[];
  time_commitment: string;
  target_timeline: string;
  // Social Links
  social_links: SocialLinks;
  // Notification prefs (stored client-side for now)
  email_reminders: boolean;
  push_notifications: boolean;
  reminder_frequency: string;
  // Learning prefs
  daily_goal: number;
  preferred_difficulty: string;
}

const TIMEZONES = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney",
];

const EMPLOYMENT_OPTIONS = [
  { value: "employed_fulltime", label: "Employed Full-Time" },
  { value: "employed_parttime", label: "Employed Part-Time" },
  { value: "freelancer", label: "Freelancer" },
  { value: "student", label: "Student" },
  { value: "career_changer", label: "Career Changer" },
  { value: "unemployed", label: "Unemployed" },
  { value: "entrepreneur", label: "Entrepreneur" },
];

const EDUCATION_OPTIONS = [
  { value: "high_school", label: "High School" },
  { value: "some_college", label: "Some College" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
  { value: "bootcamp", label: "Bootcamp" },
  { value: "self_taught", label: "Self-Taught" },
];

const TECH_COMFORT_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "familiar", label: "Familiar" },
  { value: "comfortable", label: "Comfortable" },
  { value: "advanced", label: "Advanced" },
];

const TIME_COMMITMENT_OPTIONS = [
  { value: "casual", label: "Casual (< 5 hrs/week)" },
  { value: "part_time", label: "Part-Time (5-10 hrs/week)" },
  { value: "half_time", label: "Half-Time (10-20 hrs/week)" },
  { value: "full_time", label: "Full-Time (20+ hrs/week)" },
];

const TIMELINE_OPTIONS = [
  { value: "1_month", label: "1 Month" },
  { value: "3_months", label: "3 Months" },
  { value: "6_months", label: "6 Months" },
  { value: "12_months", label: "12 Months" },
  { value: "no_rush", label: "No Rush" },
];

const INTEREST_OPTIONS = [
  "DeFi", "NFTs", "DAOs", "Gaming", "Infrastructure",
  "Security", "Trading", "Social", "Privacy", "AI + Web3",
];

const GOAL_OPTIONS = [
  "Get a Web3 job", "Build a project", "Earn crypto",
  "Start a DAO", "Freelance in Web3", "Learn for fun",
];

const AVATAR_ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_AVATAR_SIZE_BYTES = 5 * 1024 * 1024;

function CollapsibleSection({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left group"
      >
        <Icon className="w-4 h-4 text-text-muted" />
        <h2 className="font-heading font-bold text-text-primary flex-1">{title}</h2>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-text-muted transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-navy-mid border border-border rounded-xl p-6 space-y-4"
        >
          {children}
        </motion.div>
      )}
    </motion.section>
  );
}

function TagInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-text-secondary text-sm">{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-navy-deep border-border text-text-primary rounded-md"
      />
      <p className="text-text-muted text-xs">Separate items with commas</p>
    </div>
  );
}

function MultiSelect({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}) {
  const toggle = (item: string) => {
    onChange(
      selected.includes(item)
        ? selected.filter((s) => s !== item)
        : [...selected, item]
    );
  };

  return (
    <div className="space-y-2">
      <Label className="text-text-secondary text-sm">{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "px-3 py-1.5 text-xs rounded-full border transition-colors",
              selected.includes(opt)
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                : "bg-navy-deep border-border text-text-muted hover:text-text-primary"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const { profile, isLoading: userLoading, signOut, refreshProfile } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<SettingsData>({
    full_name: "",
    email: "",
    avatar_url: "",
    timezone: "UTC",
    display_name: "",
    location: "",
    headline: "",
    employment_status: "",
    current_role_title: "",
    years_experience: 0,
    education_level: "",
    existing_skills: "",
    tools_used: "",
    tech_comfort: "",
    interest_areas: [],
    career_goals: [],
    time_commitment: "",
    target_timeline: "",
    social_links: {},
    email_reminders: true,
    push_notifications: false,
    reminder_frequency: "daily",
    daily_goal: 10,
    preferred_difficulty: "beginner",
  });

  useEffect(() => {
    if (!profile) return;
    setSettings((prev) => ({
      ...prev,
      full_name: profile.full_name || "",
      email: profile.email || "",
      avatar_url: profile.avatar_url || "",
      timezone: profile.timezone || "UTC",
      display_name: profile.display_name || "",
      location: profile.location || "",
      headline: profile.headline || "",
      employment_status: profile.employment_status || "",
      current_role_title: profile.current_role_title || "",
      years_experience: profile.years_experience || 0,
      education_level: profile.education_level || "",
      existing_skills: (profile.existing_skills || []).join(", "),
      tools_used: (profile.tools_used || []).join(", "),
      tech_comfort: profile.tech_comfort || "",
      interest_areas: profile.interest_areas || [],
      career_goals: profile.career_goals || [],
      time_commitment: profile.time_commitment || "",
      target_timeline: profile.target_timeline || "",
      social_links: profile.social_links || {},
    }));
  }, [profile]);

  const avatarName = settings.display_name || settings.full_name || profile?.full_name || "User";
  const avatarInitials = avatarName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleAvatarUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!AVATAR_ACCEPTED_TYPES.includes(file.type)) {
      setAvatarError("Use a JPEG, PNG, WebP, or GIF image.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_AVATAR_SIZE_BYTES) {
      setAvatarError("Profile photos must be 5MB or smaller.");
      event.target.value = "";
      return;
    }

    setAvatarError(null);
    setIsUploadingAvatar(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "avatar");

      const response = await fetch("/api/onboarding/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.url) {
        throw new Error(result.error || "Failed to upload image");
      }

      setSettings((current) => ({
        ...current,
        avatar_url: result.url as string,
      }));
      await refreshProfile();
    } catch (err) {
      console.error("Avatar upload error:", err);
      setAvatarError(
        err instanceof Error ? err.message : "Failed to upload image"
      );
    } finally {
      setIsUploadingAvatar(false);
      event.target.value = "";
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);

    try {
      const parseCSV = (val: string): string[] =>
        val.split(",").map((s) => s.trim()).filter(Boolean);

      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: settings.full_name,
          avatar_url: settings.avatar_url || null,
          timezone: settings.timezone,
          display_name: settings.display_name || null,
          location: settings.location || null,
          headline: settings.headline || null,
          employment_status: settings.employment_status || null,
          current_role_title: settings.current_role_title || null,
          years_experience: settings.years_experience,
          education_level: settings.education_level || null,
          existing_skills: parseCSV(settings.existing_skills),
          tools_used: parseCSV(settings.tools_used),
          tech_comfort: settings.tech_comfort || null,
          interest_areas: settings.interest_areas,
          career_goals: settings.career_goals,
          time_commitment: settings.time_commitment || null,
          target_timeline: settings.target_timeline || null,
          social_links: settings.social_links,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");
      setSaved(true);
      await refreshProfile();
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/login";
  };

  if (userLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      {/* Profile Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-text-muted" />
          <h2 className="font-heading font-bold text-text-primary">Profile</h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-6 space-y-4">
          <div className="rounded-xl border border-white/10 bg-navy-deep/60 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploadingAvatar}
                  className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white transition hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {settings.avatar_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings.avatar_url}
                      alt={avatarName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    avatarInitials
                  )}
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                    <Camera className="mr-1 h-3 w-3" />
                    Edit
                  </span>
                  {isUploadingAvatar && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <Loader2 className="h-5 w-5 animate-spin text-white" />
                    </span>
                  )}
                </button>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-text-primary">
                    Profile photo
                  </p>
                  <p className="text-xs text-text-muted">
                    Shows up across your account and passport.
                  </p>
                  <p className="text-xs text-text-muted">
                    JPEG, PNG, WebP, or GIF up to 5MB.
                  </p>
                  {avatarError && (
                    <p className="text-xs text-red-400">{avatarError}</p>
                  )}
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploadingAvatar}
                className="border-white/15 bg-transparent text-white hover:bg-white/5 hover:text-white rounded-xl"
              >
                {isUploadingAvatar ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : settings.avatar_url ? (
                  "Change Image"
                ) : (
                  "Upload Image"
                )}
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept={AVATAR_ACCEPTED_TYPES.join(",")}
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="full_name" className="text-text-secondary text-sm">
              Full Name
            </Label>
            <Input
              id="full_name"
              value={settings.full_name}
              onChange={(e) =>
                setSettings((s) => ({ ...s, full_name: e.target.value }))
              }
              className="bg-navy-deep border-border text-text-primary rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-secondary text-sm">
              Email
            </Label>
            <Input
              id="email"
              value={settings.email}
              disabled
              className="bg-navy-deep border-border text-text-muted rounded-md"
            />
            <p className="text-text-muted text-xs">
              Email cannot be changed here.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-text-secondary text-sm">
              Timezone
            </Label>
            <Select
              value={settings.timezone}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, timezone: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz} value={tz} className="text-text-primary">
                    {tz.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* About You */}
      <CollapsibleSection icon={User} title="About You">
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Display Name</Label>
          <Input
            value={settings.display_name}
            onChange={(e) =>
              setSettings((s) => ({ ...s, display_name: e.target.value }))
            }
            placeholder="How others see you"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Location</Label>
          <Input
            value={settings.location}
            onChange={(e) =>
              setSettings((s) => ({ ...s, location: e.target.value }))
            }
            placeholder="e.g. New York, USA"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Headline</Label>
          <Input
            value={settings.headline}
            onChange={(e) =>
              setSettings((s) => ({ ...s, headline: e.target.value }))
            }
            placeholder="e.g. Aspiring Smart Contract Developer"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
      </CollapsibleSection>

      <Separator className="bg-border" />

      {/* Career */}
      <CollapsibleSection icon={Briefcase} title="Career">
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Employment Status</Label>
          <Select
            value={settings.employment_status}
            onValueChange={(value) =>
              setSettings((s) => ({ ...s, employment_status: value }))
            }
          >
            <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-border">
              {EMPLOYMENT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-text-primary">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Current Role Title</Label>
          <Input
            value={settings.current_role_title}
            onChange={(e) =>
              setSettings((s) => ({ ...s, current_role_title: e.target.value }))
            }
            placeholder="e.g. Software Engineer"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Years of Experience</Label>
          <Input
            type="number"
            min={0}
            max={50}
            value={settings.years_experience}
            onChange={(e) =>
              setSettings((s) => ({ ...s, years_experience: Number(e.target.value) }))
            }
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Education Level</Label>
          <Select
            value={settings.education_level}
            onValueChange={(value) =>
              setSettings((s) => ({ ...s, education_level: value }))
            }
          >
            <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-border">
              {EDUCATION_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-text-primary">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CollapsibleSection>

      <Separator className="bg-border" />

      {/* Skills & Tools */}
      <CollapsibleSection icon={Wrench} title="Skills & Tools">
        <TagInput
          label="Existing Skills"
          value={settings.existing_skills}
          onChange={(v) => setSettings((s) => ({ ...s, existing_skills: v }))}
          placeholder="e.g. JavaScript, Solidity, React"
        />
        <TagInput
          label="Tools Used"
          value={settings.tools_used}
          onChange={(v) => setSettings((s) => ({ ...s, tools_used: v }))}
          placeholder="e.g. VS Code, Hardhat, MetaMask"
        />
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Tech Comfort</Label>
          <Select
            value={settings.tech_comfort}
            onValueChange={(value) =>
              setSettings((s) => ({ ...s, tech_comfort: value }))
            }
          >
            <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
              <SelectValue placeholder="Select comfort level" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-border">
              {TECH_COMFORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-text-primary">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CollapsibleSection>

      <Separator className="bg-border" />

      {/* Goals */}
      <CollapsibleSection icon={Target} title="Goals">
        <MultiSelect
          label="Interest Areas"
          options={INTEREST_OPTIONS}
          selected={settings.interest_areas}
          onChange={(v) => setSettings((s) => ({ ...s, interest_areas: v }))}
        />
        <MultiSelect
          label="Career Goals"
          options={GOAL_OPTIONS}
          selected={settings.career_goals}
          onChange={(v) => setSettings((s) => ({ ...s, career_goals: v }))}
        />
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Time Commitment</Label>
          <Select
            value={settings.time_commitment}
            onValueChange={(value) =>
              setSettings((s) => ({ ...s, time_commitment: value }))
            }
          >
            <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
              <SelectValue placeholder="Select commitment" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-border">
              {TIME_COMMITMENT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-text-primary">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Target Timeline</Label>
          <Select
            value={settings.target_timeline}
            onValueChange={(value) =>
              setSettings((s) => ({ ...s, target_timeline: value }))
            }
          >
            <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-border">
              {TIMELINE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-text-primary">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CollapsibleSection>

      <Separator className="bg-border" />

      {/* Social Links */}
      <CollapsibleSection icon={Link2} title="Social Links">
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Twitter / X</Label>
          <Input
            value={settings.social_links.twitter || ""}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                social_links: { ...s.social_links, twitter: e.target.value },
              }))
            }
            placeholder="https://twitter.com/yourhandle"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">LinkedIn</Label>
          <Input
            value={settings.social_links.linkedin || ""}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                social_links: { ...s.social_links, linkedin: e.target.value },
              }))
            }
            placeholder="https://linkedin.com/in/yourprofile"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">GitHub</Label>
          <Input
            value={settings.social_links.github || ""}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                social_links: { ...s.social_links, github: e.target.value },
              }))
            }
            placeholder="https://github.com/yourusername"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-text-secondary text-sm">Portfolio</Label>
          <Input
            value={settings.social_links.portfolio || ""}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                social_links: { ...s.social_links, portfolio: e.target.value },
              }))
            }
            placeholder="https://yoursite.com"
            className="bg-navy-deep border-border text-text-primary rounded-md"
          />
        </div>
      </CollapsibleSection>

      <Separator className="bg-border" />

      {/* Notification Preferences */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-text-muted" />
          <h2 className="font-heading font-bold text-text-primary">
            Notifications
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">
                Email Reminders
              </p>
              <p className="text-text-muted text-xs">
                Daily streak reminders via email
              </p>
            </div>
            <Switch
              checked={settings.email_reminders}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, email_reminders: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">
                Push Notifications
              </p>
              <p className="text-text-muted text-xs">
                Browser push notifications (coming soon)
              </p>
            </div>
            <Switch
              checked={settings.push_notifications}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, push_notifications: checked }))
              }
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Reminder Frequency
            </Label>
            <Select
              value={settings.reminder_frequency}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, reminder_frequency: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="daily" className="text-text-primary">
                  Daily
                </SelectItem>
                <SelectItem value="weekdays" className="text-text-primary">
                  Weekdays Only
                </SelectItem>
                <SelectItem value="weekly" className="text-text-primary">
                  Weekly Summary
                </SelectItem>
                <SelectItem value="never" className="text-text-primary">
                  Never
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Learning Preferences */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-text-muted" />
          <h2 className="font-heading font-bold text-text-primary">
            Learning Preferences
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-6 space-y-4">
          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Daily Goal (minutes)
            </Label>
            <Select
              value={String(settings.daily_goal)}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, daily_goal: Number(value) }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="5" className="text-text-primary">
                  5 minutes
                </SelectItem>
                <SelectItem value="10" className="text-text-primary">
                  10 minutes
                </SelectItem>
                <SelectItem value="15" className="text-text-primary">
                  15 minutes
                </SelectItem>
                <SelectItem value="30" className="text-text-primary">
                  30 minutes
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Preferred Difficulty
            </Label>
            <Select
              value={settings.preferred_difficulty}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, preferred_difficulty: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="beginner" className="text-text-primary">
                  Beginner — Take it slow
                </SelectItem>
                <SelectItem value="intermediate" className="text-text-primary">
                  Intermediate — Challenge me
                </SelectItem>
                <SelectItem value="advanced" className="text-text-primary">
                  Advanced — Full speed
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Appearance */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-text-muted" />
          <h2 className="font-heading font-bold text-text-primary">
            Appearance
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">Dark Mode</p>
              <p className="text-text-muted text-xs">
                Web3School is designed for dark mode
              </p>
            </div>
            <Switch checked disabled />
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Account */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-text-muted" />
          <h2 className="font-heading font-bold text-text-primary">Account</h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-6 space-y-4">
          <Button
            variant="outline"
            className="w-full border-white/20 bg-transparent text-white hover:bg-white/5 hover:text-white rounded-xl"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
          <Button
            variant="outline"
            className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl"
            disabled
            title="Contact support to delete your account"
          >
            Delete Account
          </Button>
          <p className="text-text-muted text-xs text-center">
            Contact support to delete your account and all data.
          </p>
        </div>
      </motion.section>

      {/* Save button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="sticky bottom-20 md:bottom-4 z-30"
      >
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className={cn(
            "w-full rounded-md py-5 font-semibold shadow-lg transition-all",
            saved
              ? "bg-green-success hover:bg-green-success text-white"
              : "bg-white text-black hover:opacity-85"
          )}
        >
          {isSaving ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : saved ? (
            <Check className="w-4 h-4 mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          {isSaving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </Button>
      </motion.div>
    </div>
  );
}
