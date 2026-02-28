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

    // Get profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // Get active roadmap
    const { data: roadmap } = await supabase
      .from("roadmaps")
      .select("id, current_week, total_weeks, title")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    // Get completed tasks count and total
    let tasksCompleted = 0;
    let totalTasks = 0;
    let totalMinutes = 0;

    if (roadmap) {
      const { data: tasks } = await supabase
        .from("daily_tasks")
        .select("status, estimated_minutes")
        .eq("roadmap_id", roadmap.id);

      if (tasks) {
        totalTasks = tasks.length;
        const completed = tasks.filter((t) => t.status === "completed");
        tasksCompleted = completed.length;
        totalMinutes = completed.reduce(
          (sum, t) => sum + (t.estimated_minutes || 0),
          0
        );
      }
    }

    // Get streak history (last 90 days)
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const ninetyDaysAgoStr = ninetyDaysAgo.toISOString().split("T")[0];

    const { data: streakHistory } = await supabase
      .from("streak_history")
      .select("date, tasks_completed")
      .eq("user_id", user.id)
      .gte("date", ninetyDaysAgoStr)
      .order("date", { ascending: true });

    // Get recent XP log
    const { data: recentXP } = await supabase
      .from("xp_log")
      .select("amount, source, description, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(10);

    // Get discovery traits
    const { data: discovery } = await supabase
      .from("discovery_sessions")
      .select("extracted_traits")
      .eq("user_id", user.id)
      .eq("status", "completed")
      .order("completed_at", { ascending: false })
      .limit(1)
      .single();

    // Calculate milestones
    const milestones = [];
    if (tasksCompleted >= 1)
      milestones.push({ id: "first_task", label: "First Lesson", icon: "star" });
    if (profile.streak_count >= 7)
      milestones.push({ id: "7_day_streak", label: "7-Day Streak", icon: "flame" });
    if (profile.streak_count >= 30)
      milestones.push({ id: "30_day_streak", label: "30-Day Streak", icon: "flame" });
    if (roadmap && roadmap.current_week > 1)
      milestones.push({ id: "first_week", label: "Week 1 Complete", icon: "check" });
    if (roadmap && roadmap.current_week > 6)
      milestones.push({ id: "halfway", label: "Halfway There", icon: "trophy" });
    if (roadmap && roadmap.current_week > 12)
      milestones.push({ id: "completed", label: "Roadmap Complete", icon: "trophy" });

    return NextResponse.json({
      profile: {
        xp_total: profile.xp_total,
        level: profile.level,
        streak_count: profile.streak_count,
        longest_streak: profile.longest_streak,
      },
      roadmap: roadmap
        ? {
            current_week: roadmap.current_week,
            total_weeks: roadmap.total_weeks,
            title: roadmap.title,
          }
        : null,
      stats: {
        tasks_completed: tasksCompleted,
        total_tasks: totalTasks,
        hours_learned: Math.round((totalMinutes / 60) * 10) / 10,
        overall_progress:
          totalTasks > 0
            ? Math.round((tasksCompleted / totalTasks) * 100)
            : 0,
      },
      heatmap: (streakHistory || []).map((s) => ({
        date: s.date,
        count: s.tasks_completed || 0,
      })),
      recent_xp: recentXP || [],
      traits: discovery?.extracted_traits || null,
      milestones,
    });
  } catch (err) {
    console.error("Progress fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}
