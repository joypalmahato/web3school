import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
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

    // Use service role for admin operations
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Check for duplicate email
    const { data: existing } = await supabase
      .from("waitlist")
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
    const { data, error } = await supabase
      .from("waitlist")
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
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Web3School <onboarding@resend.dev>",
          to: parsed.email,
          subject: "You're on the Web3School waitlist!",
          html: `
            <div style="font-family: 'Inter', sans-serif; background: #0A0A1A; color: #F0F0F8; padding: 40px; border-radius: 16px;">
              <h1 style="color: #6C63FF; font-size: 24px;">Welcome to Web3School!</h1>
              <p>Hey ${parsed.name},</p>
              <p>You're #${data.waitlist_position} on the waitlist. We'll notify you as soon as we launch.</p>
              <p>Share your referral link to move up: <a href="${process.env.NEXT_PUBLIC_APP_URL}?ref=${data.referral_code}" style="color: #00D4FF;">${process.env.NEXT_PUBLIC_APP_URL}?ref=${data.referral_code}</a></p>
              <p style="color: #666688; margin-top: 20px;">— The Web3School Team</p>
            </div>
          `,
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
