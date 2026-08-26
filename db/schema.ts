import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  text,
  timestamp,
  bigint,
  unique,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);
export const genderEnum = pgEnum("gender", ["male", "female"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  unionId: varchar("unionId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }).notNull(),
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
