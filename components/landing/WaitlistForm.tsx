/**
 * @component WaitlistForm
 * @part-of Web3School — Landing Page
 * @design Form with React Hook Form + Zod, success state with share buttons
 * @data Submits to POST /api/waitlist
 */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  waitlistSchema,
  type WaitlistFormData,
  USER_TYPE_OPTIONS,
  REFERRAL_SOURCE_OPTIONS,
} from "@/lib/validations/waitlist";

interface WaitlistSuccess {
  position: number;
  referral_code: string;
}

export function WaitlistForm() {
  const [success, setSuccess] = useState<WaitlistSuccess | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Something went wrong");
      }

      const result = await res.json();
      setSuccess({
        position: result.position,
        referral_code: result.referral_code,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const shareUrl = success
    ? `${typeof window !== "undefined" ? window.location.origin : ""}?ref=${success.referral_code}`
    : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterShareUrl = success
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "I just joined the Web3School waitlist! AI-powered Web3 career discovery 🚀\n\nJoin me:"
      )}&url=${encodeURIComponent(shareUrl)}`
    : "";

  return (
    <AnimatedSection id="waitlist" className="py-20 md:py-32 bg-navy-deep">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Title */}
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
                  Join the{" "}
                  <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                    Waitlist
                  </span>
                </h2>
                <p className="text-text-secondary mt-3">
                  Be the first to discover your Web3 career path when we launch.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-navy-mid border border-border rounded-2xl p-8 space-y-6"
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-text-primary">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-purple-primary focus:ring-1 focus:ring-purple-primary rounded-xl"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-error text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-primary">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-purple-primary focus:ring-1 focus:ring-purple-primary rounded-xl"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-error text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* User type */}
                <div className="space-y-2">
                  <Label className="text-text-primary">
                    What describes you best?
                  </Label>
                  <Select
                    onValueChange={(val) =>
                      setValue("user_type", val as WaitlistFormData["user_type"])
                    }
                  >
                    <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-mid border-border">
                      {USER_TYPE_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="text-text-primary focus:bg-purple-primary/10"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.user_type && (
                    <p className="text-red-error text-sm">
                      {errors.user_type.message}
                    </p>
                  )}
                </div>

                {/* Referral source (optional) */}
                <div className="space-y-2">
                  <Label className="text-text-primary">
                    How did you hear about us?{" "}
                    <span className="text-text-muted">(optional)</span>
                  </Label>
                  <Select
                    onValueChange={(val) =>
                      setValue(
                        "referral_source",
                        val as WaitlistFormData["referral_source"]
                      )
                    }
                  >
                    <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-mid border-border">
                      {REFERRAL_SOURCE_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="text-text-primary focus:bg-purple-primary/10"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Error message */}
                {error && (
                  <div className="bg-red-error/10 border border-red-error/20 rounded-xl p-3">
                    <p className="text-red-error text-sm">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-primary hover:bg-purple-light text-white rounded-xl px-6 py-6 text-lg font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-primary/25"
                >
                  {isSubmitting ? (
                    "Joining..."
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy-mid border border-border rounded-2xl p-8 text-center"
            >
              {/* Success icon */}
              <div className="w-16 h-16 bg-green-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-success" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-text-secondary mb-6">
                You&apos;re #{success.position} on the waitlist. We&apos;ll
                notify you when it&apos;s your turn.
              </p>

              {/* Share section */}
              <div className="bg-navy-deep border border-border rounded-xl p-6 space-y-4">
                <p className="text-text-primary font-medium">
                  <Share2 className="inline w-4 h-4 mr-2" />
                  Share to move up the waitlist
                </p>

                {/* Copy link */}
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value={shareUrl}
                    className="bg-navy-mid border-border text-text-secondary text-sm rounded-xl"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopy}
                    className="border-border flex-shrink-0 rounded-xl"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-success" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Twitter share */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border text-text-primary hover:bg-purple-primary/10 rounded-xl"
                >
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share on Twitter / X
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
