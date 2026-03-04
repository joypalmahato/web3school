import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
