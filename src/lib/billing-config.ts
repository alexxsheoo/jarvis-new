import type { CrmPlanId } from "@/content/pricing";
import {
  elitePaymentLink,
  premiumPaymentLink,
  privateOnboardingCalendarLink,
  privateOnboardingPaymentLink,
  standardPaymentLink,
} from "@/content/payments";

import {
  getStripePaymentMode,
  validateStripePaymentLink,
} from "./stripe-payment-link";
import { withOnboardingRedirect } from "./onboarding-checkout";

type CheckoutDestination = {
  href: string;
  mode: "test" | "live";
};

export function getPrivateOnboardingCheckout(): CheckoutDestination {
  return {
    href: withOnboardingRedirect(
      privateOnboardingPaymentLink,
      privateOnboardingCalendarLink,
    ),
    mode: "live",
  };
}

/** Read at build time by the checkout Server Component. No secret keys needed. */
export function getBillingConfiguration() {
  const mode = getStripePaymentMode(process.env.STRIPE_PAYMENT_MODE);
  const stripeCheckout = (value?: string): CheckoutDestination | null => {
    const href = validateStripePaymentLink(value, mode);
    if (!href || mode === "disabled") return null;
    return { href, mode };
  };
  const destinations: Record<CrmPlanId, CheckoutDestination | null> = {
    standard: { href: standardPaymentLink, mode: "live" },
    elite:
      mode === "disabled"
        ? { href: elitePaymentLink, mode: "live" }
        : stripeCheckout(process.env.STRIPE_ELITE_PAYMENT_LINK),
    premium:
      mode === "disabled"
        ? { href: premiumPaymentLink, mode: "live" }
        : stripeCheckout(process.env.STRIPE_PREMIUM_PAYMENT_LINK),
  };
  const configuredLinks = Object.values(destinations)
    .filter((destination) => destination !== null)
    .map((destination) => destination.href);
  if (new Set(configuredLinks).size !== configuredLinks.length) {
    throw new Error("Each CRM plan must have its own payment link.");
  }
  return { destinations };
}
