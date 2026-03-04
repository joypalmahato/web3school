/**
 * @component Footer
 * @part-of Web3School — Landing Page
 * @design Two-row footer: nav links top, copyright + socials bottom.
 */
import Link from "next/link";
import { SOCIAL_LINKS, WHITEPAPER_URL } from "@/lib/utils/constants";

const FOOTER_LINKS = [
  { label: "How It Works", href: "/how-it-works", external: false },
  { label: "Roles", href: "/roles", external: false },
  { label: "Roadmap", href: "/roadmap", external: false },
  { label: "Whitepaper", href: WHITEPAPER_URL, external: true },
  { label: "Blog", href: "/blog", external: false },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Nav links row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {FOOTER_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <span className="text-base font-semibold text-white font-heading">
            Web3School
          </span>
          <p className="text-sm text-[#666666]">
            &copy; {currentYear} Web3School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
