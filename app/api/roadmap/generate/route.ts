import { NextResponse } from "next/server";
import { anthropic, AI_MODEL } from "@/lib/ai/client";
import { ROADMAP_GENERATION_PROMPT } from "@/lib/ai/prompts/roadmap";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { INITIAL_ROLES } from "@/data/roles";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role_slug } = await request.json();

    // Get user profile
    const { data: profile } = await db("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // Get role details
    const roleData = INITIAL_ROLES.find((r) => r.slug === role_slug);
    const { data: dbRole } = await db("roles")
      .select("id")
      .eq("slug", role_slug)
      .single();

    if (!roleData || !dbRole) {
      return NextResponse.json({ error: "Role not found" }, { status: 404 });
    }

    // Archive any active roadmaps for a DIFFERENT role before generating
    await db("roadmaps")
      .update({ status: "archived" })
      .eq("user_id", userId)
      .eq("status", "active")
      .neq("role_id", dbRole.id);

    // Check if roadmap already exists for this exact role
    const { data: existingRoadmap } = await db("roadmaps")
      .select("id")
      .eq("user_id", userId)
      .eq("role_id", dbRole.id)
      .eq("status", "active")
      .single();

    if (existingRoadmap) {
      return NextResponse.json({
        success: true,
        roadmap_id: existingRoadmap.id,
        message: "Roadmap already exists",
      });
    }

    // Get discovery session traits (use array to avoid .single() error when none exist)
    const { data: sessions } = await db("discovery_sessions")
      .select("extracted_traits")
      .eq("user_id", userId)
      .eq("status", "completed")
      .order("completed_at", { ascending: false })
      .limit(1);

    const session = sessions?.[0] ?? null;

    // Generate roadmap with Claude
    const response = await anthropic.messages.create({
      model: AI_MODEL,
      max_tokens: 8000,
      system: ROADMAP_GENERATION_PROMPT,
      messages: [
        {
          role: "user",
          content: `Generate a 12-week roadmap for this role:

Role: ${roleData.name}
Description: ${roleData.description}
Key Skills: ${roleData.key_skills.join(", ")}
Category: ${roleData.category}

User Traits: ${JSON.stringify(session?.extracted_traits || {})}

Please generate the full roadmap in the specified JSON format.`,
        },
      ],
    });

    const responseText =
      response.content[0].type === "text" ? response.content[0].text : "";

    let roadmapData: {
      title: string;
      description: string;
      weeks: {
        week: number;
        theme: string;
        objectives: string[];
        tasks: {
          day: number;
          title: string;
          description: string;
          type: string;
          estimated_minutes: number;
          difficulty: string;
        }[];
      }[];
    };

    try {
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
      const jsonStr = jsonMatch ? jsonMatch[1].trim() : responseText.trim();
      roadmapData = JSON.parse(jsonStr);
    } catch {
      console.error("Failed to parse roadmap JSON:", responseText);
      return NextResponse.json(
        { error: "Failed to generate roadmap" },
        { status: 500 }
      );
    }

    // Build milestones for storage
    const milestones = roadmapData.weeks.map((week) => ({
      week: week.week,
      theme: week.theme,
      objectives: week.objectives,
      tasks: week.tasks.map((t) => ({
        day: t.day,
        title: t.title,
        type: t.type,
        estimated_minutes: t.estimated_minutes,
      })),
    }));

    // Create roadmap
    const { data: roadmap, error: roadmapError } = await db("roadmaps")
      .insert({
        user_id: userId,
        role_id: dbRole.id,
        title: roadmapData.title,
        description: roadmapData.description,
        total_weeks: 12,
        current_week: 1,
        milestones,
        status: "active",
      })
      .select("id")
      .single();

    if (roadmapError || !roadmap) {
      console.error("Roadmap insert error:", roadmapError);
      return NextResponse.json(
        { error: "Failed to save roadmap" },
        { status: 500 }
      );
    }

    // Create daily tasks for week 1 (generate content lazily for later weeks)
    const week1 = roadmapData.weeks[0];
    if (week1?.tasks) {
      const taskInserts = week1.tasks.map((task) => ({
        roadmap_id: roadmap.id,
        user_id: userId,
        week_number: 1,
        day_number: task.day,
        title: task.title,
        description: task.description,
        task_type: task.type,
        content: {},
        estimated_minutes: task.estimated_minutes,
        difficulty: task.difficulty,
        status: "pending",
        xp_reward: task.type === "quiz" ? 20 : task.type === "project" ? 50 : 10,
      }));

      await db("daily_tasks").insert(taskInserts);
    }

    return NextResponse.json({
      success: true,
      roadmap_id: roadmap.id,
      title: roadmapData.title,
      weeks: roadmapData.weeks.length,
    });
  } catch (err) {
    console.error("Roadmap generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate roadmap" },
      { status: 500 }
    );
  }
}
