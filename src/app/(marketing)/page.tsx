import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { IntegrationsSection } from "@/components/marketing/integrations-section";
import {
  AiStaffSection,
  CoreSection,
  CustomSection,
  LeadEnginesSection,
} from "@/components/marketing/pillar-sections";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ProofSection } from "@/components/marketing/proof-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { StackComparison } from "@/components/marketing/stack-comparison";
import { SystemSection } from "@/components/marketing/system-section";
import { TrustBar } from "@/components/marketing/trust-bar";
import { VideoSection } from "@/components/marketing/video-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SystemSection />
      <CoreSection />
      <AiStaffSection />
      <LeadEnginesSection />
      <CustomSection />
      <VideoSection />
      <HowItWorks />
      <StackComparison />
      <IntegrationsSection />
      <SecuritySection />
      <ProofSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
