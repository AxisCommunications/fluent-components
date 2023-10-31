import type { Locator, Page } from "@playwright/test";
import { TEST_ID } from "../util/test-id";
import { getRootPath } from "../util/common";

export class WelcomePage {
  private readonly welcomePage: Locator;

  constructor(public readonly page: Page) {
    this.welcomePage = this.page.getByTestId(TEST_ID.welcomePage);
  }

  get root() {
    return this.welcomePage;
  }

  async goto(url?: string) {
    if (url) {
      return this.page.goto(url);
    }
    return this.page.goto(getRootPath());
  }
}
