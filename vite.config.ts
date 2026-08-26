import devServer from "@hono/vite-dev-server"
import path from "path"
const __dirname = import.meta.dirname
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    devServer({ entry: "api/boot.ts", exclude: [/^\/(?!api\/).*$/] }),
    inspectAttr(), react()],
  server: {
    port: 3000,
    // Bind IPv4 explicitly — without this, Vite/Node binds only [::1]
    // (IPv6) on this machine, and `adb reverse` (used for local Android
    // device testing) connects via 127.0.0.1, so it can't reach the
    // server at all. Dev-only; production uses @hono/node-server instead.
    host: "127.0.0.1",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@contracts": path.resolve(__dirname, "./contracts"),
      "@db": path.resolve(__dirname, "./db"),
      "db": path.resolve(__dirname, "./db"),
    },
  },
  envDir: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
