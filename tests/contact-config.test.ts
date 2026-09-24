import test from "node:test";
import assert from "node:assert/strict";
import { getContactConfig } from "../src/lib/contact-config";

test("contact delivery only enables with a key and valid recipient/sender", () => {
  const names = [
    "RESEND_API_KEY",
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
  ] as const;
  const previous = names.map((name) => process.env[name]);
  try {
    process.env.RESEND_API_KEY = "";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";
    delete process.env.CONTACT_FROM_EMAIL;
    assert.equal(getContactConfig().configured, false);

    process.env.RESEND_API_KEY = "test-only-key";
    assert.equal(getContactConfig().configured, true);
    assert.equal(getContactConfig().sender, "onboarding@resend.dev");

    process.env.CONTACT_FROM_EMAIL = "hello@example.com";
    assert.equal(getContactConfig().sender, "hello@example.com");

    process.env.CONTACT_FROM_EMAIL = "invalid";
    assert.equal(getContactConfig().configured, false);
  } finally {
    names.forEach((name, index) => {
      if (previous[index] === undefined) delete process.env[name];
      else process.env[name] = previous[index];
    });
  }
});
