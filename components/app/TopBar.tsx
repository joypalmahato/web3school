/**
 * @component TopBar
 * @part-of Web3School — App Layout
 * @design Dynamic page title, streak, XP, notifications, user avatar dropdown
 */
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Bell, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StreakCounter } from "@/components/app/StreakCounter";
import { XPBar } from "@/components/app/XPBar";
import { useUser } from "@/lib/hooks/useUser";
import { useAppStore } from "@/lib/stores/app-store";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/discover": "Career Discovery",
  "/roadmap": "My Roadmap",
  "/learn": "Daily Learning",
  "/progress": "Progress",
  "/passport": "Skill Passport",
  "/settings": "Settings",
  "/results": "Your Results",
  "/notifications": "Notifications",
};

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  if (pathname.startsWith("/learn/")) return "Lesson";
  if (pathname.startsWith("/passport/")) return "Skill Passport";
  return "Web3School";
}

export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { profile, signOut } = useUser();
  const { notifications } = useAppStore();

  const pageTitle = getPageTitle(pathname || "");

  const initials = profile?.full_name
    ? profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "??";

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/login";
  };

  return (
    <header className="h-16 border-b border-border bg-navy-mid/50 backdrop-blur-sm px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Page title */}
      <h1 className="text-lg font-heading font-bold text-text-primary">
        {pageTitle}
      </h1>

      {/* Right side: streak, XP, notifications, avatar */}
      <div className="flex items-center gap-4">
        {/* Streak — hidden on mobile, shown in bottom nav */}
        <div className="hidden md:block">
          <StreakCounter compact />
        </div>

        {/* XP bar */}
        <div className="hidden md:block">
          <XPBar compact />
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-text-muted hover:text-text-primary"
          onClick={() => router.push("/notifications")}
        >
          <Bell className="w-5 h-5" />
          {notifications > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {notifications > 9 ? "9+" : notifications}
            </span>
          )}
        </Button>

        {/* User avatar dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                "bg-white/10 text-white hover:bg-white/15 border border-white/10"
              )}
            >
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.full_name || "User"}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-navy-mid border-border"
          >
            <div className="px-3 py-2">
              <p className="text-sm font-medium text-text-primary truncate">
                {profile?.full_name || "User"}
              </p>
              <p className="text-xs text-text-muted truncate">
                {profile?.email}
              </p>
            </div>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem
              onClick={() => router.push("/settings")}
              className="text-text-secondary hover:text-text-primary cursor-pointer"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/settings")}
              className="text-text-secondary hover:text-text-primary cursor-pointer"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem
              onClick={handleSignOut}
              className="text-red-400 hover:text-red-300 cursor-pointer"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
