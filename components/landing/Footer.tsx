/**
 * @component Footer
 * @part-of Web3School — Landing Page
 * @design Logo, social links, tagline, copyright
 */
import { Logo } from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/lib/utils/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-mid border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <Logo size="lg" />
            <p className="text-text-muted text-sm mt-2 max-w-xs">
              AI-powered Web3 career discovery. Go from confused to skilled to
              hired.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-purple-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-purple-primary transition-colors"
            >
              Discord
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-purple-primary transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} Web3School. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with purpose. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
