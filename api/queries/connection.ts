import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../lib/env";
import * as schema from "@db/schema";
import * as relations from "@db/relations";

const fullSchema = { ...schema, ...relations };

let instance: ReturnType<typeof drizzle<typeof fullSchema>>;

function isLocalDatabase(url: string): boolean {
  return /\/\/[^@]*@?(localhost|127\.0\.0\.1)[:/]/.test(url);
}

export function getDb() {
  if (!instance) {
    const pool = new Pool({
      connectionString: env.databaseUrl,
      // Managed Postgres (Render, Neon, RDS, ...) requires SSL; local dev/test
      // Postgres instances typically don't have it configured at all — even
      // when running the production server binary locally against one.
      ssl:
        env.isProduction && !isLocalDatabase(env.databaseUrl)
          ? { rejectUnauthorized: false }
          : undefined,
    });
    instance = drizzle(pool, { schema: fullSchema });
  }
  return instance;
}
