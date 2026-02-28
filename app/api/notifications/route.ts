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

    const { data: notifications } = await supabase
      .from("nudges")
      .select("id, type, title, message, is_read, sent_at")
      .eq("user_id", user.id)
      .order("sent_at", { ascending: false })
      .limit(50);

    return NextResponse.json({
      notifications: (notifications || []).map((n) => ({
        id: n.id,
        type: n.type,
        title: n.title,
        message: n.message,
        is_read: n.is_read,
        created_at: n.sent_at,
      })),
    });
  } catch (err) {
    console.error("Notifications fetch error:", err);
    return NextResponse.json({ notifications: [] });
  }
}
