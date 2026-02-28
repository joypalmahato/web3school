import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { XP_REWARDS, getLevelFromXP } from "@/lib/types";

type XPAction = keyof typeof XP_REWARDS;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
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
    await supabase.from("xp_log").insert({
      user_id: user.id,
      amount,
      source: action,
      description: description || action,
    });

    // Get current profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("xp_total, level")
      .eq("id", user.id)
      .single();

    const previousLevel = profile?.level || 1;
    const newTotal = (profile?.xp_total || 0) + amount;
    const newLevel = getLevelFromXP(newTotal);

    // Update profile
    await supabase
      .from("profiles")
      .update({
        xp_total: newTotal,
        level: newLevel,
      })
      .eq("id", user.id);

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
