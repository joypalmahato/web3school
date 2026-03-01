/**
 * @component FinalCTA
 * @part-of Web3School — Landing Page
 * @design Centered headline + white CTA button. Last conversion opportunity.
 * @spec docs/04-page-build-spec.md — Final CTA
 */
"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function FinalCTA() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 bg-[#0E0E0E] text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
          Ready to Find Your Web3 Career?
        </h2>
        <p className="mt-4 text-lg text-[#A0A0A0]">
          10 minutes. One conversation. A clear path forward.
        </p>
        <div className="mt-10">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg px-10 py-5 rounded-md hover:opacity-85 transition-opacity duration-200"
          >
            Start Discovery — Free
          </Link>
          <p className="mt-4 text-sm text-[#666666]">
            No credit card required
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
