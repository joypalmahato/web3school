/**
 * @component LandingPage
 * @part-of Web3School — Marketing
 * @design Assembles all landing page sections with section IDs for nav links
 * @flow Hero → Problem → Solution → WhoIsThisFor → Comparison → Roles → HowItWorks → Mission → SignupCTA
 */
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { Comparison } from "@/components/landing/Comparison";
import { RolesPreview } from "@/components/landing/RolesPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Mission } from "@/components/landing/Mission";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <WhoIsThisFor />
      <Comparison />
      <RolesPreview />
      <HowItWorks />
      <Mission />
      <WaitlistForm />
    </>
  );
}
