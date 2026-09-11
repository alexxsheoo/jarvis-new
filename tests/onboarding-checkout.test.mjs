import assert from "node:assert/strict";
import test from "node:test";

import { withOnboardingRedirect } from "../src/lib/onboarding-checkout.ts";

test("payment URL preserves the checkout and encodes the complete booking destination", () => {
  const payment =
    "https://link.fastpaydirect.com/payment-link/6aa36a1ae9a073174b3b5bbd";
  const calendar =
    "https://api.leadconnectorhq.com/widget/bookings/just-jarvis-onboarding";
  const checkout = new URL(withOnboardingRedirect(payment, calendar));
  assert.equal(checkout.origin + checkout.pathname, payment);
  assert.equal(checkout.searchParams.get("redirectUrl"), calendar);
  assert.equal(checkout.searchParams.get("redirectIn"), "5");
  assert.equal(checkout.searchParams.has("paid"), false);
});

test("redirect parameters are encoded once and preserve destination query parameters", () => {
  const calendar =
    "https://api.leadconnectorhq.com/widget/bookings/just-jarvis-onboarding?firstName=Ada&notes=A+B";
  const checkout = new URL(
    withOnboardingRedirect(
      "https://link.fastpaydirect.com/payment-link/example?source=website",
      calendar,
    ),
  );
  assert.equal(checkout.searchParams.get("redirectUrl"), calendar);
  assert.equal(checkout.searchParams.get("source"), "website");
  assert.equal(checkout.searchParams.has("notes"), false);
});
