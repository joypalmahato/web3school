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
