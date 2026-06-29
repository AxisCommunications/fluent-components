import type { Locator, Page } from "@playwright/test";
import { getRootPath } from "../util/common";

/**
 * Page object model for the Advanced data grid story page.
 *
 * The story page renders multiple grid instances, so every locator is scoped
 * to the first grid (the "Full featured" example).
 */
export class AdvancedDataGridPage {
  readonly grid: Locator;
  readonly searchBox: Locator;
  readonly filterTrigger: Locator;
  readonly columnsTrigger: Locator;
  readonly groupTrigger: Locator;
  readonly densityTrigger: Locator;
  readonly exportButton: Locator;
  readonly pageSizeTrigger: Locator;
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;
  readonly activeFilters: Locator;

  constructor(public readonly page: Page) {
    this.grid = this.page.locator(".axis-AdvancedDataGrid").first();
    this.searchBox = this.grid.getByTestId("adg-search");
    this.filterTrigger = this.grid.getByTestId("adg-filter-trigger");
    this.columnsTrigger = this.grid.getByTestId("adg-columns-trigger");
    this.groupTrigger = this.grid.getByTestId("adg-group-trigger");
    this.densityTrigger = this.grid.getByTestId("adg-density-trigger");
    this.exportButton = this.grid.getByTestId("adg-export");
    this.pageSizeTrigger = this.grid.getByTestId("adg-page-size");
    this.nextPageButton = this.grid.getByLabel("Next page");
    this.previousPageButton = this.grid.getByLabel("Previous page");
    this.activeFilters = this.grid.getByTestId("adg-active-filters");
  }

  async goto() {
    await this.page.goto(`${getRootPath()}#/advanced-data-grid`);
    await this.grid.waitFor({ state: "visible" });
  }

  /** Data rows currently rendered in the grid body (excludes the header row). */
  dataRows() {
    return this.grid
      .getByRole("row")
      .filter({ hasNot: this.page.getByRole("columnheader") });
  }

  columnHeader(name: string) {
    return this.grid.getByRole("columnheader", { name });
  }

  /** The clickable sort label inside a column header. */
  sortLabel(name: string) {
    return this.grid.getByRole("button", { name, exact: true });
  }

  async search(text: string) {
    await this.searchBox.click();
    await this.searchBox.fill(text);
  }

  /**
   * Adds a column filter via the Filters menu: opens the menu, chooses
   * "Add filter" to open the create dialog, types a value and saves it.
   */
  async addColumnFilter(value: string) {
    await this.filterTrigger.click();
    await this.page.getByTestId("adg-add-filter").click();
    await this.page.getByLabel("Filter value").fill(value);
    await this.page.getByRole("button", { name: "Add filter" }).click();
  }

  /** The toggleable saved-filter checkbox in the Filters menu. */
  savedFilterItem(label: string): Locator {
    return this.page.getByRole("menuitemcheckbox", { name: label });
  }

  /** The funnel trigger in a column header that opens the per-column filter. */
  columnFilterTrigger(columnName: string): Locator {
    return this.grid.getByRole("button", { name: `Filter ${columnName}` });
  }

  /**
   * Applies a per-column filter from the column header funnel: opens the
   * popover, types a value and applies it.
   */
  async applyColumnFilter(columnName: string, value: string) {
    await this.columnFilterTrigger(columnName).click();
    await this.page.getByLabel("Filter value").fill(value);
    await this.page.getByRole("button", { name: "Apply" }).click();
  }
}
