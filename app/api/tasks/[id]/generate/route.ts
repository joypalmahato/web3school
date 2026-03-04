import { NextResponse } from "next/server";
import { groq, AI_MODEL } from "@/lib/ai/client";
import { TASK_CONTENT_GENERATION_PROMPT } from "@/lib/ai/prompts/roadmap";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export const maxDuration = 60;

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(_request: Request, { params }: RouteParams) {
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

    const { data: roadmap } = await db("roadmaps")
      .select("role_id")
      .eq("id", task.roadmap_id)
      .single();

    const { data: role } = await db("roles")
      .select("name, category")
      .eq("id", roadmap?.role_id)
      .single();

    const contentResponse = await groq.chat.completions.create({
      model: AI_MODEL,
      max_tokens: 2000,
      messages: [
        { role: "system", content: TASK_CONTENT_GENERATION_PROMPT },
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

    const contentText = contentResponse.choices[0]?.message?.content ?? "";

    let content;
    try {
      const jsonMatch = contentText.match(/```(?:json)?\s*([\s\S]*?)```/);
      const jsonStr = jsonMatch ? jsonMatch[1].trim() : contentText.trim();
      content = JSON.parse(jsonStr);
    } catch {
      const stripped = contentText.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "");
      content = { lesson_text: stripped };
    }

    await db("daily_tasks").update({ content }).eq("id", id);

    return NextResponse.json({ content });
  } catch (err) {
    console.error("Content generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
