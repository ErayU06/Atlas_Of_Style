import { getDb } from "./connection";
import { discoveries, favorites, tripNotes } from "@db/schema";
import { and, eq, sql } from "drizzle-orm";

export async function findFavoritesByUser(userId: number) {
  const rows = await getDb()
    .select({ countrySlug: favorites.countrySlug })
    .from(favorites)
    .where(eq(favorites.userId, userId));
  return rows.map((r) => r.countrySlug);
}

export async function addFavorite(userId: number, slug: string) {
  await getDb()
    .insert(favorites)
    .values({ userId, countrySlug: slug })
    .onConflictDoUpdate({
      target: [favorites.userId, favorites.countrySlug],
      set: { countrySlug: slug },
    });
}

export async function removeFavorite(userId: number, slug: string) {
  await getDb()
    .delete(favorites)
    .where(and(eq(favorites.userId, userId), eq(favorites.countrySlug, slug)));
}

export async function mergeFavorites(userId: number, slugs: string[]) {
  if (slugs.length === 0) return;
  await getDb()
    .insert(favorites)
    .values(slugs.map((countrySlug) => ({ userId, countrySlug })))
    .onConflictDoUpdate({
      target: [favorites.userId, favorites.countrySlug],
      set: { countrySlug: sql`excluded."countrySlug"` },
    });
}

export async function findNotesByUser(userId: number) {
  return getDb()
    .select({ countrySlug: tripNotes.countrySlug, note: tripNotes.note })
    .from(tripNotes)
    .where(eq(tripNotes.userId, userId));
}

export async function upsertNote(userId: number, slug: string, note: string) {
  if (note.trim().length === 0) {
    await getDb()
      .delete(tripNotes)
      .where(and(eq(tripNotes.userId, userId), eq(tripNotes.countrySlug, slug)));
    return;
  }
  await getDb()
    .insert(tripNotes)
    .values({ userId, countrySlug: slug, note })
    .onConflictDoUpdate({
      target: [tripNotes.userId, tripNotes.countrySlug],
      set: { note },
    });
}

/** The two kinds of stamp the passport holds today. */
export type DiscoveryKind = "country" | "era";

/** The passport as the client models it: one list per kind of stamp. */
export type PassportStamps = { countries: string[]; eras: string[] };

/**
 * Grouped in one round trip rather than one query per kind: the passport is
 * read on every launch of a signed-in app, and the two lists are always
 * wanted together.
 */
export async function findDiscoveriesByUser(
  userId: number,
): Promise<PassportStamps> {
  const rows = await getDb()
    .select({ kind: discoveries.kind, slug: discoveries.slug })
    .from(discoveries)
    .where(eq(discoveries.userId, userId));

  const stamps: PassportStamps = { countries: [], eras: [] };
  for (const row of rows) {
    if (row.kind === "country") stamps.countries.push(row.slug);
    else if (row.kind === "era") stamps.eras.push(row.slug);
  }
  return stamps;
}

/**
 * `onConflictDoNothing` rather than an upsert: a stamp carries no payload to
 * refresh, and `createdAt` is when it was first earned — rewriting that on a
 * second visit would be a small lie about the reader's history.
 */
export async function addDiscovery(
  userId: number,
  kind: DiscoveryKind,
  slug: string,
) {
  await getDb()
    .insert(discoveries)
    .values({ userId, kind, slug })
    .onConflictDoNothing({
      target: [discoveries.userId, discoveries.kind, discoveries.slug],
    });
}

/**
 * Takes a device's whole passport at once. Called when a guest signs in, and
 * again whenever a stamp earned offline is still waiting to be sent, so it
 * has to be safe to run repeatedly with overlapping input — hence the same
 * do-nothing conflict handling, in a single statement.
 */
export async function mergeDiscoveries(
  userId: number,
  stamps: PassportStamps,
): Promise<void> {
  const rows = [
    ...stamps.countries.map((slug) => ({ userId, kind: "country", slug })),
    ...stamps.eras.map((slug) => ({ userId, kind: "era", slug })),
  ];
  if (rows.length === 0) return;
  await getDb()
    .insert(discoveries)
    .values(rows)
    .onConflictDoNothing({
      target: [discoveries.userId, discoveries.kind, discoveries.slug],
    });
}
