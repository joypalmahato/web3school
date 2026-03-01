import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get active roadmap
    const { data: roadmap, error } = await db("roadmaps")
      .select("*")
      .eq("user_id", userId)
      .eq("status", "active")
      .single();

    if (error || !roadmap) {
      return NextResponse.json(
        { error: "No active roadmap found" },
        { status: 404 }
      );
    }

    // Get all tasks for this roadmap
    const { data: tasks } = await db("daily_tasks")
      .select("id, week_number, day_number, title, task_type, status, estimated_minutes")
      .eq("roadmap_id", roadmap.id)
      .order("week_number", { ascending: true })
      .order("day_number", { ascending: true });

    const res = NextResponse.json({
      roadmap,
      tasks: tasks || [],
    });
    res.headers.set("Cache-Control", "private, max-age=120");
    return res;
  } catch (err) {
    console.error("Roadmap fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch roadmap" },
      { status: 500 }
    );
  }
}
