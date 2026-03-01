/**
 * @component CalendarHeatmap
 * @part-of Web3School — Progress Dashboard
 * @design 90-day GitHub-style contribution grid with hover tooltips
 */
"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface DayData {
  date: string; // YYYY-MM-DD
  count: number;
}

interface CalendarHeatmapProps {
  data: DayData[];
  className?: string;
}

function getIntensity(count: number): string {
  if (count === 0) return "bg-navy-deep";
  if (count === 1) return "bg-[#10B981]/20";
  if (count <= 3) return "bg-[#10B981]/40";
  if (count <= 5) return "bg-[#10B981]/70";
  return "bg-[#10B981]";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function CalendarHeatmap({ data, className }: CalendarHeatmapProps) {
  // Build 90-day grid
  const today = new Date();
  const days: { date: string; count: number }[] = [];

  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const entry = data.find((e) => e.date === dateStr);
    days.push({ date: dateStr, count: entry?.count || 0 });
  }

  // Split into weeks (columns of 7)
  const weeks: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const totalActive = days.filter((d) => d.count > 0).length;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <p className="text-text-muted text-xs">
          {totalActive} active days in the last 90 days
        </p>
        <div className="flex items-center gap-1 text-[10px] text-text-muted">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-navy-deep" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#10B981]/20" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#10B981]/40" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#10B981]/70" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#10B981]" />
          <span>More</span>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <Tooltip key={day.date}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "w-3 h-3 rounded-sm transition-colors cursor-default",
                      getIntensity(day.count)
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-navy-mid border-border text-text-primary text-xs"
                >
                  <p className="font-medium">{formatDate(day.date)}</p>
                  <p className="text-text-muted">
                    {day.count} task{day.count !== 1 ? "s" : ""} completed
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
