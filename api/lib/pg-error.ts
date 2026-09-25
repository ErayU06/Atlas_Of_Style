/**
 * Digs the original Postgres error out of whatever wrapped it.
 *
 * Drizzle raises a DrizzleQueryError carrying the failed SQL and parameters,
 * and hangs the driver's error off `cause`. tRPC then wraps that again. Read
 * only the outermost error and every field that actually identifies the
 * failure — the SQLSTATE code, the relation, the column, the constraint —
 * comes back undefined, which is how a NOT NULL violation ends up logged as
 * nothing more useful than "a query failed".
 */

export type PostgresErrorFields = {
  code?: string;
  detail?: string;
  constraint?: string;
  table?: string;
  column?: string;
  schema?: string;
  message?: string;
};

/** A pg driver error is recognisable by its SQLSTATE `code` plus `severity`. */
function looksLikePostgresError(value: unknown): value is PostgresErrorFields {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.code === "string" && "severity" in candidate;
}

/**
 * Walks the `cause` chain and returns the Postgres error's fields, or
 * undefined when the failure did not come from the database. Bounded so a
 * self-referential chain cannot spin.
 */
export function findPostgresError(
  error: unknown,
  maxDepth = 5,
): PostgresErrorFields | undefined {
  let current: unknown = error;
  for (let depth = 0; depth <= maxDepth && current; depth += 1) {
    if (looksLikePostgresError(current)) {
      const pg = current as PostgresErrorFields;
      return {
        code: pg.code,
        detail: pg.detail,
        constraint: pg.constraint,
        table: pg.table,
        column: pg.column,
        schema: pg.schema,
        message: pg.message,
      };
    }
    current = (current as { cause?: unknown }).cause;
  }
  return undefined;
}
