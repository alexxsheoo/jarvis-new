import Link from "next/link";

import { legalDraftDate, type LegalDocument } from "@/content/legal";
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
        aria-label="Draft status"
        className="rounded-md border border-cobalt-400/30 bg-cobalt-glow p-5"
      >
        <p className="font-mono text-eyebrow text-cobalt-400 uppercase">
          Draft for review
        </p>
        <p className="mt-2 text-sm text-paper">
          Prepared {legalDraftDate}. Not effective until approved.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          {document.reviewSummary} Legal review is recommended before use.
        </p>
      </aside>

      <nav aria-label="On this page" className="border-b border-line py-5">
        <p className="mb-4 font-mono text-eyebrow text-faint uppercase">
          On this page
        </p>
        <ol className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          {document.sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-muted underline-offset-4 hover:text-paper hover:underline"
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

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
          {section.reviewNote ? (
            <aside className="border-l-2 border-cobalt-400/40 py-1 pl-4 text-sm leading-relaxed">
              <p className="mb-1 font-medium text-cobalt-400">To finalize</p>
              <p>{section.reviewNote}</p>
            </aside>
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
