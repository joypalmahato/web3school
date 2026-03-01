import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId, user } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await db("profiles")
      .select("full_name, email, avatar_url, timezone, preferred_language, display_name, location, headline, employment_status, current_role_title, years_experience, education_level, tech_comfort, existing_skills, tools_used, interest_areas, career_goals, time_commitment, target_timeline, social_links")
      .eq("user_id", userId)
      .single();

    return NextResponse.json({
      profile: profile || {},
      email: user?.email,
    });
  } catch (err) {
    console.error("Settings fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates = await request.json();

    // Only allow safe fields
    const allowedFields = [
      "full_name",
      "avatar_url",
      "timezone",
      "preferred_language",
      "display_name",
      "location",
      "headline",
      "employment_status",
      "current_role_title",
      "years_experience",
      "education_level",
      "tech_comfort",
      "existing_skills",
      "tools_used",
      "interest_areas",
      "career_goals",
      "time_commitment",
      "target_timeline",
      "social_links",
    ];
    const safeUpdates: Record<string, unknown> = {};
    for (const key of allowedFields) {
      if (key in updates) {
        safeUpdates[key] = updates[key];
      }
    }

    if (Object.keys(safeUpdates).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
    }

    const { error } = await db("profiles")
      .update(safeUpdates)
      .eq("user_id", userId);

    if (error) {
      return NextResponse.json(
        { error: "Failed to update settings" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Settings update error:", err);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
