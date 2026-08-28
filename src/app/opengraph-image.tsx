import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The OG runtime cannot resolve `/brand/...` the way the browser can, so the
 * badge is inlined as a data URI. Read once at module scope: this route is
 * prerendered at build time, so the cost never reaches a request.
 */
const badge = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "brand", "jarvis-logo.png"),
).toString("base64")}`;

/**
 * Rendered by the OG runtime, which supports only a subset of CSS: no Tailwind,
 * no design tokens, and every container needs an explicit `display`.
 * Colours below are the literal token values.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#03050B",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- the OG
            runtime renders plain <img>; next/image does not exist here. */}
        <img src={badge} alt="" width={150} height={132} />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#46D9F5",
            }}
          >
            {site.positioning}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#F2F0EC",
              maxWidth: 900,
            }}
          >
            Your revenue operation, running as one system.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(242,240,236,0.14)",
            paddingTop: 32,
            fontSize: 28,
            color: "#9BA3B4",
          }}
        >
          <div style={{ display: "flex", color: "#F2F0EC" }}>{site.name}</div>
          <div style={{ display: "flex" }}>{site.line}</div>
        </div>
      </div>
    ),
    size,
  );
}
