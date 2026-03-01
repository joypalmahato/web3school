import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col">
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
