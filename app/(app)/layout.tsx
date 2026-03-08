/**
 * @layout AppLayout
 * @part-of Web3School — Authenticated App Shell
 * @design Sidebar (desktop) + bottom nav (mobile) + topbar + main content
 * @flow Wraps all authenticated app pages (dashboard, roadmap, learn, etc.)
 */
import { Sidebar } from "@/components/app/Sidebar";
import { TopBar } from "@/components/app/TopBar";
import { BottomNav } from "@/components/app/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <BottomNav />
    </div>
  );
}
