/**
 * @component PassportPage
 * @part-of Web3School — Skill Passport
 * @design Card-style passport with skills, projects, stats, share toggle
 */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  Share2,
  Copy,
  Check,
  Download,
  Eye,
  EyeOff,
  Star,
  Flame,
  Award,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SkillTree } from "@/components/app/SkillTree";
import { ProgressRing } from "@/components/app/ProgressRing";
import { SkillRadar } from "@/components/app/SkillRadar";
import { cn } from "@/lib/utils";
import { APP_URL } from "@/lib/utils/constants";
import type { TraitScores } from "@/lib/types";

interface SkillNode {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  status: string;
}

interface PassportData {
  passport: {
    id: string;
    is_public: boolean;
    public_slug: string;
    total_score: number;
  };
  profile: {
    full_name: string | null;
    avatar_url: string | null;
    email: string;
    xp_total: number;
    level: number;
    streak_count: number;
    longest_streak: number;
  };
  role_name: string;
  skills: SkillNode[];
  projects: string[];
  completion_percent: number;
  traits: TraitScores | null;
}

export default function PassportPage() {
  const [data, setData] = useState<PassportData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchPassport = async () => {
      try {
        const res = await fetch("/api/passport");
        if (!res.ok) throw new Error("Failed to fetch passport");
        const json = await res.json();
        setData(json);
        setIsPublic(json.passport.is_public);
      } catch (err) {
        console.error("Passport fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPassport();
  }, []);

  const handleTogglePublic = async (checked: boolean) => {
    setIsUpdating(true);
    setIsPublic(checked);

    try {
      await fetch("/api/passport", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_public: checked }),
      });
    } catch (err) {
      console.error("Toggle error:", err);
      setIsPublic(!checked); // Revert
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCopyLink = async () => {
    if (!data?.passport.public_slug) return;
    const url = `${APP_URL}/passport/${data.passport.public_slug}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-purple-primary animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-text-secondary">Unable to load passport.</p>
      </div>
    );
  }

  const { passport, profile, role_name, skills, projects, completion_percent, traits } = data;

  const initials = profile.full_name
    ? profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "??";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Passport Card Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-navy-mid to-navy-deep border border-border rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Header with badge */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-text-muted text-xs font-mono tracking-wider">
              WEB3SCHOOL SKILL PASSPORT
            </p>
            <div className="flex items-center gap-1.5 bg-purple-primary/10 px-2.5 py-1 rounded-full">
              <Star className="w-3 h-3 text-purple-primary" />
              <span className="text-purple-primary text-xs font-semibold">
                Level {profile.level}
              </span>
            </div>
          </div>

          {/* User info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-primary/10 flex items-center justify-center border border-purple-primary/20">
              {profile.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.full_name || "User"}
                  className="w-full h-full rounded-2xl object-cover"
                />
              ) : (
                <span className="text-xl font-heading font-bold text-purple-primary">
                  {initials}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-text-primary">
                {profile.full_name || "Web3 Learner"}
              </h2>
              <p className="text-purple-primary font-medium text-sm">
                {role_name}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-text-primary">
                {profile.xp_total.toLocaleString()}
              </p>
              <p className="text-text-muted text-xs">Total XP</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-amber-warning" />
                <p className="text-2xl font-heading font-bold text-text-primary">
                  {profile.streak_count}
                </p>
              </div>
              <p className="text-text-muted text-xs">Day Streak</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-text-primary">
                {completion_percent}%
              </p>
              <p className="text-text-muted text-xs">Complete</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visibility & Share */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-navy-mid border border-border rounded-xl p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          {isPublic ? (
            <Eye className="w-4 h-4 text-green-success" />
          ) : (
            <EyeOff className="w-4 h-4 text-text-muted" />
          )}
          <div>
            <p className="text-text-primary text-sm font-medium">
              {isPublic ? "Public Passport" : "Private Passport"}
            </p>
            <p className="text-text-muted text-xs">
              {isPublic
                ? "Anyone with the link can view"
                : "Only you can see this"}
            </p>
          </div>
        </div>
        <Switch
          checked={isPublic}
          onCheckedChange={handleTogglePublic}
          disabled={isUpdating}
        />
      </motion.div>

      {/* Share buttons */}
      {isPublic && passport.public_slug && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3"
        >
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="flex-1 border-border text-text-primary rounded-xl"
          >
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-green-success" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-border text-text-primary rounded-xl"
          >
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Check out my Web3 Skill Passport! I'm a Level ${profile.level} ${role_name} 🎯`
              )}&url=${encodeURIComponent(
                `${APP_URL}/passport/${passport.public_slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share on X
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-border text-text-muted rounded-xl"
            disabled
            title="Coming soon"
          >
            <Download className="w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {/* Skill Tree */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-navy-mid border border-border rounded-2xl p-6"
      >
        <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-primary" />
          Skills
        </h3>
        <SkillTree
          skills={skills.map((s) => ({
            ...s,
            status: s.status as "completed" | "in_progress" | "locked",
          }))}
        />
      </motion.div>

      {/* Skill Radar */}
      {traits && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-navy-mid border border-border rounded-2xl p-6"
        >
          <h3 className="font-heading font-bold text-text-primary mb-2">
            Trait Profile
          </h3>
          <SkillRadar traits={traits} />
        </motion.div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-navy-mid border border-border rounded-2xl p-6"
        >
          <h3 className="font-heading font-bold text-text-primary mb-4">
            Completed Projects
          </h3>
          <div className="space-y-2">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-navy-deep rounded-lg"
              >
                <Check className="w-4 h-4 text-green-success flex-shrink-0" />
                <span className="text-text-primary text-sm">{project}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* View public page link */}
      {isPublic && passport.public_slug && (
        <div className="text-center pb-4">
          <Button
            asChild
            variant="ghost"
            className="text-text-muted hover:text-text-primary"
          >
            <a
              href={`/passport/${passport.public_slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Public Page
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
