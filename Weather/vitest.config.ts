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
      "@store": path.resolve(__dirname, "src/store"),
      "@services": path.resolve(__dirname, "src/services"),
      "@icons": path.resolve(__dirname, "public/icons"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
    },
  },
});
