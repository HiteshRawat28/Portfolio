import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const dynamic = "force-static";
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
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: colors.background,
        color: colors.primary,
        padding: 64,
        fontFamily: "IBM Plex Sans",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${colors.primary}`,
            width: 64,
            height: 64,
            fontSize: 24,
          }}
        >
          HR
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>Hitesh Rawat</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", fontSize: 58 }}>Full-stack systems.</div>
        <div style={{ display: "flex", fontSize: 58 }}>
          Practical AI applications.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: `2px solid ${colors.accent}`,
          paddingTop: 24,
          fontSize: 22,
          color: colors.secondary,
        }}
      >
        Business workflows · Server-side rules · Bounded AI tools
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
