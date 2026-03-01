"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { step4Schema, type Step4Data } from "@/lib/validations/onboarding";
import {
  INTEREST_OPTIONS,
  CAREER_GOAL_OPTIONS,
  TIME_COMMITMENT_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/constants/onboarding";
import type { Profile } from "@/lib/types";

interface StepInterestsProps {
  defaultValues: Partial<Profile>;
  onSubmit: (data: Step4Data) => void;
}

export function StepInterests({ defaultValues, onSubmit }: StepInterestsProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      interest_areas: defaultValues.interest_areas || [],
      career_goals: defaultValues.career_goals || [],
      time_commitment: defaultValues.time_commitment || undefined,
      target_timeline: defaultValues.target_timeline || undefined,
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
        Where are you headed?
      </h2>
      <p className="text-text-secondary mb-8">
        This helps us match you with the right career paths.
      </p>

      <form
        id="onboarding-step-4"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Interest areas */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-text-primary">
              What areas interest you? <span className="text-red-error">*</span>
            </Label>
            <Controller
              name="interest_areas"
              control={control}
              render={({ field }) => (
                <span className="text-text-muted text-xs">
                  {field.value.length}/5 selected
                </span>
              )}
            />
          </div>
          <Controller
            name="interest_areas"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INTEREST_OPTIONS.map((opt) => {
                  const selected = field.value.includes(opt.value);
                  const atMax = field.value.length >= 5 && !selected;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={atMax}
                      onClick={() => {
                        field.onChange(
                          selected
                            ? field.value.filter((v: string) => v !== opt.value)
                            : [...field.value, opt.value]
                        );
                      }}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                        selected
                          ? "border-purple-primary bg-purple-primary/10 ring-1 ring-purple-primary"
                          : atMax
                            ? "border-border bg-navy-mid opacity-40 cursor-not-allowed"
                            : "border-border bg-navy-mid hover:border-text-muted"
                      }`}
                    >
                      <span className="text-xl">{opt.emoji}</span>
                      <span className="text-text-primary text-sm font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          />
          {errors.interest_areas && (
            <p className="text-red-error text-sm">{errors.interest_areas.message}</p>
          )}
        </div>

        {/* Career goals */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-text-primary">
              What are your goals? <span className="text-red-error">*</span>
            </Label>
            <Controller
              name="career_goals"
              control={control}
              render={({ field }) => (
                <span className="text-text-muted text-xs">
                  {field.value.length}/3 selected
                </span>
              )}
            />
          </div>
          <Controller
            name="career_goals"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CAREER_GOAL_OPTIONS.map((opt) => {
                  const selected = field.value.includes(opt.value);
                  const atMax = field.value.length >= 3 && !selected;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={atMax}
                      onClick={() => {
                        field.onChange(
                          selected
                            ? field.value.filter((v: string) => v !== opt.value)
                            : [...field.value, opt.value]
                        );
                      }}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                        selected
                          ? "border-purple-primary bg-purple-primary/10 ring-1 ring-purple-primary"
                          : atMax
                            ? "border-border bg-navy-mid opacity-40 cursor-not-allowed"
                            : "border-border bg-navy-mid hover:border-text-muted"
                      }`}
                    >
                      <span className="text-xl">{opt.emoji}</span>
                      <span className="text-text-primary text-sm font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          />
          {errors.career_goals && (
            <p className="text-red-error text-sm">{errors.career_goals.message}</p>
          )}
        </div>

        {/* Time commitment */}
        <div className="space-y-2">
          <Label className="text-text-primary">
            How much time can you commit? <span className="text-red-error">*</span>
          </Label>
          <Controller
            name="time_commitment"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_COMMITMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => field.onChange(opt.value)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      field.value === opt.value
                        ? "border-purple-primary bg-purple-primary/10 ring-1 ring-purple-primary"
                        : "border-border bg-navy-mid hover:border-text-muted"
                    }`}
                  >
                    <p className="text-text-primary text-sm font-medium">{opt.label}</p>
                    <p className="text-text-muted text-xs">{opt.description}</p>
                  </button>
                ))}
              </div>
            )}
          />
          {errors.time_commitment && (
            <p className="text-red-error text-sm">{errors.time_commitment.message}</p>
          )}
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label className="text-text-primary">
            Target timeline <span className="text-red-error">*</span>
          </Label>
          <Controller
            name="target_timeline"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TIMELINE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => field.onChange(opt.value)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      field.value === opt.value
                        ? "border-purple-primary bg-purple-primary/10 ring-1 ring-purple-primary"
                        : "border-border bg-navy-mid hover:border-text-muted"
                    }`}
                  >
                    <p className="text-text-primary text-sm font-medium">{opt.label}</p>
                    <p className="text-text-muted text-xs">{opt.description}</p>
                  </button>
                ))}
              </div>
            )}
          />
          {errors.target_timeline && (
            <p className="text-red-error text-sm">{errors.target_timeline.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}
