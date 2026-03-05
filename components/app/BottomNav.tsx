/**
 * @component BottomNav
 * @part-of Web3School — App Layout
 * @design Mobile bottom navigation with section-colored active states
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, BookOpen, BarChart3, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Home",     icon: LayoutDashboard, activeColor: "text-white" },
  { href: "/roadmap",   label: "Roadmap",  icon: Map,             activeColor: "text-violet-400" },
  { href: "/learn",     label: "Learn",    icon: BookOpen,        activeColor: "text-emerald-400" },
  { href: "/progress",  label: "Progress", icon: BarChart3,       activeColor: "text-amber-400" },
  { href: "/passport",  label: "Passport", icon: Award,           activeColor: "text-blue-400" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-mid border-t border-border px-2 py-1.5 safe-area-bottom">
      <div className="flex items-center justify-around">
        {NAV_ITEMS.map(({ href, label, icon: Icon, activeColor }) => {
          const isActive = pathname === href || pathname?.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors min-w-[3rem]",
                isActive ? activeColor : "text-text-muted hover:text-text-secondary"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
