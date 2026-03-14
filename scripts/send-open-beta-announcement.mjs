import { createClient } from "@insforge/sdk";
import { Resend } from "resend";

const requiredEnv = [
  "NEXT_PUBLIC_INSFORGE_BASE_URL",
  "INSFORGE_API_KEY",
  "RESEND_API_KEY",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL,
  anonKey: process.env.INSFORGE_API_KEY,
});

const resend = new Resend(process.env.RESEND_API_KEY);
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://web3school.study";

function renderBetaAccessEmail(name) {
  const safeName = name || "there";
  return {
    subject: "Beta access is open - your Web3School account is ready",
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0A0A1A;font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <span style="font-size:24px;font-weight:800;color:#6C63FF;">Web3</span><span style="font-size:24px;font-weight:800;color:#F0F0F8;">School</span>
    </div>
    <div style="background:#111127;border-radius:16px;padding:32px;border:1px solid #1E1E3A;">
      <div style="text-align:center;margin-bottom:20px;">
        <span style="font-size:48px;">&#127881;</span>
      </div>
      <h1 style="color:#F0F0F8;font-size:22px;margin:0 0 16px;text-align:center;">Beta access is open</h1>
      <p style="color:#F0F0F8;font-size:15px;line-height:1.6;margin:0 0 12px;">Hey ${safeName},</p>
      <p style="color:#F0F0F8;font-size:15px;line-height:1.6;margin:0 0 24px;">Your Web3School account is approved and ready to use. If you signed up earlier, you now have access to the product.</p>
      <p style="color:#F0F0F8;font-size:15px;line-height:1.6;margin:0 0 24px;">We're in beta, so AI-generated guidance can make mistakes. Please cross-check anything important before you act on it.</p>
      <div style="text-align:center;margin-bottom:16px;">
        <a href="${appUrl}/onboarding" style="display:inline-block;background:#6C63FF;color:white;padding:12px 32px;border-radius:12px;text-decoration:none;font-weight:600;font-size:15px;">Start in beta &rarr;</a>
      </div>
      <p style="color:#666688;font-size:13px;text-align:center;margin:0;">Thanks for testing Web3School with us.</p>
    </div>
  </div>
</body>
</html>`,
  };
}

const { data: profiles, error } = await insforge.database
  .from("profiles")
  .select("user_id, email, full_name, beta_access_emailed_at")
  .eq("is_approved", true)
  .is("beta_access_emailed_at", null)
  .order("created_at", { ascending: true });

if (error) {
  throw error;
}

const rows = profiles || [];

if (rows.length === 0) {
  console.log("No approved profiles are waiting for the beta announcement.");
  process.exit(0);
}

let sent = 0;
let failed = 0;

for (const profile of rows) {
  try {
    const email = renderBetaAccessEmail(profile.full_name);
    await resend.emails.send({
      from: "Web3School <onboarding@resend.dev>",
      to: profile.email,
      subject: email.subject,
      html: email.html,
    });

    await insforge.database
      .from("profiles")
      .update({ beta_access_emailed_at: new Date().toISOString() })
      .eq("user_id", profile.user_id);

    sent += 1;
    console.log(`Sent beta announcement to ${profile.email}`);
  } catch (sendError) {
    failed += 1;
    console.error(`Failed to send beta announcement to ${profile.email}`, sendError);
  }
}

console.log(`Finished beta announcement run. Sent: ${sent}. Failed: ${failed}.`);
