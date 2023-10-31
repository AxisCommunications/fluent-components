import { test as base } from "@playwright/test";
import { WelcomePage } from "../models/welcome-page.model";
import { isCi } from "./common";

type TTestFixtures = {
  welcomePage: WelcomePage;
};

type TEnvFixture = {
  isCi: boolean;
};

export const test = base.extend<TTestFixtures>({
  welcomePage: async ({ page }, use) => {
    const welcomePage = new WelcomePage(page);
    use(welcomePage);
  },
});
// .extend<TEnvFixture>({
//   isCi: [
//     async ({}, use) => {
//       await use(isCi());
//     },
//     { scope: "worker" },
//   ],
// });
