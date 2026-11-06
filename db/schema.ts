import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  text,
  timestamp,
  bigint,
  integer,
  unique,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);
export const genderEnum = pgEnum("gender", ["male", "female"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  unionId: varchar("unionId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  // Optional: nothing in the app sends, verifies or recovers through it —
  // there is no mail, no reset flow, no notification. Requiring an address
  // the product never uses is collecting data that is not relevant to what
  // the app does, which is what Review Guideline 5.1.1(ii) prohibits.
  email: varchar("email", { length: 320 }),
  gender: genderEnum("gender"),
  avatar: text("avatar"),
  passwordHash: varchar("passwordHash", { length: 255 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  lastSignInAt: timestamp("lastSignInAt").defaultNow().notNull(),
  /**
   * Bumped to invalidate every session token this account has issued.
   *
   * A session is a stateless JWT, so there is nothing to delete when someone
   * signs out — the token stays cryptographically valid for its full year.
   * Carrying this number inside the token and comparing it on every request
   * gives the account a way to disown them all at once.
   *
   * Tokens minted before this column existed carry no version at all, and are
   * deliberately still accepted: the released app is holding them, and nobody
   * should be signed out by an update. They age out on their own.
   */
  tokenVersion: integer("tokenVersion").default(0).notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const favorites = pgTable(
  "favorites",
  {
    id: serial("id").primaryKey(),
    userId: bigint("userId", { mode: "number" }).notNull(),
    countrySlug: varchar("countrySlug", { length: 64 }).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (t) => ({
    favUserSlug: unique("fav_user_slug").on(t.userId, t.countrySlug),
  }),
);

export type Favorite = typeof favorites.$inferSelect;

export const tripNotes = pgTable(
  "trip_notes",
  {
    id: serial("id").primaryKey(),
    userId: bigint("userId", { mode: "number" }).notNull(),
    countrySlug: varchar("countrySlug", { length: 64 }).notNull(),
    note: text("note").notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => ({
    noteUserSlug: unique("note_user_slug").on(t.userId, t.countrySlug),
  }),
);

export type TripNote = typeof tripNotes.$inferSelect;

/**
 * The Fashion Passport: every country and era an account has opened.
 *
 * Append-only by nature — a stamp is earned once and cannot be given back —
 * which is why nothing here ever deletes a single row, and why the client can
 * safely show the union of what the server knows and what the device is still
 * holding.
 *
 * `kind` is a varchar rather than a pgEnum, unlike `role` and `gender`. Those
 * are closed sets; this one is not — city stamps are the obvious next entry.
 * Adding a value to a Postgres enum from inside a migration's transaction is
 * the kind of thing that fails at boot, and api/lib/migrate.ts refuses to
 * start the server when a migration fails. The API validates the value.
 */
export const discoveries = pgTable(
  "discoveries",
  {
    id: serial("id").primaryKey(),
    userId: bigint("userId", { mode: "number" }).notNull(),
    kind: varchar("kind", { length: 16 }).notNull(),
    slug: varchar("slug", { length: 64 }).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (t) => ({
    discUserKindSlug: unique("disc_user_kind_slug").on(t.userId, t.kind, t.slug),
  }),
);

export type Discovery = typeof discoveries.$inferSelect;
