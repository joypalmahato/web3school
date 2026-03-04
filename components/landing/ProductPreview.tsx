/**
 * @component ProductPreview
 * @part-of Web3School — Landing Page
 * @design Centered demo video with green glow border. Lazy loads on scroll into view.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ProductPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection className="py-12 md:py-20 lg:py-24 px-6" delay={0.2}>
      <div className="text-center mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-3">
          See It In Action
        </p>
        <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight tracking-[-0.02em] font-heading">
          10 Minutes to Your Web3 Career Match
        </h2>
      </div>
      <div
        ref={containerRef}
        className="max-w-[960px] mx-auto border border-white/10 rounded-xl overflow-hidden bg-[#111111] aspect-video"
        style={{ boxShadow: "0 0 80px rgba(16,185,129,0.08)" }}
      >
        {load && (
          <video
            src="/product-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </AnimatedSection>
  );
}
