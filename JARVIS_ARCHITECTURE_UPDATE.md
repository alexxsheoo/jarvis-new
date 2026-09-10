# Jarvis CRM and optional bundles

Based on GitHub `origin/main` at `8402a1e`, the source used for the previously published Pages build. Earlier local experiments were backed up before restoring that source. The original design, product pages, and motion components are retained.

The homepage now leads with Jarvis CRM and explains its workflow before pricing and optional bundles. Bundle choices connect CRM with xCerebro AI Agents, Lead Scraper, or Custom Builds, without implying that every offer is included in the $97 CRM subscription. Existing product destinations remain until the owner supplies separate website URLs.

Validation: `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `git diff --check` passed. Production build generated all 31 static pages. GitHub Pages uses the separate `gh-pages` output branch and the existing local `preview/gh-pages` source configuration.

## Files changed from the GitHub source

| File | Change |
| --- | --- |
| `JARVIS_PRODUCT_ARCHITECTURE_CLAUDE_PROMPT.md` | Records latest CRM-first, optional-bundle direction and this update's publishing authorization. |
| `src/app/(marketing)/page.tsx` | CRM page title; How It Works before pricing; removes unverified customer-logo/metric trust bar. |
| `src/app/(marketing)/pricing/page.tsx` | Explicit optional bundle options and stable `#bundles` destination. |
| `src/components/layout/header.tsx` | Desktop navigation starts at a wider breakpoint. |
| `src/components/layout/mega-menu.tsx` | Matches wider desktop breakpoint. |
| `src/components/layout/mobile-nav.tsx` | Matches desktop breakpoint. |
| `src/components/marketing/hero.tsx` | CRM-led headline, copy, and capability rail; existing cinematic visuals retained. |
| `src/components/marketing/how-it-works.tsx` | Capture, organize, follow up, and measure inside CRM. |
| `src/components/marketing/offer-sections.tsx` | CRM pipeline labeled as example data. |
| `src/components/marketing/products-services.tsx` | Reuses original cards for optional CRM bundles and scoped commercial terms. |
| `src/components/marketing/proof-section.tsx` | Labels industry workflows as examples rather than measured customer proof. |
| `src/components/ui/dashboard-with-collapsible-sidebar.tsx` | Embedded dashboard uses h2, preserving one page-level h1. |
| `src/content/homepage.ts` | Clarifies bundle pricing and softens an absolute industry claim. |
| `src/content/nav.ts` | Products & Services menu plus direct CRM Features and How It Works links. |
| `src/content/site.ts` | CRM-focused description and How It Works secondary CTA. |
| `JARVIS_ARCHITECTURE_UPDATE.md` | Change summary and verification record. |

Bundle quotes do not add invented prices. Placeholder testimonials remain unpublished. Existing video media and form-delivery placeholders were retained from the GitHub build; this update does not add a lead-submission backend.
