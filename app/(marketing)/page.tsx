/**
 * @component LandingPage
 * @part-of Web3School — Marketing
 * @design 8 sections: Hero → ProofBar → Problem → HowItWorks → ProductPreview → Roles → FAQ → FinalCTA
 * @spec docs/01-website-blueprint.md
 */
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { Hero } from "@/components/landing/Hero";
import { ProofBar } from "@/components/landing/ProofBar";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata: Metadata = {
  title: "Web3School — Find Your Web3 Career Path",
  description:
    "A short AI discovery chat matches you to your ideal Web3 role, then builds a personalized adaptive roadmap at your pace. Free to join.",
  openGraph: {
    title: "Web3School — Find Your Web3 Career Path",
    description:
      "AI discovery chat → Web3 role match → adaptive roadmap at your pace. Built for crypto natives and Web3 newcomers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3School — Find Your Web3 Career Path",
    description:
      "AI discovery chat → Web3 role match → adaptive roadmap at your pace. Free to join.",
  },
};

// Lazy-load heavy below-fold sections
const ProductPreview = dynamic(() =>
  import("@/components/landing/ProductPreview").then((m) => m.ProductPreview)
);
const RolesPreview = dynamic(() =>
  import("@/components/landing/RolesPreview").then((m) => m.RolesPreview)
);

export default async function LandingPage() {
  const cookieStore = await cookies();
  const variant = (cookieStore.get("hero_variant")?.value ?? "a") as "a" | "b";

  return (
    <>
      <Hero variant={variant} />
      <ProofBar />
      <Problem />
      <HowItWorks />
      <ProductPreview />
      <RolesPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
