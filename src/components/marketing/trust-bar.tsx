import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Stat } from "@/components/ui/stat";
import { customerLogos, metrics } from "@/content/homepage";

export function TrustBar() {
  return (
    <section id="trust" className="hairline-t bg-ink-900 py-14">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-eyebrow text-faint uppercase">
            Running revenue operations for
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {customerLogos.map((logo) => (
              <li
                key={logo}
                className="font-display text-lg font-medium tracking-[-0.02em] text-muted"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        <dl className="grid gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <Stat key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
