import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";
import { siteOrigin } from "@/lib/metadata";
export const dynamic = "force-static";
const tags = ["React", "TypeScript", "Node.js", "PostgreSQL", "AI agents"];
const layers = [
  "Interface",
  "API boundary",
  "Data and transactions",
  "AI with approval",
];
export async function GET() {
  const css = await readFile(
    join(process.cwd(), "src/styles/tokens.css"),
    "utf8",
  );
  const token = (name: string) => {
    const value = css.match(
      new RegExp(`--color-${name}:\\s*(#[a-f0-9]{6})`, "i"),
    )?.[1];
    if (!value) throw new Error("Missing design token");
    return value;
  };
  const colors = {
    background: token("background"),
    primary: token("text-primary"),
    secondary: token("text-secondary"),
    accent: token("accent"),
  };
  const font = await readFile(
    join(process.cwd(), "src/assets/ibm-plex-sans-regular.ttf"),
  );
  // Built with the deploy's env, so the card shows whichever host the canonicals use.
  const host = new URL(siteOrigin).host;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: colors.background,
        color: colors.primary,
        padding: "70px 78px 56px",
        fontFamily: "IBM Plex Sans",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{ display: "flex", fontSize: 22, color: colors.secondary }}
          >
            Software engineer · LNMIIT, Jaipur
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              letterSpacing: -2,
              marginTop: 36,
            }}
          >
            {`${profile.name}.`}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 32,
              marginTop: 14,
            }}
          >
            <span>Building full-stack products</span>
            <span>and practical AI applications.</span>
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: 22,
                  padding: "8px 22px",
                  border: `1.5px solid ${colors.primary}`,
                  borderRadius: 999,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
          }}
        >
          {layers.map((layer, index) => {
            const ai = index === layers.length - 1;
            return (
              <div
                key={layer}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {index > 0 ? (
                  <div
                    style={{
                      width: 1.5,
                      height: 40,
                      background: colors.primary,
                    }}
                  />
                ) : null}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 250,
                    height: 58,
                    fontSize: 22,
                    borderRadius: 8,
                    border: ai ? "none" : `1.5px solid ${colors.primary}`,
                    background: ai ? colors.accent : "transparent",
                    color: ai ? colors.background : colors.primary,
                  }}
                >
                  {layer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1.5px solid ${colors.primary}`,
          paddingTop: 26,
          fontSize: 26,
        }}
      >
        <span>{host}</span>
        <span style={{ color: colors.secondary, fontSize: 22 }}>
          Open to SDE roles · 2027
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "IBM Plex Sans", data: font, weight: 400, style: "normal" },
      ],
    },
  );
}
