import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Web3School collects, uses, and protects your data.",
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold text-white font-heading mb-2">Privacy Policy</h1>
      <p className="text-[#666666] text-sm mb-10">Last updated: March 2026</p>

      <div className="space-y-8 text-[#A0A0A0] leading-relaxed">
        <section>
          <h2 className="text-white font-semibold text-lg mb-3">1. What We Collect</h2>
          <p>
            When you create an account or use Web3School, we collect information you provide
            directly — such as your name, email address, and responses during the discovery
            chat. We also collect usage data (pages visited, lessons completed, XP earned)
            to power your personalized learning experience.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">2. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Match you to the right Web3 career path</li>
            <li>Build and adapt your personalized learning roadmap</li>
            <li>Track your progress, XP, and streaks</li>
            <li>Send you product updates and learning reminders (you can opt out)</li>
            <li>Improve the platform through aggregated, anonymized analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">3. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share data with trusted service
            providers (hosting, analytics, email delivery) who are contractually bound to
            protect it. We may disclose data if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">4. Data Storage & Security</h2>
          <p>
            Your data is stored on secure cloud infrastructure. We use industry-standard
            encryption in transit and at rest. Access to user data is strictly limited to
            authorized personnel.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">5. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at
            any time by contacting us. You can also delete your account from your settings page.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">6. Cookies</h2>
          <p>
            We use cookies and similar technologies to keep you logged in, remember your
            preferences, and run A/B tests to improve the platform. You can control cookie
            behavior through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">7. Contact</h2>
          <p>
            Questions about this policy? Reach us on{" "}
            <a
              href="https://x.com/web3school_X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:underline"
            >
              Twitter
            </a>{" "}
            or via our Discord community.
          </p>
        </section>
      </div>
    </div>
  );
}
