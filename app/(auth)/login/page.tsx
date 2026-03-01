/**
 * @component LoginPage
 * @part-of Web3School — Authentication
 * @design Dark theme, centered card, neutral/white accents (Kled style)
 * @flow Email + password → InsForge login → redirect to /learn or /discover
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getInsforgeClient } from "@/lib/insforge/client";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const insforge = getInsforgeClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError(null);

    const { error: loginError } = await insforge.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (loginError) {
      setError(loginError.message);
      return;
    }

    // Check if user has completed onboarding
    const { data: userData } = await insforge.auth.getCurrentUser();

    if (userData?.user) {
      const { data: profile } = await insforge.database
        .from("profiles")
        .select("onboarding_completed, discovery_completed")
        .eq("user_id", userData.user.id)
        .single();

      if (profile?.discovery_completed) {
        window.location.href = "/learn";
      } else {
        window.location.href = "/discover";
      }
    } else {
      window.location.href = "/discover";
    }
  };

  const handleOAuth = async (provider: "google" | "github") => {
    // Use skipBrowserRedirect to capture the PKCE codeVerifier,
    // then store it in a cookie (survives cross-origin redirects,
    // unlike sessionStorage which can be lost in some browsers).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await insforge.auth.signInWithOAuth({
      provider,
      redirectTo: `${window.location.origin}/api/auth/callback`,
      skipBrowserRedirect: true,
    });
    if (result.error) {
      setError(result.error.message);
      return;
    }
    if (result.data?.codeVerifier) {
      document.cookie = `insforge_pkce=${result.data.codeVerifier}; path=/; max-age=600; SameSite=Lax`;
    }
    if (result.data?.url) {
      window.location.href = result.data.url;
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-text-primary">
          Welcome back
        </h1>
        <p className="text-text-secondary mt-2">
          Log in to continue your learning journey
        </p>
      </div>

      <div className="bg-navy-mid border border-border rounded-xl p-8">
        {/* OAuth buttons */}
        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="w-full border-border text-text-primary hover:bg-navy-light rounded-md py-5"
            onClick={() => handleOAuth("google")}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full border-border text-text-primary hover:bg-navy-light rounded-md py-5"
            onClick={() => handleOAuth("github")}
          >
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </Button>
        </div>

        <div className="flex items-center gap-4 my-6">
          <Separator className="flex-1 bg-border" />
          <span className="text-text-muted text-sm">or</span>
          <Separator className="flex-1 bg-border" />
        </div>

        {/* Email/password form */}
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

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-text-primary">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-white hover:text-white/80 text-sm transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-error text-sm">
                {errors.password.message}
              </p>
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
            {isSubmitting ? (
              "Logging in..."
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Log in
              </>
            )}
          </Button>
        </form>

        <p className="text-text-muted text-sm text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-white hover:text-white/80 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
