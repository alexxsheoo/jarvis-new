import Link from "next/link";

import type { LegalDocument } from "@/content/legal";
import { site } from "@/content/site";

import { ProsePage } from "./prose-page";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <ProsePage
      eyebrow="Legal"
      title={document.title}
      description={document.description}
    >
      <aside
        aria-label="Policy effective date"
        className="rounded-md border border-cobalt-400/30 bg-cobalt-glow p-5"
      >
        <p className="font-mono text-eyebrow text-cobalt-400 uppercase">
          Effective date
        </p>
        <p className="mt-2 text-sm text-paper">{document.effectiveDate}</p>
      </aside>

      {document.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="scroll-mt-28 space-y-4 py-5"
        >
          <h2
            id={`${section.id}-heading`}
            className="font-display text-xl font-medium text-paper sm:text-2xl"
          >
            {index + 1}. {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="list-disc space-y-2 pl-5 marker:text-cobalt-400">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <nav
        aria-label="Legal documents"
        className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-sm"
      >
        <Link
          href={site.privacyPolicyUrl}
          className="text-cobalt-400 underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href={site.termsUrl}
          className="text-cobalt-400 underline-offset-4 hover:underline"
        >
          Terms and Conditions
        </Link>
      </nav>
    </ProsePage>
  );
}
