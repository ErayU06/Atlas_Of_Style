/**
 * A fixed-window counter for sign-in attempts, held in this process.
 *
 * scrypt makes a single guess slow, but nothing made guessing *stop*: the
 * login endpoint would answer an unlimited stream of passwords against a
 * known username. Published apps hand attackers a username for free — ours
 * ships one in the App Review notes.
 *
 * Only failures are counted and a success clears the record, so someone
 * signing in normally — even repeatedly, even across devices — never meets
 * the limit. That is what keeps this invisible to the version already on the
 * App Store, which has no idea the rule exists.
 *
 * In-process on purpose. The service runs as a single instance, and a shared
 * store would mean adding Redis for a rule that costs a map. If it is ever
 * scaled horizontally, each instance will enforce its own allowance and the
 * effective limit multiplies by the instance count — worth revisiting then,
 * not before.
 */

type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

/** Keeps the map from growing with every address that ever failed once. */
const SWEEP_EVERY = 500;
let sinceSweep = 0;

function sweep(now: number): void {
  for (const [key, w] of windows) {
    if (w.resetAt <= now) windows.delete(key);
  }
}

export type RateLimitVerdict = {
  /** False once the allowance for this window is spent. */
  allowed: boolean;
  /** Milliseconds until the window resets — 0 when allowed. */
  retryAfterMs: number;
};

/** Reports whether `key` has allowance left, without spending any. The
 *  window is whatever `record` started; this only reads it. */
export function check(key: string, limit: number): RateLimitVerdict {
  const now = Date.now();
  const w = windows.get(key);
  if (!w || w.resetAt <= now) return { allowed: true, retryAfterMs: 0 };
  if (w.count < limit) return { allowed: true, retryAfterMs: 0 };
  return { allowed: false, retryAfterMs: w.resetAt - now };
}

/** Records one failure against `key` and starts its window if needed. */
export function record(key: string, windowMs: number): void {
  const now = Date.now();
  if (++sinceSweep >= SWEEP_EVERY) {
    sinceSweep = 0;
    sweep(now);
  }
  const w = windows.get(key);
  if (!w || w.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }
  w.count += 1;
}

/** Called on a successful sign-in, so a good password wipes the slate. */
export function forget(key: string): void {
  windows.delete(key);
}

/** Test seam; nothing in the app calls this. */
export function reset(): void {
  windows.clear();
  sinceSweep = 0;
}

/**
 * The client's address, as far as it can be trusted.
 *
 * Render puts the connecting address at the END of X-Forwarded-For: anything
 * a client sends under that name is already in the header when the proxy
 * appends. Reading the first entry — the usual advice, and right when the
 * proxy overwrites — would therefore let a caller choose its own rate-limit
 * bucket by sending a header. The last entry is the one our proxy wrote.
 */
export function clientAddress(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const hops = forwarded.split(",");
    const last = hops[hops.length - 1]?.trim();
    if (last) return last;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
