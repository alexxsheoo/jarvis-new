export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  reviewNote?: string;
};

export type LegalDocument = {
  title: string;
  description: string;
  reviewSummary: string;
  sections: LegalSection[];
};

export const legalDraftDate = "September 11, 2026";

export const privacyDraft: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How information is handled when you visit Jarvis, use the CRM, or work with our team.",
  reviewSummary:
    "Confirm the legal business name, privacy contact, service providers, retention practices, and tracking settings before adopting this policy.",
  sections: [
    {
      id: "scope",
      title: "Who this policy covers",
      paragraphs: [
        'This policy describes how the business operating Jarvis ("Jarvis," "we," "us," or "our") handles personal information in connection with our website, Jarvis CRM, purchases, inquiries, onboarding, and related services.',
        "xCerebro AI Agents, Lead Scraper, and Custom Builds are separate products and services. This policy applies when we provide those services under a Jarvis agreement. A separate website or provider may also have its own privacy notice.",
        "When a business uses Jarvis to manage its own contacts, that business determines how those records are used. We process those records on its behalf as described in the customer agreement. Requests about a customer's marketing, messages, or contact records should generally be directed to that business.",
      ],
      reviewNote:
        "Confirm the legal entity responsible for the website and each service, including whether Just Jarvis LLC, VS Staffing LLC, or both should be identified here.",
    },
    {
      id: "information",
      title: "Information we receive",
      paragraphs: [
        "The information involved depends on the service you use and what you choose to provide. Please only submit information that is needed for your request and that you have permission to share.",
      ],
      bullets: [
        "Contact and business details, such as your name, email, phone number, company, industry, and project requirements.",
        "Scheduling details, including your preferred dates, times, time zone, and appointment history.",
        "Account information and customer records entered into the CRM, including contacts, conversations, notes, pipelines, tasks, and files.",
        "Subscription and transaction records, such as the plan purchased, payment status, billing dates, and processor references.",
        "Technical records from website and service use, such as IP address, browser type, access times, and error or security logs.",
        "Materials supplied for AI or custom work, including instructions, prompts, knowledge bases, workflows, and connected data.",
      ],
    },
    {
      id: "uses",
      title: "How information is used",
      paragraphs: [
        "We use information to respond to inquiries, provide the services you request, manage accounts and payments, arrange onboarding, troubleshoot problems, and protect the services from misuse. We may also need records to meet legal obligations or resolve a dispute.",
        "Marketing communications require the permissions applicable to the channel and your location. Providing information for a custom-build inquiry or an appointment does not, by itself, authorize unrelated marketing.",
        "Where applicable law requires a legal basis, processing must be supported by that basis, such as performing our agreement with you, your consent, a legal obligation, or a legitimate interest that does not override your rights.",
      ],
    },
    {
      id: "payments",
      title: "Payments and appointment bookings",
      paragraphs: [
        "Checkout takes place on a hosted payment page. Standard currently links to Stripe; Elite, Premium, and private onboarding use the supplied FastPayDirect payment pages. The marketing website does not ask you to enter card details directly into its own form.",
        "The payment provider processes the information entered at checkout under its own terms and privacy notice. We may receive transaction and subscription information needed to administer your purchase.",
        "Private onboarding bookings use a hosted calendar. Information you enter there is used to arrange your sessions and is also subject to the calendar provider's practices.",
      ],
    },
    {
      id: "sharing",
      title: "When information is shared",
      paragraphs: [
        "Information may be provided to service providers that help operate the website, CRM, payments, calendars, communications, hosting, support, and requested AI features. They should receive only the information needed for their role, subject to the applicable agreements.",
        "We may also disclose information at your direction, with appropriate consent, to comply with a legal requirement, to address fraud or security threats, or in connection with a business transfer subject to applicable privacy protections.",
      ],
      reviewNote:
        "Confirm the vendor list, related business entities, and whether any advertising, analytics, data licensing, or other activity constitutes a sale, sharing, or targeted advertising under applicable law. This draft does not assert that those activities are absent.",
    },
    {
      id: "messaging",
      title: "Text messages, calls, and email",
      paragraphs: [
        "If you opt in to a Jarvis messaging program, the consent request should identify the sender, the type of messages, and how to opt out. Frequency varies with the program, and message and data rates may apply. Marketing consent is not a condition of purchase.",
        "Reply STOP to end messages from that SMS program or HELP for assistance. Email marketing should include an unsubscribe option. Withdrawing marketing consent does not cancel a subscription or prevent necessary account notices through another permitted channel.",
        "Mobile numbers and SMS opt-in data will not be sold or shared with third parties or affiliates for their own marketing. They may be disclosed to providers that deliver or support the messaging service and when legally required.",
        "Customers sending messages through Jarvis are responsible for obtaining permission from their own recipients and honoring their opt-out requests. Recording or transcribing calls requires any notice and consent applicable to that communication.",
      ],
      reviewNote:
        "Verify these proposed commitments against the actual messaging programs, consent records, STOP and HELP handling, and call-recording settings before use.",
    },
    {
      id: "ai-and-data",
      title: "AI features and sourced data",
      paragraphs: [
        "An AI feature may process the prompts, conversations, documents, or CRM information supplied to it through a technology provider. Only connect data you are authorized to use. AI output can contain personal information and should be reviewed before it is shared or used.",
        "Lead Scraper or custom data services may organize information from public or otherwise authorized sources selected for a project. Public availability does not remove privacy rights or create permission for every use. Source accuracy and permissions need to be assessed for the intended purpose.",
      ],
      reviewNote:
        "Confirm AI providers, storage locations, retention, and any model-training use. Do not promise that data is excluded from model training without verifying the provider agreement and settings.",
    },
    {
      id: "cookies",
      title: "Cookies and browser technologies",
      paragraphs: [
        "The website and connected services may use browser storage or similar technologies for functions such as keeping you signed in and remembering preferences. Payment, login, and booking pages may apply their own settings.",
        "You can control cookies through your browser, although blocking necessary storage may affect a service. Where optional tracking requires consent or an opt-out mechanism, that choice must be provided before the tracking is used.",
      ],
      reviewNote:
        "Complete a website and app tracking inventory. No advertising or analytics integration was identified in the current marketing source, but hosted services and account settings still need inspection.",
    },
    {
      id: "retention-security",
      title: "Retention and security",
      paragraphs: [
        "Information should be retained only as long as needed to provide the service, meet a legal or accounting obligation, maintain security, or resolve a dispute. The appropriate period depends on the record and purpose. Backups and provider systems may follow separate deletion schedules.",
        "We must use safeguards appropriate to the information and service. No online service can guarantee complete security. Protect your login credentials, control access to your workspace, and report suspected unauthorized access promptly.",
      ],
      reviewNote:
        "Confirm actual retention and deletion periods, backup handling, security controls, and the process for account closure and incident reports.",
    },
    {
      id: "rights",
      title: "Your choices and privacy requests",
      paragraphs: [
        "Depending on your location and applicable law, you may be able to request access, correction, deletion, or a portable copy of your information, withdraw consent, or object to or restrict certain processing. Some laws also provide rights relating to targeted advertising, sale or sharing, and appeals of a denied request.",
        "We may need to verify your identity or an authorized agent's authority before acting on a request. Legal exceptions can limit what can be deleted or disclosed. We will not unlawfully discriminate against you for exercising a privacy right.",
        "For records controlled by a business using Jarvis, contact that business first. For information controlled by Jarvis, use the privacy contact identified below once this policy is finalized.",
      ],
    },
    {
      id: "international-children",
      title: "International use and children",
      paragraphs: [
        "Service providers may process information in a country other than your own. Applicable transfer requirements and safeguards must be considered before transferring protected information internationally.",
        "Jarvis is intended for business use by adults. The services are not directed to children under 13. If information about a child has been submitted without required permission, contact the privacy team so it can be reviewed and handled as required by law.",
      ],
      reviewNote:
        "Confirm operating countries, storage locations, transfer safeguards, and any additional regional privacy notices required for the customers served.",
    },
    {
      id: "contact-updates",
      title: "Contact and policy updates",
      paragraphs: [
        "A final policy will identify the responsible legal business, its mailing address, and a working privacy-request email or form. Requests should describe the information or service involved without including passwords or complete payment details.",
        "When this policy is updated, the revised version will identify its effective date. Additional notice or consent will be provided when required. This draft has no effective date and does not replace an existing policy.",
      ],
      reviewNote:
        "Add the verified business name, mailing address, privacy contact, and effective date. The current custom-build form is not connected and must not be used as a privacy-request channel.",
    },
  ],
};

