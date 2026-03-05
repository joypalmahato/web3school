/**
 * @component DashboardPage
 * @part-of Web3School — Main App Landing
 * @design Overview with streak, today's task, progress summary, quick actions
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Loader2,
  ArrowRight,
  Flame,
  BookOpen,
  Map,
  Award,
  BarChart3,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/app/ProgressRing";
import { useUser } from "@/lib/hooks/useUser";
import { useStreak } from "@/lib/hooks/useStreak";
import { useXP } from "@/lib/hooks/useXP";
import { cn } from "@/lib/utils";

interface DashboardData {
  current_task: {
    id: string;
    title: string;
    task_type: string;
    estimated_minutes: number;
  } | null;
  tasks_today: number;
  completed_today: number;
  overall_progress: number;
  current_week: number;
  total_weeks: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const { profile } = useUser();
  const { currentStreak, maintainedToday } = useStreak();
  const { level, totalXP, progress: xpProgress } = useXP();
  const [data, setData] = useState<DashboardData | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        // Fetch tasks and profile name in parallel
        const [tasksRes, profileRes] = await Promise.all([
          fetch("/api/tasks/today"),
          fetch("/api/profile"),
        ]);

        if (tasksRes.ok) {
          const json = await tasksRes.json();
          setData({
            current_task: json.current_task,
            tasks_today: json.total_today,
            completed_today: json.completed_today,
            overall_progress: json.total_today > 0
              ? Math.round((json.completed_today / json.total_today) * 100)
              : 0,
            current_week: json.current_week || 1,
            total_weeks: 12,
          });
        }

        if (profileRes.ok) {
          const profileJson = await profileRes.json();
          if (profileJson.full_name) {
            setUserName(profileJson.full_name.split(" ")[0]);
          }
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  })();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-heading font-bold text-text-primary">
          {greeting}, {userName || profile?.full_name?.split(" ")[0] || "Learner"}
        </h2>
        <p className="text-text-muted text-sm mt-1">
          {maintainedToday
            ? "You're on track today. Keep going!"
            : "Complete a task to maintain your streak."}
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-3 gap-3"
      >
        {/* Streak */}
        <div
          className={cn(
            "rounded-xl p-4 text-center border",
            maintainedToday
              ? "bg-amber-warning/5 border-amber-warning/20"
              : "bg-navy-mid border-border"
          )}
        >
          <Flame
            className={cn(
              "w-6 h-6 mx-auto mb-1",
              maintainedToday ? "text-amber-warning" : "text-text-muted"
            )}
          />
          <p className="text-xl font-heading font-bold text-text-primary">
            {currentStreak}
          </p>
          <p className="text-text-muted text-[10px]">Day Streak</p>
        </div>

        {/* Level */}
        <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-4 text-center">
          <ProgressRing
            progress={xpProgress * 100}
            size={40}
            strokeWidth={3}
            label=""
            color="violet"
            className="mx-auto mb-1"
          />
          <p className="text-xl font-heading font-bold text-violet-300">
            {level}
          </p>
          <p className="text-violet-400/60 text-[10px]">Level</p>
        </div>

        {/* XP */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-center">
          <Target className="w-6 h-6 text-amber-400 mx-auto mb-1" />
          <p className="text-xl font-heading font-bold text-amber-300">
            {totalXP.toLocaleString()}
          </p>
          <p className="text-amber-400/60 text-[10px]">Total XP</p>
        </div>
      </motion.div>

      {/* Today's task card */}
      {data?.current_task && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-navy-mid border border-emerald-500/20 rounded-xl p-5 border-l-4 border-l-emerald-500"
        >
          <p className="text-emerald-400/70 text-xs font-mono mb-2">
            TODAY&apos;S LESSON
          </p>
          <h3 className="font-heading font-bold text-text-primary text-lg mb-1">
            {data.current_task.title}
          </h3>
          <p className="text-text-muted text-sm mb-4">
            {data.current_task.task_type} &middot; {data.current_task.estimated_minutes} min
            {data.tasks_today > 0 && (
              <> &middot; {data.completed_today}/{data.tasks_today} done today</>
            )}
          </p>
          <Button
            onClick={() => router.push(`/learn/${data.current_task!.id}`)}
            className="w-full bg-white text-black hover:opacity-85 rounded-md py-4 font-semibold"
          >
            Start Learning
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {!data?.current_task && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-navy-mid border border-border rounded-xl p-6 text-center space-y-3"
        >
          <BookOpen className="w-8 h-8 text-text-muted mx-auto" />
          <p className="text-text-secondary text-sm">
            {data ? "All done for today! Come back tomorrow." : "Start your learning journey."}
          </p>
          <Button
            onClick={() => router.push(data ? "/roadmap" : "/discover")}
            variant="outline"
            className="border-border text-text-primary rounded-xl"
          >
            {data ? "View Roadmap" : "Start Discovery"}
          </Button>
        </motion.div>
      )}

      {/* Quick actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-2"
      >
        <p className="text-text-muted text-xs font-mono">QUICK ACTIONS</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { href: "/roadmap",  icon: Map,      label: "My Roadmap",     iconColor: "text-violet-400",  hoverBorder: "hover:border-violet-500/30" },
            { href: "/learn",    icon: BookOpen, label: "Daily Learning",  iconColor: "text-emerald-400", hoverBorder: "hover:border-emerald-500/30" },
            { href: "/progress", icon: BarChart3, label: "Progress",       iconColor: "text-amber-400",   hoverBorder: "hover:border-amber-500/30" },
            { href: "/passport", icon: Award,    label: "Skill Passport",  iconColor: "text-blue-400",    hoverBorder: "hover:border-blue-500/30" },
          ].map(({ href, icon: Icon, label, iconColor, hoverBorder }) => (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={cn(
                "flex items-center gap-3 p-4 bg-navy-mid border border-border rounded-xl transition-colors text-left",
                hoverBorder
              )}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", iconColor)} />
              <span className="text-text-primary text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
