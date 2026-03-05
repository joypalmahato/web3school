/**
 * @component Navbar
 * @part-of Web3School — Landing Page
 * @design Sticky, near-transparent → glass on scroll. Minimal: wordmark, 3 links, CTA.
 * @spec docs/04-page-build-spec.md — Navigation
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { WHITEPAPER_URL } from "@/lib/utils/constants";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works", external: false },
  { label: "Roles", href: "#roles", external: false },
  { label: "Roadmap", href: "/product-roadmap", external: false },
  { label: "Whitepaper", href: WHITEPAPER_URL, external: true },
  { label: "Blog", href: "/blog", external: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(10,10,10,0.80)] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-lg font-bold text-white font-heading tracking-tight"
          >
            Web3School
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="bg-white text-black hover:opacity-85 rounded-md px-5 py-2.5 text-sm font-semibold transition-opacity duration-200"
            >
              <Link href="/signup">Start Discovery</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0A0A0A] border-l border-white/[0.08] w-full sm:w-80 flex flex-col p-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Header */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
                  <span className="text-lg font-bold text-white font-heading">
                    Web3School
                  </span>
                </div>

                {/* Nav links */}
                <div className="flex flex-col flex-1 px-6 py-6 gap-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#A0A0A0] hover:text-white transition-colors duration-200 text-base py-3 px-3 rounded-lg hover:bg-white/[0.04]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* CTA pinned to bottom */}
                <div className="px-6 pb-10 border-t border-white/[0.06] pt-6">
                  <Button
                    asChild
                    className="bg-white text-black hover:opacity-85 rounded-md text-sm font-semibold w-full h-12"
                  >
                    <Link href="/signup" onClick={() => setMobileOpen(false)}>
                      Start Discovery
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
