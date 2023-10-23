import { PlaywrightTestConfig } from "@playwright/test";
import { chromium, createConfig } from "./playwright.confg.base";

const config: PlaywrightTestConfig = {
  ...createConfig([
    {
      name: "fluent-components:stest:chromium",
      use: chromium(),
      testMatch: ["**/**.stest.ts"],
    },
  ]),
};
export default config;
