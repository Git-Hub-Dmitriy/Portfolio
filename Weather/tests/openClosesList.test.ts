import { test, expect } from "playwright/test";

test("opens and closes days list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const title = page.getByTestId("selected-day");
  const list = page.getByTestId("days-list");
  await expect(list).not.toHaveClass(/active/);

  await title.click();
  await expect(list).toHaveClass(/active/);

  await title.click();
  await expect(list).not.toHaveClass(/active/);
});
