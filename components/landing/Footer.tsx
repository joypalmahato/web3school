/**
 * @component Footer
 * @part-of Web3School — Landing Page
 * @design Two-row footer: nav links top, copyright + socials + legal bottom.
 */
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/utils/constants";

const NAV_COLS = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Explore Roles", href: "/roles" },
      { label: "Roadmap", href: "/product-roadmap" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Twitter / X", href: SOCIAL_LINKS.twitter, external: true },
      { label: "Discord", href: SOCIAL_LINKS.discord, external: true },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Top row: wordmark + nav cols */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Wordmark + tagline */}
          <div className="flex-shrink-0">
            <span className="text-base font-semibold text-white font-heading">
              Web3School
            </span>
            <p className="text-xs text-[#555555] mt-1.5 max-w-[200px] leading-relaxed">
              Built by people who believe Web3 careers deserve a real path.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-8 md:gap-12 flex-wrap">
            {NAV_COLS.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-3">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: copyright + legal */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555555]">
            &copy; {currentYear} Web3School. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-[#555555] hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#555555] hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
