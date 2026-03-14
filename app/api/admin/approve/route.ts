import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { z } from "zod/v4";
import { db } from "@/lib/db";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

const approveSchema = z.object({
  emails: z.array(z.email()).min(1, "At least one email required"),
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check admin access via profile email
    const { data: adminProfile } = await db("profiles")
      .select("email")
      .eq("user_id", userId)
      .single();

    if (!adminProfile || !ADMIN_EMAILS.includes(adminProfile.email.toLowerCase())) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const parsed = approveSchema.parse(body);

    const results: { email: string; success: boolean; error?: string }[] = [];

    for (const email of parsed.emails) {
      try {
        // Update profile
        const { error: profileError } = await db("profiles")
          .update({
            is_approved: true,
            approved_at: new Date().toISOString(),
          })
          .eq("email", email);

        if (profileError) {
          results.push({ email, success: false, error: "Profile update failed" });
          continue;
        }

        // Update waitlist entry
        await db("waitlist")
          .update({
            status: "approved",
            approved_at: new Date().toISOString(),
          })
          .eq("email", email);

        // Send approval email
        if (process.env.RESEND_API_KEY) {
          try {
            const { Resend } = await import("resend");
            const { approvalEmail } = await import("@/lib/emails/templates");
            const resend = new Resend(process.env.RESEND_API_KEY);

            const { data: userProfile } = await db("profiles")
              .select("full_name")
              .eq("email", email)
              .single();

            const emailContent = approvalEmail({
              name: userProfile?.full_name || "there",
              appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://web3school.study",
            });

            await resend.emails.send({
              from: "Web3School <onboarding@resend.dev>",
              to: email,
              subject: emailContent.subject,
              html: emailContent.html,
            });
          } catch (emailErr) {
            console.error("Approval email error:", emailErr);
          }
        }

        results.push({ email, success: true });
      } catch (err) {
        console.error(`Error approving ${email}:`, err);
        results.push({ email, success: false, error: "Unknown error" });
      }
    }

    return NextResponse.json({ results });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: err.issues },
        { status: 400 }
      );
    }
    console.error("Admin approve error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
