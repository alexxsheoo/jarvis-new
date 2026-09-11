import assert from "node:assert/strict";
import test from "node:test";

import {
  getStripePaymentMode,
  validateStripePaymentLink,
} from "../src/lib/stripe-payment-link.ts";

test("checkout remains off until explicitly configured", () => {
  assert.equal(getStripePaymentMode(), "disabled");
  assert.equal(
    validateStripePaymentLink("https://buy.stripe.com/Example123", "disabled"),
    null,
  );
  assert.equal(validateStripePaymentLink("", "live"), null);
  assert.equal(validateStripePaymentLink(undefined, "test"), null);
  assert.throws(() => getStripePaymentMode("production"));
});

test("test and live links cannot be mixed", () => {
  const testLink = "https://buy.stripe.com/test_Example123";
  const liveLink = "https://buy.stripe.com/Example123";
  assert.equal(validateStripePaymentLink(testLink, "test"), testLink);
  assert.equal(validateStripePaymentLink(liveLink, "live"), liveLink);
  assert.throws(() => validateStripePaymentLink(testLink, "live"));
  assert.throws(() => validateStripePaymentLink(liveLink, "test"));
});

test("reject lookalike hosts, expired session URLs, and altered payment URLs", () => {
  for (const link of [
    "http://buy.stripe.com/Example123",
    "https://buy.stripe.com.example.com/Example123",
    "https://buy.stripe.com@evil.example/Example123",
    "https://checkout.stripe.com/c/pay/cs_example",
    "https://buy.stripe.com/Example123?redirect=https://evil.example",
    "https://buy.stripe.com/Example123#fragment",
    "https://buy.stripe.com/",
    "javascript:alert(1)",
  ]) {
    assert.throws(() => validateStripePaymentLink(link, "live"), link);
  }
});
