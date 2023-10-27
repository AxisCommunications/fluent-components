import { test, expect } from "@playwright/test";
import { goToPage } from "./utils";

test("should be able to navigate to home page", async ({ page }) => {
  // await goToPage(page);

  page.goto("https://axiscommunications.github.io/fluent-components/");

  const homePage = page.locator("#welcome-page");

  await expect(homePage).toBeVisible();
});
