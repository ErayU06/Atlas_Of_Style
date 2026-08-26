import { getDb } from "./connection";
import { favorites, tripNotes } from "@db/schema";
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
