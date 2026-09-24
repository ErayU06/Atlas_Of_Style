/**
 * Creates (or resets) the demo account App Store / Play review teams sign in
 * with, hashing the password exactly the way api/localAuthRouter.ts does.
 *
 *   DATABASE_URL=postgres://... REVIEW_PASSWORD='...' node db/seed-review-user.mjs
 *
 * Deliberately plain JavaScript with no imports beyond `pg`: it is a one-off
 * operational script run against a live database, and pulling in the Drizzle
 * chain would drag along the @db/* tsconfig aliases and api/lib/env.ts, which
 * demands APP_ID and APP_SECRET whenever NODE_ENV=production. None of that has
 * anything to do with writing one row.
 *
 * Credentials come from the environment rather than living in the file: this
 * repository is public, and a committed password is a published password.
 */
import crypto from "node:crypto";
import { Pool } from "pg";

// The login form asks for a USERNAME, not an email address — api/localAuthRouter.ts
// looks the account up by `local:<username>` and never queries the email column.
// The same regex it validates against is repeated here so this script cannot
// create an account that the app would then refuse to sign in.
const USERNAME_RE = /^[a-z0-9_]+$/;

const username = (process.env.REVIEW_USERNAME ?? "apple_review").toLowerCase();
const password = process.env.REVIEW_PASSWORD;
const email = process.env.REVIEW_EMAIL ?? "apple.review@atlasofstyle.app";
const name = process.env.REVIEW_NAME ?? "Apple Review";
const databaseUrl = process.env.DATABASE_URL;

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

if (!databaseUrl) fail("DATABASE_URL is not set.");
if (!password) fail("REVIEW_PASSWORD is not set. Pass it on the command line.");
if (password.length < 6 || password.length > 72) {
  fail("REVIEW_PASSWORD must be 6-72 characters — the signup schema's limits.");
}
if (username.length < 3 || username.length > 24 || !USERNAME_RE.test(username)) {
  fail(
    `REVIEW_USERNAME "${username}" cannot be used: the app accepts 3-24 characters, ` +
      `lowercase letters, digits and underscore only. An email address is not a ` +
      `valid username here.`,
  );
}

/** Byte-for-byte the hashing in api/localAuthRouter.ts. */
function hashPassword(plain, salt) {
  return crypto.scryptSync(plain, salt, 64).toString("hex");
}

function isLocalDatabase(url) {
  return /\/\/[^@]*@?(localhost|127\.0\.0\.1)[:/]/.test(url);
}

const unionId = `local:${username}`;

const pool = new Pool({
  connectionString: databaseUrl,
  // Mirrors api/queries/connection.ts: managed Postgres requires SSL, a local
  // instance usually has none configured at all.
  ssl: isLocalDatabase(databaseUrl) ? undefined : { rejectUnauthorized: false },
});

try {
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = `${salt}:${hashPassword(password, salt)}`;

  const { rows } = await pool.query(
    `INSERT INTO users ("unionId", name, email, "passwordHash", role, "lastSignInAt")
     VALUES ($1, $2, $3, $4, 'user', now())
     ON CONFLICT ("unionId") DO UPDATE SET
       name = EXCLUDED.name,
       email = EXCLUDED.email,
       "passwordHash" = EXCLUDED."passwordHash",
       "updatedAt" = now()
     RETURNING id, "unionId", name, email, role`,
    [unionId, name, email, passwordHash],
  );

  const user = rows[0];

  // Read the row back and run the exact comparison the login mutation runs, so
  // a green tick here means the credentials genuinely work — no need to find out
  // from the reviewer.
  const check = await pool.query(
    `SELECT "passwordHash" FROM users WHERE "unionId" = $1`,
    [unionId],
  );
  const [storedSalt, storedHash] = check.rows[0].passwordHash.split(":");
  const candidate = Buffer.from(hashPassword(password, storedSalt), "hex");
  const expected = Buffer.from(storedHash, "hex");
  const ok =
    candidate.length === expected.length &&
    crypto.timingSafeEqual(candidate, expected);

  if (!ok) fail("Wrote the row but the password does not verify. Nothing to trust here.");

  console.log(`✓ Review account ready (users.id = ${user.id})`);
  console.log();
  console.log("  Sign in with these — the app's login form takes the USERNAME,");
  console.log("  not the email address:");
  console.log();
  console.log(`    Username   ${username}`);
  console.log(`    Password   (the REVIEW_PASSWORD you passed)`);
  console.log();
  console.log(`  Stored alongside it: ${user.email} / "${user.name}" / role=${user.role}`);
  console.log();
  console.log("  No premium flag was set because the schema has none. Every gate in");
  console.log("  the app (PremiumGate, the guides, the Premium page) checks only");
  console.log("  whether someone is signed in, so this account already sees all of it.");
} finally {
  await pool.end();
}
