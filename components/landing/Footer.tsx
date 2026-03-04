/**
 * @component Footer
 * @part-of Web3School — Landing Page
 * @design Minimal single row: wordmark left, copyright center, social right.
 * @spec docs/04-page-build-spec.md — Footer
 */
import { SOCIAL_LINKS } from "@/lib/utils/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <span className="text-base font-semibold text-white font-heading">
            Web3School
          </span>

          {/* Copyright */}
          <p className="text-sm text-[#666666]">
            &copy; {currentYear} Web3School
          </p>

          {/* Social links */}
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
