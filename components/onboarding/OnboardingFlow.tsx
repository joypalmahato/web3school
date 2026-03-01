"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, SkipForward } from "lucide-react";
import type { Profile } from "@/lib/types";
import type { OnboardingStepData } from "@/lib/validations/onboarding";
import { ONBOARDING_STEPS } from "@/lib/constants/onboarding";
import { StepAboutYou } from "./steps/StepAboutYou";
import { StepCurrentStatus } from "./steps/StepCurrentStatus";
import { StepSkills } from "./steps/StepSkills";
import { StepInterests } from "./steps/StepInterests";
import { StepBoostProfile } from "./steps/StepBoostProfile";
import { OnboardingComplete } from "./OnboardingComplete";

interface OnboardingFlowProps {
  initialProfile: Profile;
}

export function OnboardingFlow({ initialProfile }: OnboardingFlowProps) {
  const startStep = Math.max(1, Math.min((initialProfile.onboarding_step || 0) + 1, 5));
  const [step, setStep] = useState(startStep);
  const [direction, setDirection] = useState(1);
  const [saving, setSaving] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState<Partial<Profile>>(initialProfile);

  const saveStep = useCallback(
    async (stepNum: number, data: OnboardingStepData) => {
      setSaving(true);
      try {
        const res = await fetch("/api/onboarding/save", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ step: stepNum, data }),
        });
        if (!res.ok) {
          const err = await res.json();
          console.error("Save failed:", err);
          return false;
        }
        return true;
      } catch (err) {
        console.error("Save error:", err);
        return false;
      } finally {
        setSaving(false);
      }
    },
    []
  );

  const handleNext = useCallback(
    async (stepData: OnboardingStepData) => {
      const merged = { ...formData, ...stepData };
      setFormData(merged);

      const success = await saveStep(step, stepData);
      if (!success) return;

      if (step === 5) {
        setCompleted(true);
      } else {
        setDirection(1);
        setStep((s) => s + 1);
      }
    },
    [step, formData, saveStep]
  );

  const handleBack = useCallback(() => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }, [step]);

  const handleSkip = useCallback(() => {
    if (step < 5) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }, [step]);

  if (completed) {
    return <OnboardingComplete profile={formData as Profile} />;
  }

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const stepInfo = ONBOARDING_STEPS[step - 1];

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col min-h-[80vh]">
      {/* Progress header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-text-secondary text-sm">
            Step {step} of 5 &middot; {stepInfo.title}
          </p>
          <p className="text-text-muted text-xs">
            Better profiles get 3x better matches
          </p>
        </div>
        <div className="w-full h-1.5 bg-navy-mid rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-primary rounded-full"
            initial={false}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {step === 1 && (
              <StepAboutYou
                defaultValues={formData}
                onSubmit={handleNext}
              />
            )}
            {step === 2 && (
              <StepCurrentStatus
                defaultValues={formData}
                onSubmit={handleNext}
              />
            )}
            {step === 3 && (
              <StepSkills
                defaultValues={formData}
                onSubmit={handleNext}
              />
            )}
            {step === 4 && (
              <StepInterests
                defaultValues={formData}
                onSubmit={handleNext}
              />
            )}
            {step === 5 && (
              <StepBoostProfile
                defaultValues={formData}
                onSubmit={handleNext}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-3">
          {step < 5 && (
            <button
              type="button"
              onClick={handleSkip}
              className="flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors text-sm"
            >
              Skip
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="submit"
            form={`onboarding-step-${step}`}
            disabled={saving}
            className="flex items-center gap-2 bg-white text-black rounded-lg px-6 py-2.5 font-semibold transition-all hover:opacity-85 active:scale-[0.98] disabled:opacity-50"
          >
            {saving ? (
              "Saving..."
            ) : step === 5 ? (
              "Complete"
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
