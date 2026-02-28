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
  risk_tolerance: "Risk Taking",
  communication_strength: "Communication",
};

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
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid
            stroke="rgba(108, 99, 255, 0.15)"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="trait"
            tick={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontSize: 11,
            }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#6C63FF"
            fill="#6C63FF"
            fillOpacity={0.2}
            strokeWidth={2}
            animationBegin={200}
            animationDuration={800}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
