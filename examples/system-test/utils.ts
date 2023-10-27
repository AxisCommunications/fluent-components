import { Page } from "@playwright/test";

const GH_PAGE = "https://axiscommunications.github.io/fluent-components/";
const LOCAL_HOST = "http://127.0.0.1:3000/fluent-components/";

export function goToPage(page: Page, url?: string) {
  if (url) {
    return page.goto(url);
  }

  const envUrl = isCi() ? GH_PAGE : LOCAL_HOST;
  return page.goto(envUrl);
}

export function isCi(): boolean {
  return process.env.CI === "true";
}
