/**
 * @component HowItWorksPage
 * @part-of Web3School -- Marketing
 * @design 5-step vertical layout with green step numbers
 */
import Link from "next/link";
import { Compass, Target, BookOpen, Code, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "How It Works | Web3School",
  description:
    "Five steps from confusion to a verified Web3 career — AI-matched role, personalized roadmap, adaptive lessons, and a Skill Passport you can show.",
};

const STEPS = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description:
      "Start with a focused AI conversation. We ask about your background, interests, strengths, and goals to understand who you are and what excites you about Web3.",
  },
  {
    number: "02",
    title: "Match",
    icon: Target,
    description:
      "Our AI analyzes your profile against 89+ Web3 career paths and matches you to the role where your skills and interests align. No guesswork, just real analysis.",
  },
  {
    number: "03",
    title: "Learn",
    icon: BookOpen,
    description:
      "Get a personalized roadmap built around your matched role. There's no fixed timeline — the platform adapts to your pace, restructuring lessons until every concept clicks.",
  },
  {
    number: "04",
    title: "Practice",
    icon: Code,
    description:
      "Apply what you learn through hands-on projects and real-world challenges specific to your Web3 role. Build work you can actually point to.",
  },
  {
    number: "05",
    title: "Prove It",
    icon: ShieldCheck,
    description:
      "Finish with a Skill Passport — verified projects and demonstrated expertise that prove what you can do, not just what you watched. Something you can actually show.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-16">
      {/* Dot grid — same as landing page hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            How It Works
          </h1>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-xl mx-auto">
            Five steps from confusion to a verified Web3 career — no fluff,
            no filler, just a path built around you.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-[#10B981]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-white/60" />
                      <h2 className="text-xl font-heading font-bold text-white">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-16">
          <div className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Ready to Find Your Path?
            </h2>
            <p className="text-[#A0A0A0] mt-3 text-sm max-w-md mx-auto">
              Start your free AI career discovery conversation and find out
              which Web3 role is built for you.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Start Your Discovery
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
