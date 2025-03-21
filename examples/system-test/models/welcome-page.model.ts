import type { Locator, Page } from "@playwright/test";
import { getRootPath } from "../util/common";
import { TestId } from "../util/test-id";

export class WelcomePage {
  private readonly welcomePage: Locator;

  constructor(public readonly page: Page) {
    this.welcomePage = this.page.getByTestId(TestId.welcomePage);
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
