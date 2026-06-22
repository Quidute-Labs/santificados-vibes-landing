// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  tanstackStart: {
    // O wrapper de erro SSR específico do Cloudflare só é necessário nos builds Lovable/Cloudflare.
    // Na Vercel usamos a entrada padrão do TanStack Start + Nitro.
    ...(isVercel ? {} : { server: { entry: "server" } }),
  },
  // Força o preset da Vercel nos builds de CI; no sandbox Lovable o preset continua cloudflare-module.
  nitro: isVercel ? { preset: "vercel" } : undefined,
});
