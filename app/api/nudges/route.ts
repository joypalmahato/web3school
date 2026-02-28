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

    // Get unread nudges
    const { data: nudges } = await supabase
      .from("nudges")
      .select("id, type, title, message, is_read, created_at")
      .eq("user_id", user.id)
      .eq("is_read", false)
      .order("created_at", { ascending: false })
      .limit(5);

    // Mark them as read
    if (nudges && nudges.length > 0) {
      const nudgeIds = nudges.map((n) => n.id);
      await supabase
        .from("nudges")
        .update({ is_read: true })
        .in("id", nudgeIds);
    }

    return NextResponse.json({
      nudges: (nudges || []).map((n) => ({
        id: n.id,
        type: n.type || "tip",
        title: n.title,
        message: n.message,
      })),
    });
  } catch (err) {
    console.error("Nudges fetch error:", err);
    return NextResponse.json({ nudges: [] });
  }
}
