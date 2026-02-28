import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

/**
 * POST /api/profile/create
 * Creates a profile row after InsForge signup.
 * InsForge has no handle_new_user trigger, so we do it explicitly.
 */
export async function POST(request: Request) {
  try {
    const { userId, user } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if profile already exists
    const { data: existing } = await db("profiles")
      .select("user_id")
      .eq("user_id", userId)
      .single();

    if (existing) {
      return NextResponse.json({ success: true, message: "Profile already exists" });
    }

    const body = await request.json().catch(() => ({}));

    const { error } = await db("profiles").insert({
      user_id: userId,
      email: user?.email || body.email || "",
      full_name: user?.profile?.name || body.full_name || "",
      discovery_completed: false,
      onboarding_completed: false,
      xp_total: 0,
      level: 1,
    });

    if (error) {
      console.error("Profile creation error:", error);
      return NextResponse.json(
        { error: "Failed to create profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Profile create error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
