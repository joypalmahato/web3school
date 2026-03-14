"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getInsforgeClient } from "@/lib/insforge/client";
import {
  buildPostAuthRedirectPath,
  clearClientCookie,
  navigateInBrowser,
} from "@/lib/insforge/redirect";
import { normalizeReferralCode, REFERRAL_CODE_COOKIE } from "@/lib/referrals";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const redirectTarget = searchParams.get("redirect");
  const referralCode = normalizeReferralCode(searchParams.get("ref"));

  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const insforge = getInsforgeClient();

  const handleVerify = async () => {
    if (!code.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await insforge.auth.verifyEmail({
        email,
        otp: code.trim(),
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
        return;
      }

      // Sync the access token to httpOnly cookie BEFORE redirecting
      const token = result.data?.accessToken;
      const user = result.data?.user;
      if (token && user) {
        await fetch("/api/auth", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "sync-token",
            user: { id: user.id, email: user.email, profile: user.profile || null },
          }),
        });
      }

      // Create profile row after successful verification
      try {
        await fetch("/api/profile/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            full_name: name,
            referral_code: referralCode || undefined,
          }),
        });
        clearClientCookie(REFERRAL_CODE_COOKIE);
      } catch {
        // Non-fatal
      }

      navigateInBrowser(buildPostAuthRedirectPath(redirectTarget));
    } catch {
      setError("Verification failed. Please try again.");
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setError(null);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await insforge.auth.sendVerificationEmail({
        email,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch {
      setError("Failed to resend code. Please try again.");
    }

    setResending(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-text-primary">
          Verify your email
        </h1>
        <p className="text-text-secondary mt-2">
          We sent a verification code to{" "}
          <span className="text-text-primary font-medium">{email}</span>
        </p>
        <p className="text-text-muted mt-3 text-sm">
          Enter it to unlock instant beta access.
        </p>
      </div>

      <div className="bg-navy-mid border border-border rounded-xl p-5 sm:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code" className="text-text-primary">
              Verification code
            </Label>
            <Input
              id="code"
              type="text"
              inputMode="numeric"
              placeholder="Enter 6-digit code"
              className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-white/30 focus:ring-1 focus:ring-white/20 rounded-md text-center text-2xl tracking-widest"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleVerify();
              }}
            />
          </div>

          {error && (
            <div className="bg-red-error/10 border border-red-error/20 rounded-md p-3">
              <p className="text-red-error text-sm">{error}</p>
            </div>
          )}

          <Button
            onClick={handleVerify}
            disabled={loading || code.length < 4}
            className="w-full bg-white text-black hover:opacity-85 rounded-md py-5 font-semibold transition-all active:scale-[0.98]"
          >
            {loading ? "Verifying..." : "Verify email"}
          </Button>

          <p className="text-text-muted text-sm text-center">
            Didn&apos;t receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={resending}
              className="text-white hover:text-white/80 transition-colors"
            >
              {resending ? "Sending..." : "Resend code"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-secondary">Loading...</p>
        </div>
      }
    >
      <VerifyEmailForm />
    </Suspense>
  );
}
