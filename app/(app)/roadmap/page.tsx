/**
 * @component RoadmapPage
 * @part-of Web3School — Roadmap
 * @design 12-week visual timeline, current week expanded, progress percentage
 */
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, ArrowDown, Map, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoadmapTimeline } from "@/components/app/RoadmapTimeline";

interface TimelineTask {
  id?: string;
  day: number;
  title: string;
  type: string;
  status?: string;
  estimated_minutes?: number;
}

interface RoadmapData {
  id: string;
  title: string;
  description: string | null;
  total_weeks: number;
  current_week: number;
  status: string;
  milestones: {
    week: number;
    theme: string;
    objectives: string[];
    tasks: {
      day: number;
      title: string;
      type: string;
      estimated_minutes: number;
    }[];
  }[];
}

interface DailyTaskData {
  id: string;
  week_number: number;
  day_number: number;
  title: string;
  task_type: string;
  status: string;
  estimated_minutes: number;
}

export default function RoadmapPage() {
  const router = useRouter();
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null);
  const [tasks, setTasks] = useState<DailyTaskData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRoadmap = useCallback(async () => {
    try {
      const res = await fetch("/api/roadmap");
      if (!res.ok) {
        if (res.status === 404) {
          setError("no_roadmap");
          return;
        }
        throw new Error("Failed to fetch roadmap");
      }
      const data = await res.json();
      setRoadmap(data.roadmap);
      setTasks(data.tasks || []);
      setError(null);
    } catch (err) {
      console.error("Roadmap fetch error:", err);
      setError("Failed to load your roadmap.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoadmap();
  }, [fetchRoadmap]);

  const handleGenerateRoadmap = async () => {
    setIsGenerating(true);
    try {
      // Fetch the user's current role slug from their profile
      const profileRes = await fetch("/api/profile", { cache: "no-cache" });
      if (!profileRes.ok) throw new Error("Failed to fetch profile");
      const profileData = await profileRes.json();
      const roleSlug = profileData.role_slug;

      if (!roleSlug) {
        // No role chosen yet — send them to discovery
        router.push("/discover");
        return;
      }

      const res = await fetch("/api/roadmap/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role_slug: roleSlug }),
      });

      if (!res.ok) throw new Error("Roadmap generation failed");

      // Re-fetch roadmap data
      setIsLoading(true);
      await fetchRoadmap();
    } catch (err) {
      console.error("Generate roadmap error:", err);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTaskSelect = (task: TimelineTask) => {
    if (task.id) {
      router.push(`/learn/${task.id}`);
    }
  };

  const scrollToCurrentWeek = () => {
    const el = document.querySelector("[data-current-week]");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
      </div>
    );
  }

  if (error === "no_roadmap") {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mx-auto">
            <Map className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-heading font-bold text-text-primary">
            No Roadmap Yet
          </h2>
          <p className="text-text-secondary">
            Generate your personalized learning roadmap based on your chosen career path. It adapts to your pace — no fixed timeline.
          </p>
          <Button
            onClick={handleGenerateRoadmap}
            disabled={isGenerating}
            className="bg-white text-black hover:opacity-85 rounded-md"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating roadmap...
              </>
            ) : (
              "Generate My Roadmap"
            )}
          </Button>
        </div>
      </div>
    );
  }

  if (error || !roadmap) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <p className="text-text-secondary">{error}</p>
      </div>
    );
  }

  // Build weeks data with task status from DB
  const weeksWithStatus = roadmap.milestones.map((milestone) => ({
    ...milestone,
    tasks: milestone.tasks.map((task) => {
      const dbTask = tasks.find(
        (t) =>
          t.week_number === milestone.week && t.day_number === task.day
      );
      return {
        id: dbTask?.id,
        day: task.day,
        title: task.title || dbTask?.title || `Day ${task.day} Task`,
        type: task.type || dbTask?.task_type || "lesson",
        status: dbTask?.status || "pending",
        estimated_minutes: task.estimated_minutes || dbTask?.estimated_minutes,
      };
    }),
  }));

  // Calculate overall progress
  const totalTasks = weeksWithStatus.reduce(
    (sum, w) => sum + w.tasks.length,
    0
  );
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const progressPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-heading font-bold text-text-primary">
            {roadmap.title.replace(/\s*[—–-]+\s*\d+-Week Roadmap/i, "").trim()}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/discover?restart=1")}
            className="text-text-muted hover:text-text-primary text-xs flex-shrink-0"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Learn a New Role
          </Button>
        </div>
        {roadmap.description && (
          <p className="text-text-secondary text-sm">{roadmap.description}</p>
        )}

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2.5 bg-navy-mid rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#10B981] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <span className="text-text-secondary text-sm font-mono w-12 text-right">
            {progressPercent}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-text-muted text-xs">
            Week {roadmap.current_week} of {roadmap.total_weeks} &middot;{" "}
            {completedTasks} of {totalTasks} tasks completed
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToCurrentWeek}
            className="text-white text-xs"
          >
            <ArrowDown className="w-3 h-3 mr-1" />
            Jump to Current
          </Button>
        </div>
      </motion.div>

      {/* Timeline */}
      <div data-current-week>
        <RoadmapTimeline
          weeks={weeksWithStatus}
          currentWeek={roadmap.current_week}
          onTaskSelect={handleTaskSelect}
        />
      </div>
    </div>
  );
}
