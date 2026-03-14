import { Resend } from "resend";
import { db } from "@/lib/db";
import { approvalEmail } from "@/lib/emails/templates";
import type { Profile } from "@/lib/types";

type SendBetaAccessEmailParams = {
  userId?: string | null;
  email: string;
  name?: string | null;
  force?: boolean;
};

type BetaAccessProfile = Pick<
  Profile,
  "user_id" | "email" | "full_name" | "beta_access_emailed_at"
>;

export async function sendBetaAccessEmail({
  userId,
  email,
  name,
  force = false,
}: SendBetaAccessEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    return { sent: false, reason: "missing_resend_key" as const };
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) {
    return { sent: false, reason: "missing_email" as const };
  }

  const profileQuery = userId
    ? db("profiles")
        .select("user_id, email, full_name, beta_access_emailed_at")
        .eq("user_id", userId)
    : db("profiles")
        .select("user_id, email, full_name, beta_access_emailed_at")
        .eq("email", normalizedEmail);

  const { data: profileRow } = await profileQuery.single();
  const profile = (profileRow as BetaAccessProfile | null) ?? null;

  if (!force && profile?.beta_access_emailed_at) {
    return { sent: false, reason: "already_sent" as const };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.study";
  const emailContent = approvalEmail({
    name: name?.trim() || profile?.full_name || "there",
    appUrl,
  });

  await resend.emails.send({
    from: "Web3School <onboarding@resend.dev>",
    to: normalizedEmail,
    subject: emailContent.subject,
    html: emailContent.html,
  });

  const emailedAt = new Date().toISOString();

  if (profile?.user_id) {
    await db("profiles")
      .update({ beta_access_emailed_at: emailedAt })
      .eq("user_id", profile.user_id);
  } else {
    await db("profiles")
      .update({ beta_access_emailed_at: emailedAt })
      .eq("email", normalizedEmail);
  }

  return { sent: true, emailedAt };
}
