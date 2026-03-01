"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getInsforgeClient } from "@/lib/insforge/client";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/validations/auth";

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const insforge = getInsforgeClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setError(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await insforge.auth.sendResetPasswordEmail({
      email: data.email,
    });

    if (result.error) {
      setError(result.error.message);
      return;
    }

    setSent(true);
  };

  if (sent) {
    return (
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-text-primary">
            Check your email
          </h1>
          <p className="text-text-secondary mt-2">
            We sent a password reset link to{" "}
            <span className="text-text-primary font-medium">
              {getValues("email")}
            </span>
          </p>
        </div>

        <div className="bg-navy-mid border border-border rounded-xl p-8 text-center">
          <p className="text-text-muted text-sm mb-6">
            Didn&apos;t receive the email? Check your spam folder or try again.
          </p>
          <Button
            onClick={() => setSent(false)}
            className="w-full bg-white text-black hover:opacity-85 rounded-md py-5 font-semibold transition-all active:scale-[0.98]"
          >
            Try again
          </Button>
          <p className="text-text-muted text-sm mt-4">
            <Link
              href="/login"
              className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to login
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-text-primary">
          Reset your password
        </h1>
        <p className="text-text-secondary mt-2">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      <div className="bg-navy-mid border border-border rounded-xl p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-primary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-error text-sm">{errors.email.message}</p>
            )}
          </div>

          {error && (
            <div className="bg-red-error/10 border border-red-error/20 rounded-md p-3">
              <p className="text-red-error text-sm">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:opacity-85 rounded-md py-5 font-semibold transition-all active:scale-[0.98]"
          >
            {isSubmitting ? "Sending..." : "Send reset link"}
          </Button>
        </form>

        <p className="text-text-muted text-sm text-center mt-6">
          <Link
            href="/login"
            className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
