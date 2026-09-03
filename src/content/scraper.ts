/**
 * Lead Scraper demo data.
 *
 * EXAMPLE DATA, NOT RESULTS. These are illustrative runs used to show what the
 * console does — not measured output, not a customer's numbers, and not a
 * promise about volume. Availability of any given source varies by market and
 * by what a county actually publishes, which is stated on the page too.
 *
 * The Richland County figures are the ones specified for the reference run.
 */

export type ScraperRun = {
  id: string;
  /** Tab label. */
  label: string;
  source: string;
  status: string;
  stats: { label: string; value: string }[];
};

export const scraperRuns: ScraperRun[] = [
  {
    id: "foreclosure",
    label: "Foreclosure",
    source: "Richland County Public Records",
    status: "Running",
    stats: [
      { label: "Records found", value: "1,284" },
      { label: "Cleaned", value: "1,284" },
      { label: "Enriched", value: "1,109" },
      { label: "Duplicates removed", value: "337" },
      { label: "Priority leads", value: "312" },
    ],
  },
  {
    id: "probate",
    label: "Probate",
    source: "Richland County Probate Filings",
    status: "Running",
    stats: [
      { label: "Records found", value: "486" },
      { label: "Cleaned", value: "486" },
      { label: "Enriched", value: "402" },
      { label: "Duplicates removed", value: "71" },
      { label: "Priority leads", value: "128" },
    ],
  },
  {
    id: "tax",
    label: "Tax Delinquent",
    source: "County Tax Assessor Roll",
    status: "Running",
    stats: [
      { label: "Records found", value: "2,940" },
      { label: "Cleaned", value: "2,940" },
      { label: "Enriched", value: "2,388" },
      { label: "Duplicates removed", value: "612" },
      { label: "Priority leads", value: "504" },
    ],
  },
  {
    id: "code",
    label: "Code Violations",
    source: "Municipal Code Enforcement",
    status: "Running",
    stats: [
      { label: "Records found", value: "873" },
      { label: "Cleaned", value: "873" },
      { label: "Enriched", value: "690" },
      { label: "Duplicates removed", value: "148" },
      { label: "Priority leads", value: "197" },
    ],
  },
  {
    id: "vacant",
    label: "Vacant Properties",
    source: "USPS Vacancy + County Parcels",
    status: "Running",
    stats: [
      { label: "Records found", value: "1,655" },
      { label: "Cleaned", value: "1,655" },
      { label: "Enriched", value: "1,204" },
      { label: "Duplicates removed", value: "409" },
      { label: "Priority leads", value: "286" },
    ],
  },
  {
    id: "custom",
    label: "Custom Source",
    source: "Client-supplied list + custom scraper",
    status: "Running",
    stats: [
      { label: "Records found", value: "3,410" },
      { label: "Cleaned", value: "3,410" },
      { label: "Enriched", value: "2,733" },
      { label: "Duplicates removed", value: "827" },
      { label: "Priority leads", value: "641" },
    ],
  },
];

/** The seven stages every record passes through, in order. */
export const scraperStages = [
  "Source",
  "Scrape",
  "Clean",
  "Enrich",
  "Dedupe",
  "Score",
  "Route",
] as const;

export const scraperDisclaimer =
  "Available sources and data fields vary by market, source, and public access. Figures shown are example runs, not results.";
