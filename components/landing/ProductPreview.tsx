/**
 * @component ProductPreview
 * @part-of Web3School — Landing Page
 * @design Centered product screenshot with subtle green glow border.
 * @spec docs/04-page-build-spec.md — Product Preview
 */
"use client";

import { Monitor } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ProductPreview() {
  return (
    <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-[#0A0A0A] px-6">
      <div
        className="max-w-[960px] mx-auto border border-white/10 rounded-xl overflow-hidden"
        style={{ boxShadow: "0 0 80px rgba(16,185,129,0.06)" }}
      >
        {/* Placeholder — replace with actual product screenshot */}
        <div className="aspect-video bg-[#111111] flex items-center justify-center">
          <div className="text-center">
            <Monitor className="w-12 h-12 text-[#444444] mx-auto mb-4" />
            <p className="text-sm text-[#666666]">
              Product screenshot or demo video
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
