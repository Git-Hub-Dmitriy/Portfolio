import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Для RTL
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "public/icons"),
      "@components": path.resolve(__dirname, "src/components"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
