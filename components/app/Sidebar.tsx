/**
 * @component Sidebar
 * @part-of Web3School — App Layout
 * @design Desktop sidebar with nav items, logo, streak display, collapsible
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  BarChart3,
  Award,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { StreakCounter } from "@/components/app/StreakCounter";
import { useAppStore } from "@/lib/stores/app-store";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "Roadmap", icon: Map },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/passport", label: "Passport", icon: Award },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col h-screen bg-navy-mid border-r border-border transition-all duration-300 sticky top-0",
        sidebarOpen ? "w-56" : "w-16"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-border">
        {sidebarOpen ? (
          <Link href="/dashboard">
            <Logo size="sm" />
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center mx-auto"
          >
            <span className="font-heading font-bold text-purple-primary text-sm">
              W3
            </span>
          </Link>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname?.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-purple-primary/10 text-purple-primary"
                  : "text-text-secondary hover:bg-navy-deep hover:text-text-primary"
              )}
            >
              <Icon
                className={cn(
                  "flex-shrink-0 transition-colors",
                  sidebarOpen ? "w-5 h-5" : "w-5 h-5 mx-auto",
                  isActive ? "text-purple-primary" : "text-text-muted group-hover:text-text-primary"
                )}
              />
              {sidebarOpen && (
                <span className="text-sm font-medium truncate">{label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section: streak + collapse toggle */}
      <div className="border-t border-border px-4 py-3 space-y-3">
        {sidebarOpen && (
          <div className="flex items-center justify-between">
            <StreakCounter />
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full py-1.5 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-navy-deep"
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
}
