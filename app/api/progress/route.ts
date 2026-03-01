import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const ninetyDaysAgoStr = ninetyDaysAgo.toISOString().split("T")[0];

    // Parallel fetch: profile, roadmap, streak history, recent XP, discovery
    const [profileRes, roadmapRes, streakRes, xpRes, discoveryRes] = await Promise.all([
      db("profiles").select("xp_total, level, streak_count, longest_streak").eq("user_id", userId).single(),
      db("roadmaps").select("id, current_week, total_weeks, title").eq("user_id", userId).eq("status", "active").single(),
      db("streak_history").select("date, tasks_completed").eq("user_id", userId).gte("date", ninetyDaysAgoStr).order("date", { ascending: true }),
      db("xp_log").select("xp_amount, action, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(10),
      db("discovery_sessions").select("extracted_traits").eq("user_id", userId).eq("status", "completed").order("completed_at", { ascending: false }).limit(1).single(),
    ]);

    const profile = profileRes.data;
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const roadmap = roadmapRes.data;

    // Fetch tasks only if roadmap exists (depends on roadmap.id)
    let tasksCompleted = 0;
    let totalTasks = 0;
    let totalMinutes = 0;

    if (roadmap) {
      const { data: tasks } = await db("daily_tasks")
        .select("status, estimated_minutes")
        .eq("roadmap_id", roadmap.id);

      if (tasks) {
        totalTasks = tasks.length;
        const completed = tasks.filter((t: { status: string }) => t.status === "completed");
        tasksCompleted = completed.length;
        totalMinutes = completed.reduce(
          (sum: number, t: { estimated_minutes?: number }) => sum + (t.estimated_minutes || 0),
          0
        );
      }
    }

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

    const res = NextResponse.json({
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
      heatmap: (streakRes.data || []).map((s: { date: string; tasks_completed?: number }) => ({
        date: s.date,
        count: s.tasks_completed || 0,
      })),
      recent_xp: xpRes.data || [],
      traits: discoveryRes.data?.extracted_traits || null,
      milestones,
    });

    res.headers.set("Cache-Control", "private, max-age=60");
    return res;
  } catch (err) {
    console.error("Progress fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}
