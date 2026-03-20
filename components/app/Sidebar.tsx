/**
 * @component Sidebar
 * @part-of Web3School — App Layout
 * @design Desktop sidebar with section-colored nav items, collapsible
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Compass,
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
import { useUser } from "@/lib/hooks/useUser";
import { useAppStore } from "@/lib/stores/app-store";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-white",
    activeBg: "bg-white/8",
    activeText: "text-white",
  },
  {
    href: "/roadmap",
    label: "Roadmap",
    icon: Map,
    iconColor: "text-violet-400",
    activeBg: "bg-violet-500/10",
    activeText: "text-violet-300",
  },
  {
    href: "/learn",
    label: "Learn",
    icon: BookOpen,
    iconColor: "text-emerald-400",
    activeBg: "bg-emerald-500/10",
    activeText: "text-emerald-300",
  },
  {
    href: "/progress",
    label: "Progress",
    icon: BarChart3,
    iconColor: "text-amber-400",
    activeBg: "bg-amber-500/10",
    activeText: "text-amber-300",
  },
  {
    href: "/passport",
    label: "Passport",
    icon: Award,
    iconColor: "text-blue-400",
    activeBg: "bg-blue-500/10",
    activeText: "text-blue-300",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    iconColor: "text-slate-400",
    activeBg: "bg-white/5",
    activeText: "text-slate-300",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isGuest } = useUser();
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const navItems = isGuest ? NAV_ITEMS : [
    {
      href: "/discover",
      label: "Discover",
      icon: Compass,
      iconColor: "text-orange-400",
      activeBg: "bg-orange-500/10",
      activeText: "text-orange-300",
    },
    ...NAV_ITEMS,
  ];

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
            className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mx-auto"
          >
            <span className="font-heading font-bold text-white text-sm">W3</span>
          </Link>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon, iconColor, activeBg, activeText }) => {
          const isActive = pathname === href || pathname?.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                isActive
                  ? `${activeBg} ${activeText}`
                  : "text-text-secondary hover:bg-navy-deep hover:text-text-primary"
              )}
            >
              <Icon
                className={cn(
                  "flex-shrink-0 transition-colors",
                  sidebarOpen ? "w-5 h-5" : "w-5 h-5 mx-auto",
                  isActive ? iconColor : "text-text-muted group-hover:text-text-primary"
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
