"use server";

import { flattenError } from "zod";

import { buildRequestSchema } from "@/lib/schemas";

export type BuildRequestResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

/**
 * Validates a Build My Jarvis submission on the server using the same schema
 * the client form uses.
 *
 * TODO(delivery): this currently only validates and logs. Wire it to the real
 * destination (CRM record + notification) before launch — nothing is persisted.
 */
export async function submitBuildRequest(
  input: unknown,
): Promise<BuildRequestResult> {
  const parsed = buildRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Some details need another look.",
      fieldErrors: flattenError(parsed.error).fieldErrors,
    };
  }

  // Placeholder for the real delivery step.
  console.log("[build-request]", {
    company: parsed.data.company,
    teamSize: parsed.data.teamSize,
    pillars: parsed.data.pillars,
  });

  return { ok: true };
}
