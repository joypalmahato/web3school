"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { step2Schema, type Step2Data } from "@/lib/validations/onboarding";
import { EMPLOYMENT_OPTIONS, EDUCATION_OPTIONS } from "@/lib/constants/onboarding";
import type { Profile } from "@/lib/types";

interface StepCurrentStatusProps {
  defaultValues: Partial<Profile>;
  onSubmit: (data: Step2Data) => void;
}

export function StepCurrentStatus({ defaultValues, onSubmit }: StepCurrentStatusProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      employment_status: defaultValues.employment_status || undefined,
      current_role_title: defaultValues.current_role_title || "",
      years_experience: defaultValues.years_experience || 0,
      education_level: defaultValues.education_level || undefined,
      education_field: defaultValues.education_field || "",
    },
  });

  const yearsExp = watch("years_experience");

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
        Where are you right now?
      </h2>
      <p className="text-text-secondary mb-8">
        Understanding your current situation helps us find the right path.
      </p>

      <form
        id="onboarding-step-2"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Employment status cards */}
        <div className="space-y-2">
          <Label className="text-text-primary">
            Current status <span className="text-red-error">*</span>
          </Label>
          <Controller
            name="employment_status"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EMPLOYMENT_OPTIONS.map((opt) => (
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
          {errors.employment_status && (
            <p className="text-red-error text-sm">{errors.employment_status.message}</p>
          )}
        </div>

        {/* Current role title */}
        <div className="space-y-2">
          <Label htmlFor="current_role_title" className="text-text-primary">
            Current or most recent role
          </Label>
          <Input
            id="current_role_title"
            placeholder="e.g., Software Engineer, Marketing Manager"
            className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
            {...register("current_role_title")}
          />
        </div>

        {/* Years experience slider */}
        <div className="space-y-2">
          <Label className="text-text-primary">
            Years of experience: <span className="text-purple-primary font-semibold">{yearsExp === 15 ? "15+" : yearsExp}</span>
          </Label>
          <Controller
            name="years_experience"
            control={control}
            render={({ field }) => (
              <input
                type="range"
                min={0}
                max={15}
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="w-full h-2 bg-navy-mid rounded-full appearance-none cursor-pointer accent-purple-primary"
              />
            )}
          />
          <div className="flex justify-between text-text-muted text-xs">
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15+</span>
          </div>
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="education_level" className="text-text-primary">
              Education level
            </Label>
            <select
              id="education_level"
              className="w-full h-10 bg-navy-mid border border-border text-text-primary rounded-md px-3 text-sm focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none"
              {...register("education_level")}
            >
              <option value="">Select...</option>
              {EDUCATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="education_field" className="text-text-primary">
              Field of study
            </Label>
            <Input
              id="education_field"
              placeholder="e.g., Computer Science"
              className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
              {...register("education_field")}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
