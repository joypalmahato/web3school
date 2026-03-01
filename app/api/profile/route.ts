import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile, error } = await db("profiles")
      .select("current_role_id, full_name")
      .eq("user_id", userId)
      .single();

    if (error || !profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    let roleSlug: string | null = null;

    if (profile.current_role_id) {
      const { data: role } = await db("roles")
        .select("slug")
        .eq("id", profile.current_role_id)
        .single();

      roleSlug = role?.slug || null;
    }

    const res = NextResponse.json({ role_slug: roleSlug, full_name: profile.full_name || null });
    res.headers.set("Cache-Control", "private, max-age=300");
    return res;
  } catch (err) {
    console.error("Profile fetch error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
