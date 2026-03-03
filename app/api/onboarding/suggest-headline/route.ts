import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { groq, AI_MODEL } from "@/lib/ai/client";
import type { Profile } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile, error } = await db("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error || !profile) {
      return Response.json({ error: "Profile not found" }, { status: 404 });
    }

    const p = profile as Profile;

    const context = [
      p.full_name ? `Name: ${p.full_name}` : "",
      p.employment_status ? `Status: ${p.employment_status}` : "",
      p.current_role_title ? `Current role: ${p.current_role_title}` : "",
      p.tech_comfort ? `Tech comfort: ${p.tech_comfort}` : "",
      p.existing_skills?.length ? `Skills: ${p.existing_skills.join(", ")}` : "",
      p.interest_areas?.length ? `Interests: ${p.interest_areas.join(", ")}` : "",
      p.career_goals?.length ? `Goals: ${p.career_goals.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const response = await groq.chat.completions.create({
      model: AI_MODEL,
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: `Based on this person's profile, suggest 3 short, punchy professional headlines (under 100 chars each). Think LinkedIn headline style but more casual and Web3/tech focused. Return JSON only.

Profile:
${context}

Return: { "suggestions": ["headline 1", "headline 2", "headline 3"] }`,
        },
      ],
    });

    const aiText = response.choices[0]?.message?.content ?? "";
    let suggestions: string[] = [];
    try {
      const jsonMatch = aiText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        suggestions = parsed.suggestions || [];
      }
    } catch {
      suggestions = [];
    }

    return Response.json({ suggestions });
  } catch (err) {
    console.error("Headline suggestion error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
