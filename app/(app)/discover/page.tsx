/**
 * @component DiscoverPage
 * @part-of Web3School — AI Career Discovery
 * @design Full-screen chat interface, dark theme
 * @flow User has 10-minute AI conversation → redirected to /results
 */
import { auth } from "@insforge/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DiscoveryChat } from "@/components/app/DiscoveryChat";

export const metadata = {
  title: "Discover Your Career Path",
};

export default async function DiscoverPage() {
  const { userId } = await auth();

  if (userId) {
    const { data: profile } = await db("profiles")
      .select("onboarding_completed, is_approved, discovery_completed")
      .eq("user_id", userId)
      .single();

    if (!profile?.is_approved) {
      redirect("/waitlist");
    }

    if (!profile || !profile.onboarding_completed) {
      redirect("/onboarding");
    }

    if (profile.discovery_completed) {
      redirect("/results");
    }
  } else {
    redirect("/login");
  }

  // Load the latest in-progress session so the chat resumes where they left off
  let existingSession: {
    id: string;
    conversation_history: { role: "user" | "assistant"; content: string; timestamp: string }[];
    status: string;
  } | null = null;

  if (userId) {
    const { data } = await db("discovery_sessions")
      .select("id, conversation_history, status")
      .eq("user_id", userId)
      .eq("status", "in_progress")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (data) {
      existingSession = data;
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep">
      <DiscoveryChat
        existingSessionId={existingSession?.id ?? null}
        existingMessages={existingSession?.conversation_history ?? []}
      />
    </div>
  );
}
