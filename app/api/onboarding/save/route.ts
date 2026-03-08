import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { stepSchemas } from "@/lib/validations/onboarding";
import { calculateProfileCompleteness } from "@/lib/utils/profileCompleteness";
import type { Profile } from "@/lib/types";

export async function PATCH(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { step, data } = body;

    if (typeof step !== "number" || !Number.isInteger(step) || step < 1 || step > 5) {
      return Response.json({ error: "Invalid step" }, { status: 400 });
    }

    // Validate with step-specific schema
    const schema = stepSchemas[step - 1];
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return Response.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 }
      );
    }

    // Build update payload
    const updateData: Record<string, unknown> = {
      ...parsed.data,
      onboarding_step: step,
    };

    // If completing the final step, mark onboarding as done
    if (step === 5) {
      updateData.onboarding_completed = true;
      updateData.onboarding_completed_at = new Date().toISOString();
    }

    // Save to database
    const { error: updateError } = await db("profiles")
      .update(updateData)
      .eq("user_id", userId);

    if (updateError) {
      console.error("Onboarding save error:", updateError);
      return Response.json({ error: "Failed to save" }, { status: 500 });
    }

    // Fetch updated profile to calculate completeness
    const { data: profile } = await db("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (profile) {
      const { percentage } = calculateProfileCompleteness(profile as Profile);
      await db("profiles")
        .update({ profile_completeness: percentage })
        .eq("user_id", userId);
    }

    return Response.json({ success: true, step });
  } catch (err) {
    console.error("Onboarding save error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
