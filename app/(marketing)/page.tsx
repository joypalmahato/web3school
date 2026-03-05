/**
 * @component LandingPage
 * @part-of Web3School — Marketing
 * @design 7 sections: Hero → ProofBar → Problem → HowItWorks → ProductPreview → Roles → FinalCTA
 * @spec docs/01-website-blueprint.md
 */
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { Hero } from "@/components/landing/Hero";

export const metadata: Metadata = {
  title: "Web3School — Find Your Web3 Career Path",
  description:
    "A 10-minute AI discovery chat matches you to your ideal Web3 role, then builds a personalized 12-week roadmap. Free to join.",
  openGraph: {
    title: "Web3School — Find Your Web3 Career Path",
    description:
      "10-min AI chat → Web3 role match → 12-week personalized roadmap. Built for crypto natives and Web3 newcomers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3School — Find Your Web3 Career Path",
    description:
      "10-min AI chat → Web3 role match → 12-week personalized roadmap. Free to join.",
  },
};
import { ProofBar } from "@/components/landing/ProofBar";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FinalCTA } from "@/components/landing/FinalCTA";

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
      <FinalCTA />
    </>
  );
}
