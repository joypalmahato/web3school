/**
 * @component Navbar
 * @part-of Web3School — Landing Page
 * @design Sticky, transparent → glass on scroll, dark theme
 * @flow Logo left, nav links center, CTA + Log In right. Mobile: sheet menu.
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "How It Works", href: "#solution" },
  { label: "Roles", href: "#roles" },
  { label: "Mission", href: "#mission" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="container-ds">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-fast text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-text-secondary hover:text-text-primary transition-fast text-sm font-medium"
            >
              Log In
            </Link>
            <Button
              asChild
              className="bg-purple-primary hover:bg-purple-light text-white rounded-lg px-6 py-3 font-semibold transition-smooth active:scale-[0.98]"
            >
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-text-primary"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="glass-heavy w-72"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <Logo size="lg" />
                  <div className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-text-secondary hover:text-text-primary transition-fast text-lg font-medium py-2"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="text-text-secondary hover:text-text-primary transition-fast text-lg font-medium py-2"
                  >
                    Log In
                  </Link>
                  <Button
                    asChild
                    className="bg-purple-primary hover:bg-purple-light text-white rounded-lg px-6 py-3 font-semibold w-full mt-2"
                  >
                    <Link
                      href="/signup"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get Started Free
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
