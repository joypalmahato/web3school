"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useCallback } from "react";
import {
  Sparkles,
  Upload,
  FileText,
  Check,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { step5Schema, type Step5Data } from "@/lib/validations/onboarding";
import { BUDGET_OPTIONS } from "@/lib/constants/onboarding";
import type { Profile } from "@/lib/types";

interface StepBoostProfileProps {
  defaultValues: Partial<Profile>;
  onSubmit: (data: Step5Data) => void;
}

export function StepBoostProfile({ defaultValues, onSubmit }: StepBoostProfileProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestingHeadline, setSuggestingHeadline] = useState(false);
  const [resumeUploading, setResumeUploading] = useState(false);
  const [resumeParsing, setResumeParsing] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(!!defaultValues.resume_url);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step5Data>({
    resolver: zodResolver(step5Schema),
    defaultValues: {
      headline: defaultValues.headline || "",
      social_links: {
        twitter: (defaultValues.social_links as Record<string, string>)?.twitter || "",
        linkedin: (defaultValues.social_links as Record<string, string>)?.linkedin || "",
        github: (defaultValues.social_links as Record<string, string>)?.github || "",
        portfolio: (defaultValues.social_links as Record<string, string>)?.portfolio || "",
      },
      resume_url: defaultValues.resume_url || "",
      budget: defaultValues.budget || undefined,
    },
  });

  const headline = watch("headline");

  const handleSuggestHeadline = async () => {
    setSuggestingHeadline(true);
    try {
      const res = await fetch("/api/onboarding/suggest-headline", { method: "POST" });
      const data = await res.json();
      if (data.suggestions?.length) {
        setSuggestions(data.suggestions);
      }
    } catch (err) {
      console.error("Headline suggestion error:", err);
    } finally {
      setSuggestingHeadline(false);
    }
  };

  const handleResumeUpload = useCallback(
    async (file: File) => {
      if (file.type !== "application/pdf") return;
      if (file.size > 10 * 1024 * 1024) return;

      setResumeUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "resume");

      try {
        const uploadRes = await fetch("/api/onboarding/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        if (!uploadData.url) return;

        setValue("resume_url", uploadData.url);
        setResumeUploaded(true);
        setResumeUploading(false);

        // Parse the resume
        setResumeParsing(true);
        await fetch("/api/onboarding/parse-resume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resume_url: uploadData.url }),
        });
      } catch (err) {
        console.error("Resume upload error:", err);
      } finally {
        setResumeUploading(false);
        setResumeParsing(false);
      }
    },
    [setValue]
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleResumeUpload(file);
  };

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
        Boost your profile
      </h2>
      <p className="text-text-secondary mb-8">
        Optional extras that help us match you even better.
      </p>

      <form
        id="onboarding-step-5"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Headline */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="headline" className="text-text-primary">
              Professional headline
            </Label>
            <button
              type="button"
              onClick={handleSuggestHeadline}
              disabled={suggestingHeadline}
              className="flex items-center gap-1.5 text-purple-primary hover:text-purple-light text-xs font-medium transition-colors"
            >
              {suggestingHeadline ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              AI Suggest
            </button>
          </div>
          <Input
            id="headline"
            placeholder="e.g., Aspiring Web3 developer passionate about DeFi"
            className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
            maxLength={160}
            {...register("headline")}
          />
          <p className="text-text-muted text-xs text-right">
            {(headline || "").length}/160
          </p>

          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setValue("headline", s);
                    setSuggestions([]);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-navy-mid border border-border text-text-secondary hover:border-purple-primary hover:text-text-primary transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {errors.headline && (
            <p className="text-red-error text-sm">{errors.headline.message}</p>
          )}
        </div>

        {/* Social links */}
        <div className="space-y-3">
          <Label className="text-text-primary">Social links</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-text-muted text-xs">Twitter / X</label>
              <Input
                placeholder="https://x.com/you"
                className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md text-sm"
                {...register("social_links.twitter")}
              />
            </div>
            <div className="space-y-1">
              <label className="text-text-muted text-xs">LinkedIn</label>
              <Input
                placeholder="https://linkedin.com/in/you"
                className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md text-sm"
                {...register("social_links.linkedin")}
              />
            </div>
            <div className="space-y-1">
              <label className="text-text-muted text-xs">GitHub</label>
              <Input
                placeholder="https://github.com/you"
                className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md text-sm"
                {...register("social_links.github")}
              />
            </div>
            <div className="space-y-1">
              <label className="text-text-muted text-xs">Portfolio</label>
              <Input
                placeholder="https://yoursite.com"
                className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md text-sm"
                {...register("social_links.portfolio")}
              />
            </div>
          </div>
        </div>

        {/* Resume upload */}
        <div className="space-y-3">
          <Label className="text-text-primary">Resume (PDF)</Label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !resumeUploaded && fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
              dragOver
                ? "border-purple-primary bg-purple-primary/5"
                : resumeUploaded
                  ? "border-green-success/40 bg-green-success/5"
                  : "border-border hover:border-text-muted"
            }`}
          >
            {resumeUploading || resumeParsing ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-8 h-8 text-purple-primary animate-spin" />
                <p className="text-text-secondary text-sm">
                  {resumeUploading ? "Uploading..." : "Analyzing your resume..."}
                </p>
              </div>
            ) : resumeUploaded ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-green-success/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-success" />
                </div>
                <p className="text-text-primary text-sm font-medium">Resume uploaded</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setResumeUploaded(false);
                    setValue("resume_url", "");
                  }}
                  className="text-text-muted text-xs hover:text-text-secondary"
                >
                  Replace
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-navy-mid rounded-full flex items-center justify-center">
                  {dragOver ? (
                    <FileText className="w-5 h-5 text-purple-primary" />
                  ) : (
                    <Upload className="w-5 h-5 text-text-muted" />
                  )}
                </div>
                <p className="text-text-secondary text-sm">
                  Drag & drop your PDF here, or click to browse
                </p>
                <p className="text-text-muted text-xs">Max 10MB</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleResumeUpload(file);
            }}
            className="hidden"
          />
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <Label className="text-text-primary">Learning budget</Label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => field.onChange(opt.value)}
                    className={`p-3 rounded-lg border text-left transition-all ${
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
        </div>
      </form>
    </div>
  );
}
