import { NextResponse } from "next/server";
import { anthropic, AI_MODEL } from "@/lib/ai/client";
import { TUTOR_SYSTEM_PROMPT } from "@/lib/ai/prompts/tutor";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, conversation_history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Get task context
    const { data: task } = await db("daily_tasks")
      .select("*, roadmap:roadmaps(role_id)")
      .eq("id", id)
      .eq("user_id", userId)
      .single();

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    // Get role info
    const roadmap = task.roadmap as { role_id: string } | null;
    const { data: role } = roadmap
      ? await db("roles")
          .select("name, category")
          .eq("id", roadmap.role_id)
          .single()
      : { data: null };

    // Get profile for level
    const { data: profile } = await db("profiles")
      .select("level, xp_total")
      .eq("user_id", userId)
      .single();

    // Build context
    const taskContent = task.content as { lesson_text?: string } | null;
    const contextMessage = `[CONTEXT]
Role: ${role?.name || "Web3 Professional"}
Category: ${role?.category || "general"}
User Level: ${profile?.level || 1}
Current Lesson: ${task.title}
Lesson Content Summary: ${taskContent?.lesson_text?.slice(0, 500) || "No content loaded yet"}
[/CONTEXT]`;

    // Build message history
    const messages = [
      { role: "user" as const, content: contextMessage },
      { role: "assistant" as const, content: "I'm ready to help you with this lesson! What would you like to know?" },
      ...(conversation_history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user" as const, content: message },
    ];

    // Stream response
    const stream = await anthropic.messages.stream({
      model: AI_MODEL,
      max_tokens: 500,
      system: TUTOR_SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            const data = JSON.stringify({
              type: "text",
              content: event.delta.text,
            });
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          }
        }

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`)
        );
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Tutor chat error:", err);
    return NextResponse.json(
      { error: "Failed to process tutor message" },
      { status: 500 }
    );
  }
}
