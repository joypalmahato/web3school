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
import { getGuestProgressData } from "@/lib/guest/demo-data";
import { useGuestStore } from "@/lib/guest/store";
import { useUser } from "@/lib/hooks/useUser";
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
    xp_amount: number;
    action: string;
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
  iconColor = "text-text-muted",
  accent = "border-border",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sublabel?: string;
  delay: number;
  iconColor?: string;
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn("bg-navy-mid/60 border rounded-xl p-4 backdrop-blur-sm", accent)}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={cn("w-4 h-4", iconColor)} />
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
  const { profile: guestProfile, isGuest } = useUser();
  const completedTaskIds = useGuestStore((state) => state.completedTaskIds);
  const [data, setData] = useState<ProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isGuest && guestProfile) {
      setData(getGuestProgressData(guestProfile, completedTaskIds));
      setIsLoading(false);
      return;
    }

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
  }, [completedTaskIds, guestProfile, isGuest]);

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

  const {
    profile: progressProfile,
    roadmap,
    stats,
    heatmap,
    recent_xp,
    traits,
    milestones,
  } =
    data;
  const level = getLevelFromXP(progressProfile.xp_total);
  const { current: xpCurrent, needed: xpNeeded, progress: xpProgress } =
    getXPForNextLevel(progressProfile.xp_total);

  return (
    <div className="relative min-h-screen">
      {/* Subtle dot grid — matches landing page tone */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Streak & XP header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Streak card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-warning/10 rounded-xl flex items-center justify-center">
              <Flame
                className={cn(
                  "w-8 h-8",
                  progressProfile.streak_count > 0
                    ? "text-amber-warning drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    : "text-text-muted"
                )}
              />
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-text-primary">
                {progressProfile.streak_count}
              </p>
              <p className="text-text-muted text-sm">
                day streak{progressProfile.streak_count !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
            <div>
              <p className="text-text-muted text-xs">Best Streak</p>
              <p className="text-text-primary font-semibold">
                {progressProfile.longest_streak} days
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
          className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <ProgressRing
              progress={xpProgress * 100}
              size={80}
              strokeWidth={6}
              label={`${level}`}
              sublabel="Level"
              color="violet"
            />
            <div>
              <p className="text-text-primary font-heading font-bold text-lg">
                {progressProfile.xp_total.toLocaleString()} XP
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
                    {xp.action.replace(/_/g, " ")}
                  </span>
                  <span className="text-violet-400 font-semibold flex-shrink-0 ml-2">
                    +{xp.xp_amount}
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
          iconColor="text-emerald-400"
          accent="border-emerald-500/20"
        />
        <StatCard
          icon={Clock}
          label="Hours Learned"
          value={stats.hours_learned}
          sublabel="total"
          delay={0.15}
          iconColor="text-blue-400"
          accent="border-blue-500/20"
        />
        <StatCard
          icon={BookOpen}
          label="Current Week"
          value={roadmap ? `${roadmap.current_week} / ${roadmap.total_weeks}` : "—"}
          delay={0.2}
          iconColor="text-violet-400"
          accent="border-violet-500/20"
        />
        <StatCard
          icon={Target}
          label="Overall Progress"
          value={`${stats.overall_progress}%`}
          delay={0.25}
          iconColor="text-amber-400"
          accent="border-amber-500/20"
        />
      </div>

      {/* Calendar Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 backdrop-blur-sm"
      >
        <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300">Activity</span>
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
            className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="font-heading font-bold mb-2 flex items-center gap-2">
              <span className="text-violet-300">Skill Profile</span>
            </h3>
            <SkillRadar traits={traits} />
          </motion.div>
        )}

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 backdrop-blur-sm"
        >
          <h3 className="font-heading font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300">Achievements</span>
          </h3>
          {milestones.length > 0 ? (
            <div className="space-y-3">
              {milestones.map((m, i) => {
                const Icon = MILESTONE_ICONS[m.icon] || Star;
                const colors = [
                  { bg: "bg-amber-500/15 border-amber-500/25", icon: "text-amber-400" },
                  { bg: "bg-violet-500/15 border-violet-500/25", icon: "text-violet-400" },
                  { bg: "bg-emerald-500/15 border-emerald-500/25", icon: "text-emerald-400" },
                  { bg: "bg-blue-500/15 border-blue-500/25", icon: "text-blue-400" },
                ];
                const c = colors[i % colors.length];
                return (
                  <div
                    key={m.id}
                    className={cn("flex items-center gap-3 p-3 border rounded-xl", c.bg)}
                  >
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", c.bg)}>
                      <Icon className={cn("w-4 h-4", c.icon)} />
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
    </div>
  );
}
