import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { XP_REWARDS } from "@/lib/types";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: task, error } = await db("daily_tasks")
      .select("*")
      .eq("id", id)
      .eq("user_id", userId)
      .single();

    if (error || !task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (err) {
    console.error("Task fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch task" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();

    if (status !== "completed") {
      return NextResponse.json(
        { error: "Only 'completed' status is supported" },
        { status: 400 }
      );
    }

    // Get the task
    const { data: task } = await db("daily_tasks")
      .select("*")
      .eq("id", id)
      .eq("user_id", userId)
      .single();

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    if (task.status === "completed") {
      return NextResponse.json({ message: "Task already completed" });
    }

    // Mark task completed
    await db("daily_tasks")
      .update({
        status: "completed",
        completed_at: new Date().toISOString(),
      })
      .eq("id", id);

    // Determine XP reward
    let xpAmount: number = XP_REWARDS.TASK_COMPLETED;
    if (task.task_type === "quiz") xpAmount = XP_REWARDS.QUIZ_PASSED;
    if (task.task_type === "project") xpAmount = XP_REWARDS.PROJECT_SUBMITTED;

    // Award XP
    await db("xp_log").insert({
      user_id: userId,
      amount: xpAmount,
      source: `task_${task.task_type}`,
      description: `Completed: ${task.title}`,
    });

    // Update streak
    const today = new Date().toISOString().split("T")[0];
    const { data: existingStreak } = await db("streak_history")
      .select("id")
      .eq("user_id", userId)
      .eq("date", today)
      .single();

    if (!existingStreak) {
      await db("streak_history").insert({
        user_id: userId,
        date: today,
        tasks_completed: 1,
      });

      // Check if yesterday had a streak entry
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      const { data: yesterdayStreak } = await db("streak_history")
        .select("id")
        .eq("user_id", userId)
        .eq("date", yesterdayStr)
        .single();

      const { data: profile } = await db("profiles")
        .select("streak_count, longest_streak, xp_total")
        .eq("user_id", userId)
        .single();

      const currentStreak = yesterdayStreak
        ? (profile?.streak_count || 0) + 1
        : 1;
      const longestStreak = Math.max(
        currentStreak,
        profile?.longest_streak || 0
      );

      // Add streak bonus XP
      const streakBonus = XP_REWARDS.STREAK_MAINTAINED;
      await db("xp_log").insert({
        user_id: userId,
        amount: streakBonus,
        source: "streak_maintained",
        description: `Day ${currentStreak} streak bonus`,
      });

      xpAmount += streakBonus;

      // Update profile
      await db("profiles")
        .update({
          streak_count: currentStreak,
          longest_streak: longestStreak,
          xp_total: (profile?.xp_total || 0) + xpAmount,
          last_active_at: new Date().toISOString(),
        })
        .eq("user_id", userId);
    } else {
      // Already have streak entry for today — just update XP
      const streakRecord = existingStreak as unknown as { id: string; tasks_completed?: number };
      await db("streak_history")
        .update({
          tasks_completed: (streakRecord.tasks_completed || 0) + 1,
        })
        .eq("id", streakRecord.id);

      const { data: profile } = await db("profiles")
        .select("xp_total")
        .eq("user_id", userId)
        .single();

      await db("profiles")
        .update({
          xp_total: (profile?.xp_total || 0) + xpAmount,
          last_active_at: new Date().toISOString(),
        })
        .eq("user_id", userId);
    }

    // Check for week completion
    const { data: weekTasks } = await db("daily_tasks")
      .select("status")
      .eq("roadmap_id", task.roadmap_id)
      .eq("week_number", task.week_number);

    const allCompleted = weekTasks?.every((t: { status: string }) => t.status === "completed");
    if (allCompleted && weekTasks && weekTasks.length > 0) {
      // Award week completion bonus
      await db("xp_log").insert({
        user_id: userId,
        amount: XP_REWARDS.WEEK_COMPLETED,
        source: "week_completed",
        description: `Completed Week ${task.week_number}`,
      });

      // Advance to next week
      await db("roadmaps")
        .update({ current_week: task.week_number + 1 })
        .eq("id", task.roadmap_id);

      xpAmount += XP_REWARDS.WEEK_COMPLETED;
    }

    return NextResponse.json({
      success: true,
      xp_awarded: xpAmount,
      week_completed: allCompleted,
    });
  } catch (err) {
    console.error("Task complete error:", err);
    return NextResponse.json(
      { error: "Failed to complete task" },
      { status: 500 }
    );
  }
}
