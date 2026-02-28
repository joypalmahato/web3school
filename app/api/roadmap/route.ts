import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get active roadmap
    const { data: roadmap, error } = await supabase
      .from("roadmaps")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    if (error || !roadmap) {
      return NextResponse.json(
        { error: "No active roadmap found" },
        { status: 404 }
      );
    }

    // Get all tasks for this roadmap
    const { data: tasks } = await supabase
      .from("daily_tasks")
      .select("id, week_number, day_number, title, task_type, status, estimated_minutes")
      .eq("roadmap_id", roadmap.id)
      .order("week_number", { ascending: true })
      .order("day_number", { ascending: true });

    return NextResponse.json({
      roadmap,
      tasks: tasks || [],
    });
  } catch (err) {
    console.error("Roadmap fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch roadmap" },
      { status: 500 }
    );
  }
}
