import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: adminProfile } = await db("profiles")
      .select("email")
      .eq("user_id", userId)
      .single();

    if (!adminProfile || !ADMIN_EMAILS.includes(adminProfile.email.toLowerCase())) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { data, error } = await db("waitlist")
      .select("id, name, email, user_type, waitlist_position, referral_code, referral_count, status, created_at, approved_at")
      .order("waitlist_position", { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ entries: data });
  } catch (err) {
    console.error("Admin waitlist error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
