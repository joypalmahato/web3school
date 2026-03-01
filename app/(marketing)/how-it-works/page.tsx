/**
 * @component HowItWorksPage
 * @part-of Web3School -- Marketing
 * @design 5-step vertical layout with green step numbers, Kled style
 */
import Link from "next/link";
import { Compass, Target, BookOpen, Code, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "How It Works | Web3School",
  description:
    "Discover your ideal Web3 career in 5 simple steps: Discover, Match, Learn, Practice, and Verify.",
};

const STEPS = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description:
      "Start with a 10-minute AI-powered conversation. We ask about your background, interests, strengths, and goals to understand who you are and what excites you about Web3.",
  },
  {
    number: "02",
    title: "Match",
    icon: Target,
    description:
      "Our AI analyzes your profile against 89+ digital career paths and matches you with the roles where you have the highest chance of success. No guesswork, just data.",
  },
  {
    number: "03",
    title: "Learn",
    icon: BookOpen,
    description:
      "Get a personalized 90-day roadmap tailored to your matched role. An AI tutor adapts to your learning pace and style, breaking down complex topics into digestible lessons.",
  },
  {
    number: "04",
    title: "Practice",
    icon: Code,
    description:
      "Apply what you learn through hands-on projects and real-world challenges. Build a portfolio of work that demonstrates your skills to future employers.",
  },
  {
    number: "05",
    title: "Verify",
    icon: ShieldCheck,
    description:
      "Earn a verifiable Skill Passport that proves your competence. Share it with employers, showcase your projects, and get matched to real Web3 job opportunities.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            How It Works
          </h1>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-xl mx-auto">
            From discovery to employment in five steps. No fluff, no filler —
            just a clear path to your Web3 career.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
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
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Ready to Begin?
            </h2>
            <p className="text-[#A0A0A0] mt-3 text-sm max-w-md mx-auto">
              Start your free AI career discovery conversation and find out
              which Web3 role is the best fit for you.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
