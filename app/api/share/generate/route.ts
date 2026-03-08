import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { APP_URL } from "@/lib/utils/constants";

function generateSlug(): string {
  // crypto.randomUUID() uses a CSPRNG — no collision risk from weak randomness
  return crypto.randomUUID().replace(/-/g, "").slice(0, 8);
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { session_id, role_name, role_category, top_traits, match_percentage } =
      await request.json();

    if (!role_name || !match_percentage) {
      return NextResponse.json(
        { error: "Role name and match percentage are required" },
        { status: 400 }
      );
    }

    // Check if a card already exists for this session
    if (session_id) {
      const { data: existing } = await db("result_cards")
        .select("share_slug")
        .eq("session_id", session_id)
        .eq("user_id", userId)
        .single();

      if (existing) {
        return NextResponse.json({
          share_url: `${APP_URL}/share/${existing.share_slug}`,
        });
      }
    }

    const share_slug = generateSlug();

    const { error: insertError } = await db("result_cards").insert({
      user_id: userId,
      session_id: session_id || null,
      role_name,
      role_category: role_category || "technical",
      top_traits: top_traits || [],
      match_percentage,
      share_slug,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to create share card" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      share_url: `${APP_URL}/share/${share_slug}`,
    });
  } catch (err) {
    console.error("Share generate error:", err);
    return NextResponse.json(
      { error: "Failed to generate share link" },
      { status: 500 }
    );
  }
}
