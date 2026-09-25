import { eq } from "drizzle-orm";
import * as schema from "@db/schema";
import type { InsertUser } from "@db/schema";
import { getDb } from "./connection";
import { env } from "../lib/env";

export async function findUserByUnionId(unionId: string) {
  const rows = await getDb()
    .select()
    .from(schema.users)
    .where(eq(schema.users.unionId, unionId))
    .limit(1);
  return rows.at(0);
}

// No FK cascade is defined at the DB level (see db/schema.ts), so the
// account and everything tied to it are removed explicitly, in one
// transaction, so a mid-way failure can't leave orphaned rows.
export async function deleteUserCascade(userId: number): Promise<void> {
  const db = getDb();
  await db.transaction(async (tx) => {
    await tx.delete(schema.favorites).where(eq(schema.favorites.userId, userId));
    await tx.delete(schema.tripNotes).where(eq(schema.tripNotes.userId, userId));
    await tx.delete(schema.users).where(eq(schema.users.id, userId));
  });
}

/**
 * `email` is required, and the type enforces it, because Postgres validates
 * the proposed row's NOT NULL constraints *before* it resolves ON CONFLICT.
 * A payload without an email therefore fails with 23502 even when the row
 * already exists and the statement would only ever have updated it — which
 * is not what "upsert" reads like, and cost a production login outage.
 * To only refresh an existing row, use touchLastSignIn below.
 */
type UpsertUserInput = Partial<InsertUser> &
  Pick<InsertUser, "unionId" | "email">;

/**
 * Records a sign-in against a row that is already known to exist. A plain
 * UPDATE, not an upsert: the caller has just loaded the user, so there is
 * nothing to insert and no NOT NULL column to satisfy.
 */
export async function touchLastSignIn(unionId: string): Promise<void> {
  await getDb()
    .update(schema.users)
    .set({ lastSignInAt: new Date() })
    .where(eq(schema.users.unionId, unionId));
}

export async function upsertUser(data: UpsertUserInput) {
  const values = { ...data };
  const updateSet: Partial<InsertUser> = {
    lastSignInAt: new Date(),
    ...data,
  };

  if (
    values.role === undefined &&
    values.unionId &&
    values.unionId === env.ownerUnionId
  ) {
    values.role = "admin";
    updateSet.role = "admin";
  }

  // The insert branch only actually fires for signup, which always passes
  // a full InsertUser; callers that omit `email` (e.g. login) only ever hit
  // onConflictDoUpdate against an existing row.
  await getDb()
    .insert(schema.users)
    .values(values as InsertUser)
    .onConflictDoUpdate({ target: schema.users.unionId, set: updateSet });
}
