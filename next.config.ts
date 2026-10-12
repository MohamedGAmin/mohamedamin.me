import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into `out/` so GitHub Pages can host it (no Node server).
  output: "export",
  // The default image optimizer needs a server; serve images as-is instead.
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching are left off: they need a server and fail with output: "export".
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
