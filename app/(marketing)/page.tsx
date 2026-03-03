/**
 * @component LandingPage
 * @part-of Web3School — Marketing
 * @design 8 sections: Hero → ProofBar → Problem → HowItWorks → ProductPreview → Roles → Differentiators → FinalCTA
 * @spec docs/01-website-blueprint.md
 */
import { Hero } from "@/components/landing/Hero";
import { ProofBar } from "@/components/landing/ProofBar";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { RolesPreview } from "@/components/landing/RolesPreview";
import { FinalCTA } from "@/components/landing/FinalCTA";

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
