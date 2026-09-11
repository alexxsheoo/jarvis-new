export type StripePaymentMode = "disabled" | "test" | "live";

export function getStripePaymentMode(value?: string): StripePaymentMode {
  const mode = value?.trim() || "disabled";
  if (mode !== "disabled" && mode !== "test" && mode !== "live") {
    throw new Error("STRIPE_PAYMENT_MODE must be disabled, test, or live.");
  }
  return mode;
}

/** Validate public Payment Links before including them in the static build. */
export function validateStripePaymentLink(
  value: string | undefined,
  mode: StripePaymentMode,
): string | null {
  if (mode === "disabled" || !value?.trim()) return null;

  const link = value.trim();
  // Only the canonical, shareable Payment Link is accepted. Session URLs expire.
  const match = /^https:\/\/buy\.stripe\.com\/(test_)?[a-zA-Z0-9]+$/.exec(link);
  if (!match) {
    throw new Error("Use a canonical https://buy.stripe.com Payment Link.");
  }
  const isTest = Boolean(match[1]);
  if (isTest !== (mode === "test")) {
    throw new Error(
      "The Stripe Payment Link does not match STRIPE_PAYMENT_MODE.",
    );
  }
  return link;
}
