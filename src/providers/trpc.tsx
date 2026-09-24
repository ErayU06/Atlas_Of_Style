import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Capacitor } from "@capacitor/core";
import superjson from "superjson";
import { getNativeToken } from "@/lib/nativeAuth";
import type { AppRouter } from "../../api/router";
import type { ReactNode } from "react";

export const trpc = createTRPCReact<AppRouter>();

// Bundled into the native shell, the app has no same-origin backend to call
// relatively — it needs the deployed backend's absolute HTTPS URL instead.
// Web (dev and prod) keeps using the relative path, unchanged.
function getTrpcUrl() {
  if (Capacitor.isNativePlatform()) {
    const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
    if (!base) {
      console.warn(
        "[trpc] VITE_API_BASE_URL is not set — API calls will fail inside the native app.",
      );
      return "/api/trpc";
    }
    return `${base.replace(/\/$/, "")}/api/trpc`;
  }
  return "/api/trpc";
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
