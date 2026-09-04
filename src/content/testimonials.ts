/**
 * Customer testimonials.
 *
 * DELIBERATELY EMPTY. Testimonials are the one thing on this site that cannot
 * be written for you — an invented quote attributed to a named person or
 * company is a fabricated endorsement, and it is the kind of content that does
 * real damage when a visitor checks it.
 *
 * The section renders only when this array has entries, so the homepage simply
 * skips it until then. Fill it with quotes you actually have permission to
 * publish and it appears with no other change.
 *
 * For each entry, use words the customer actually said. `role` and `company`
 * should be what they agreed to be identified as.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];
