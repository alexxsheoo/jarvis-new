// HighLevel's hosted checkout handles redirectUrl only after purchase.
// This is a post-payment handoff, not authentication for the public calendar.
export function withOnboardingRedirect(
  paymentLink: string,
  calendarLink: string,
) {
  const checkout = new URL(paymentLink);
  checkout.searchParams.set("redirectIn", "5");
  checkout.searchParams.set("redirectUrl", calendarLink);
  return checkout.toString();
}
