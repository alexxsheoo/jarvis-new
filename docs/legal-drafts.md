# Jarvis legal drafts

The owner requested new Privacy Policy and Terms and Conditions drafts on September 11, 2026. The website now uses local `/privacy` and `/terms` routes instead of linking to the policy on the older website. Sign In continues to use the owner's `https://app.justjarvis.com/` destination.

The original drafts are in `src/content/legal.ts`, rendered by `src/components/layout/legal-page.tsx`. Both pages visibly identify themselves as drafts, have no effective date, and use `noindex` while awaiting review. They do not replace an existing agreement or assert that the business is compliant. The owner authorized committing and publishing these draft pages together with the Sign In update. Publication does not finalize the unconfirmed business terms or remove the draft status.

## Decisions before adoption

- Confirm which legal entity operates each service, its mailing address, and working support, billing, and privacy-request contacts. The older website names both VS Staffing LLC and Just Jarvis LLC; checkout names Just Jarvis LLC. The draft does not resolve that difference by assumption.
- Confirm cancellation steps, access after cancellation, refunds and proration, failed-payment handling, and onboarding rescheduling and no-show terms. Test the cancellation method before describing it as available.
- Inspect hosted CRM, login, payment, calendar, communication, AI, and analytics settings. Confirm recipients of data, recording practices, AI training use, retention, deletion, exports, international transfers, and applicable regional privacy notices.
- Confirm actual SMS consent, HELP and STOP behavior, and the proposed restriction on using mobile information for third-party marketing. Draft copy does not configure a campaign or prove A2P approval.
- Obtain legal review appropriate to the business and its customers, including any warranty, liability, indemnity, governing-law, or dispute provisions. This draft intentionally does not select a liability cap, court, arbitration requirement, or class-action waiver.
- Finalize approved wording, set an effective date, replace the review annotations, and decide whether to remove `noindex`. Obtain any required customer acceptance separately. Publishing a page is not proof of acceptance.

The custom-build form currently does not send or save submissions. It is not a working privacy-request, support, or cancellation channel, and neither draft claims otherwise. The current source contains no dedicated advertising or analytics integration; this is not a verification of the hosted providers' practices.

## Drafting references

These sources informed the review topics; the legal copy is newly drafted and is not a reproduction of the older Jarvis policy.

- [FTC consumer privacy guidance](https://www.ftc.gov/business-guidance/privacy-security/consumer-privacy): business privacy statements must match actual handling of information.
- [Restore Online Shoppers' Confidence Act, FTC overview](https://www.ftc.gov/legal-library/browse/statutes/restore-online-shoppers-confidence-act): online recurring-payment disclosures, consent, and cancellation requirements where applicable. The draft does not rely on the vacated 2024 amended Negative Option Rule.
- [Twilio Messaging Policy](https://www.twilio.com/en-us/legal/messaging-policy): sender identification, consent records, and opt-out handling for messaging services using that provider. Verify the actual messaging provider and program requirements before use.
