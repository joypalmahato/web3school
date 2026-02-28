/**
 * @component LearnPage
 * @part-of Web3School — Daily Learning
 * @design "Today's Plan" dashboard with streak status and current task
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Loader2,
  BookOpen,
  Code,
  FileText,
  HelpCircle,
  PenLine,
  ArrowRight,
  Check,
  Clock,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStreak } from "@/lib/hooks/useStreak";
import { cn } from "@/lib/utils";

interface TaskData {
  id: string;
  title: string;
  description: string | null;
  task_type: string;
  estimated_minutes: number;
  difficulty: string;
  status: string;
  xp_reward: number;
  week_number: number;
  day_number: number;
}

interface TodayData {
  roadmap_id: string;
  current_week: number;
  tasks: TaskData[];
  current_task: TaskData | null;
  completed_today: number;
  total_today: number;
}

const TASK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  lesson: BookOpen,
  exercise: Code,
  project: FileText,
  quiz: HelpCircle,
  reflection: PenLine,
};

const TASK_LABELS: Record<string, string> = {
  lesson: "Lesson",
  exercise: "Exercise",
  project: "Project",
  quiz: "Quiz",
  reflection: "Reflection",
};

export default function LearnPage() {
  const router = useRouter();
  const { currentStreak, maintainedToday } = useStreak();
  const [todayData, setTodayData] = useState<TodayData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToday = async () => {
      try {
        const res = await fetch("/api/tasks/today");
        if (!res.ok) {
          if (res.status === 404) {
            setTodayData(null);
            return;
          }
          throw new Error("Failed to fetch today's tasks");
        }
        const data = await res.json();
        setTodayData(data);
      } catch (err) {
        console.error("Today fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchToday();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-3">
          <Loader2 className="w-8 h-8 text-purple-primary animate-spin mx-auto" />
          <p className="text-text-muted text-sm">Preparing your lessons...</p>
        </div>
      </div>
    );
  }

  if (!todayData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8 text-purple-primary" />
          </div>
          <h2 className="text-xl font-heading font-bold text-text-primary">
            No Learning Path Yet
          </h2>
          <p className="text-text-secondary">
            Generate your personalized roadmap to start learning.
          </p>
          <Button
            onClick={() => router.push("/roadmap")}
            className="bg-purple-primary hover:bg-purple-light text-white rounded-xl"
          >
            View Roadmap
          </Button>
        </div>
      </div>
    );
  }

  const { tasks, current_task, completed_today, total_today } = todayData;
  const allDone = completed_today >= total_today && total_today > 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Streak banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "rounded-2xl p-4 flex items-center gap-4",
          maintainedToday
            ? "bg-gradient-to-r from-amber-warning/10 to-amber-warning/5 border border-amber-warning/20"
            : "bg-navy-mid border border-border"
        )}
      >
        <Flame
          className={cn(
            "w-10 h-10",
            maintainedToday
              ? "text-amber-warning drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
              : "text-text-muted"
          )}
        />
        <div>
          <p className="font-heading font-bold text-text-primary">
            {currentStreak > 0
              ? `Day ${currentStreak} — ${maintainedToday ? "Keep it going!" : "Maintain your streak!"}`
              : "Start Your Streak"}
          </p>
          <p className="text-text-muted text-sm">
            {maintainedToday
              ? "You've completed a task today!"
              : "Complete a task to maintain your streak."}
          </p>
        </div>
      </motion.div>

      {/* Today's progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-text-primary text-lg">
            Today&apos;s Plan
          </h2>
          <span className="text-text-muted text-sm font-mono">
            Week {todayData.current_week} &middot; {completed_today}/{total_today} done
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex gap-1.5 mb-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                task.status === "completed"
                  ? "bg-green-success"
                  : task.id === current_task?.id
                    ? "bg-purple-primary"
                    : "bg-navy-mid"
              )}
            />
          ))}
        </div>
      </motion.div>

      {/* All done state */}
      {allDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-3"
        >
          <div className="w-16 h-16 bg-green-success/10 rounded-2xl flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-green-success" />
          </div>
          <h3 className="text-xl font-heading font-bold text-text-primary">
            All Done for Today!
          </h3>
          <p className="text-text-secondary text-sm">
            Great work! Come back tomorrow for your next lessons.
          </p>
        </motion.div>
      )}

      {/* Current task highlight */}
      {current_task && !allDone && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-navy-mid border border-purple-primary/30 rounded-2xl p-5 space-y-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              {(() => {
                const Icon = TASK_ICONS[current_task.task_type] || BookOpen;
                return <Icon className="w-6 h-6 text-purple-primary" />;
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-purple-primary">
                  {TASK_LABELS[current_task.task_type] || "Task"}
                </span>
                <span className="text-text-muted text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {current_task.estimated_minutes}min
                </span>
              </div>
              <h3 className="font-heading font-bold text-text-primary text-lg">
                {current_task.title}
              </h3>
              {current_task.description && (
                <p className="text-text-secondary text-sm mt-1">
                  {current_task.description}
                </p>
              )}
            </div>
          </div>
          <Button
            onClick={() => router.push(`/learn/${current_task.id}`)}
            className="w-full bg-purple-primary hover:bg-purple-light text-white rounded-xl py-5 font-semibold"
          >
            Start Lesson
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {/* Task list */}
      <div className="space-y-2">
        {tasks
          .filter((t) => t.id !== current_task?.id)
          .map((task, i) => {
            const Icon = TASK_ICONS[task.task_type] || BookOpen;
            const isCompleted = task.status === "completed";

            return (
              <motion.button
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                onClick={() =>
                  isCompleted
                    ? undefined
                    : router.push(`/learn/${task.id}`)
                }
                className={cn(
                  "w-full flex items-center gap-3 p-4 rounded-xl text-left transition-colors",
                  isCompleted
                    ? "bg-navy-mid/50"
                    : "bg-navy-mid border border-border hover:border-purple-primary/20"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    isCompleted
                      ? "bg-green-success/10 text-green-success"
                      : "bg-navy-deep text-text-muted"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-sm font-medium truncate",
                      isCompleted
                        ? "text-text-muted line-through"
                        : "text-text-primary"
                    )}
                  >
                    {task.title}
                  </p>
                  <p className="text-text-muted text-xs">
                    {TASK_LABELS[task.task_type]} &middot;{" "}
                    {task.estimated_minutes}min &middot; +{task.xp_reward} XP
                  </p>
                </div>
              </motion.button>
            );
          })}
      </div>
    </div>
  );
}
