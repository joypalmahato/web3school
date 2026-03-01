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
    const { data: aheadData } = await db("waitlist")
      .select("id")
      .lt("waitlist_position", entry.waitlist_position)
      .eq("status", "waiting");

    const totalAhead = aheadData?.length ?? 0;

    return NextResponse.json({
      position: entry.waitlist_position,
      referral_code: entry.referral_code,
      referral_count: entry.referral_count,
      status: entry.status,
      total_ahead: totalAhead,
    });
  } catch (err) {
    console.error("Waitlist status error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
