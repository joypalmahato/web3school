/**
 * @page RoadmapPage
 * @part-of Web3School — Marketing
 * @design Phase-based product roadmap. Phase 1 (live) + Phase 2 (coming).
 */
import Link from "next/link";
import { Check, Clock, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Product Roadmap | Web3School",
  description:
    "See what we've built and what's coming next. Web3School's product roadmap — from prototype to the world's leading Web3 career platform.",
};

const PHASE_1_ITEMS = [
  { label: "AI Discovery Chat", desc: "10-minute conversation that maps your background and goals to a Web3 role." },
  { label: "Role Matching Engine", desc: "Matches you against 89+ Web3-native careers using a multi-trait scoring model." },
  { label: "Personalized Roadmap", desc: "Day-by-day learning plan built around your pace, background, and matched role." },
  { label: "Daily Micro-Lessons", desc: "5–15 minute tasks — lessons, exercises, projects, and quizzes." },
  { label: "Personal AI Tutor", desc: "Answers your questions in context, adapts explanations to how you learn." },
  { label: "Skill Passport", desc: "Verifiable proof of skills — real projects, demonstrated expertise, shareable profile." },
];

const PHASE_2_ITEMS = [
  { label: "Adaptive Learning Engine", desc: "Platform restructures your path based on how fast or slow you're progressing." },
  { label: "Web3 + AI Literacy", desc: "Every roadmap includes the AI tools used in your specific role, not generic AI content." },
  { label: "AI Job Matching", desc: "Match your Skill Passport to real Web3 opportunities — no mass applying." },
  { label: "Any Sector Expansion", desc: "Extend the adaptive engine to healthcare, finance, legal, and more." },
  { label: "Cohort Learning", desc: "Learn alongside peers on the same path. Accountability groups and live sessions." },
  { label: "On-Chain Skill Credentials", desc: "Issue verifiable credentials on-chain — your Skill Passport becomes an NFT." },
  { label: "Enterprise & Teams", desc: "Upskill entire teams with custom roadmaps and org-level dashboards." },
  { label: "Mentor Marketplace", desc: "Connect with verified Web3 practitioners for 1:1 guidance." },
  { label: "OpenClaw Integration", desc: "Native OpenClaw support — bringing deeper on-chain tooling directly into your learning path." },
  { label: "Voice Chat", desc: "Talk to your AI Tutor out loud — voice-based learning for hands-free, natural conversations." },
  { label: "Infographic Lessons", desc: "Visual, bite-sized infographic lessons that break down complex concepts at a glance." },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            Product Roadmap
          </p>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-heading font-bold text-white leading-[1.05] tracking-[-0.03em]">
            Where We Are.
            <br />
            <span className="text-[#A0A0A0]">Where We&apos;re Going.</span>
          </h1>
          <p className="text-[#666666] mt-5 text-lg max-w-xl mx-auto">
            Web3School is being built in public. Here&apos;s exactly what&apos;s live,
            and what&apos;s coming next.
          </p>
        </AnimatedSection>

        {/* Phase 1 */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-xs font-semibold text-[#10B981] uppercase tracking-widest">Phase 1 — Live Now</span>
            </div>
          </div>
          <div className="bg-[#111111]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden">
            {PHASE_1_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 px-6 py-5 ${i !== PHASE_1_ITEMS.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Phase 2 */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <Clock className="w-3.5 h-3.5 text-[#666666]" />
              <span className="text-xs font-semibold text-[#666666] uppercase tracking-widest">Phase 2 — Coming Next</span>
            </div>
          </div>
          <div className="bg-[#0A0A0A]/60 backdrop-blur-md border border-white/[0.06] rounded-2xl overflow-hidden">
            {PHASE_2_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 px-6 py-5 ${i !== PHASE_2_ITEMS.length - 1 ? "border-b border-white/[0.04]" : ""}`}
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 text-[#555555]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#A0A0A0]">{item.label}</p>
                  <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center">
          <div className="bg-[#111111]/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Shape What We Build Next
            </h2>
            <p className="text-[#A0A0A0] mt-3 text-sm max-w-md mx-auto">
              Join the founding cohort. Your feedback directly influences the roadmap.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-white text-black rounded-md font-semibold text-sm hover:opacity-85 transition-opacity"
            >
              Get Early Access
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
