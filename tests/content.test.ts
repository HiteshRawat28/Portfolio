import test from "node:test";
import assert from "node:assert/strict";
import {
  projects,
  getProject,
  homepageOrder,
  fullStackOrder,
  aiOrder,
} from "../src/content/projects";
import { capabilities } from "../src/content/capabilities";
import { profile } from "../src/content/profile";
test("six complete records and role ordering use one registry", () => {
  assert.equal(projects.length, 6);
  assert.equal(new Set(projects.map((p) => p.slug)).size, 6);
  for (const order of [homepageOrder, fullStackOrder, aiOrder])
    for (const slug of order) assert.ok(getProject(slug));
  for (const p of projects) {
    assert.ok(p.limitations.length);
    assert.ok(p.nextSteps.length);
    assert.ok(p.technicalDecisions.length);
    assert.equal(new URL(p.repositoryUrl).protocol, "https:");
    if (p.liveUrl) assert.equal(new URL(p.liveUrl).protocol, "https:");
  }
  assert.equal(getProject("missing"), undefined);
  assert.equal(getProject("assetflow")?.liveUrl, null);
  assert.match(
    getProject("swiftbill")?.limitations.join(" ") ?? "",
    /not certified/,
  );
  assert.match(getProject("dealos")?.collaborationType ?? "", /Collaborative/);
  assert.equal(getProject("fleetpilot")?.repoName, "TransitOps");
  assert.equal(capabilities.length, 5);
  assert.equal(profile.links.length, 3);
});
