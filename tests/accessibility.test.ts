import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
function luminance(hex: string) {
  const components = hex
    .match(/[a-f0-9]{2}/gi)
    ?.map((v) => parseInt(v, 16) / 255);
  assert.ok(components);
  const rgb = components.map((v) =>
    v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4),
  );
  return (
    0.2126 * (rgb[0] ?? 0) + 0.7152 * (rgb[1] ?? 0) + 0.0722 * (rgb[2] ?? 0)
  );
}
function contrast(a: string, b: string) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return ((values[0] ?? 0) + 0.05) / ((values[1] ?? 0) + 0.05);
}
test("actual text colors meet AA on intended surfaces", () => {
  const css = readFileSync("src/styles/tokens.css", "utf8");
  const tokens = new Map(
    [...css.matchAll(/--color-([a-z-]+):\s*(#[a-f0-9]{6})/gi)].map((m) => [
      m[1],
      m[2],
    ]),
  );
  for (const name of [
    "text-primary",
    "text-secondary",
    "accent",
    "ai-accent",
    "error",
    "success",
  ]) {
    const color = tokens.get(name);
    assert.ok(color);
    for (const surface of ["background", "surface", "surface-elevated"]) {
      const bg = tokens.get(surface);
      assert.ok(bg);
      assert.ok(contrast(color, bg) >= 4.5, `${name} on ${surface}`);
    }
  }
  for (const [foreground, background] of [
    ["text-inverse", "accent"],
    ["ai-accent", "ai-subtle"],
    ["text-secondary", "accent-subtle"],
  ]) {
    const fg = tokens.get(foreground),
      bg = tokens.get(background);
    assert.ok(fg && bg);
    assert.ok(contrast(fg, bg) >= 4.5, `${foreground} on ${background}`);
  }
});
test("server-only credentials never appear in client component source", () => {
  for (const path of [
    "src/components/sections/ContactForm.tsx",
    "src/components/layout/MobileMenu.tsx",
  ]) {
    assert.doesNotMatch(
      readFileSync(path, "utf8"),
      /RESEND_API_KEY|CONTACT_TO_EMAIL/,
    );
  }
});
