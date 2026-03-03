import { groq, AI_MODEL } from "@/lib/ai/client";
import {
  DISCOVERY_SYSTEM_PROMPT,
  buildDiscoveryPromptWithProfile,
} from "@/lib/ai/prompts/discovery";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import type { Profile } from "@/lib/types";

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const body = await request.json();
    const { message, conversation_history = [], session_id } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
      });
    }

    // Build messages array for Groq
    const messages = [
      ...conversation_history.map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user" as const, content: message.trim() },
    ];

    // Create or update discovery session in database
    let currentSessionId = session_id;
    if (!currentSessionId) {
      const { data: session, error: sessionError } = await db("discovery_sessions")
        .insert({
          user_id: userId,
          status: "in_progress",
          conversation_history: [],
        })
        .select("id")
        .single();

      if (sessionError) {
        console.error("Session creation error:", sessionError);
        return new Response(
          JSON.stringify({ error: "Failed to create session" }),
          { status: 500 }
        );
      }
      currentSessionId = session.id;
    }

    // Fetch profile for personalized prompt
    let systemPrompt = DISCOVERY_SYSTEM_PROMPT;
    try {
      const { data: profile } = await db("profiles")
        .select("*")
        .eq("user_id", userId)
        .single();
      if (profile) {
        systemPrompt = buildDiscoveryPromptWithProfile(profile as Profile);
      }
    } catch {
      // Fall back to default prompt
    }

    // Stream response from Groq
    const stream = await groq.chat.completions.create({
      model: AI_MODEL,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          let fullResponse = "";

          // Send session_id first
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: "session_id", session_id: currentSessionId })}\n\n`
            )
          );

          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) {
              fullResponse += text;
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ type: "text", content: text })}\n\n`
                )
              );
            }
          }

          // Check if conversation is complete
          const isComplete = fullResponse.includes("[CONVERSATION_COMPLETE]");
          const progressMatch = fullResponse.match(/\[PROGRESS: (\d+)\/10\]/);
          const progress = progressMatch
            ? parseInt(progressMatch[1])
            : isComplete
              ? 10
              : 0;

          // Extract choices if present
          const choicesMatch = fullResponse.match(/\[CHOICES: (\[.*?\])\]/);
          let choices: string[] | null = null;
          if (choicesMatch) {
            try {
              choices = JSON.parse(choicesMatch[1]);
            } catch {
              choices = null;
            }
          }

          // Clean response text (remove all hidden markers)
          const cleanResponse = fullResponse
            .replace(/\[PROGRESS: \d+\/10\]/g, "")
            .replace(/\[CONVERSATION_COMPLETE\]/g, "")
            .replace(/\[CHOICES: \[.*?\]\]/g, "")
            .trim();

          // Save updated conversation to database (non-blocking — don't fail the stream if this errors)
          const updatedHistory = [
            ...conversation_history,
            { role: "user", content: message.trim(), timestamp: new Date().toISOString() },
            {
              role: "assistant",
              content: cleanResponse,
              timestamp: new Date().toISOString(),
            },
          ];

          try {
            await db("discovery_sessions")
              .update({ conversation_history: updatedHistory })
              .eq("id", currentSessionId);
          } catch (dbErr) {
            console.error("Failed to save conversation history:", dbErr);
            // Don't fail the stream — the user still gets their response
          }

          // Send completion signal
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "done",
                progress,
                is_complete: isComplete,
                clean_response: cleanResponse,
                choices,
              })}\n\n`
            )
          );

          controller.close();
        } catch (streamErr) {
          console.error("Discovery stream error:", streamErr);
          try {
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ type: "error", message: "Stream failed" })}\n\n`
              )
            );
            controller.close();
          } catch {
            controller.error(streamErr);
          }
        }
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
    console.error("Discovery API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
