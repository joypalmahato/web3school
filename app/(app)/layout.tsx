/**
 * @layout AppLayout
 * @part-of Web3School — Authenticated App Shell
 * @design Sidebar (desktop) + bottom nav (mobile) + topbar + main content
 * @flow Wraps all authenticated app pages (dashboard, roadmap, learn, etc.)
 */
import { GuestSessionProvider } from "@/components/providers/GuestSessionProvider";
import { Sidebar } from "@/components/app/Sidebar";
import { TopBar } from "@/components/app/TopBar";
import { BottomNav } from "@/components/app/BottomNav";
import { isGuestSession } from "@/lib/guest/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialGuestSession = await isGuestSession();

  return (
    <GuestSessionProvider initialGuestSession={initialGuestSession}>
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <Sidebar />

        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen min-w-0 overflow-x-hidden">
          <TopBar />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
        </div>

        {/* Mobile bottom nav */}
        <BottomNav />
      </div>
    </GuestSessionProvider>
  );
}
