import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Capacitor } from "@capacitor/core";
import superjson from "superjson";
import { getNativeToken } from "@/lib/nativeAuth";
import { resolveApiBaseUrl } from "@/config";
import type { AppRouter } from "../../api/router";
import type { ReactNode } from "react";

export const trpc = createTRPCReact<AppRouter>();

const resolution = resolveApiBaseUrl();

/** The backend origin this bundle will call. Never undefined: see src/config.ts. */
export const API_BASE_URL = resolution.baseUrl;

// Bundled into the native shell, the app has no same-origin backend to call
// relatively — it needs the deployed backend's absolute HTTPS URL instead.
// Web (dev and prod) keeps using the relative path, unchanged.
function getTrpcUrl() {
  return Capacitor.isNativePlatform() ? `${API_BASE_URL}/api/trpc` : "/api/trpc";
}

/** The absolute (native) or relative (web) endpoint every call goes to. */
export const TRPC_URL = getTrpcUrl();

// Printed once on startup, before anything can fail. Inside a native shell
// there is no address bar and no network tab, so without this there is no way
// to tell a bundle that was built against the right backend from one that was
// not — and the two fail in ways that look identical from the UI.
console.log("[trpc] endpoint", {
  platform: Capacitor.getPlatform(),
  isNative: Capacitor.isNativePlatform(),
  baseUrl: API_BASE_URL,
  source: resolution.source,
  resolvedUrl: TRPC_URL,
});
if (resolution.rejectedEnvValue !== undefined) {
  console.error(
    "[trpc] VITE_API_BASE_URL was set but is not a plain https:// URL, so it " +
      `was ignored in favour of the built-in address. Value seen: ${JSON.stringify(
        resolution.rejectedEnvValue,
      )}`,
  );
}

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: getTrpcUrl(),
      transformer: superjson,
      async headers() {
        if (!Capacitor.isNativePlatform()) return {};
        const token = await getNativeToken();
        return token ? { Authorization: `Bearer ${token}` } : {};
      },
      async fetch(input, init) {
        const url = typeof input === "string" ? input : (input as Request).url;
        try {
          const res = await globalThis.fetch(input, {
            ...(init ?? {}),
            credentials: "include",
          });
          if (!res.ok) {
            // Read from a clone: the caller still needs the original stream.
            const body = await res
              .clone()
              .text()
              .catch(() => "<body unreadable>");
            console.error(
              `[trpc] ${init?.method ?? "GET"} ${url} -> ${res.status} ${res.statusText}`,
              body.slice(0, 1000),
            );
          }
          return res;
        } catch (err) {
          // A throw here never reached the server: DNS, TLS, App Transport
          // Security, or a CORS preflight the browser refused. The tRPC error
          // that follows carries no HTTP status, so without this line the
          // cause is invisible from inside the app.
          console.error(`[trpc] ${init?.method ?? "GET"} ${url} -> request failed`, err);
          throw err;
        }
      },
    }),
  ],
});

export function TRPCProvider({ children }: { children: ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
