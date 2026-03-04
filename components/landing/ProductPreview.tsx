/**
 * @component ProductPreview
 * @part-of Web3School — Landing Page
 * @design Centered demo video with green glow border. Autoplays on scroll into view.
 */
"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ProductPreview() {
  return (
    <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-[#0A0A0A] px-6" delay={0.2}>
      <div className="text-center mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-3">
          See It In Action
        </p>
        <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight tracking-[-0.02em] font-heading">
          10 Minutes to Your Web3 Career Match
        </h2>
      </div>
      <div
        className="max-w-[960px] mx-auto border border-white/10 rounded-xl overflow-hidden"
        style={{ boxShadow: "0 0 80px rgba(16,185,129,0.08)" }}
      >
        <video
          src="/product-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover bg-[#111111]"
        />
      </div>
    </AnimatedSection>
  );
}
