/**
 * @route GET /callback
 * @part-of Web3School — Authentication
 * @design Server-side OAuth callback for InsForge
 * @flow InsForge redirects here with tokens → ensure profile exists → redirect to app
 *
 * InsForge middleware automatically extracts access_token from URL and stores in cookies.
 * This route handles profile creation for OAuth users and redirects.
 */
import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  try {
    const { userId, user } = await auth();

    if (userId) {
      // Ensure profile exists (OAuth users won't have one yet)
      const { data: existing } = await db("profiles")
        .select("user_id, discovery_completed")
        .eq("user_id", userId)
        .single();

      if (!existing) {
        // Create profile for OAuth user
        await db("profiles").insert({
          user_id: userId,
          email: user?.email || "",
          full_name: user?.profile?.name || "",
          discovery_completed: false,
          onboarding_completed: false,
          xp: 0,
          level: 1,
        });
        return NextResponse.redirect(`${origin}/discover`);
      }

      const redirectPath = existing.discovery_completed ? "/roadmap" : "/discover";
      return NextResponse.redirect(`${origin}${redirectPath}`);
    }
  } catch (err) {
    console.error("Callback error:", err);
  }

  // Fallback: redirect to discover (middleware will handle auth check)
  return NextResponse.redirect(`${origin}/discover`);
}
