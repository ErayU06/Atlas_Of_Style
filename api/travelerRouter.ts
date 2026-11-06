import { z } from "zod";
import { createRouter, authedQuery } from "./middleware";
import { setUserGender } from "./queries/users";
import {
  findFavoritesByUser,
  addFavorite,
  removeFavorite,
  mergeFavorites,
  findNotesByUser,
  upsertNote,
  findDiscoveriesByUser,
  addDiscovery,
  mergeDiscoveries,
} from "./queries/traveler";

/** Far above every country and era the app can stamp, and still bounded. */
const MAX_STAMPS = 500;

export const travelerRouter = createRouter({
  favorites: authedQuery.query(({ ctx }) => findFavoritesByUser(ctx.user.id)),

  toggleFavorite: authedQuery
    .input(z.object({ slug: z.string().min(1).max(64) }))
    .mutation(async ({ ctx, input }) => {
      const current = await findFavoritesByUser(ctx.user.id);
      if (current.includes(input.slug)) {
        await removeFavorite(ctx.user.id, input.slug);
      } else {
        await addFavorite(ctx.user.id, input.slug);
      }
      return findFavoritesByUser(ctx.user.id);
    }),

  mergeFavorites: authedQuery
    .input(z.object({ slugs: z.array(z.string().min(1).max(64)).max(100) }))
    .mutation(async ({ ctx, input }) => {
      await mergeFavorites(ctx.user.id, input.slugs);
      return findFavoritesByUser(ctx.user.id);
    }),

  // The style recommendations read this, so it has to be changeable after
  // signup rather than fixed at the one moment it is first asked for. null
  // clears it and puts the shared, ungendered advice back.
  setGender: authedQuery
    .input(z.object({ gender: z.enum(["male", "female"]).nullable() }))
    .mutation(async ({ ctx, input }) => {
      await setUserGender(ctx.user.id, input.gender);
      return { gender: input.gender };
    }),

  notes: authedQuery.query(({ ctx }) => findNotesByUser(ctx.user.id)),

  saveNote: authedQuery
    .input(
      z.object({
        slug: z.string().min(1).max(64),
        note: z.string().max(2000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await upsertNote(ctx.user.id, input.slug, input.note);
      return findNotesByUser(ctx.user.id);
    }),

  // ---- Fashion Passport ----------------------------------------------------
  //
  // Stamps are append-only: there is no endpoint that removes one, because
  // nothing in the product takes a stamp back. That is also what lets the
  // client show the union of these rows and whatever the device has not sent
  // yet, without a stale local copy ever resurrecting something deleted.

  discoveries: authedQuery.query(({ ctx }) =>
    findDiscoveriesByUser(ctx.user.id),
  ),

  discover: authedQuery
    .input(
      z.object({
        kind: z.enum(["country", "era"]),
        slug: z.string().min(1).max(64),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await addDiscovery(ctx.user.id, input.kind, input.slug);
      return findDiscoveriesByUser(ctx.user.id);
    }),

  // Takes a device's whole passport. The cap is well above the number of
  // stamps the app can actually award, so a legitimate reader never hits it,
  // while a malformed or hostile payload cannot turn one request into an
  // unbounded insert.
  mergeDiscoveries: authedQuery
    .input(
      z
        .object({
          countries: z.array(z.string().min(1).max(64)).max(MAX_STAMPS),
          eras: z.array(z.string().min(1).max(64)).max(MAX_STAMPS),
        })
        .refine(
          (v) => v.countries.length + v.eras.length <= MAX_STAMPS,
          { message: `a passport carries at most ${MAX_STAMPS} stamps` },
        ),
    )
    .mutation(async ({ ctx, input }) => {
      await mergeDiscoveries(ctx.user.id, input);
      return findDiscoveriesByUser(ctx.user.id);
    }),
});
