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
      "@app": path.resolve(__dirname, "src/app"),
      "@data": path.resolve(__dirname, "src/data"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
});
