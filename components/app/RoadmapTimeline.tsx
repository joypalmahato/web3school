/**
 * @component RoadmapTimeline
 * @part-of Web3School — Roadmap
 * @design Vertical timeline with expandable week nodes and daily task indicators
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  Lock,
  BookOpen,
  Code,
  FileText,
  HelpCircle,
  PenLine,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineTask {
  id?: string;
  day: number;
  title: string;
  type: string;
  status?: string;
  estimated_minutes?: number;
}

interface TimelineWeek {
  week: number;
  theme: string;
  objectives: string[];
  tasks: TimelineTask[];
}

interface RoadmapTimelineProps {
  weeks: TimelineWeek[];
  currentWeek: number;
  onTaskSelect?: (task: TimelineTask) => void;
}

const TASK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  lesson: BookOpen,
  exercise: Code,
  project: FileText,
  quiz: HelpCircle,
  reflection: PenLine,
};

const PHASE_LABELS: Record<number, string> = {
  1: "Foundation",
  4: "Core Skills",
  7: "Intermediate",
  10: "Advanced",
  12: "Portfolio",
};

function WeekNode({
  week,
  currentWeek,
  onTaskSelect,
}: {
  week: TimelineWeek;
  currentWeek: number;
  onTaskSelect?: (task: TimelineTask) => void;
}) {
  const isCurrent = week.week === currentWeek;
  const isCompleted = week.week < currentWeek;
  const isLocked = week.week > currentWeek;
  const [isExpanded, setIsExpanded] = useState(isCurrent);

  const completedTasks = week.tasks.filter(
    (t) => t.status === "completed"
  ).length;
  const phaseLabel = PHASE_LABELS[week.week];

  return (
    <div className="relative">
      {/* Phase label */}
      {phaseLabel && (
        <div className="mb-2 ml-10">
          <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
            {phaseLabel}
          </span>
        </div>
      )}

      <div className="flex gap-4">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all z-10",
              isCompleted
                ? "bg-green-success border-green-success text-white"
                : isCurrent
                  ? "bg-white border-white text-black shadow-lg"
                  : "bg-navy-deep border-border text-text-muted"
            )}
          >
            {isCompleted ? (
              <Check className="w-4 h-4" />
            ) : isLocked ? (
              <Lock className="w-3 h-3" />
            ) : (
              <span className="text-xs font-bold">{week.week}</span>
            )}
          </div>
          {/* Connecting line */}
          <div
            className={cn(
              "w-0.5 flex-1 min-h-[16px]",
              isCompleted ? "bg-green-success" : "bg-border"
            )}
          />
        </div>

        {/* Week content */}
        <div className="flex-1 pb-6">
          <button
            onClick={() => !isLocked && setIsExpanded(!isExpanded)}
            disabled={isLocked}
            className={cn(
              "w-full text-left rounded-xl p-4 transition-all",
              isLocked
                ? "bg-navy-mid/30 cursor-not-allowed"
                : isCurrent
                  ? "bg-navy-mid border border-white/30 hover:border-white/50"
                  : "bg-navy-mid border border-border hover:border-border/80"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3
                    className={cn(
                      "font-heading font-semibold truncate",
                      isLocked ? "text-text-muted" : "text-text-primary"
                    )}
                  >
                    Week {week.week}: {week.theme}
                  </h3>
                  {isCurrent && (
                    <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-0.5 rounded-full flex-shrink-0">
                      CURRENT
                    </span>
                  )}
                </div>
                {!isLocked && (
                  <p className="text-text-muted text-xs mt-1">
                    {completedTasks}/{week.tasks.length} tasks completed
                  </p>
                )}
              </div>
              {!isLocked && (
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-text-muted transition-transform flex-shrink-0",
                    isExpanded && "rotate-180"
                  )}
                />
              )}
            </div>
          </button>

          {/* Expanded task list */}
          <AnimatePresence>
            {isExpanded && !isLocked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-1.5 pl-1">
                  {week.tasks.map((task) => {
                    const TaskIcon = TASK_ICONS[task.type] || Circle;
                    const isTaskCompleted = task.status === "completed";

                    return (
                      <button
                        key={task.day}
                        onClick={() => onTaskSelect?.(task)}
                        disabled={!task.id}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                          isTaskCompleted
                            ? "bg-green-success/5"
                            : task.id
                              ? "hover:bg-navy-deep cursor-pointer"
                              : "opacity-60"
                        )}
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0",
                            isTaskCompleted
                              ? "bg-green-success/10 text-green-success"
                              : "bg-navy-deep text-text-muted"
                          )}
                        >
                          {isTaskCompleted ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <TaskIcon className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={cn(
                              "text-sm truncate",
                              isTaskCompleted
                                ? "text-text-muted line-through"
                                : "text-text-primary"
                            )}
                          >
                            {task.title}
                          </p>
                        </div>
                        {task.estimated_minutes && (
                          <span className="text-text-muted text-xs flex-shrink-0">
                            {task.estimated_minutes}m
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function RoadmapTimeline({
  weeks,
  currentWeek,
  onTaskSelect,
}: RoadmapTimelineProps) {
  return (
    <div className="space-y-0">
      {weeks.map((week) => (
        <WeekNode
          key={week.week}
          week={week}
          currentWeek={currentWeek}
          onTaskSelect={onTaskSelect}
        />
      ))}
    </div>
  );
}
