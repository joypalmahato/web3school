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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("/api/tasks/today");
        if (res.ok) {
          const json = await res.json();
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
          {greeting}, {profile?.full_name?.split(" ")[0] || "Learner"}
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
        <div className="bg-navy-mid border border-border rounded-xl p-4 text-center">
          <ProgressRing
            progress={xpProgress * 100}
            size={40}
            strokeWidth={3}
            label=""
            className="mx-auto mb-1"
          />
          <p className="text-xl font-heading font-bold text-text-primary">
            {level}
          </p>
          <p className="text-text-muted text-[10px]">Level</p>
        </div>

        {/* XP */}
        <div className="bg-navy-mid border border-border rounded-xl p-4 text-center">
          <Target className="w-6 h-6 text-text-muted mx-auto mb-1" />
          <p className="text-xl font-heading font-bold text-text-primary">
            {totalXP.toLocaleString()}
          </p>
          <p className="text-text-muted text-[10px]">Total XP</p>
        </div>
      </motion.div>

      {/* Today's task card */}
      {data?.current_task && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-navy-mid border border-border rounded-xl p-5"
        >
          <p className="text-text-muted text-xs font-mono mb-2">
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
            { href: "/roadmap", icon: Map, label: "My Roadmap" },
            { href: "/learn", icon: BookOpen, label: "Daily Learning" },
            { href: "/progress", icon: BarChart3, label: "Progress" },
            { href: "/passport", icon: Award, label: "Skill Passport" },
          ].map(({ href, icon: Icon, label }) => (
            <button
              key={href}
              onClick={() => router.push(href)}
              className="flex items-center gap-3 p-4 bg-navy-mid border border-border rounded-xl hover:border-white/20 transition-colors text-left"
            >
              <Icon className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-text-primary text-sm font-medium">
                {label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
