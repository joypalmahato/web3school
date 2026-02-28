/**
 * @component SignupCTA
 * @part-of Web3School — Landing Page
 * @design Replaces former waitlist form with direct signup CTA
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function WaitlistForm() {
  return (
    <AnimatedSection id="signup-cta" className="py-20 md:py-32 bg-navy-deep">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
          Ready to Find Your{" "}
          <span className="bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
            Web3 Career?
          </span>
        </h2>
        <p className="text-text-secondary mt-4 text-lg max-w-lg mx-auto">
          Take a 10-minute AI conversation. Get your personalized career match
          and 90-day roadmap. Completely free.
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-10 py-6 text-lg font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-primary/25"
          >
            <Link href="/signup">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-text-muted text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AnimatedSection>
  );
}
