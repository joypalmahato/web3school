/**
 * @component DiscoverPage
 * @part-of Web3School - AI Career Discovery
 * @design Full-screen chat interface, dark theme
 * @flow User has 10-minute AI conversation -> redirected to /results
 */
import { auth } from "@insforge/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DiscoveryChat } from "@/components/app/DiscoveryChat";

export const metadata = {
  title: "Discover Your Career Path",
};

type DiscoverPageProps = {
  searchParams?: Promise<{ restart?: string | string[] }>;
};

export default async function DiscoverPage({
  searchParams,
}: DiscoverPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const restartParam = Array.isArray(resolvedSearchParams?.restart)
    ? resolvedSearchParams.restart[0]
    : resolvedSearchParams?.restart;
  const shouldRestart = restartParam === "1" || restartParam === "true";

  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const { data: profile } = await db("profiles")
    .select("onboarding_completed, is_approved")
    .eq("user_id", userId)
    .single();

  if (!profile?.is_approved) {
    redirect("/waitlist");
  }

  if (!profile.onboarding_completed) {
    redirect("/onboarding");
  }

  if (shouldRestart) {
    await db("discovery_sessions")
      .update({ status: "abandoned" })
      .eq("user_id", userId)
      .eq("status", "in_progress");
  }

  let existingSession: {
    id: string;
    conversation_history: {
      role: "user" | "assistant";
      content: string;
      timestamp: string;
    }[];
    status: string;
  } | null = null;

  if (!shouldRestart) {
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
        isRestarting={shouldRestart}
      />
    </div>
  );
}
