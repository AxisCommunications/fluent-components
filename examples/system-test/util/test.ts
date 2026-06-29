import { test as base } from "@playwright/test";
import { AdvancedDataGridPage } from "../models/advanced-data-grid-page.model";
import { WelcomePage } from "../models/welcome-page.model";

type TTestFixtures = {
  welcomePage: WelcomePage;
  advancedDataGridPage: AdvancedDataGridPage;
};

export const test = base.extend<TTestFixtures>({
  welcomePage: async ({ page }, use) => {
    const welcomePage = new WelcomePage(page);
    use(welcomePage);
  },
  advancedDataGridPage: async ({ page }, use) => {
    const advancedDataGridPage = new AdvancedDataGridPage(page);
    use(advancedDataGridPage);
  },
});
