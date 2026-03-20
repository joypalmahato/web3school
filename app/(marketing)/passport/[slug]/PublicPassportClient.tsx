"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Flame, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/app/ProgressRing";
import { SkillRadar } from "@/components/app/SkillRadar";
import { Logo } from "@/components/shared/Logo";
import type { TraitScores } from "@/lib/types";

interface PublicPassportClientProps {
  fullName: string;
  avatarUrl: string | null;
  roleName: string;
  level: number;
  xpTotal: number;
  streakCount: number;
  completionPercent: number;
  projectCount: number;
  skills: string[];
  traits: TraitScores | null;
}

export function PublicPassportClient({
  fullName,
  avatarUrl,
  roleName,
  level,
  xpTotal,
  streakCount,
  completionPercent,
  projectCount,
  skills,
  traits,
}: PublicPassportClientProps) {
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg space-y-6"
      >
        {/* Passport Card */}
        <div className="bg-[#111111] border border-border rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
          <Logo size="sm" href="/" />
              <span className="text-text-muted text-xs font-mono">
                SKILL PASSPORT
              </span>
            </div>

            {/* User */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-primary/10 flex items-center justify-center border border-purple-primary/20">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={fullName}
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <span className="text-lg font-heading font-bold text-purple-primary">
                    {initials}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-text-primary">
                  {fullName}
                </h1>
                <p className="text-purple-primary font-medium text-sm">
                  {roleName}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 text-purple-primary" />
                  <span className="text-lg font-heading font-bold text-text-primary">
                    {level}
                  </span>
                </div>
                <p className="text-text-muted text-[10px]">Level</p>
              </div>
              <div className="text-center">
                <span className="text-lg font-heading font-bold text-text-primary">
                  {xpTotal.toLocaleString()}
                </span>
                <p className="text-text-muted text-[10px]">XP</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-warning" />
                  <span className="text-lg font-heading font-bold text-text-primary">
                    {streakCount}
                  </span>
                </div>
                <p className="text-text-muted text-[10px]">Streak</p>
              </div>
              <div className="text-center">
                <span className="text-lg font-heading font-bold text-text-primary">
                  {projectCount}
                </span>
                <p className="text-text-muted text-[10px]">Projects</p>
              </div>
            </div>

            {/* Completion */}
            <div className="flex items-center justify-center">
              <ProgressRing
                progress={completionPercent}
                size={100}
                strokeWidth={6}
                sublabel="Roadmap"
              />
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="space-y-2">
                <p className="text-text-muted text-xs font-mono flex items-center gap-1.5">
                  <Award className="w-3 h-3" />
                  KEY SKILLS
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-purple-primary/10 text-purple-light px-2.5 py-1 rounded-full flex items-center gap-1"
                    >
                      <Code className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trait Radar */}
        {traits && (
          <div className="bg-navy-mid border border-border rounded-2xl p-6">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Trait Profile
            </h3>
            <SkillRadar traits={traits} />
          </div>
        )}

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-text-secondary text-sm">
            Build your own verifiable Web3 Skill Passport
          </p>
          <Button
            asChild
            className="bg-white text-black hover:opacity-85 rounded-xl px-8 py-5 text-lg font-semibold w-full"
          >
            <Link href="/signup">
              Start Your Discovery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-text-muted text-xs">
            Free AI-powered career discovery. Always free.
          </p>
        </div>
      </motion.div>
    </div>
    );
}
