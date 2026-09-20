import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { motion } from "../src/lib/motion";

test("foundation exposes every color and reduced-motion override", () => {
  const tokens = readFileSync("src/styles/tokens.css", "utf8");
  for (const name of [
    "background",
    "surface",
    "surface-elevated",
    "text-primary",
    "text-secondary",
    "text-inverse",
    "border",
    "border-strong",
    "accent",
    "accent-hover",
    "accent-subtle",
    "focus",
    "ai-accent",
    "ai-subtle",
    "success",
    "error",
  ]) {
    assert.match(tokens, new RegExp(`--color-${name}:`));
  }
  assert.match(
    readFileSync("src/app/globals.css", "utf8"),
    /prefers-reduced-motion: reduce/,
  );
  assert.deepEqual(
    [motion.feedback, motion.reveal, motion.menu],
    [140, 460, 260],
  );
});
