/**
 * @page /callback
 * @part-of Web3School — Authentication
 * @design Client-side OAuth callback for InsForge
 * @flow InsForge redirects here with ?insforge_code=xxx →
 *       read PKCE verifier from cookie →
 *       exchange code for tokens →
 *       ensure profile exists → redirect to app
 *
 * The SDK's detectAuthCallback() runs on init and will try to exchange
 * the code using sessionStorage (which fails due to cross-origin redirect).
 * It also removes insforge_code from the URL. So we capture the code
 * from the URL in a <script> before React hydrates, then use the cookie-
 * stored verifier to exchange manually.
 */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getInsforgeClient } from "@/lib/insforge/client";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0`;
}

// Capture the code from URL immediately on module load,
// before the SDK's detectAuthCallback can clean it.
const INITIAL_CODE =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("insforge_code")
    : null;

export default function CallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const insforge = getInsforgeClient();
      const code = INITIAL_CODE;

      // Read PKCE verifier from cookie (stored before OAuth redirect)
      const codeVerifier = getCookie("insforge_pkce");
      deleteCookie("insforge_pkce");

      // Case 1: We have both code and verifier — do the exchange
      if (code && codeVerifier) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result: any = await insforge.auth.exchangeOAuthCode(
            code,
            codeVerifier
          );

          if (result.error) {
            console.error("OAuth exchange error:", result.error);
            setError(result.error.message || "OAuth sign-in failed");
            return;
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { data }: any = await insforge.auth.getCurrentUser();
          if (data?.user) {
            await ensureProfileAndRedirect(insforge, data.user);
            return;
          }
        } catch (err) {
          console.error("Exchange error:", err);
          setError("Authentication failed. Please try again.");
          return;
        }
      }

      // Case 2: SDK's detectAuthCallback might have already handled it
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data }: any = await insforge.auth.getCurrentUser();
      if (data?.user) {
        await ensureProfileAndRedirect(insforge, data.user);
        return;
      }

      // Case 3: Nothing worked
      if (code && !codeVerifier) {
        setError("Session expired. Please try signing in again.");
      } else if (!code) {
        setError("No authorization code found.");
      } else {
        setError("Could not complete sign-in. Please try again.");
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function ensureProfileAndRedirect(_insforge: any, _user: any) {
      // /api/auth/callback already created the profile server-side.
      // Let the server-side beta access router handle the redirect chain.
      window.location.href = "/beta-access";
    }

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
