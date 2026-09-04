import type { LucideIcon } from "lucide-react";

import { brand, offers, products, services } from "./products";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  summary: string;
  icon: LucideIcon;
  links: NavLink[];
};

/**
 * Navigation is derived from `products.ts` so a name is never written twice.
 *
 * The header carries two panels now, not one: Products holds the three things
 * you can buy, Services holds the work we do. That separation is the whole
 * point of the architecture — a single "Platform" menu is what made every
 * offer read as a Jarvis module.
 *
 * Destinations are the product-named routes. The old /platform/* paths are
 * kept as redirect stubs so shared links and anything already indexed still
 * resolve rather than 404.
 */

const linksById: Record<string, NavLink[]> = {
  crm: [
    { label: "CRM", href: "/products/jarvis-crm#crm" },
    { label: "Custom pipelines", href: "/products/jarvis-crm#pipelines" },
    { label: "Unified conversations", href: "/products/jarvis-crm#conversations" },
    { label: "Workflows & tasks", href: "/products/jarvis-crm#workflows" },
    { label: "Calendars", href: "/products/jarvis-crm#calendars" },
    { label: "Dashboards & reporting", href: "/products/jarvis-crm#reporting" },
    { label: "Integrations", href: "/products/jarvis-crm#integrations" },
    { label: "Roles & permissions", href: "/products/jarvis-crm#permissions" },
  ],
  agents: [
    { label: "Lead Concierge", href: "/products/xcerebro-ai-agents#lead-concierge" },
    { label: "Follow-Up Agent", href: "/products/xcerebro-ai-agents#follow-up" },
    { label: "Appointment Setter", href: "/products/xcerebro-ai-agents#setter" },
    { label: "Acquisition Assistant", href: "/products/xcerebro-ai-agents#acquisition" },
    { label: "Pipeline Coordinator", href: "/products/xcerebro-ai-agents#coordinator" },
    { label: "Support Agent", href: "/products/xcerebro-ai-agents#support" },
    { label: "Custom Agent", href: "/products/xcerebro-ai-agents#custom" },
  ],
  scraper: [
    { label: "County record sourcing", href: "/products/lead-scraper#sourcing" },
    { label: "Data cleanup", href: "/products/lead-scraper#cleanup" },
    { label: "Enrichment", href: "/products/lead-scraper#enrichment" },
    { label: "Deduplication", href: "/products/lead-scraper#dedupe" },
    { label: "Lead scoring", href: "/products/lead-scraper#scoring" },
    { label: "Routing", href: "/products/lead-scraper#routing" },
    { label: "Custom scrapers", href: "/products/lead-scraper#custom" },
  ],
  builds: [
    { label: "Custom Builds", href: "/services/custom-builds" },
    { label: "Custom pipelines", href: "/services/custom-builds#pipelines" },
    { label: "AI agent installation", href: "/services/custom-builds#agents" },
    { label: "Automation & integrations", href: "/services/custom-builds#integrations" },
    { label: "Business operating systems", href: "/services/custom-builds#os" },
  ],
};

function toGroups(list: typeof offers): NavGroup[] {
  return list.map((offer) => ({
    label: offer.name,
    href: offer.href,
    summary: offer.summary,
    icon: offer.icon,
    links: linksById[offer.id] ?? [],
  }));
}

export const productNav: NavGroup[] = toGroups(products);
export const serviceNav: NavGroup[] = toGroups(services);

/** Both header panels, in the order they appear. */
export const navPanels: { label: string; groups: NavGroup[] }[] = [
  { label: "Products", groups: productNav },
  { label: "Services", groups: serviceNav },
];

/** Top-level header items rendered as plain links, after the panels. */
export const primaryNav: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Customers", href: "/#proof" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
];

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: products.map(({ name, href }) => ({ label: name, href })),
  },
  {
    title: "Services",
    links: [
      { label: brand.builds, href: "/services/custom-builds" },
      { label: "Custom pipelines", href: "/services/custom-builds#pipelines" },
      { label: "AI agent installation", href: "/services/custom-builds#agents" },
      {
        label: "Automation & integrations",
        href: "/services/custom-builds#integrations",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Owner-led sales teams", href: "/solutions#owner-led" },
      { label: "Acquisitions", href: "/solutions#acquisitions" },
      { label: "Services & trades", href: "/solutions#services" },
      { label: "Brokerages", href: "/solutions#brokerages" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Implementation guide", href: "/resources/implementation" },
      { label: "Changelog", href: "/resources/changelog" },
      { label: "System status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

/**
 * Kept so the homepage pillar sections and the platform pages keep resolving
 * while their copy is migrated. New code should read `products`/`services`.
 *
 * @deprecated Use `productNav` / `serviceNav`.
 */
export const platformPillars: NavGroup[] = toGroups(offers);
