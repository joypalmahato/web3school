import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: entry, error } = await db("waitlist")
      .select("waitlist_position, referral_code, referral_count, status")
      .eq("user_id", userId)
      .single();

    if (error || !entry) {
      return NextResponse.json(
        { error: "Waitlist entry not found" },
        { status: 404 }
      );
    }

    // Count how many people ahead are still waiting
    const { count: totalAhead } = await db("waitlist")
      .select("*", { count: "exact", head: true })
      .lt("waitlist_position", entry.waitlist_position)
      .eq("status", "waiting");

    return NextResponse.json({
      position: entry.waitlist_position,
      referral_code: entry.referral_code,
      referral_count: entry.referral_count,
      status: entry.status,
      total_ahead: totalAhead ?? 0,
    });
  } catch (err) {
    console.error("Waitlist status error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
