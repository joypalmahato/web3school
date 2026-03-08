import { Logo } from "@/components/shared/Logo";
import Link from "next/link";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Don't redirect if already on /waitlist — that would cause an infinite loop
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  if (pathname === "/waitlist") {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-20" style={{ background: "#0A0A0A" }} />
        <div className="p-6">
          <Link href="/">
            <Logo size="md" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 pb-12">
          {children}
        </div>
      </div>
    );
  }

  // For all other auth pages: if already logged in, redirect to the right place
  const { userId } = await auth();
  if (userId) {
    try {
      const { data: profile } = await db("profiles")
        .select("onboarding_completed, discovery_completed, is_approved")
        .eq("user_id", userId)
        .single();

      if (!profile?.is_approved) redirect("/waitlist");
      else if (profile?.discovery_completed) redirect("/learn");
      else if (profile?.onboarding_completed) redirect("/discover");
      else redirect("/onboarding");
    } catch {
      redirect("/discover");
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/78" />

      {/* Header with logo */}
      <div className="p-6">
        <Link href="/">
          <Logo size="md" />
        </Link>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        {children}
      </div>
    </div>
  );
}
