import type { LucideIcon } from "lucide-react";
import {
  BotIcon,
  DatabaseIcon,
  LayersIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

/**
 * Product architecture.
 *
 * Jarvis is the company. The things it sells are NOT all Jarvis modules —
 * xCerebro and Lead Scraper carry their own names on purpose, and Custom
 * Builds is a service rather than a product. Anything that reintroduces
 * "Jarvis <thing>" as a customer-facing label is a regression.
 *
 * Every display name is defined once, here. The casing of xCerebro in
 * particular is unconfirmed — it was supplied inside an all-caps list — so it
 * is a single edit away from Xcerebro or XCEREBRO if that is wrong.
 */
export const brand = {
  company: "Jarvis",
  crm: "Jarvis CRM",
  agents: "xCerebro AI Agents",
  agentsShort: "xCerebro",
  scraper: "Lead Scraper",
  builds: "Custom Builds",
} as const;

/** Which accent an offer wears. Products get colour; the service is outlined. */
export type OfferAccent = "cobalt" | "neon" | "data" | "outline";

export type Offer = {
  id: string;
  name: string;
  /** The one-line promise on the card. */
  promise: string;
  summary: string;
  capabilities: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
  accent: OfferAccent;
  kind: "product" | "service";
  /** How this offer is bought. Only the CRM has a published price. */
  pricing: string;
};

export const offers: Offer[] = [
  {
    id: "crm",
    name: brand.crm,
    promise: "Run the business.",
    summary:
      "Manage leads, conversations, pipelines, follow-up, appointments, workflows, reporting, websites, forms, and sales activity from one operating hub.",
    capabilities: [
      "CRM & contacts",
      "Custom pipelines",
      "SMS, email & calling",
      "Workflow automation",
      "Calendars & appointments",
      "Forms & funnels",
      "Reporting & dashboards",
    ],
    href: "/platform/core",
    cta: "Explore Jarvis CRM",
    icon: LayersIcon,
    accent: "cobalt",
    kind: "product",
    pricing: "Starting from $97/month",
  },
  {
    id: "agents",
    name: brand.agents,
    promise: "Put AI on the work.",
    summary:
      "Deploy role-based AI agents for sales, follow-up, operations, marketing, support, research, and custom business responsibilities.",
    capabilities: [
      "Lead management",
      "Follow-up",
      "Appointment setting",
      "Sales support",
      "Operations",
      "Marketing",
      "Custom AI roles",
    ],
    href: "/platform/ai-staff",
    cta: "Meet the AI Agents",
    icon: BotIcon,
    accent: "neon",
    kind: "product",
    pricing: "Separate product — deployment options",
  },
  {
    id: "scraper",
    name: brand.scraper,
    promise: "Find the opportunities.",
    summary:
      "Turn county records, public data, and custom sources into clean, organized leads that can be enriched, scored, and routed into your sales process.",
    capabilities: [
      "County/public records",
      "Foreclosure",
      "Pre-foreclosure",
      "Probate",
      "Tax delinquent",
      "Code violations",
      "Vacant property data",
      "Custom data sources",
      "Cleanup & deduplication",
      "Enrichment",
      "Lead scoring",
      "CRM routing",
    ],
    href: "/platform/lead-engines",
    cta: "Explore Lead Scraper",
    icon: DatabaseIcon,
    accent: "data",
    kind: "product",
    pricing: "Separate product — priced by source, market, and scope",
  },
  {
    id: "builds",
    name: brand.builds,
    promise: "We build the system around you.",
    summary:
      "For businesses with non-standard workflows, we map the process and build the pipelines, automations, integrations, agents, dashboards, and data flows around how the company actually operates.",
    capabilities: [
      "Custom CRM pipelines",
      "Multi-pipeline systems",
      "Workflow automation",
      "Custom integrations",
      "Custom AI agents",
      "Custom lead systems",
      "Dashboards",
      "Data flows",
    ],
    href: "/platform/custom",
    cta: "Build My System",
    icon: SlidersHorizontalIcon,
    accent: "outline",
    kind: "service",
    pricing: "Custom quote — scoped implementation",
  },
];

export const products = offers.filter((offer) => offer.kind === "product");
export const services = offers.filter((offer) => offer.kind === "service");

/**
 * The system map. Nodes reference offers by id so names stay in one place;
 * `human` is the customer's own team, which is the point of the diagram —
 * the work is shared, not fully handed over.
 */
export type SystemNode = {
  id: string;
  label: string;
  sublabel?: string;
  accent: OfferAccent | "human";
};

export const systemNodes: SystemNode[] = [
  { id: "scraper", label: brand.scraper, sublabel: "Finds it", accent: "data" },
  { id: "crm", label: brand.crm, sublabel: "Holds it", accent: "cobalt" },
  { id: "agents", label: brand.agents, sublabel: "Works it", accent: "neon" },
  { id: "human", label: "Human team", sublabel: "Decides", accent: "human" },
  {
    id: "automation",
    label: "Custom automation",
    sublabel: "Connects it",
    accent: "outline",
  },
];
