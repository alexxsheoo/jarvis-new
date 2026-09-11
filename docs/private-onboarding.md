# Private onboarding: payment to booking

## Offer

One-time $300 USD payment for A2P setup, website creation, and two private coaching sessions on using Jarvis. The CRM subscription is separate. The supplied booking calendar offers one-hour appointments; the site promises two sessions without inventing any additional service scope.

## Website flow

The homepage pricing area, pricing page, and CRM checkout pages link to `/onboarding`. Its payment button opens the supplied $300 checkout with HighLevel's documented `redirectUrl` and `redirectIn=5` parameters. The provider displays the calendar after a successful purchase. There is no calendar embed or standalone calendar button on an unpaid website page, and no `paid=true` browser flag.

- Payment: `https://link.fastpaydirect.com/payment-link/6aa36a1ae9a073174b3b5bbd`
- Post-purchase calendar: `https://api.leadconnectorhq.com/widget/bookings/just-jarvis-onboarding`
- Amount verified through the payment account API: `300`, `USD`, `one_time`.
- The calendar's final public booking form was inspected without submitting an appointment; it did not request another payment.

This changes the URL used by this website, not the saved configuration of the bare payment link. If the owner shares the bare link elsewhere, configure the same redirect in the payment account's Payment Links editor or share the website's configured checkout URL.

A redirect is a post-purchase handoff, not access control for the public calendar URL. It does not prevent someone with that URL from opening it directly, and it does not enforce a two-session limit. A stricter entitlement system would need authenticated or single-use booking links and persistent tracking. Neither is being claimed as implemented here.

## Account boundaries

The owner authorized these account roles. API tokens were used only for read-only administrative checks and were not saved in repository files, environment files, or public assets.

| Responsibility                                                                    | Location               |
| --------------------------------------------------------------------------------- | ---------------------- |
| Payments, payment-side contacts, workflows, webhooks, and operational information | `eooxTNmjSBiqrf0deOuU` |
| Calendar booking                                                                  | `zsODNuiVWJqICpsgxCNF` |

Verified resources:

- Payment product: `692d8db40badf33c5075f241`, Jarvis Onboarding Calendar (via calendars).
- One-time price: `692d8db4313b7e83e46bd3b6`, Jarvis Onboarding Calendar @ 300.
- Calendar: `M9DJjkncldFnvimIHFyE`, JARVIS ONBOARDING, active, slug `just-jarvis-onboarding`.
- Existing payment-account workflow: `444ac537-c2a4-433a-a5da-d3cd9abf9718`, Onboarding Calendar, draft. Its steps were not read or modified through the public API.

No contact was manually created, copied, or enrolled. No payment, appointment, email, or SMS was submitted. The payment and booking providers keep their existing handling of their own customer forms.

## Workflow follow-up

The requested immediate payment-to-calendar handoff uses the payment provider's redirect. A separate email delivery or webhook workflow has not been created. HighLevel's documented public API exposes workflow listing, not workflow creation or editing. Use the signed-in payment-account workflow editor for those steps; do not put its token into the website.

If the owner wants backup booking delivery by email, configure it in the payment account:

1. Inspect the existing Onboarding Calendar draft before creating another workflow.
2. Match the exact onboarding product and price with Payment Status = Success. Do not trigger for the $97/$197/$297 subscriptions, failed payments, or other $300 purchases.
3. Verify the amount/currency against the approved product and confirm which payment source the hosted link produces. Do not assume the source is Calendar just because the product name contains that word.
4. Record the transaction ID and deduplicate repeated payment events. Mark a booking-delivery step complete only after delivery succeeds so retries do not create duplicate work.
5. Use the approved sender and content to deliver the booking link. Decide how to issue session two and track the two-session entitlement before promising automatic enforcement.
6. Test with a sandbox payment and controlled recipient before enabling real customer notifications.

Do not charge another $300 at the booking step or change the separate calendar account's payment settings as part of configuring payment-account workflows.

## Verification status

Read-only checks verified both accounts, the correct product/price, and the target calendar. The actual paid transaction and automatic post-purchase navigation have not been exercised. No live charge is authorized for testing.

Completed local checks:

- `npm run test:billing`: all five tests passed, including checkout destination and nested redirect encoding.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build`: passed after the narrow-phone layout fix.
- Browser review at 1280px, 390px, and 320px: the onboarding page fits without horizontal overflow. The pricing card also fits at 320px and opens the onboarding page.
- The website payment button opens the correct one-time $300 checkout and retains the calendar redirect parameter. Before payment, the provider shows the checkout, not the booking form.
- The generated onboarding HTML includes the $300 price and two-session offer, with no standalone calendar anchor. No private-integration token pattern was found in generated public assets or page files.
- No browser errors were reported on the reviewed local onboarding page.

A successful paid transaction and the resulting automatic redirect still need an end-to-end test through the payment provider. Local validation does not verify a completed payment.

## Files

- `src/content/onboarding.ts`: offer price, summary, and inclusions.
- `src/content/payments.ts`, `src/lib/onboarding-checkout.ts`, `src/lib/billing-config.ts`: payment destination and provider-managed redirect.
- `src/app/(marketing)/onboarding/page.tsx`: private onboarding details and checkout button.
- `src/components/marketing/private-onboarding-card.tsx`, `src/app/(marketing)/pricing/page.tsx`: onboarding card on pricing.
- `src/components/marketing/crm-pricing.tsx`, `src/app/(marketing)/checkout/[plan]/page.tsx`: compact onboarding links beside CRM plans.
- `tests/onboarding-checkout.test.mjs`, `package.json`: redirect encoding checks in the billing test command.
- `README.md`, `docs/stripe-setup.md`, `JARVIS_PRODUCT_ARCHITECTURE_CLAUDE_PROMPT.md`: current integration guidance.

## Sources

- [HighLevel Payment Links: post-purchase URL parameters](https://help.gohighlevel.com/support/solutions/articles/155000002177-payment-links)
- [Saved payment-link redirect settings](https://ideas.gohighlevel.com/changelog/redirection-to-custom-url-from-payment-links)
- [Payment Received workflow trigger](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Public API scopes and workflow listing](https://marketplace.gohighlevel.com/docs/Authorization/Scopes/)
