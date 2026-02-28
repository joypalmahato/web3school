import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await db("profiles")
      .select("streak_count, longest_streak, last_active_at")
      .eq("user_id", userId)
      .single();

    const today = new Date().toISOString().split("T")[0];
    const { data: todayEntry } = await db("streak_history")
      .select("tasks_completed")
      .eq("user_id", userId)
      .eq("date", today)
      .single();

    return NextResponse.json({
      current_streak: profile?.streak_count || 0,
      longest_streak: profile?.longest_streak || 0,
      maintained_today: !!todayEntry,
      tasks_completed_today: todayEntry?.tasks_completed || 0,
      last_active: profile?.last_active_at,
    });
  } catch (err) {
    console.error("Streak fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch streak" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const today = new Date().toISOString().split("T")[0];

    // Check if user completed any tasks today
    const { data: todayEntry } = await db("streak_history")
      .select("id, tasks_completed")
      .eq("user_id", userId)
      .eq("date", today)
      .single();

    if (!todayEntry) {
      // No tasks completed today — check if streak needs to be reset
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      const { data: yesterdayEntry } = await db("streak_history")
        .select("id")
        .eq("user_id", userId)
        .eq("date", yesterdayStr)
        .single();

      if (!yesterdayEntry) {
        // Streak is broken — reset
        await db("profiles")
          .update({ streak_count: 0 })
          .eq("user_id", userId);

        return NextResponse.json({
          streak_maintained: false,
          current_streak: 0,
          message: "Streak reset — complete a task to start a new one!",
        });
      }

      return NextResponse.json({
        streak_maintained: false,
        message: "Complete a task today to maintain your streak!",
      });
    }

    return NextResponse.json({
      streak_maintained: true,
      tasks_completed: todayEntry.tasks_completed,
      message: "Streak maintained!",
    });
  } catch (err) {
    console.error("Streak check error:", err);
    return NextResponse.json(
      { error: "Failed to check streak" },
      { status: 500 }
    );
  }
}
