/**
 * @component SkillTree
 * @part-of Web3School — Skill Passport
 * @design Visual tree showing skill progression with nodes and connections
 */
"use client";

import { motion } from "framer-motion";
import { Check, Lock, Circle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SkillNode {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 0-100
  status: "completed" | "in_progress" | "locked";
  dependencies?: string[];
}

interface SkillTreeProps {
  skills: SkillNode[];
  className?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  technical: "border-[#10B981]",
  domain: "border-[#3B82F6]",
  soft: "border-[#F59E0B]",
  tool: "border-[#8B5CF6]",
};

const CATEGORY_BG: Record<string, string> = {
  technical: "bg-[#10B981]",
  domain: "bg-[#3B82F6]",
  soft: "bg-[#F59E0B]",
  tool: "bg-[#8B5CF6]",
};

export function SkillTree({ skills, className }: SkillTreeProps) {
  // Group skills by category
  const categories = skills.reduce<Record<string, SkillNode[]>>(
    (acc, skill) => {
      const cat = skill.category || "other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
      return acc;
    },
    {}
  );

  const categoryOrder = ["technical", "domain", "soft", "tool"];
  const sortedCategories = categoryOrder.filter((c) => categories[c]);

  return (
    <div className={cn("space-y-6", className)}>
      {sortedCategories.map((category, ci) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ci * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                CATEGORY_BG[category] || "bg-text-muted"
              )}
            />
            <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider">
              {category}
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categories[category].map((skill, si) => {
              const isCompleted = skill.status === "completed";
              const isLocked = skill.status === "locked";

              return (
                <Tooltip key={skill.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: ci * 0.1 + si * 0.05 }}
                      className={cn(
                        "relative rounded-xl p-3 border-2 transition-all",
                        isLocked
                          ? "border-border/50 bg-navy-deep/50 opacity-50"
                          : isCompleted
                            ? cn(
                                CATEGORY_COLORS[category] || "border-border",
                                "bg-navy-mid"
                              )
                            : "border-border bg-navy-mid"
                      )}
                    >
                      {/* Status icon */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={cn(
                            "text-xs font-medium truncate",
                            isLocked
                              ? "text-text-muted"
                              : "text-text-primary"
                          )}
                        >
                          {skill.name}
                        </span>
                        {isCompleted ? (
                          <Check className="w-3.5 h-3.5 text-green-success flex-shrink-0" />
                        ) : isLocked ? (
                          <Lock className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                        )}
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 bg-navy-deep rounded-full overflow-hidden">
                        <motion.div
                          className={cn(
                            "h-full rounded-full",
                            CATEGORY_BG[category] || "bg-purple-primary"
                          )}
                          initial={{ width: 0 }}
                          animate={{
                            width: isLocked ? "0%" : `${skill.proficiency}%`,
                          }}
                          transition={{ duration: 0.6, delay: ci * 0.1 + si * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-navy-mid border-border text-text-primary"
                  >
                    <div className="text-xs space-y-1">
                      <p className="font-semibold">{skill.name}</p>
                      <p className="text-text-muted capitalize">{category}</p>
                      {!isLocked && (
                        <p className="text-text-secondary">
                          {skill.proficiency}% proficiency
                        </p>
                      )}
                      {isLocked && (
                        <p className="text-text-muted">
                          Complete prerequisites to unlock
                        </p>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 pt-2 text-xs text-text-muted">
        {sortedCategories.map((cat) => (
          <div key={cat} className="flex items-center gap-1.5">
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-sm",
                CATEGORY_BG[cat] || "bg-text-muted"
              )}
            />
            <span className="capitalize">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
