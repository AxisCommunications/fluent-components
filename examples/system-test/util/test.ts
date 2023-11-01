import { test as base } from "@playwright/test";
import { WelcomePage } from "../models/welcome-page.model";

type TTestFixtures = {
  welcomePage: WelcomePage;
};

export const test = base.extend<TTestFixtures>({
  welcomePage: async ({ page }, use) => {
    const welcomePage = new WelcomePage(page);
    use(welcomePage);
  },
});
