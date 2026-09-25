/**
 * Where the native app sends its API calls.
 *
 * The web build never uses any of this: it is served from the same origin as
 * the API and calls `/api/trpc` relatively. Only the Capacitor shells, which
 * bundle the frontend locally, need an absolute address.
 */

/**
 * The deployed backend, compiled into the app.
 *
 * This is the one line to edit when the backend moves. It is not a secret —
 * a public HTTPS endpoint that anyone can read out of the shipped bundle or
 * watch on the wire — so keeping it in source costs nothing and buys a native
 * build that works even when the build machine has no .env.
 */
export const PRODUCTION_API_BASE_URL = "https://atlas-of-style.onrender.com";

/** Only `https://…` is usable: iOS App Transport Security refuses the rest. */
function isUsableBaseUrl(value: unknown): value is string {
  return typeof value === "string" && /^https:\/\/[^\s/]+/.test(value.trim());
}

export type ApiBaseUrlResolution = {
  /** The origin the native app will call. */
  baseUrl: string;
  /** Where it came from, for the startup log. */
  source: "VITE_API_BASE_URL" | "built-in fallback";
  /** Set when the env var was present but unusable — worth shouting about. */
  rejectedEnvValue?: string;
};

/**
 * An explicit VITE_API_BASE_URL wins, so a staging or local backend can still
 * be pointed at without touching source. It has to be a plain https:// URL to
 * win, though: the common way to get this wrong is pasting the address with
 * surrounding markdown or quotes, and silently shipping that produces an app
 * whose every request fails before it leaves the device. A value that cannot
 * work is therefore reported and discarded rather than used.
 */
export function resolveApiBaseUrl(
  raw: unknown = import.meta.env.VITE_API_BASE_URL,
): ApiBaseUrlResolution {
  if (isUsableBaseUrl(raw)) {
    return { baseUrl: raw.trim().replace(/\/$/, ""), source: "VITE_API_BASE_URL" };
  }
  return {
    baseUrl: PRODUCTION_API_BASE_URL,
    source: "built-in fallback",
    ...(raw === undefined || raw === ""
      ? {}
      : { rejectedEnvValue: String(raw) }),
  };
}
