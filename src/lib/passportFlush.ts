/**
 * A one-slot seam that lets signing out tell the passport to save itself.
 *
 * `useAuth` owns sign-out; `AppContext` owns the passport and is built on top
 * of `useAuth`, so the context cannot be read from inside the hook without a
 * cycle. Rather than thread a callback through every sign-out button, the
 * provider registers its handler here and the hook calls it.
 *
 * The handler must not be awaited. Sign-out deliberately does not wait on the
 * network (see the comment on `finishLogout` in useAuth): a reader on a dead
 * connection still gets to leave immediately. So the handler puts the stamps
 * somewhere durable first and only then tries to send them.
 */

type FlushHandler = () => void

let handler: FlushHandler | null = null

export function registerPassportFlush(fn: FlushHandler | null): void {
  handler = fn
}

export function flushPassport(): void {
  try {
    handler?.()
  } catch {
    /* never let saving stamps stop someone from signing out */
  }
}
