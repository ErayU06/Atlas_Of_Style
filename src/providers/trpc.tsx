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
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
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
