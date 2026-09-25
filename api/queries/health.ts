import { sql } from "drizzle-orm";
import { getDb } from "./connection";

/**
 * What the code assumes about the `users` table. Each entry is something a
 * query in api/ would break on if the deployed database disagreed — which is
 * exactly the failure mode that is invisible from the outside: the server
 * returns 500, the app says "something went wrong", and nothing distinguishes
 * a stale deploy from a database that never received a migration.
 */
const EXPECTED_USER_COLUMNS: Array<{
  column: string;
  nullable: boolean;
  why: string;
}> = [
  { column: "unionId", nullable: false, why: "every lookup keys off it" },
  { column: "email", nullable: false, why: "0001 sets NOT NULL; signup supplies it" },
  { column: "passwordHash", nullable: true, why: "OAuth accounts have none" },
  { column: "gender", nullable: true, why: "added by 0001, optional at signup" },
  { column: "role", nullable: false, why: "defaults to 'user'" },
  { column: "lastSignInAt", nullable: false, why: "login refreshes it" },
];

export type SchemaReport = {
  reachable: boolean;
  latencyMs: number | null;
  /** True when the live schema can serve every query in api/. */
  ok: boolean;
  /** Human-readable drift, empty when ok. Deliberately not a schema dump. */
  problems: string[];
};

/**
 * Compares the live `users` table against what the code needs. Reports rather
 * than repairs: the deployed database predates any migration bookkeeping, so
 * running migrations against it unattended could fail on tables that already
 * exist and take the service down with it. Naming the drift is the safe half.
 */
export async function checkSchema(): Promise<SchemaReport> {
  const started = Date.now();
  try {
    const rows = await getDb().execute<{
      column_name: string;
      is_nullable: "YES" | "NO";
    }>(sql`
      SELECT column_name, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'users'
    `);
    const latencyMs = Date.now() - started;

    const live = new Map(
      (rows.rows ?? []).map((r) => [r.column_name, r.is_nullable === "YES"]),
    );
    const problems: string[] = [];

    if (live.size === 0) {
      problems.push(
        "public.users does not exist — no migration has been applied to this database",
      );
    } else {
      for (const expected of EXPECTED_USER_COLUMNS) {
        const liveNullable = live.get(expected.column);
        if (liveNullable === undefined) {
          problems.push(`users.${expected.column} is missing (${expected.why})`);
        } else if (liveNullable !== expected.nullable) {
          problems.push(
            `users.${expected.column} is ${liveNullable ? "nullable" : "NOT NULL"}, ` +
              `the code expects ${expected.nullable ? "nullable" : "NOT NULL"} (${expected.why})`,
          );
        }
      }
    }

    return { reachable: true, latencyMs, ok: problems.length === 0, problems };
  } catch (cause) {
    console.error("[health] schema check failed", {
      pgCode: (cause as { code?: string })?.code,
      message: (cause as { message?: string })?.message,
      cause,
    });
    return {
      reachable: false,
      latencyMs: null,
      ok: false,
      problems: [
        `database unreachable: ${(cause as { message?: string })?.message ?? "unknown error"}`,
      ],
    };
  }
}
