import { z } from "zod";
import { createRouter, authedQuery } from "./middleware";
import {
  findFavoritesByUser,
  addFavorite,
  removeFavorite,
  mergeFavorites,
  findNotesByUser,
  upsertNote,
} from "./queries/traveler";

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
});
