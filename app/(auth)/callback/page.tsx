/**
 * @component CallbackPage
 * @part-of Web3School — Authentication
 * @design Minimal loading state while handling OAuth callback
 * @flow Exchanges OAuth code for session → redirects to /discover or /learn
 */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Logo } from "@/components/shared/Logo";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createClient();

      // Supabase handles the code exchange automatically via the URL hash
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login?error=auth_failed");
        return;
      }

      // Check if profile exists and if onboarding is complete
      const { data: profile } = await supabase
        .from("profiles")
        .select("discovery_completed")
        .eq("id", user.id)
        .single();

      if (profile?.discovery_completed) {
        router.push("/learn");
      } else {
        router.push("/discover");
      }

      router.refresh();
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center">
      <div className="text-center space-y-4">
        <Logo size="lg" />
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-purple-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-purple-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-purple-primary rounded-full animate-bounce" />
        </div>
        <p className="text-text-secondary text-sm">
          Setting up your account...
        </p>
      </div>
    </div>
  );
}
