/**
 * What each offer replaces, and roughly what that alternative costs today.
 *
 * IMPORTANT — two different kinds of number are deliberately kept apart:
 *
 *   `alternative.cost` is an ILLUSTRATIVE MARKET RANGE. It is a plausible
 *   figure for what the conventional approach costs, not a quote, not sourced
 *   pricing research, and not a claim about any named vendor. Same rule as
 *   `stack.ts`. Replace with checked figures before this is used in a pitch.
 *
 *   `offer.cost` is NEVER invented. Only Jarvis CRM has a published price, so
 *   the other three say how they are quoted rather than what they cost. Do not
 *   put a number here that has not actually been set.
 *
 * No saving is stated as a total, because the honest comparison depends on
 * scope and neither side is a fixed number.
 */

export type CostRow = {
  /** What is being compared, e.g. "Coverage". */
  measure: string;
  alternative: string;
  offer: string;
};

export type CostComparison = {
  id: string;
  /** Offer id from `products.ts`. */
  offerId: string;
  title: string;
  intro: string;
  alternative: { label: string; cost: string; costNote: string };
  offer: { label: string; cost: string; costNote: string };
  rows: CostRow[];
};

export const costComparisons: CostComparison[] = [
  {
    id: "agents",
    offerId: "agents",
    title: "Hiring assistants vs deploying agents",
    intro:
      "The usual answer to more inbound than the team can answer is another person on the phones. That works, and it costs a salary per shift.",
    alternative: {
      label: "Virtual assistants",
      cost: "$900–$2,400",
      costNote: "per assistant, per month — illustrative range",
    },
    offer: {
      label: "xCerebro AI Agents",
      cost: "Quoted",
      costNote: "by deployment and number of roles",
    },
    rows: [
      {
        measure: "Coverage",
        alternative: "One shift, in one timezone",
        offer: "Every hour, including nights and weekends",
      },
      {
        measure: "Ramp time",
        alternative: "Weeks of training before they are useful",
        offer: "Configured once, then consistent from the first message",
      },
      {
        measure: "Consistency",
        alternative: "Varies by person, mood, and day",
        offer: "The same script and the same rules every time",
      },
      {
        measure: "Adding capacity",
        alternative: "Hire, train, and manage another person",
        offer: "Add another role to the roster",
      },
      {
        measure: "Turnover",
        alternative: "Rehire and retrain when someone leaves",
        offer: "The configuration stays when people change",
      },
      {
        measure: "Judgement calls",
        alternative: "A person decides in the moment",
        offer: "Escalates to your team — agents do not decide these",
      },
    ],
  },
  {
    id: "scraper",
    offerId: "scraper",
    title: "Buying lists vs running your own source",
    intro:
      "Bought lists arrive already worked. The same records are usually available at the source, and pulling them yourself changes who has them and how fresh they are.",
    alternative: {
      label: "Purchased lead lists",
      cost: "$0.40–$2.50",
      costNote: "per record, bought repeatedly — illustrative range",
    },
    offer: {
      label: "Lead Scraper",
      cost: "Quoted",
      costNote: "by source, market, and scope",
    },
    rows: [
      {
        measure: "Exclusivity",
        alternative: "Frequently resold to other buyers",
        offer: "Pulled for you from the public source",
      },
      {
        measure: "Freshness",
        alternative: "Aged by the time it is packaged and sold",
        offer: "Pulled on the schedule you set",
      },
      {
        measure: "Criteria",
        alternative: "Whatever filters the vendor offers",
        offer: "Your criteria, your county, your record types",
      },
      {
        measure: "Data hygiene",
        alternative: "Cleaned as far as the seller chose to",
        offer: "Cleaned, deduplicated, and enriched every run",
      },
      {
        measure: "Cost shape",
        alternative: "Pay again for every new batch",
        offer: "A repeatable run rather than a repeat purchase",
      },
      {
        measure: "Routing",
        alternative: "A file someone has to import and assign",
        offer: "Scored and routed into the CRM automatically",
      },
    ],
  },
  {
    id: "builds",
    offerId: "builds",
    title: "Contracting the work vs a scoped build",
    intro:
      "Custom automation usually means a developer or an agency on retainer, and a system only they understand.",
    alternative: {
      label: "Agency or contract developer",
      cost: "$85–$175",
      costNote: "per hour, or per-project — illustrative range",
    },
    offer: {
      label: "Custom Builds",
      cost: "Quoted",
      costNote: "scoped after mapping the process",
    },
    rows: [
      {
        measure: "Starting point",
        alternative: "Built from nothing each time",
        offer: "Built on the CRM you already run",
      },
      {
        measure: "Who understands it",
        alternative: "Often only the contractor who wrote it",
        offer: "Documented and handed over running",
      },
      {
        measure: "Ongoing changes",
        alternative: "Back on the schedule, at hourly rates",
        offer: "Changed inside the system you already have",
      },
      {
        measure: "Scope",
        alternative: "Priced before anyone maps the process",
        offer: "Mapped first, quoted second",
      },
    ],
  },
];

export const costDisclaimer =
  "Costs shown for the conventional approach are illustrative market ranges, not quotes, not sourced pricing research, and not claims about any named vendor. Jarvis CRM is the only offer here with a published price; the rest are quoted by scope. Your own numbers will differ.";
