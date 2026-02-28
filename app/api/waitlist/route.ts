import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod/v4";

const waitlistSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  user_type: z.enum([
    "in_web3_no_skills",
    "want_to_enter",
    "laid_off",
    "curious",
    "other",
  ]),
  referral_source: z
    .enum(["twitter", "discord", "telegram", "friend", "other"])
    .optional(),
  referred_by: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.parse(body);

    // Check for duplicate email
    const { data: existing } = await db("waitlist")
      .select("id")
      .eq("email", parsed.email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Insert into waitlist
    const { data, error } = await db("waitlist")
      .insert({
        name: parsed.name,
        email: parsed.email,
        user_type: parsed.user_type,
        referral_source: parsed.referral_source || null,
        referred_by: parsed.referred_by || null,
      })
      .select("waitlist_position, referral_code")
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend (non-blocking)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const { waitlistConfirmationEmail } = await import("@/lib/emails/templates");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const email = waitlistConfirmationEmail({
          name: parsed.name,
          position: data.waitlist_position,
          referralCode: data.referral_code,
          appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://web3school.io",
        });
        await resend.emails.send({
          from: "Web3School <onboarding@resend.dev>",
          to: parsed.email,
          subject: email.subject,
          html: email.html,
        });
      } catch (emailErr) {
        // Don't fail the request if email fails
        console.error("Email send error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      position: data.waitlist_position,
      referral_code: data.referral_code,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: err.issues },
        { status: 400 }
      );
    }
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
