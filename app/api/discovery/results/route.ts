import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the most recent completed discovery session
    const { data: session, error } = await db("discovery_sessions")
      .select("id, extracted_traits, matched_roles, primary_role_id, confidence_score, completed_at")
      .eq("user_id", userId)
      .eq("status", "completed")
      .order("completed_at", { ascending: false })
      .limit(1)
      .single();

    if (error || !session) {
      return NextResponse.json(
        { error: "No completed discovery session found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: session.id,
      traits: session.extracted_traits,
      matched_roles: session.matched_roles,
      summary:
        "Based on your conversation, we've analyzed your strengths, interests, and personality to find your ideal Web3 career path.",
    });
  } catch (err) {
    console.error("Results fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}
