import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Web3School",
};

export default function TermsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold text-white font-heading mb-2">Terms of Service</h1>
      <p className="text-[#666666] text-sm mb-10">Last updated: March 2026</p>

      <div className="space-y-8 text-[#A0A0A0] leading-relaxed">
        <section>
          <h2 className="text-white font-semibold text-lg mb-3">1. Acceptance</h2>
          <p>
            By creating an account or using Web3School, you agree to these Terms of Service.
            If you do not agree, do not use the platform.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use Web3School. By signing up, you confirm
            you meet this requirement.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">3. Your Account</h2>
          <p>
            You are responsible for maintaining the security of your account credentials.
            Do not share your login with others. You are responsible for all activity that
            occurs under your account.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">4. Platform Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use the platform for any unlawful purpose</li>
            <li>Attempt to scrape, reverse-engineer, or exploit the platform</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with other users&apos; access to the platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">5. Content & IP</h2>
          <p>
            All course content, lesson materials, AI prompts, and platform design are owned
            by Web3School. You may not reproduce or distribute them without written permission.
            Your personal learning data and Skill Passport belong to you.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">6. Early Access</h2>
          <p>
            The platform is currently in early access. Features may change, be removed, or
            be temporarily unavailable. We are not liable for interruptions during this period.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">7. Limitation of Liability</h2>
          <p>
            Web3School is provided &quot;as is&quot; without warranties of any kind. We are not liable
            for any indirect, incidental, or consequential damages arising from your use of
            the platform.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">8. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the platform after
            changes are posted constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">9. Contact</h2>
          <p>
            Questions? Reach us on{" "}
            <a
              href="https://twitter.com/web3school"
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
