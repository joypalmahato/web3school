import { NextResponse } from "next/server";
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

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email, avatar_url, timezone, preferred_language")
      .eq("id", user.id)
      .single();

    return NextResponse.json({
      profile: profile || {},
      email: user.email,
    });
  } catch (err) {
    console.error("Settings fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates = await request.json();

    // Only allow safe fields
    const allowedFields = [
      "full_name",
      "avatar_url",
      "timezone",
      "preferred_language",
    ];
    const safeUpdates: Record<string, unknown> = {};
    for (const key of allowedFields) {
      if (key in updates) {
        safeUpdates[key] = updates[key];
      }
    }

    if (Object.keys(safeUpdates).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
    }

    const { error } = await supabase
      .from("profiles")
      .update(safeUpdates)
      .eq("id", user.id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to update settings" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Settings update error:", err);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
