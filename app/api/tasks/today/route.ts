import { NextResponse } from "next/server";
import { anthropic, AI_MODEL } from "@/lib/ai/client";
import { TASK_CONTENT_GENERATION_PROMPT } from "@/lib/ai/prompts/roadmap";
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
    const { data: roadmap } = await supabase
      .from("roadmaps")
      .select("id, current_week, role_id, milestones")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    if (!roadmap) {
      return NextResponse.json({ error: "No active roadmap" }, { status: 404 });
    }

    // Get tasks for the current week
    let { data: tasks } = await supabase
      .from("daily_tasks")
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
          user_id: user.id,
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

        await supabase.from("daily_tasks").insert(taskInserts);

        const { data: newTasks } = await supabase
          .from("daily_tasks")
          .select("*")
          .eq("roadmap_id", roadmap.id)
          .eq("week_number", roadmap.current_week)
          .order("day_number", { ascending: true });

        tasks = newTasks;
      }
    }

    // Find today's task(s) — first incomplete task
    const pendingTasks = (tasks || []).filter((t) => t.status !== "completed");
    const completedTasks = (tasks || []).filter((t) => t.status === "completed");
    const currentTask = pendingTasks[0] || null;

    // If the current task has no content, generate it
    if (
      currentTask &&
      (!currentTask.content ||
        Object.keys(currentTask.content as object).length === 0)
    ) {
      try {
        const { data: role } = await supabase
          .from("roles")
          .select("name, category")
          .eq("id", roadmap.role_id)
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
Task Title: ${currentTask.title}
Task Type: ${currentTask.task_type}
Task Description: ${currentTask.description || currentTask.title}
Difficulty: ${currentTask.difficulty}
Week: ${currentTask.week_number} of 12
Day: ${currentTask.day_number} of 5

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
          const jsonMatch = contentText.match(/```(?:json)?\s*([\s\S]*?)```/);
          const jsonStr = jsonMatch ? jsonMatch[1].trim() : contentText.trim();
          content = JSON.parse(jsonStr);
        } catch {
          content = { lesson_text: contentText };
        }

        await supabase
          .from("daily_tasks")
          .update({ content })
          .eq("id", currentTask.id);

        currentTask.content = content;
      } catch (err) {
        console.error("Content generation error:", err);
      }
    }

    return NextResponse.json({
      roadmap_id: roadmap.id,
      current_week: roadmap.current_week,
      tasks: tasks || [],
      current_task: currentTask,
      completed_today: completedTasks.length,
      total_today: (tasks || []).length,
    });
  } catch (err) {
    console.error("Today tasks error:", err);
    return NextResponse.json(
      { error: "Failed to fetch today's tasks" },
      { status: 500 }
    );
  }
}
