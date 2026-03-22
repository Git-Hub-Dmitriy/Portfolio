import { test, expect } from "playwright/test";

test("user can type in search input", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const input = page.getByPlaceholder("Search for a place...");

  await input.pressSequentially("Kyiv");

  await expect(input).toHaveValue("Kyiv");
});
