import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { APP_URL } from "@/lib/utils/constants";

function generateSlug(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let slug = "";
  for (let i = 0; i < 8; i++) {
    slug += chars[Math.floor(Math.random() * chars.length)];
  }
  return slug;
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
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
      const { data: existing } = await supabase
        .from("result_cards")
        .select("share_slug")
        .eq("session_id", session_id)
        .eq("user_id", user.id)
        .single();

      if (existing) {
        return NextResponse.json({
          share_url: `${APP_URL}/share/${existing.share_slug}`,
        });
      }
    }

    const share_slug = generateSlug();

    const { error: insertError } = await supabase.from("result_cards").insert({
      user_id: user.id,
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
