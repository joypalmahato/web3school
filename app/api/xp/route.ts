import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { XP_REWARDS, getLevelFromXP } from "@/lib/types";

type XPAction = keyof typeof XP_REWARDS;

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { action, description } = (await request.json()) as {
      action: string;
      description?: string;
    };

    const xpAction = action?.toUpperCase() as XPAction;
    const amount = XP_REWARDS[xpAction];

    if (!amount) {
      return NextResponse.json(
        { error: "Invalid XP action" },
        { status: 400 }
      );
    }

    // Log XP
    await db("xp_log").insert({
      user_id: userId,
      amount,
      source: action,
      description: description || action,
    });

    // Get current profile
    const { data: profile } = await db("profiles")
      .select("xp_total, level")
      .eq("user_id", userId)
      .single();

    const previousLevel = profile?.level || 1;
    const newTotal = (profile?.xp_total || 0) + amount;
    const newLevel = getLevelFromXP(newTotal);

    // Update profile
    await db("profiles")
      .update({
        xp_total: newTotal,
        level: newLevel,
      })
      .eq("user_id", userId);

    return NextResponse.json({
      xp_awarded: amount,
      total_xp: newTotal,
      level: newLevel,
      leveled_up: newLevel > previousLevel,
    });
  } catch (err) {
    console.error("XP award error:", err);
    return NextResponse.json(
      { error: "Failed to award XP" },
      { status: 500 }
    );
  }
}
