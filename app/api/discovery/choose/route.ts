import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role_slug } = await request.json();

    if (!role_slug) {
      return NextResponse.json(
        { error: "Role slug is required" },
        { status: 400 }
      );
    }

    // Find the role in the database
    const { data: role } = await db("roles")
      .select("id")
      .eq("slug", role_slug)
      .single();

    if (!role) {
      return NextResponse.json({ error: "Role not found" }, { status: 404 });
    }

    // Update user profile with chosen role
    // discovery_completed must also be set so the waitlist router sends them to /learn
    await db("profiles")
      .update({
        current_role_id: role.id,
        onboarding_completed: true,
        discovery_completed: true,
      })
      .eq("user_id", userId);

    return NextResponse.json({ success: true, role_id: role.id });
  } catch (err) {
    console.error("Choose path error:", err);
    return NextResponse.json(
      { error: "Failed to choose path" },
      { status: 500 }
    );
  }
}
