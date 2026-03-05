/**
 * @component SkillRadar
 * @part-of Web3School — Progress Dashboard
 * @design Recharts RadarChart showing 6 skill dimensions, animated on load
 */
"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { TraitScores } from "@/lib/types";

interface SkillRadarProps {
  traits: TraitScores;
  className?: string;
}

const TRAIT_LABELS: Record<keyof TraitScores, string> = {
  technical_aptitude: "Technical",
  creative_drive: "Creative",
  social_orientation: "Social",
  analytical_thinking: "Analytical",
  risk_tolerance: "Risk",
  communication_strength: "Comms",
};

// Color per trait label for the axis ticks
const TRAIT_COLORS: Record<string, string> = {
  Technical:   "#8B5CF6", // violet
  Creative:    "#F97316", // orange
  Social:      "#10B981", // emerald
  Analytical:  "#3B82F6", // blue
  Risk:        "#EAB308", // amber
  Comms:       "#EC4899", // pink
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ColoredTick(props: any) {
  const { x, y, payload, textAnchor } = props;
  const color = TRAIT_COLORS[payload.value] ?? "rgba(255,255,255,0.5)";
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fill={color}
      fontSize={11}
      fontWeight={600}
    >
      {payload.value}
    </text>
  );
}

export function SkillRadar({ traits, className }: SkillRadarProps) {
  const data = (Object.keys(TRAIT_LABELS) as (keyof TraitScores)[]).map(
    (key) => ({
      trait: TRAIT_LABELS[key],
      value: traits[key] || 0,
      fullMark: 100,
    })
  );

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="72%">
          <defs>
            <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8B5CF6" stopOpacity={0.5} />
              <stop offset="50%"  stopColor="#10B981" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <PolarGrid
            stroke="rgba(139, 92, 246, 0.15)"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="trait"
            tick={<ColoredTick />}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="url(#radarStroke)"
            fill="url(#radarFill)"
            fillOpacity={1}
            strokeWidth={2}
            animationBegin={200}
            animationDuration={800}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1">
        {Object.entries(TRAIT_COLORS).map(([label, color]) => (
          <div key={label} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="text-[10px]" style={{ color }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
