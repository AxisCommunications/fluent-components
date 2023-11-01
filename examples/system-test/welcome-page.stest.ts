import { expect } from "@playwright/test";
import { test } from "./util/test";

test("should be able to navigate to home page", async ({ welcomePage }) => {
  await welcomePage.goto();
  await expect(welcomePage.root).toBeVisible();
});
