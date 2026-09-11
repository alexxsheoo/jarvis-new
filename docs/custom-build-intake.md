# Custom build inquiries

Custom Builds uses a separate inquiry flow from CRM checkout:

- `/services/custom-builds` and its legacy `/platform/custom` page use the custom form destination in desktop and mobile navigation.
- The Custom Builds section CTA and pricing's Custom CRM bundle open `/custom-build-request`.
- General and CRM buttons still open `/checkout`; `/build` is a compatible plan-selection alias.

The form requires first name, last name, email, phone, business or industry, preferred date, preferred time, and city or time zone. Business name, alternative availability, and project notes are optional. Native date/time inputs and the shared Zod schema validate contact and scheduling fields. Preferred availability is a request, not a confirmed booking.

## Delivery status

This is a form draft with publication authorized by the owner while delivery remains disconnected. The visible notice states that requests cannot be sent yet. The submission handler validates but returns an explicit not-sent error, preserving entered values. It must never log personal information or report receipt before durable delivery succeeds.

GitHub Pages cannot run the Next.js server action; the export branch uses the same error-only handler as a client function. Before enabling submissions, create and connect a hosted Jarvis/HighLevel form through the owner's signed-in admin account, or connect a separately hosted backend. The supplied public forms API exposes form retrieval, submissions retrieval, and uploads, but not form creation. Admin access has been requested; no hosted form, contact, appointment, notification, or workflow has been created as part of this draft.

Form responses belong in the owner's payment and information location, `eooxTNmjSBiqrf0deOuU`. The other location is for calendar bookings only. Do not reuse the paid private-onboarding calendar for these custom-build inquiries. Keep API tokens out of all website files and client bundles.

Once delivery is connected, replace the draft notice and error-only handler, verify that a request saves all fields, and show a receipt only after confirmed success. Confirm appointments separately; no booking is created by filling out preferred availability.

## Local verification

- `npm run lint`, `npx tsc --noEmit`, and `npm run build` passed.
- All four `npm run test:forms` tests passed, covering required details, invalid contacts and dates/times, optional fields, and input limits.
- Browser checks confirmed desktop and mobile Custom Builds buttons open the form, the mobile menu closes, homepage CTAs still open checkout, and only the custom pricing bundle opens the form.
- At 320px, the form has no horizontal overflow and date/time controls fit. No browser errors were reported.
- An empty submission shows field errors. A valid local test returns the explicit not-sent error and preserves inputs. No inquiry was sent or saved externally.

## Requested webhook workflow

The owner requested a Jarvis webhook workflow for these custom-build inquiries. Create it in the payment and information location only, after the signed-in workflow editor is available. The public workflow API exposes listing rather than creation: [HighLevel workflows API](https://marketplace.gohighlevel.com/docs/ghl/workflows/workflows/).

Use a dedicated Custom Build Inquiry workflow, separate from the $300 onboarding payment workflow. The intended payload contains firstName, lastName, email, phone, company, industry, preferredDate, preferredTime, timeZone, otherAvailability, and goals. A request should create or update the contact and preserve project details and requested availability for the team to arrange a call. It must not mark a payment successful, create a confirmed appointment, or enroll the contact into unrelated marketing.

The inbound webhook destination, contact/custom-field mappings, and a verified submission path remain pending. Do not expose a private account token or an administrative webhook credential in public website code. Do not add customer emails or SMS without approved recipients and content. Verify successful delivery before replacing the draft notice with a receipt.