export const termsDraft: LegalDocument = {
  title: "Terms and Conditions",
  description:
    "Proposed terms for Jarvis CRM subscriptions, onboarding, and separately scoped services.",
  reviewSummary:
    "Confirm the contracting business, support and cancellation contacts, refund policy, and dispute terms before adopting this agreement.",
  sections: [
    {
      id: "agreement",
      title: "The agreement",
      paragraphs: [
        'These terms describe the proposed agreement between the business operating Jarvis ("Jarvis," "we," "us," or "our") and the person or business purchasing or using the services ("you"). The final terms must identify the contracting legal entity and be made available before acceptance.',
        "You must be at least 18 and authorized to enter into an agreement for the business you represent. If you do not agree to the final terms presented with a purchase, do not complete that purchase.",
        "A signed statement of work or order may set additional terms for a specific service. If it conflicts with these general terms, the signed agreement controls for that service, subject to rights that cannot be waived by law.",
      ],
      reviewNote:
        "Confirm the contracting legal entity, business address, effective date, and the method used to record acceptance at checkout.",
    },
    {
      id: "services",
      title: "What you are purchasing",
      paragraphs: [
        "Jarvis CRM provides the features included in the plan selected at checkout. Standard, Elite, and Premium are separate monthly plans. The price, billing interval, included features, and any additional charges should be reviewed before subscribing.",
        "xCerebro AI Agents, Lead Scraper, and Custom Builds are separately scoped products or services unless a written bundle expressly includes them. A bundle does not imply that every service, integration, or usage charge is included.",
        "Communication usage, third-party subscriptions, custom implementation, and other extras are charged only as disclosed in the applicable checkout or written agreement.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts and access",
      paragraphs: [
        "Provide accurate account and billing information and keep it current. You are responsible for managing your authorized users, protecting credentials, and ensuring that people using your workspace follow these terms.",
        "Notify Jarvis promptly if you suspect unauthorized access. Do not share an account in a way that bypasses plan limits or access controls, and do not attempt to access another customer's information.",
      ],
    },
    {
      id: "billing",
      title: "Subscriptions and payment",
      paragraphs: [
        "By completing a recurring subscription checkout, you authorize the amount and billing frequency shown there. A subscription renews automatically at that interval until canceled. A one-time onboarding purchase is separate from the recurring CRM subscription.",
        "Payments are processed through the hosted checkout provider. Review the final amount, currency, taxes, and recurring-payment disclosures before paying. A success page alone is not confirmation that funds were received or that an account is ready.",
        "Any proposed price change should be communicated before it applies to a future renewal, with an opportunity to cancel where required. Payment failures may interrupt access, subject to applicable notice requirements and the final account policy.",
      ],
    },
    {
      id: "cancellation-refunds",
      title: "Cancellation and refunds",
      paragraphs: [
        "You may stop future subscription renewals by completing the cancellation process disclosed at checkout. Cancellation should not require buying another service. A cancellation confirmation should state the final billing and access dates.",
        "Deleting a bookmark, stopping use, opting out of messages, or disconnecting an integration does not cancel a subscription. Use the confirmed cancellation method and keep the confirmation for your records.",
        "Refunds, prorated credits, and the treatment of prepaid fees must follow the policy disclosed before purchase and any rights required by law. This draft does not establish a blanket no-refund policy.",
      ],
      reviewNote:
        "Specify and test the cancellation URL or monitored contact, timing before renewal, access after cancellation, refund and proration rules, failed-payment grace period, and any onboarding rescheduling or no-show policy.",
    },
    {
      id: "onboarding-custom",
      title: "Onboarding and Custom Builds",
      paragraphs: [
        "Private onboarding is currently offered as a separate one-time $300 service covering A2P setup assistance, website creation, and two one-on-one coaching sessions. After payment, the booking calendar is provided to arrange the sessions. Scope, preparation requirements, and scheduling details should be confirmed before work starts.",
        "A2P registration and approval are controlled by carriers and their providers. Assistance does not guarantee approval, delivery rates, or an approval date. You must provide accurate business information and any required consents and documents.",
        "A custom-build inquiry is a request for a conversation, not a confirmed appointment or an agreement to deliver a project. Custom work requires an agreed scope, price, timeline, deliverables, revision limits, and ownership terms. Changes to that scope require agreement from both parties.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Responsible use",
      paragraphs: [
        "Use the services lawfully and respect the rights of the people whose information you process. You are responsible for your data sources, outreach, business decisions, and connected accounts.",
      ],
      bullets: [
        "Do not send spam, impersonate others, harass recipients, or use deceptive messages or offers.",
        "Obtain the permissions required for calls, messages, recordings, data collection, and marketing, and honor opt-outs.",
        "Do not upload malware, bypass security or access restrictions, or interfere with the service.",
        "Do not use scraped or purchased data in ways that violate laws, source restrictions, or another person's rights.",
        "Do not submit sensitive or regulated information unless the service and written agreement permit it and the necessary safeguards are in place.",
      ],
    },
    {
      id: "sms",
      title: "Messaging programs",
      paragraphs: [
        "For a Jarvis SMS program you choose to join, messages may concern the topics described when you opt in, such as a requested appointment, account support, or separately authorized promotions. Message frequency varies, and message and data rates may apply. Marketing consent is not required to purchase.",
        "Reply STOP to unsubscribe from that messaging program and HELP for assistance. Carrier delivery is outside Jarvis's control and may be delayed or unavailable. See the Privacy Policy for the proposed handling of mobile numbers and consent records.",
        "If you use Jarvis to contact your own customers, you are the sender and must identify your business, obtain the required consent, keep consent records, and provide a working opt-out process.",
      ],
      reviewNote:
        "Add a working support contact and verify each program's sender identity, message categories, consent language, HELP response, and opt-out behavior before registration or launch.",
    },
    {
      id: "data-ownership",
      title: "Your data and our materials",
      paragraphs: [
        "You retain your rights in the information and materials you provide. You authorize Jarvis and its service providers to process them as needed to perform the agreed service. You must have the rights and permissions needed to provide that information.",
        "Jarvis and its licensors retain their rights in the platform, branding, templates, and pre-existing tools. Your subscription gives you permission to use the agreed service; it does not transfer ownership of the platform. Ownership or licensing of custom deliverables must be stated in the project agreement.",
        "The Privacy Policy describes personal-information handling. Any required data-processing agreement should identify the parties' responsibilities for customer records and connected services.",
      ],
    },
    {
      id: "ai-third-parties",
      title: "AI outputs and third-party services",
      paragraphs: [
        "AI-generated messages, recommendations, and extracted data may be inaccurate or incomplete. Review outputs before using them, especially before sending messages, changing customer records, or making significant decisions. Jarvis does not guarantee leads, revenue, closed deals, or any particular business outcome.",
        "Payment processors, carriers, calendars, AI providers, and other integrations may have their own terms, charges, and availability limits. You are responsible for authorizing the connections you request. A third party may change or discontinue its service.",
        "The services and coaching do not replace professional legal, tax, financial, or regulatory advice.",
      ],
    },
    {
      id: "availability-termination",
      title: "Availability and ending service",
      paragraphs: [
        "Maintenance, security incidents, and provider outages can affect access. Any uptime or support commitment must be stated in your order or a separate service agreement.",
        "Jarvis may restrict access when reasonably needed to respond to unlawful use, a material breach, nonpayment, or a security threat. Where practical and legally permitted, we will explain the issue and provide an opportunity to resolve it. Urgent protective action may be necessary first.",
        "When service ends, data export, access, retention, and deletion follow the agreed account policy and applicable law. You should arrange for records you need before the confirmed access end date.",
      ],
      reviewNote:
        "Confirm the support commitments, suspension process, export method, and post-termination retention period before adoption.",
    },
    {
      id: "liability-disputes",
      title: "Responsibility and disputes",
      paragraphs: [
        "Each party remains responsible for its obligations under the agreement and applicable law. Nothing in these terms excludes a warranty, remedy, or liability that cannot lawfully be excluded, or removes a mandatory consumer right.",
        "If a dispute arises, contact the other party with enough detail to investigate and seek a resolution. This draft does not impose mandatory arbitration, a class-action waiver, a liability cap, or a chosen court.",
      ],
      reviewNote:
        "Have qualified counsel review any proposed warranty exclusions, liability limits, indemnity, governing law, and dispute venue for the business and jurisdictions served.",
    },
    {
      id: "changes-contact",
      title: "Changes and contact information",
      paragraphs: [
        "The final terms will identify their effective date and the responsible business's mailing address and support contact. Material changes will be communicated as required, and any required acceptance will be obtained before those changes apply.",
        "This draft is for review and is not an effective customer agreement. It does not change an existing purchase, subscription, or signed project agreement.",
      ],
      reviewNote:
        "Insert verified legal, support, and billing contact details. Do not use the unconnected custom-build form as a support or cancellation channel.",
    },
  ],
};
