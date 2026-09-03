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
 * Destinations still point at the existing /platform/* routes. Renaming the
 * labels and moving the URLs are separate jobs, and moving URLs means
 * redirects and sitemap changes that should not ride along with a rename.
 */

const linksById: Record<string, NavLink[]> = {
  crm: [
    { label: "CRM", href: "/platform/core#crm" },
    { label: "Custom pipelines", href: "/platform/core#pipelines" },
    { label: "Unified conversations", href: "/platform/core#conversations" },
    { label: "Workflows & tasks", href: "/platform/core#workflows" },
    { label: "Calendars", href: "/platform/core#calendars" },
    { label: "Dashboards & reporting", href: "/platform/core#reporting" },
    { label: "Integrations", href: "/platform/core#integrations" },
    { label: "Roles & permissions", href: "/platform/core#permissions" },
  ],
  agents: [
    { label: "Lead Concierge", href: "/platform/ai-staff#lead-concierge" },
    { label: "Follow-Up Agent", href: "/platform/ai-staff#follow-up" },
    { label: "Appointment Setter", href: "/platform/ai-staff#setter" },
    { label: "Acquisition Assistant", href: "/platform/ai-staff#acquisition" },
    { label: "Pipeline Coordinator", href: "/platform/ai-staff#coordinator" },
    { label: "Support Agent", href: "/platform/ai-staff#support" },
    { label: "Custom Agent", href: "/platform/ai-staff#custom" },
  ],
  scraper: [
    { label: "County record sourcing", href: "/platform/lead-engines#sourcing" },
    { label: "Data cleanup", href: "/platform/lead-engines#cleanup" },
    { label: "Enrichment", href: "/platform/lead-engines#enrichment" },
    { label: "Deduplication", href: "/platform/lead-engines#dedupe" },
    { label: "Lead scoring", href: "/platform/lead-engines#scoring" },
    { label: "Routing", href: "/platform/lead-engines#routing" },
    { label: "Custom scrapers", href: "/platform/lead-engines#custom" },
  ],
  builds: [
    { label: "Custom Builds", href: "/platform/custom" },
    { label: "Custom pipelines", href: "/platform/custom#pipelines" },
    { label: "AI agent installation", href: "/platform/custom#agents" },
    { label: "Automation & integrations", href: "/platform/custom#integrations" },
    { label: "Business operating systems", href: "/platform/custom#os" },
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
      { label: brand.builds, href: "/platform/custom" },
      { label: "Custom pipelines", href: "/platform/custom#pipelines" },
      { label: "AI agent installation", href: "/platform/custom#agents" },
      {
        label: "Automation & integrations",
        href: "/platform/custom#integrations",
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
