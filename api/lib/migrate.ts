import { migrate } from "drizzle-orm/node-postgres/migrator";
import { getDb } from "../queries/connection";
import { findPostgresError } from "./pg-error";

/**
 * Brings the database up to the schema this build expects, before the server
 * accepts a request.
 *
 * Nothing else in the deploy does this: the Dockerfile goes from build
 * straight to start, so until now a new database served a running app with no
 * tables, and every call returned a 500 that looked exactly like a code bug.
 *
 * Drizzle records what it has applied in __drizzle_migrations, so this is a
 * no-op on every boot after the first, and safe to run on each instance
 * start. Set SKIP_DB_MIGRATE=1 to boot without it.
 */
export async function runMigrations(): Promise<void> {
  if (process.env.SKIP_DB_MIGRATE === "1") {
    console.log("[migrate] skipped (SKIP_DB_MIGRATE=1)");
    return;
  }

  const folder = process.env.MIGRATIONS_DIR ?? "./db/migrations";
  const started = Date.now();
  console.log(`[migrate] applying migrations from ${folder}`);

  try {
    await migrate(getDb(), { migrationsFolder: folder });
    console.log(`[migrate] up to date in ${Date.now() - started}ms`);
  } catch (cause) {
    // Serving on a schema the queries cannot use just turns every request
    // into the same opaque 500, so refuse to start and say why. Render
    // surfaces a failed start and retries; a silently broken deploy it
    // would not have surfaced at all.
    console.error("[migrate] FAILED — refusing to start", {
      folder,
      pg: findPostgresError(cause) ?? "<not a database error>",
      cause,
    });
    throw cause;
  }
}
