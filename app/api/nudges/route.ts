import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get unread nudges
    const { data: nudges } = await db("nudges")
      .select("id, type, title, message, is_read, created_at")
      .eq("user_id", userId)
      .eq("is_read", false)
      .order("created_at", { ascending: false })
      .limit(5);

    // Mark them as read
    if (nudges && nudges.length > 0) {
      const nudgeIds = nudges.map((n: Record<string, unknown>) => n.id);
      await db("nudges")
        .update({ is_read: true })
        .in("id", nudgeIds);
    }

    return NextResponse.json({
      nudges: (nudges || []).map((n: Record<string, unknown>) => ({
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
