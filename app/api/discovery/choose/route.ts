import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
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
    const { data: role } = await supabase
      .from("roles")
      .select("id")
      .eq("slug", role_slug)
      .single();

    if (!role) {
      return NextResponse.json({ error: "Role not found" }, { status: 404 });
    }

    // Update user profile with chosen role
    await supabase
      .from("profiles")
      .update({
        current_role_id: role.id,
        onboarding_completed: true,
      })
      .eq("id", user.id);

    return NextResponse.json({ success: true, role_id: role.id });
  } catch (err) {
    console.error("Choose path error:", err);
    return NextResponse.json(
      { error: "Failed to choose path" },
      { status: 500 }
    );
  }
}
