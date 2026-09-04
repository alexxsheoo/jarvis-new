import { Section } from "@/components/ui/section";
import HeroScrollVideoReveal from "@/components/ui/hero-scroll-video-pin-reveal";
import { brand } from "@/content/products";

/**
 * The pitch video, revealed through a scroll-pinned aperture.
 *
 * Placed after the CRM case and the proof section, where the argument has been
 * made and a visitor is deciding — not in the hero, where a pinned section
 * would hold the scroll before anyone knows what the product is.
 *
 * `bordered={false}` because the pinned child manages its own full-height
 * surface; a section hairline across a pin reads as a seam.
 */
export function WhyVideo() {
  return (
    <Section id="why" bordered={false} className="py-0">
      <HeroScrollVideoReveal
        eyebrow="Why teams switch"
        headingText="The case for running it as one system."
        tags={[
          { text: "One record of truth", tone: "border-cobalt-500/40 bg-cobalt-glow text-cobalt-400" },
          { text: "Every lead answered", tone: "border-hud bg-neon-glow text-neon-400" },
          { text: "Follow-up that does not depend on memory", tone: "border-line-strong bg-ink-850 text-paper" },
        ]}
        subText={`A short walkthrough of why owner-led teams move onto ${brand.crm} and what changes once they do.`}
        // videoSrc="/videos/jarvis-why.mp4"  ← uncomment once the file exists
        posterSrc="/videos/jarvis-why-poster.png"
        caption="Placeholder frame. Add the walkthrough at public/videos/jarvis-why.mp4 and pass it as videoSrc to play it here."
      />
    </Section>
  );
}
