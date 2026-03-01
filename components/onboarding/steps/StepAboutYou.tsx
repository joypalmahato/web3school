"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { step1Schema, type Step1Data } from "@/lib/validations/onboarding";
import type { Profile } from "@/lib/types";

interface StepAboutYouProps {
  defaultValues: Partial<Profile>;
  onSubmit: (data: Step1Data) => void;
}

export function StepAboutYou({ defaultValues, onSubmit }: StepAboutYouProps) {
  const [avatarPreview, setAvatarPreview] = useState(defaultValues.avatar_url || "");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      full_name: defaultValues.full_name || "",
      display_name: defaultValues.display_name || "",
      avatar_url: defaultValues.avatar_url || "",
      location: defaultValues.location || "",
    },
  });

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "avatar");

    try {
      const res = await fetch("/api/onboarding/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setAvatarPreview(data.url);
        setValue("avatar_url", data.url);
      }
    } catch (err) {
      console.error("Avatar upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
        Let&apos;s get to know you
      </h2>
      <p className="text-text-secondary mb-8">
        This helps us personalize your career discovery.
      </p>

      <form
        id="onboarding-step-1"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="relative w-20 h-20 rounded-full bg-navy-mid border-2 border-dashed border-border hover:border-text-muted transition-colors flex items-center justify-center overflow-hidden shrink-0"
          >
            {avatarPreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarPreview}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-6 h-6 text-text-muted" />
            )}
            {uploading && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleAvatarUpload}
            className="hidden"
          />
          <div>
            <p className="text-text-primary text-sm font-medium">Profile photo</p>
            <p className="text-text-muted text-xs">Optional. JPEG, PNG, WebP or GIF.</p>
          </div>
        </div>

        {/* Full name */}
        <div className="space-y-2">
          <Label htmlFor="full_name" className="text-text-primary">
            Full name <span className="text-red-error">*</span>
          </Label>
          <Input
            id="full_name"
            placeholder="Your full name"
            className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
            {...register("full_name")}
          />
          {errors.full_name && (
            <p className="text-red-error text-sm">{errors.full_name.message}</p>
          )}
        </div>

        {/* Display name */}
        <div className="space-y-2">
          <Label htmlFor="display_name" className="text-text-primary">
            Display name
          </Label>
          <Input
            id="display_name"
            placeholder="How should we call you?"
            className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
            {...register("display_name")}
          />
          {errors.display_name && (
            <p className="text-red-error text-sm">{errors.display_name.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-text-primary">
            Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <Input
              id="location"
              placeholder="City, Country"
              className="bg-navy-mid border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md pl-10"
              {...register("location")}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
