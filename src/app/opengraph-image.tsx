import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Rendered by the OG runtime, which supports only a subset of CSS: no Tailwind,
 * no design tokens, and every container needs an explicit `display`.
 * Colours below are the literal token values.
 */
export default function OpengraphImage() {
  const bars = [
    { height: 40, color: "rgba(27,68,224,0.55)" },
    { height: 60, color: "rgba(43,91,255,0.75)" },
    { height: 80, color: "#5B84FF" },
    { height: 100, color: "#46D9F5" },
  ];

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
        {/* The mark: four ascending pillars on a HUD baseline, lead bar lit. */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
            {bars.map((bar, index) => (
              <div
                key={index}
                style={{
                  width: 16,
                  height: bar.height,
                  borderRadius: 8,
                  backgroundColor: bar.color,
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <div
              style={{
                width: 74,
                height: 4,
                borderRadius: 2,
                backgroundColor: "rgba(242,240,236,0.14)",
              }}
            />
            <div
              style={{
                width: 16,
                height: 4,
                borderRadius: 2,
                backgroundColor: "#17B8DA",
              }}
            />
          </div>
        </div>

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
