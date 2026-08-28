/**
 * AI Agent section content.
 *
 * IMPORTANT: every figure in `impactRows` is an ILLUSTRATIVE PLACEHOLDER. The
 * `without` column is industry-shaped, not sourced benchmark data; the
 * `withAgent` column describes what the agents are built to do, not measured
 * results from any account; and `range` is an example of how to frame impact,
 * never a forecast. Do not present any of it as a factual or financial claim
 * until real figures are supplied and checked. Same rule as `stack.ts`.
 *
 * The transcript is a scripted illustration of a lead conversation, not a
 * recording of a real one.
 */

/** A run of message text. `em` lifts the entity the agent acted on. */
export type Segment = { text: string; em?: boolean };

export type TranscriptMessage = {
  from: "lead" | "agent";
  body: Segment[];
  /** Render the working indicator beneath this message. */
  working?: boolean;
};

export const leadName = "J. Marsden";

export const transcript: TranscriptMessage[] = [
  {
    from: "lead",
    body: [{ text: "Hi — is the three-bed on Vine Street still available?" }],
  },
  {
    from: "agent",
    body: [
      { text: "It is. " },
      { text: "Two similar ones", em: true },
      { text: " came on this week as well. Want to walk all three " },
      { text: "Thursday", em: true },
      { text: "?" },
    ],
    working: true,
  },
  {
    from: "lead",
    body: [{ text: "That works. Can you send pricing first?" }],
  },
  {
    from: "lead",
    body: [{ text: "Also, what is the fastest way to get started?" }],
  },
  {
    from: "agent",
    body: [
      { text: "Sent — " },
      { text: "pricing", em: true },
      { text: " is in your inbox now. Fastest route is a " },
      { text: "15-minute call", em: true },
      { text: " to confirm your criteria. Thursday 10:30 or 2:00 are both open." },
    ],
    working: true,
  },
];

export type ImpactRow = {
  measure: string;
  without: string;
  withAgent: string;
  impact: "Very high" | "High" | "Medium";
  range: string;
};

export const impactRows: ImpactRow[] = [
  {
    measure: "Inbound calls missed each month",
    without: "~62%",
    withAgent: "Under 3%",
    impact: "Very high",
    range: "$12k–$28k",
  },
  {
    measure: "Chat conversations left unanswered",
    without: "~78%",
    withAgent: "0%",
    impact: "High",
    range: "$8k–$18k",
  },
  {
    measure: "Hours covered",
    without: "8 hrs / day",
    withAgent: "24 / 7",
    impact: "High",
    range: "$6k–$14k",
  },
  {
    measure: "First response time",
    without: "~34 min",
    withAgent: "Under 1 min",
    impact: "Very high",
    range: "$4k–$10k",
  },
  {
    measure: "Reviews responded to",
    without: "~11%",
    withAgent: "~98%",
    impact: "Medium",
    range: "$2k–$6k",
  },
  {
    measure: "Lead-to-appointment rate",
    without: "~23%",
    withAgent: "~48%",
    impact: "Very high",
    range: "$15k–$40k",
  },
];
