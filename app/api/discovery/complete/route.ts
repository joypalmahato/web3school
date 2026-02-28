import { NextResponse } from "next/server";
import { anthropic, AI_MODEL } from "@/lib/ai/client";
import { DISCOVERY_ANALYSIS_PROMPT } from "@/lib/ai/prompts/discovery";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { matchRoles } from "@/lib/ai/tools/role-matcher";
import type { TraitScores } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { session_id, conversation_history } = await request.json();

    if (!session_id || !conversation_history?.length) {
      return NextResponse.json(
        { error: "Session ID and conversation history are required" },
        { status: 400 }
      );
    }

    // Build conversation text for analysis
    const conversationText = conversation_history
      .map(
        (msg: { role: string; content: string }) =>
          `${msg.role === "user" ? "User" : "AI"}: ${msg.content}`
      )
      .join("\n\n");

    // Ask Claude to analyze the conversation
    const analysis = await anthropic.messages.create({
      model: AI_MODEL,
      max_tokens: 1000,
      system: DISCOVERY_ANALYSIS_PROMPT,
      messages: [
        {
          role: "user",
          content: `Here is the conversation to analyze:\n\n${conversationText}`,
        },
      ],
    });

    // Extract JSON from response
    const responseText =
      analysis.content[0].type === "text" ? analysis.content[0].text : "";

    let analysisData: {
      traits: TraitScores;
      matched_roles: { role_slug: string; match_score: number; reasoning: string }[];
      summary: string;
    };

    try {
      // Try to parse directly, or extract JSON from markdown code block
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
      const jsonStr = jsonMatch ? jsonMatch[1].trim() : responseText.trim();
      analysisData = JSON.parse(jsonStr);
    } catch {
      console.error("Failed to parse analysis JSON:", responseText);
      // Fallback: use role-matcher algorithm with neutral traits
      const fallbackTraits: TraitScores = {
        technical_aptitude: 50,
        creative_drive: 50,
        social_orientation: 50,
        analytical_thinking: 50,
        risk_tolerance: 50,
        communication_strength: 50,
      };
      analysisData = {
        traits: fallbackTraits,
        matched_roles: matchRoles(fallbackTraits),
        summary: "Based on your conversation, we've identified potential career paths for you.",
      };
    }

    // Also run our algorithmic matcher for comparison/blending
    const algorithmicRoles = matchRoles(analysisData.traits);

    // Use AI-generated roles if available, otherwise fall back to algorithm
    const finalRoles =
      analysisData.matched_roles?.length >= 3
        ? analysisData.matched_roles
        : algorithmicRoles;

    // Get the primary role from our database
    const primaryRoleSlug = finalRoles[0]?.role_slug;
    const { data: primaryRole } = await db("roles")
      .select("id")
      .eq("slug", primaryRoleSlug)
      .single();

    // Update discovery session
    await db("discovery_sessions")
      .update({
        status: "completed",
        extracted_traits: analysisData.traits,
        matched_roles: finalRoles,
        primary_role_id: primaryRole?.id || null,
        confidence_score: finalRoles[0]?.match_score || 0,
        completed_at: new Date().toISOString(),
      })
      .eq("id", session_id);

    // Update user profile
    await db("profiles")
      .update({
        discovery_completed: true,
        current_role_id: primaryRole?.id || null,
      })
      .eq("user_id", userId);

    return NextResponse.json({
      success: true,
      traits: analysisData.traits,
      matched_roles: finalRoles,
      summary: analysisData.summary,
      primary_role_slug: primaryRoleSlug,
    });
  } catch (err) {
    console.error("Discovery complete error:", err);
    return NextResponse.json(
      { error: "Failed to complete discovery" },
      { status: 500 }
    );
  }
}
