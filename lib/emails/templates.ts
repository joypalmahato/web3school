/**
 * @module Email Templates
 * @part-of Web3School — Transactional Emails (Resend)
 * @design Dark theme inline styles matching brand colors
 */

const BRAND = {
  bg: "#0A0A1A",
  cardBg: "#111127",
  purple: "#6C63FF",
  cyan: "#00D4FF",
  text: "#F0F0F8",
  muted: "#666688",
} as const;

const wrapper = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <span style="font-size:24px;font-weight:800;color:${BRAND.purple};">Web3</span><span style="font-size:24px;font-weight:800;color:${BRAND.text};">School</span>
    </div>
    <div style="background:${BRAND.cardBg};border-radius:16px;padding:32px;border:1px solid #1E1E3A;">
      ${content}
    </div>
    <p style="text-align:center;color:${BRAND.muted};font-size:12px;margin-top:24px;">
      &copy; ${new Date().getFullYear()} Web3School. All rights reserved.<br/>
      You're receiving this because you signed up at Web3School.
    </p>
  </div>
</body>
</html>
`;

export function waitlistConfirmationEmail(params: {
  name: string;
  position: number;
  referralCode: string;
  appUrl: string;
}): { subject: string; html: string } {
  return {
    subject: "You're on the Web3School waitlist!",
    html: wrapper(`
      <h1 style="color:${BRAND.text};font-size:22px;margin:0 0 16px;">Welcome to the waitlist!</h1>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 12px;">
        Hey ${params.name},
      </p>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 20px;">
        You're <strong style="color:${BRAND.cyan};">#${params.position}</strong> on the waitlist. We'll notify you the moment we launch.
      </p>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 8px;">
        Want to move up? Share your referral link:
      </p>
      <div style="background:${BRAND.bg};border-radius:8px;padding:12px 16px;margin:0 0 24px;">
        <a href="${params.appUrl}?ref=${params.referralCode}" style="color:${BRAND.cyan};font-size:14px;word-break:break-all;">
          ${params.appUrl}?ref=${params.referralCode}
        </a>
      </div>
      <p style="color:${BRAND.muted};font-size:13px;margin:0;">
        Every friend who joins moves you closer to the front.
      </p>
    `),
  };
}

export function welcomeEmail(params: {
  name: string;
  appUrl: string;
}): { subject: string; html: string } {
  return {
    subject: "Welcome to Web3School — Let's discover your path!",
    html: wrapper(`
      <h1 style="color:${BRAND.text};font-size:22px;margin:0 0 16px;">Welcome aboard!</h1>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 12px;">
        Hey ${params.name},
      </p>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 20px;">
        Your Web3School account is ready. Here's what to do next:
      </p>
      <div style="margin:0 0 24px;">
        <div style="display:flex;align-items:flex-start;margin-bottom:16px;">
          <span style="background:${BRAND.purple};color:white;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;margin-right:12px;">1</span>
          <div>
            <p style="color:${BRAND.text};font-size:14px;margin:0;font-weight:600;">Take the Career Discovery Quiz</p>
            <p style="color:${BRAND.muted};font-size:13px;margin:4px 0 0;">Answer a few AI-powered questions to find your ideal Web3 role.</p>
          </div>
        </div>
        <div style="display:flex;align-items:flex-start;margin-bottom:16px;">
          <span style="background:${BRAND.purple};color:white;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;margin-right:12px;">2</span>
          <div>
            <p style="color:${BRAND.text};font-size:14px;margin:0;font-weight:600;">Get Your Personalized Roadmap</p>
            <p style="color:${BRAND.muted};font-size:13px;margin:4px 0 0;">A 90-day learning plan tailored to your role and skill level.</p>
          </div>
        </div>
        <div style="display:flex;align-items:flex-start;">
          <span style="background:${BRAND.purple};color:white;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;margin-right:12px;">3</span>
          <div>
            <p style="color:${BRAND.text};font-size:14px;margin:0;font-weight:600;">Start Learning Daily</p>
            <p style="color:${BRAND.muted};font-size:13px;margin:4px 0 0;">15 minutes a day, guided by your AI tutor.</p>
          </div>
        </div>
      </div>
      <div style="text-align:center;">
        <a href="${params.appUrl}/discover" style="display:inline-block;background:${BRAND.purple};color:white;padding:12px 32px;border-radius:12px;text-decoration:none;font-weight:600;font-size:15px;">
          Start Your Discovery
        </a>
      </div>
    `),
  };
}

export function streakReminderEmail(params: {
  name: string;
  streakCount: number;
  appUrl: string;
}): { subject: string; html: string } {
  return {
    subject: `Don't lose your ${params.streakCount}-day streak!`,
    html: wrapper(`
      <div style="text-align:center;margin-bottom:20px;">
        <span style="font-size:48px;">🔥</span>
      </div>
      <h1 style="color:${BRAND.text};font-size:22px;margin:0 0 16px;text-align:center;">
        Your ${params.streakCount}-day streak is at risk!
      </h1>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 12px;">
        Hey ${params.name},
      </p>
      <p style="color:${BRAND.text};font-size:15px;line-height:1.6;margin:0 0 24px;">
        You haven't completed today's lesson yet. Just 15 minutes keeps your streak alive and your skills growing.
      </p>
      <div style="text-align:center;margin-bottom:16px;">
        <a href="${params.appUrl}/learn" style="display:inline-block;background:${BRAND.purple};color:white;padding:12px 32px;border-radius:12px;text-decoration:none;font-weight:600;font-size:15px;">
          Continue Learning
        </a>
      </div>
      <p style="color:${BRAND.muted};font-size:13px;text-align:center;margin:0;">
        Consistency beats intensity. You've got this!
      </p>
    `),
  };
}
