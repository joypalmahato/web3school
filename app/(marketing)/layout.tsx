import Image from "next/image";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed background image — optimized via next/image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          quality={80}
          className="object-cover object-bottom"
        />
      </div>
      {/* Dark overlay so all sections stay readable */}
      <div className="fixed inset-0 -z-10 bg-black/78" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
