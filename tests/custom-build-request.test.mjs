import assert from "node:assert/strict";
import test from "node:test";

import { buildRequestSchema } from "../src/lib/schemas.ts";

const request = {
  firstName: "Ada",
  lastName: "Example",
  email: "ada@example.com",
  phone: "+1 (202) 555-0123",
  industry: "Real estate",
  preferredDate: "2027-03-15",
  preferredTime: "14:30",
  timeZone: "Chicago, Central Time",
};

test("a complete inquiry keeps distinct names and availability without optional fields", () => {
  const parsed = buildRequestSchema.parse({ ...request, firstName: " Ada " });
  assert.equal(parsed.firstName, "Ada");
  assert.equal(parsed.lastName, "Example");
  assert.equal(parsed.preferredDate, request.preferredDate);
  assert.equal(parsed.preferredTime, request.preferredTime);
  assert.equal(parsed.timeZone, request.timeZone);
  assert.equal(parsed.company, undefined);
});

test("missing contact, business, or scheduling details identify the affected field", () => {
  for (const field of Object.keys(request)) {
    const parsed = buildRequestSchema.safeParse({ ...request, [field]: "" });
    assert.equal(parsed.success, false, `${field} must be required`);
    assert.ok(parsed.error.issues.some((issue) => issue.path[0] === field));
  }
});

test("invalid contact details and impossible dates or times are rejected", () => {
  for (const [field, value] of [
    ["email", "invalid-address"],
    ["phone", "call me"],
    ["phone", "123"],
    ["preferredDate", "2027-02-30"],
    ["preferredDate", "03/15/2027"],
    ["preferredTime", "24:00"],
    ["preferredTime", "12:60"],
  ]) {
    assert.equal(
      buildRequestSchema.safeParse({ ...request, [field]: value }).success,
      false,
      `${field}: ${value}`,
    );
  }
});

test("alternative availability and project notes are preserved with bounded length", () => {
  const optional = {
    company: "Example Co",
    otherAvailability: "Tuesdays after 2pm",
    goals: "Connect our CRM and scheduling tools.",
  };
  const parsed = buildRequestSchema.parse({ ...request, ...optional });
  for (const [field, value] of Object.entries(optional))
    assert.equal(parsed[field], value);
  assert.equal(
    buildRequestSchema.safeParse({
      ...request,
      otherAvailability: "a".repeat(1001),
    }).success,
    false,
  );
  assert.equal(
    buildRequestSchema.safeParse({ ...request, goals: "a".repeat(2001) })
      .success,
    false,
  );
});
