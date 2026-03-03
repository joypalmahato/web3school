import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { groq, AI_MODEL } from "@/lib/ai/client";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { resume_url } = body;

    if (!resume_url || typeof resume_url !== "string") {
      return Response.json({ error: "resume_url is required" }, { status: 400 });
    }

    // Download the PDF
    const pdfResponse = await fetch(resume_url);
    if (!pdfResponse.ok) {
      return Response.json({ error: "Failed to download resume" }, { status: 400 });
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();

    // Dynamic import to avoid build-time canvas dependency
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: new Uint8Array(pdfBuffer) });
    const textResult = await parser.getText();
    await parser.destroy();
    const resumeText = textResult.text.trim();

    if (!resumeText || resumeText.length < 20) {
      return Response.json({ error: "Could not extract text from PDF" }, { status: 400 });
    }

    // Ask Groq to analyze the resume
    const response = await groq.chat.completions.create({
      model: AI_MODEL,
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `Analyze this resume and extract key information. Return JSON only.

Resume text:
${resumeText.slice(0, 5000)}

Return this JSON format:
{
  "current_role": "their most recent job title",
  "years_experience": number,
  "skills": ["skill1", "skill2", ...],
  "education": "highest education level",
  "summary": "2-3 sentence profile summary written in second person (You are...)"
}`,
        },
      ],
    });

    const aiText = response.choices[0]?.message?.content ?? "";
    let extracted;
    try {
      const jsonMatch = aiText.match(/\{[\s\S]*\}/);
      extracted = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch {
      extracted = null;
    }

    // Save resume text and AI summary to profile
    const updateData: Record<string, unknown> = {
      resume_text: resumeText.slice(0, 10000),
    };
    if (extracted?.summary) {
      updateData.ai_profile_summary = extracted.summary;
    }

    await db("profiles")
      .update(updateData)
      .eq("user_id", userId);

    return Response.json({
      resume_text: resumeText.slice(0, 2000),
      extracted,
    });
  } catch (err) {
    console.error("Resume parse error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
