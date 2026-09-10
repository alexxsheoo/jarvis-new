import type { Metadata } from "next";

import { CostComparisons } from "@/components/marketing/cost-comparisons";
import { CrmFeatures } from "@/components/marketing/crm-features";
import { CrmPricing } from "@/components/marketing/crm-pricing";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { HumanAiSection } from "@/components/marketing/human-ai-section";
import { IntegrationsSection } from "@/components/marketing/integrations-section";
import { CrmSection } from "@/components/marketing/offer-sections";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ProductsServices } from "@/components/marketing/products-services";
import { ProofSection } from "@/components/marketing/proof-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { StackComparison } from "@/components/marketing/stack-comparison";
import { SystemMap } from "@/components/marketing/system-map";
import { VideoSection } from "@/components/marketing/video-section";
import { WhyVideo } from "@/components/marketing/why-video";

/**
 * The homepage sells Jarvis CRM. Everything from the hero to the product proof
 * is about that one product — what it does, how it compares, what it costs,
 * and who runs on it — because a visitor deciding on a CRM should be able to
 * decide without meeting the rest of the catalogue first.
 *
 * The other three offers appear once, together, after that case is made. They
 * keep their own names and their own pricing, but they are positioned as
 * additions rather than as alternatives. Their depth lives on their own pages,
 * which is where someone who wants it will go.
 */
export const metadata: Metadata = {
  title: "Jarvis CRM | Leads, pipelines, and follow-up in one place",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />

      {/* The CRM case, start to finish. */}
      <CrmSection />
      <CrmFeatures />
      <HowItWorks />
      <StackComparison />
      <CrmPricing />
      <ProofSection />
      <WhyVideo />

      {/* Then, and only then, what else you can attach to it. */}
      <ProductsServices />
      <CostComparisons />
      <SystemMap />

      <IntegrationsSection />
      <SecuritySection />
      <VideoSection />
      <HumanAiSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
