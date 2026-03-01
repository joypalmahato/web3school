"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { step3Schema, type Step3Data } from "@/lib/validations/onboarding";
import { TECH_COMFORT_OPTIONS, SKILL_OPTIONS, TOOL_OPTIONS } from "@/lib/constants/onboarding";
import type { Profile } from "@/lib/types";

interface StepSkillsProps {
  defaultValues: Partial<Profile>;
  onSubmit: (data: Step3Data) => void;
}

export function StepSkills({ defaultValues, onSubmit }: StepSkillsProps) {
  const [skillSearch, setSkillSearch] = useState("");
  const [toolSearch, setToolSearch] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      tech_comfort: defaultValues.tech_comfort || undefined,
      existing_skills: defaultValues.existing_skills || [],
      tools_used: defaultValues.tools_used || [],
    },
  });

  const filteredSkills = useMemo(() => {
    if (!skillSearch) return SKILL_OPTIONS;
    const q = skillSearch.toLowerCase();
    return SKILL_OPTIONS.filter(
      (s) => s.label.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    );
  }, [skillSearch]);

  const filteredTools = useMemo(() => {
    if (!toolSearch) return TOOL_OPTIONS;
    const q = toolSearch.toLowerCase();
    return TOOL_OPTIONS.filter((t) => t.label.toLowerCase().includes(q));
  }, [toolSearch]);

  const skillCategories = useMemo(() => {
    const cats = new Map<string, { value: string; label: string; category: string }[]>();
    for (const skill of filteredSkills) {
      const existing = cats.get(skill.category) || [];
      cats.set(skill.category, [...existing, skill]);
    }
    return cats;
  }, [filteredSkills]);

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
        What do you know?
      </h2>
      <p className="text-text-secondary mb-8">
        Don&apos;t overthink it — just pick what applies.
      </p>

      <form
        id="onboarding-step-3"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Tech comfort */}
        <div className="space-y-2">
          <Label className="text-text-primary">
            How comfortable are you with technology? <span className="text-red-error">*</span>
          </Label>
          <Controller
            name="tech_comfort"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TECH_COMFORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => field.onChange(opt.value)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                      field.value === opt.value
                        ? "border-purple-primary bg-purple-primary/10 ring-1 ring-purple-primary"
                        : "border-border bg-navy-mid hover:border-text-muted"
                    }`}
                  >
                    <span className="text-xl">{opt.emoji}</span>
                    <div>
                      <p className="text-text-primary text-sm font-medium">{opt.label}</p>
                      <p className="text-text-muted text-xs">{opt.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          />
          {errors.tech_comfort && (
            <p className="text-red-error text-sm">{errors.tech_comfort.message}</p>
          )}
        </div>

        {/* Skills chips */}
        <div className="space-y-3">
          <Label className="text-text-primary">Skills you have</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full h-10 bg-navy-mid border border-border text-text-primary rounded-md pl-10 pr-3 text-sm placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
            />
          </div>
          <Controller
            name="existing_skills"
            control={control}
            render={({ field }) => (
              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {Array.from(skillCategories.entries()).map(([category, skills]) => (
                  <div key={category}>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => {
                        const selected = field.value.includes(skill.value);
                        return (
                          <button
                            key={skill.value}
                            type="button"
                            onClick={() => {
                              field.onChange(
                                selected
                                  ? field.value.filter((v: string) => v !== skill.value)
                                  : [...field.value, skill.value]
                              );
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selected
                                ? "bg-purple-primary text-white"
                                : "bg-navy-mid border border-border text-text-secondary hover:border-text-muted"
                            }`}
                          >
                            {skill.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>

        {/* Tools chips */}
        <div className="space-y-3">
          <Label className="text-text-primary">Tools you use</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search tools..."
              value={toolSearch}
              onChange={(e) => setToolSearch(e.target.value)}
              className="w-full h-10 bg-navy-mid border border-border text-text-primary rounded-md pl-10 pr-3 text-sm placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
            />
          </div>
          <Controller
            name="tools_used"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2">
                {filteredTools.map((tool) => {
                  const selected = field.value.includes(tool.value);
                  return (
                    <button
                      key={tool.value}
                      type="button"
                      onClick={() => {
                        field.onChange(
                          selected
                            ? field.value.filter((v: string) => v !== tool.value)
                            : [...field.value, tool.value]
                        );
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        selected
                          ? "bg-purple-primary text-white"
                          : "bg-navy-mid border border-border text-text-secondary hover:border-text-muted"
                      }`}
                    >
                      {tool.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
        </div>
      </form>
    </div>
  );
}
