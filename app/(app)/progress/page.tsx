/**
 * @component ProgressPage
 * @part-of Web3School — Progress Dashboard & Gamification
 * @design Streak, XP, learning stats, skill radar, heatmap, milestones
 */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  Flame,
  Star,
  Trophy,
  Check,
  BookOpen,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { ProgressRing } from "@/components/app/ProgressRing";
import { CalendarHeatmap } from "@/components/app/CalendarHeatmap";
import { SkillRadar } from "@/components/app/SkillRadar";
import { NudgeToast } from "@/components/app/NudgeToast";
import { cn } from "@/lib/utils";
import { getLevelFromXP, getXPForNextLevel } from "@/lib/types";
import type { TraitScores } from "@/lib/types";

interface ProgressData {
  profile: {
    xp_total: number;
    level: number;
    streak_count: number;
    longest_streak: number;
  };
  roadmap: {
    current_week: number;
    total_weeks: number;
    title: string;
  } | null;
  stats: {
    tasks_completed: number;
    total_tasks: number;
    hours_learned: number;
    overall_progress: number;
  };
  heatmap: { date: string; count: number }[];
  recent_xp: {
    amount: number;
    source: string;
    description: string;
    created_at: string;
  }[];
  traits: TraitScores | null;
  milestones: { id: string; label: string; icon: string }[];
}

const MILESTONE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  star: Star,
  flame: Flame,
  check: Check,
  trophy: Trophy,
};

function StatCard({
  icon: Icon,
  label,
  value,
  sublabel,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sublabel?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-navy-mid border border-border rounded-xl p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-text-muted" />
        <span className="text-text-muted text-xs">{label}</span>
      </div>
      <p className="text-2xl font-heading font-bold text-text-primary">
        {value}
      </p>
      {sublabel && (
        <p className="text-text-muted text-xs mt-0.5">{sublabel}</p>
      )}
    </motion.div>
  );
}

export default function ProgressPage() {
  const [data, setData] = useState<ProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch("/api/progress");
        if (!res.ok) throw new Error("Failed to fetch progress");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Progress fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-text-secondary">Unable to load progress data.</p>
      </div>
    );
  }

  const { profile, roadmap, stats, heatmap, recent_xp, traits, milestones } =
    data;
  const level = getLevelFromXP(profile.xp_total);
  const { current: xpCurrent, needed: xpNeeded, progress: xpProgress } =
    getXPForNextLevel(profile.xp_total);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Streak & XP header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Streak card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-warning/10 rounded-xl flex items-center justify-center">
              <Flame
                className={cn(
                  "w-8 h-8",
                  profile.streak_count > 0
                    ? "text-amber-warning drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    : "text-text-muted"
                )}
              />
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-text-primary">
                {profile.streak_count}
              </p>
              <p className="text-text-muted text-sm">
                day streak{profile.streak_count !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
            <div>
              <p className="text-text-muted text-xs">Best Streak</p>
              <p className="text-text-primary font-semibold">
                {profile.longest_streak} days
              </p>
            </div>
            <div className="text-right">
              <p className="text-text-muted text-xs">This Week</p>
              <p className="text-text-primary font-semibold">
                {heatmap
                  .slice(-7)
                  .reduce((sum, d) => sum + d.count, 0)}{" "}
                tasks
              </p>
            </div>
          </div>
        </motion.div>

        {/* XP card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <ProgressRing
              progress={xpProgress * 100}
              size={80}
              strokeWidth={6}
              label={`${level}`}
              sublabel="Level"
            />
            <div>
              <p className="text-text-primary font-heading font-bold text-lg">
                {profile.xp_total.toLocaleString()} XP
              </p>
              <p className="text-text-muted text-sm">
                {xpCurrent} / {xpNeeded} to Level {level + 1}
              </p>
            </div>
          </div>
          {/* Recent XP */}
          {recent_xp.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border space-y-1.5">
              <p className="text-text-muted text-xs mb-2">Recent</p>
              {recent_xp.slice(0, 3).map((xp, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-text-secondary truncate">
                    {xp.description}
                  </span>
                  <span className="text-[#10B981] font-semibold flex-shrink-0 ml-2">
                    +{xp.amount}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          icon={Check}
          label="Tasks Completed"
          value={stats.tasks_completed}
          sublabel={`of ${stats.total_tasks}`}
          delay={0.1}
        />
        <StatCard
          icon={Clock}
          label="Hours Learned"
          value={stats.hours_learned}
          sublabel="total"
          delay={0.15}
        />
        <StatCard
          icon={BookOpen}
          label="Current Week"
          value={roadmap ? `${roadmap.current_week} / ${roadmap.total_weeks}` : "—"}
          delay={0.2}
        />
        <StatCard
          icon={Target}
          label="Overall Progress"
          value={`${stats.overall_progress}%`}
          delay={0.25}
        />
      </div>

      {/* Calendar Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-navy-mid border border-border rounded-xl p-6"
      >
        <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-text-muted" />
          Activity
        </h3>
        <CalendarHeatmap data={heatmap} />
      </motion.div>

      {/* Skill Radar + Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Skill Radar */}
        {traits && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-navy-mid border border-border rounded-xl p-6"
          >
            <h3 className="font-heading font-bold text-text-primary mb-2">
              Skill Profile
            </h3>
            <SkillRadar traits={traits} />
          </motion.div>
        )}

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-text-muted" />
            Achievements
          </h3>
          {milestones.length > 0 ? (
            <div className="space-y-3">
              {milestones.map((m) => {
                const Icon = MILESTONE_ICONS[m.icon] || Star;
                return (
                  <div
                    key={m.id}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-text-primary text-sm font-medium">
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-text-muted text-sm text-center py-8">
              Complete tasks to unlock achievements!
            </p>
          )}
        </motion.div>
      </div>

      {/* Nudge toasts */}
      <NudgeToast />
    </div>
  );
}
