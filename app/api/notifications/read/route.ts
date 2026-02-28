import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await supabase
      .from("nudges")
      .update({ is_read: true })
      .eq("user_id", user.id)
      .eq("is_read", false);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mark read error:", err);
    return NextResponse.json(
      { error: "Failed to mark as read" },
      { status: 500 }
    );
  }
}
