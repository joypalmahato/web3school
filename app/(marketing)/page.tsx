/**
 * @component LandingPage
 * @part-of Web3School — Marketing
 * @design 7 sections: Hero → ProofBar → Problem → HowItWorks → ProductPreview → Roles → FinalCTA
 * @spec docs/01-website-blueprint.md
 */
import dynamic from "next/dynamic";
import { Hero } from "@/components/landing/Hero";
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

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Problem />
      <HowItWorks />
      <ProductPreview />
      <RolesPreview />
      <FinalCTA />
    </>
  );
}
