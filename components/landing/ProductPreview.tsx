/**
 * @component ProductPreview
 * @part-of Web3School — Landing Page
 * @design Full-bleed video that fades into the page — no card box.
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
    <AnimatedSection className="py-12 md:py-20 lg:py-24" delay={0.2}>
      <div className="text-center mb-10 px-6">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-3">
          How It Works
        </p>
        <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight tracking-[-0.02em] font-heading">
          From Confusion to Irreplaceable
        </h2>
      </div>

      {/* Video wrapper — no card, just a fade-in container */}
      <div
        ref={containerRef}
        className="relative max-w-[960px] mx-auto aspect-video overflow-hidden"
      >
        {/* Top fade — blends video into page background */}
        <div
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "18%",
            background: "linear-gradient(to bottom, var(--background, #0A0A0A), transparent)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "18%",
            background: "linear-gradient(to top, var(--background, #0A0A0A), transparent)",
          }}
        />

        {/* Left fade */}
        <div
          className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "6%",
            background: "linear-gradient(to right, var(--background, #0A0A0A), transparent)",
          }}
        />

        {/* Right fade */}
        <div
          className="absolute top-0 right-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "6%",
            background: "linear-gradient(to left, var(--background, #0A0A0A), transparent)",
          }}
        />

        {/* Subtle green glow ring */}
        <div
          className="absolute inset-0 z-0 pointer-events-none rounded-xl"
          style={{ boxShadow: "inset 0 0 60px rgba(16,185,129,0.06)" }}
        />

        {/* Loading skeleton */}
        {!load && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0A0A0A]">
            <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white/50 border-b-[8px] border-b-transparent ml-1" />
            </div>
            <p className="text-xs text-[#555555] tracking-widest uppercase">Loading demo</p>
          </div>
        )}

        {load && (
          <video
            src="/product-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </AnimatedSection>
  );
}
