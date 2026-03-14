/**
 * @component LandingPage
 * @part-of Web3School - Marketing
 * @design 8 sections: Hero -> ProofBar -> Problem -> HowItWorks -> ProductPreview -> Roles -> FAQ -> FinalCTA
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
import {
  absoluteUrl,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Find Your Web3 Career Path",
  description:
    "A short AI discovery chat matches you to your ideal Web3 role, then builds a personalized adaptive roadmap at your pace. Free to join.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Find Your Web3 Career Path",
    description:
      "AI discovery chat -> Web3 role match -> adaptive roadmap at your pace. Built for crypto natives and Web3 newcomers.",
    url: absoluteUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Web3 Career Path",
    description:
      "AI discovery chat -> Web3 role match -> adaptive roadmap at your pace. Free to join.",
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
        }}
      />
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
