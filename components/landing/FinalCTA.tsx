/**
 * @component FinalCTA
 * @part-of Web3School — Landing Page
 * @design Centered headline + white CTA button. Last conversion opportunity.
 * @spec docs/04-page-build-spec.md — Final CTA
 */
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function FinalCTA() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-32 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
          Your Web3 Career Starts With One Conversation.
          <br />
          <span className="text-[#10B981]">Find Out Where You Belong.</span>
        </h2>
        <p className="mt-4 text-lg text-[#A0A0A0]">
          A short AI conversation. A personalized roadmap that moves at your pace. Completely free.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg px-10 py-5 rounded-md hover:opacity-85 transition-opacity duration-200 w-full sm:w-auto"
          >
            Start Your Discovery
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center text-[#A0A0A0] hover:text-white text-base font-medium transition-colors duration-200"
          >
            See how it works →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
