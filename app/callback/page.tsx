/**
 * @page /callback
 * @part-of Web3School — Authentication
 * @design Client-side OAuth callback for InsForge
 * @flow InsForge redirects here with ?insforge_code=xxx →
 *       SDK exchanges code for tokens (PKCE) →
 *       ensure profile exists → redirect to app
 *
 * MUST be client-side because the InsForge SDK needs access to
 * sessionStorage (PKCE code_verifier) to exchange the OAuth code.
 */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getInsforgeClient } from "@/lib/insforge/client";

export default function CallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const insforge = getInsforgeClient();

      try {
        // The SDK's detectAuthCallback() runs automatically on client init
        // and exchanges ?insforge_code for tokens via PKCE.
        // Give it a moment to process.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params = new URLSearchParams(window.location.search);
        const code = params.get("insforge_code");

        if (code) {
          // Exchange the OAuth code for tokens
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result: any = await insforge.auth.exchangeOAuthCode(code);

          if (result.error) {
            console.error("OAuth exchange error:", result.error);
            setError(result.error.message || "OAuth sign-in failed");
            return;
          }
        }

        // Get the current user after exchange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = await insforge.auth.getCurrentUser();

        if (data?.user) {
          // Ensure profile exists
          try {
            await fetch("/api/profile/create", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: data.user.email,
                full_name: data.user.profile?.name || "",
              }),
            });
          } catch {
            // Non-fatal
          }

          // Check if discovery is completed
          const { data: profile } = await insforge.database
            .from("profiles")
            .select("discovery_completed")
            .eq("user_id", data.user.id)
            .single();

          if (profile?.discovery_completed) {
            router.replace("/roadmap");
          } else {
            router.replace("/discover");
          }
        } else {
          // No user after exchange — something went wrong
          setError("Could not sign in. Please try again.");
        }
      } catch (err) {
        console.error("Callback error:", err);
        setError("Authentication failed. Please try again.");
      }
    };

    handleCallback();
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-navy-mid border border-border rounded-2xl p-8">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
              Sign in failed
            </h2>
            <p className="text-text-secondary mb-6">{error}</p>
            <button
              onClick={() => router.push("/login")}
              className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-6 py-3 font-semibold transition-all"
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-purple-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-secondary">Completing sign in...</p>
      </div>
    </div>
  );
}
