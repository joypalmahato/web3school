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
      .select("onboarding_completed")
      .eq("user_id", userId)
      .single();

    if (profile && !profile.onboarding_completed) {
      redirect("/onboarding");
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep">
      <DiscoveryChat />
    </div>
  );
}
