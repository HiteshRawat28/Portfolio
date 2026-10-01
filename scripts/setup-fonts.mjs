import { access, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Each installation obtains its own licensed webfonts; binaries are not redistributed in Git.
const directory = fileURLToPath(
  new URL("../src/assets/satoshi/", import.meta.url),
);
// Hosted builds fetch on every clean checkout, so absorb brief network or CDN failures.
async function fetchWithRetry(url, attempts = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (response.ok || response.status < 500 || attempt === attempts)
        return response;
    } catch (error) {
      if (attempt === attempts) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
  }
}
const missing = [];
for (const weight of [400, 500]) {
  try {
    await access(join(directory, `satoshi-${weight}.woff2`));
  } catch {
    missing.push(weight);
  }
}
if (missing.length) {
  console.info(
    "Fetching unmodified Satoshi webfonts from Fontshare for local self-hosting.",
  );
  console.info("License: https://www.fontshare.com/licenses/itf-ffl");
  const response = await fetchWithRetry(
    "https://api.fontshare.com/v2/css?f[]=satoshi@" +
      missing.join(",") +
      "&display=swap",
  );
  if (!response.ok)
    throw new Error("Fontshare stylesheet unavailable: " + response.status);
  const css = await response.text();
  await mkdir(directory, { recursive: true });
  for (const weight of missing) {
    const block = [...css.matchAll(/@font-face\s*\{([^}]+)\}/g)].find((match) =>
      new RegExp("font-weight:\\s*" + weight + "\\s*;").test(match[1]),
    );
    const path = block?.[1].match(
      /url\(['"]?(\/\/cdn\.fontshare\.com\/[^'"\s)]+\.woff2)['"]?\)/,
    )?.[1];
    if (!path)
      throw new Error("Official Satoshi WOFF2 source not found: " + weight);
    const font = await fetchWithRetry("https:" + path);
    if (!font.ok) throw new Error("Fontshare font unavailable: " + font.status);
    const bytes = Buffer.from(await font.arrayBuffer());
    if (bytes.length > 1000000 || bytes.toString("ascii", 0, 4) !== "wOF2")
      throw new Error("Unexpected webfont response.");
    await writeFile(join(directory, "satoshi-" + weight + ".woff2"), bytes, {
      flag: "wx",
    });
  }
}
