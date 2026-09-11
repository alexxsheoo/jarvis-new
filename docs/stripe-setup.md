# Hosted checkout and payment automations

## Current status

Standard is connected to the owner's [FastPayDirect payment link](https://link.fastpaydirect.com/payment-link/6aa36290ceb12d9fc1a8c43e). The hosted page was inspected on September 10, 2026 and displays Jarvis Standard, $97.00 per month, as a recurring subscription. No purchase was submitted. The owner calls this plan Standard, replacing the website's earlier Basic name.

Elite and Premium are also connected to their owner-supplied links: [Elite](https://link.fastpaydirect.com/payment-link/6aa363f9ceb12d9fc1a8c441) displays Jarvis ELITE at $197.00/month; [Premium](https://link.fastpaydirect.com/payment-link/6aa364e4e9a073174b3b5bb6) displays JARVIS PREMIUM 2026 Monthly at $297.00/month. Both were inspected without submitting a payment.

The Elite hosted checkout mentions mentorship. The owner explicitly chose to keep the website's current plan features, so full mentorship remains listed under Premium only. Do not change these inclusions as part of linking payments.

No post-payment automation is configured in this repository. The supplied links' existing automation, receipt, and redirect settings have not been inspected or changed.

The public website is deployed to GitHub Pages as a static export. Use hosted checkout and an external automation service or backend for confirmed payment events. Do not add a POST webhook to this static deployment. No secret payment key is required by the website. Do not describe the FastPayDirect checkout as a directly hosted Stripe page.

## Plan mapping

The display prices below already exist on the website. All three supplied checkout names, amounts, and monthly intervals were verified against their corresponding plans. Do not create or change prices automatically.

| Plan     | Current display | Review page          | Build variable                                   |
| -------- | --------------- | -------------------- | ------------------------------------------------ |
| Standard | $97 per month   | `/checkout/standard` | Owner-supplied link in `src/content/payments.ts` |
| Elite    | $197 per month  | `/checkout/elite`    | Owner-supplied link in `src/content/payments.ts` |
| Premium  | $297 per month  | `/checkout/premium`  | Owner-supplied link in `src/content/payments.ts` |

Each plan needs its own recurring payment link. The website does not synchronize prices from the payment provider, so recheck each hosted checkout when pricing changes. `/checkout/basic` remains a compatible alias for Standard. xCerebro AI Agents, Lead Scraper, communications usage, and Custom Builds remain separately priced.

## Optional Stripe overrides for Elite and Premium

No environment variables are needed for the supplied FastPayDirect links. The following setup is only for an intentional replacement with direct Stripe Payment Links.

1. In the owner's Stripe sandbox, create or select the approved recurring prices. Create one Payment Link per plan with quantity fixed at one. Keep trials, discounts, and optional products off unless the owner specifies them.
2. Set the business name and brand in Stripe. Use the existing Jarvis logo and cobalt/navy colors. Confirm applicable tax settings in the Stripe account.
3. Copy `.env.example` to `.env.local`. Set `STRIPE_PAYMENT_MODE=test` and add Elite/Premium public `https://buy.stripe.com/test_...` links. Blank overrides leave that plan unavailable in this mode; they never fall back to the live FastPayDirect link. The configured links must be distinct and match the selected mode. Standard always uses its owner-supplied FastPayDirect destination.
4. In each Payment Link's **After the payment** settings, choose the return URL. For the current GitHub Pages deployment use `https://alexxsheoo.github.io/jarvis-new/checkout/return/`. For local testing use `http://127.0.0.1:4175/checkout/return/`. Update it if the production domain changes.
5. The return page intentionally does not confirm payment or trigger onboarding. Do not grant access based on a return visit, a query parameter, or a browser event.
6. Enable Stripe's successful-payment receipts and configure the selected automation below. Store API keys and signing secrets only in that service's secret storage, never in website source or public build variables.
7. After sandbox payment and automation tests pass, supply the corresponding live Stripe Payment Links and set `STRIPE_PAYMENT_MODE=live`. Rebuild and publish only with owner approval. Environment changes require a rebuild. `disabled` disables the Stripe overrides and restores the supplied FastPayDirect links; it does not disable checkout.

The environment-variable validator accepts only canonical `buy.stripe.com` links. The exact owner-supplied FastPayDirect URLs are explicitly configured separately. This does not allow arbitrary custom payment domains. Expiring `checkout.stripe.com` session URLs are not reusable Payment Links.

## Automation decisions still needed

The owner has now identified the payment account (`eooxTNmjSBiqrf0deOuU`) and the separate calendar account (`zsODNuiVWJqICpsgxCNF`). Private onboarding's $300 checkout-to-calendar flow is documented in [private-onboarding.md](private-onboarding.md). Keep payment contacts, workflows, and webhook information in the payment account; use the other account for calendar booking only.

- Inspect and configure native payment-account workflows through the signed-in HighLevel editor; the supplied API access verified the account but does not expose a public workflow-creation endpoint.
- Which actions run once after the first successful payment: welcome email, account provisioning, onboarding form, internal notification, or another workflow?
- Which sender and recipients should be used? What are the approved onboarding content and account setup URL?
- What should happen on renewal, failed payment, cancellation, or refund? Account suspension and refund rules need the owner's policy.

No messages or account changes should be sent until those destinations and actions are configured.

## Event handling contract for the selected service

The Stripe event mapping below is provisional. For the supplied FastPayDirect links, first confirm the payment platform and available authenticated events. Use its equivalent confirmed-payment/subscription triggers if it manages checkout itself; do not assume it creates a Stripe Checkout Session.

| Event                                                             | Handling                                                                                                                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkout.session.completed`                                      | Match the approved CRM Payment Link/Price and save the customer/subscription mapping. Check payment status; completion alone can mean payment is still pending.                                        |
| `checkout.session.async_payment_succeeded`                        | Handle delayed confirmation if delayed payment methods are enabled. Use the same fulfillment record as the original session.                                                                           |
| `invoice.paid`                                                    | Reconcile the subscription and invoice against Stripe. Route a qualifying initial payment to onboarding and subsequent invoices to renewal handling. Do not send the initial welcome on every invoice. |
| `invoice.payment_failed`                                          | Record payment failure; apply the configured recovery workflow. Do not send success messages.                                                                                                          |
| `customer.subscription.updated` / `customer.subscription.deleted` | Reconcile current subscription state and apply the owner's access policy. Do not assume an old event is the latest state.                                                                              |

Use the service's authenticated Stripe integration or verify the raw webhook body against the Stripe signature. Filter by the intended Stripe account, test/live mode, and approved CRM Price IDs. Fetch current Stripe records when necessary, since event order is not guaranteed. An invoice marked paid outside Stripe or with no payment due needs an explicit business rule before it can trigger paid onboarding.

Use durable records with unique keys for event IDs and for each business action. Key onboarding by subscription ID and renewals by invoice ID so different event types cannot fulfill the same purchase twice. Track completed steps separately. A failed notification should retry that notification without creating a second account. Acknowledge an event only after durable acceptance; retain failed work for retry and review. Never rely on browser storage or an in-memory set for this.

This is the implementation contract, not an installed workflow. Once the platform is selected, implement and test these rules there.

## Verification

- Run `npm run test:billing`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Billing tests require Node 22.18 or newer for native TypeScript loading.
- Open all three checkout pages on desktop and mobile. Confirm each opens its exact supplied FastPayDirect URL, test labels apply only to test overrides, missing test overrides do not fall back to live links, and unknown plans return 404.
- Complete a sandbox subscription. Confirm the correct amount/currency/interval and exactly one onboarding workflow, even if the browser closes before returning.
- Replay an event and deliver related events out of order. Confirm no duplicate accounts, emails, or renewal actions.
- Test delayed payment, failed payment, a renewal, a canceled subscription, and an automation outage/retry. Verify each matches the agreed access policy.
- Visit the return page directly and add fabricated query parameters. Neither should create an account or report a verified payment.

## Local implementation and checks

After connecting all three plans, lint, TypeScript, the production build, and the three billing validation tests passed. Configuration checks verified each exact supplied URL and confirmed that missing test overrides cannot fall back to live links. Generated HTML checks matched all three prices and destinations and both pricing sections' plan links. Browser checks followed Elite from the homepage to its $197/month checkout and Premium from the pricing table to its $297/month checkout. The earlier Standard checkout check also passed. No payment was submitted.

Payment submission and automation tests remain pending. The supplied API access has since verified the payment account; workflow actions, delivery destinations, and an approved payment test still need to be configured as described above.

| File                                                        | Change                                                                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `src/content/pricing.ts`                                    | Standard, Elite, and Premium identifiers; existing amounts retained.                                  |
| `src/content/payments.ts`                                   | Exact owner-supplied payment URLs for Standard, Elite, and Premium.                                   |
| `src/components/marketing/crm-pricing.tsx`                  | Homepage plan buttons open the matching checkout page.                                                |
| `src/components/marketing/pricing-comparison.tsx`           | Comparison table buttons use the same plan routes.                                                    |
| `src/app/(marketing)/checkout/[plan]/page.tsx`              | Three static plan review pages and the Basic alias, with hosted handoff or unavailable state.         |
| `src/app/(marketing)/checkout/return/page.tsx`              | Informational return page with no payment or provisioning claims.                                     |
| `src/lib/billing-config.ts`                                 | All hosted links, optional Stripe overrides, per-destination test mode, and duplicate-link rejection. |
| `src/lib/stripe-payment-link.ts`                            | Explicit disabled/test/live modes and Payment Link validation.                                        |
| `tests/stripe-payment-link.test.mjs`, `package.json`        | Billing validation tests and command.                                                                 |
| `.env.example`, `.gitignore`                                | Committable empty configuration template; actual environment files remain ignored.                    |
| `README.md`, `JARVIS_PRODUCT_ARCHITECTURE_CLAUDE_PROMPT.md` | Links and guidance for this payment architecture.                                                     |
| `docs/stripe-setup.md`                                      | Configuration, pending decisions, event contract, and verification notes.                             |

## References

- [Stripe Payment Links](https://docs.stripe.com/payment-links)
- [After a Payment Link payment](https://docs.stripe.com/payment-links/post-payment)
- [Checkout fulfillment](https://docs.stripe.com/checkout/fulfillment)
- [Subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)
- [Webhook verification, retries, and duplicate events](https://docs.stripe.com/webhooks)
