import { defineConfig } from "playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:3000",
    headless: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "off",
  },
  testDir: "./tests",
  timeout: 30_000,
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "firefox", use: { browserName: "firefox" } },
    { name: "webkit", use: { browserName: "webkit" } },
  ],
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
