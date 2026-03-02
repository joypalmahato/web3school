import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get active roadmap — limit(1) to avoid .single() errors with legacy duplicate rows
    const { data: roadmaps } = await db("roadmaps")
      .select("id, current_week, role_id, milestones")
      .eq("user_id", userId)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1);

    const roadmap = roadmaps?.[0] ?? null;

    if (!roadmap) {
      return NextResponse.json({ error: "No active roadmap" }, { status: 404 });
    }

    // Get tasks for the current week
    let { data: tasks } = await db("daily_tasks")
      .select("*")
      .eq("roadmap_id", roadmap.id)
      .eq("week_number", roadmap.current_week)
      .order("day_number", { ascending: true });

    // If no tasks exist for current week, generate them from milestones
    if (!tasks || tasks.length === 0) {
      const milestones = roadmap.milestones as Array<{
        week: number;
        theme: string;
        objectives: string[];
        tasks: Array<{
          day: number;
          title: string;
          type: string;
          estimated_minutes: number;
        }>;
      }>;

      const currentMilestone = milestones?.find(
        (m) => m.week === roadmap.current_week
      );

      if (currentMilestone?.tasks) {
        const taskInserts = currentMilestone.tasks.map((task) => ({
          roadmap_id: roadmap.id,
          user_id: userId,
          week_number: roadmap.current_week,
          day_number: task.day,
          title: task.title,
          description: "",
          task_type: task.type,
          content: {},
          estimated_minutes: task.estimated_minutes,
          difficulty:
            roadmap.current_week <= 3
              ? "beginner"
              : roadmap.current_week <= 9
                ? "intermediate"
                : "advanced",
          status: "pending",
          xp_reward:
            task.type === "quiz" ? 20 : task.type === "project" ? 50 : 10,
        }));

        await db("daily_tasks").insert(taskInserts);

        const { data: newTasks } = await db("daily_tasks")
          .select("*")
          .eq("roadmap_id", roadmap.id)
          .eq("week_number", roadmap.current_week)
          .order("day_number", { ascending: true });

        tasks = newTasks;
      }
    }

    // Find today's task(s) — first incomplete task
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pendingTasks = (tasks || []).filter((t: any) => t.status !== "completed");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const completedTasks = (tasks || []).filter((t: any) => t.status === "completed");
    const currentTask = pendingTasks[0] || null;

    // Return immediately — content is generated when user opens the task
    const res = NextResponse.json({
      roadmap_id: roadmap.id,
      current_week: roadmap.current_week,
      tasks: tasks || [],
      current_task: currentTask,
      completed_today: completedTasks.length,
      total_today: (tasks || []).length,
    });
    res.headers.set("Cache-Control", "private, max-age=30");
    return res;
  } catch (err) {
    console.error("Today tasks error:", err);
    return NextResponse.json(
      { error: "Failed to fetch today's tasks" },
      { status: 500 }
    );
  }
}
