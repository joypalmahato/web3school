import { NextResponse } from "next/server";
import { anthropic, AI_MODEL } from "@/lib/ai/client";
import { TASK_CONTENT_GENERATION_PROMPT } from "@/lib/ai/prompts/roadmap";
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

    // Lazily generate content when user opens a task with empty content
    if (!task.content || Object.keys(task.content as object).length === 0) {
      try {
        const { data: roadmap } = await db("roadmaps")
          .select("role_id")
          .eq("id", task.roadmap_id)
          .single();

        const { data: role } = await db("roles")
          .select("name, category")
          .eq("id", roadmap?.role_id)
          .single();

        const contentResponse = await anthropic.messages.create({
          model: AI_MODEL,
          max_tokens: 2000,
          system: TASK_CONTENT_GENERATION_PROMPT,
          messages: [
            {
              role: "user",
              content: `Generate lesson content for this task:

Role: ${role?.name || "Web3 Professional"}
Category: ${role?.category || "technical"}
Task Title: ${task.title}
Task Type: ${task.task_type}
Task Description: ${task.description || task.title}
Difficulty: ${task.difficulty}
Week: ${task.week_number} of 12
Day: ${task.day_number} of 5

Generate the content in the specified JSON format.`,
            },
          ],
        });

        const contentText =
          contentResponse.content[0].type === "text"
            ? contentResponse.content[0].text
            : "";

        let content;
        try {
          // Strip outer code fences if present
          const jsonMatch = contentText.match(/```(?:json)?\s*([\s\S]*?)```/);
          const jsonStr = jsonMatch ? jsonMatch[1].trim() : contentText.trim();
          const parsed = JSON.parse(jsonStr);

          // If parsed.lesson_text itself contains a JSON string (double-wrapped),
          // try to unwrap it
          if (typeof parsed.lesson_text === "string" && parsed.lesson_text.startsWith("```")) {
            const innerMatch = parsed.lesson_text.match(/```(?:json)?\s*([\s\S]*?)```/);
            if (innerMatch) {
              try {
                const innerParsed = JSON.parse(innerMatch[1].trim());
                content = innerParsed;
              } catch {
                content = parsed;
              }
            } else {
              content = parsed;
            }
          } else {
            content = parsed;
          }
        } catch {
          // If JSON parsing fails entirely, use raw text as lesson
          // but still strip any code fence wrapper
          const stripped = contentText.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "");
          content = { lesson_text: stripped };
        }

        await db("daily_tasks")
          .update({ content })
          .eq("id", task.id);

        task.content = content;
      } catch (err) {
        console.error("Content generation error:", err);
      }
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
      xp_amount: xpAmount,
      action: `task_${task.task_type}`,
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
        xp_amount: streakBonus,
        action: "streak_maintained",
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
        xp_amount: XP_REWARDS.WEEK_COMPLETED,
        action: "week_completed",
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
