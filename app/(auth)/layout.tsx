import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col">
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
