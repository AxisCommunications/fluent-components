import { test, expect } from "@playwright/test";

test("should be able to navigate to home page", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/fluent-components/");

  const homePage = page.locator("#welcome-page");

  await expect(homePage).toBeVisible();
});
