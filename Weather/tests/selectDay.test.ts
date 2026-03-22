import { test, expect } from "playwright/test";

test("Select a day", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const title = page.getByTestId("selected-day");
  const list = page.getByTestId("days-list");
  await title.click();

  const wednesday = list.getByText("Wednesday");
  await wednesday.click();

  await expect(title).toHaveText("Wednesday");
});
