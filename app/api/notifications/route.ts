import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: notifications } = await db("nudges")
      .select("id, type, title, message, is_read, sent_at")
      .eq("user_id", userId)
      .order("sent_at", { ascending: false })
      .limit(50);

    return NextResponse.json({
      notifications: (notifications || []).map((n: Record<string, unknown>) => ({
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
