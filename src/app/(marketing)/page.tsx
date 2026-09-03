import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { HumanAiSection } from "@/components/marketing/human-ai-section";
import { IntegrationsSection } from "@/components/marketing/integrations-section";
import {
  AgentsSection,
  BuildsSection,
  CrmSection,
  ScraperSection,
} from "@/components/marketing/offer-sections";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ProductsServices } from "@/components/marketing/products-services";
import { ProofSection } from "@/components/marketing/proof-section";
import { SecuritySection } from "@/components/marketing/security-section";
import { StackComparison } from "@/components/marketing/stack-comparison";
import { SystemMap } from "@/components/marketing/system-map";
import { TrustBar } from "@/components/marketing/trust-bar";
import { VideoSection } from "@/components/marketing/video-section";

/**
 * Homepage order follows the product-architecture spec: establish the four
 * offers as separate things, show how they connect, then give each one its own
 * section before any cross-product argument.
 *
 * `SystemSection` was dropped here — it restated the same four offers as "one
 * operating system" immediately after Products & Services, which is the
 * blended framing this restructure exists to remove. The component still
 * exists; only the homepage usage went.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsServices />
      <SystemMap />

      <TrustBar />
      <ProblemSection />

      <CrmSection />
      <AgentsSection />
      <ScraperSection />
      <BuildsSection />

      <VideoSection />
      <HowItWorks />
      <StackComparison />
      <IntegrationsSection />
      <SecuritySection />

      <ProofSection />
      <HumanAiSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
