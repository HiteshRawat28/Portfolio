import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { processSteps } from "../src/content/process";
import {
  featuredWorkOrder,
  homepageOrder,
  moreWorkOrder,
  projects,
} from "../src/content/projects";
import { designMedia } from "../src/content/design-media";

test("home gallery includes each real project exactly once", () => {
  assert.equal(homepageOrder.length, projects.length);
  assert.equal(new Set(homepageOrder).size, projects.length);
  assert.deepEqual(
    [...homepageOrder].sort(),
    projects.map((project) => project.slug).sort(),
  );
});
test("featured and secondary work cover the portfolio without duplication", () => {
  assert.deepEqual(featuredWorkOrder, [
    "fleetpilot",
    "swiftbill",
    "personal-ops-agent",
  ]);
  assert.equal(new Set([...featuredWorkOrder, ...moreWorkOrder]).size, 6);
  assert.deepEqual(
    [...featuredWorkOrder, ...moreWorkOrder].sort(),
    projects.map((project) => project.slug).sort(),
  );
});
test("engineering process has three substantive steps without template delivery promises", () => {
  assert.equal(processSteps.length, 3);
  for (const step of processSteps) {
    assert.ok(step.title.length > 5 && step.detail.length > 30);
    assert.doesNotMatch(
      step.detail,
      /2-3 days|private design portal|satisfaction rate|guarantee/i,
    );
  }
});
test("redesigned presentation contains no template owner destinations", () => {
  for (const path of [
    "src/components/sections/Hero.tsx",
    "src/components/sections/SelectedWork.tsx",
    "src/components/sections/ProjectPreview.tsx",
    "src/components/sections/ContactCTA.tsx",
    "src/components/layout/SiteHeader.tsx",
  ]) {
    assert.doesNotMatch(
      readFileSync(path, "utf8"),
      /cal\.com\/rick|behance\.net|framebase\.design|framer\.link|dribbble\.com/,
    );
  }
});
test("generated visuals are local, lightweight and transparently labelled", () => {
  assert.equal(designMedia.portrait, null);
  const media = [
    ...projects.map((project) => project.media[0]),
    designMedia.process,
    designMedia.capabilities,
  ];
  assert.equal(media.length, 8);
  for (const item of media) {
    assert.ok(item);
    assert.match(item.src, /^\/media\/generated\/.+\.webp$/);
    assert.match(item.caption, /AI-generated/i);
    assert.ok(item.width > 1000 && item.height > 1000);
    const file = join(process.cwd(), "public", item.src.replace(/^\//, ""));
    assert.ok(statSync(file).size < 200_000);
  }
});
