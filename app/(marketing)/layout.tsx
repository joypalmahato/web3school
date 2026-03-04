import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed background image — stays put while page scrolls */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
      {/* Dark overlay so all sections stay readable */}
      <div className="fixed inset-0 -z-10 bg-black/78" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
