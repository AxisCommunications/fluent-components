import { expect } from "@playwright/test";
import { test } from "./util/test";

test.describe("Advanced data grid", () => {
  test.beforeEach(async ({ advancedDataGridPage }) => {
    await advancedDataGridPage.goto();
  });

  test("renders the grid with column headers", async ({
    advancedDataGridPage,
  }) => {
    await expect(advancedDataGridPage.grid.first()).toBeVisible();
    await expect(advancedDataGridPage.columnHeader("Name")).toBeVisible();
    await expect(advancedDataGridPage.columnHeader("Model")).toBeVisible();
    await expect(advancedDataGridPage.columnHeader("Status")).toBeVisible();
  });

  test("paginates with the default page size", async ({
    advancedDataGridPage,
  }) => {
    // 15 devices, default page size 10 -> 10 rows on first page.
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);
    await expect(
      advancedDataGridPage.page.getByText("1-10 of 15")
    ).toBeVisible();

    await advancedDataGridPage.nextPageButton.click();

    await expect(advancedDataGridPage.dataRows()).toHaveCount(5);
    await expect(
      advancedDataGridPage.page.getByText("11-15 of 15")
    ).toBeVisible();

    await advancedDataGridPage.previousPageButton.click();
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);
  });

  test("filters rows with the global search", async ({
    advancedDataGridPage,
  }) => {
    await advancedDataGridPage.search("Parking");

    await expect(advancedDataGridPage.dataRows()).toHaveCount(2);
    await expect(
      advancedDataGridPage.grid.getByText("Parking North")
    ).toBeVisible();
    await expect(
      advancedDataGridPage.grid.getByText("Parking South")
    ).toBeVisible();
  });

  test("sorts rows when clicking a column header", async ({
    advancedDataGridPage,
  }) => {
    const firstRow = advancedDataGridPage.dataRows().first();

    // Default order starts with "Entrance Cam".
    await expect(firstRow).toContainText("Entrance Cam");

    // Ascending sort by name -> "Cafeteria" comes first.
    await advancedDataGridPage.sortLabel("Name").click();
    await expect(firstRow).toContainText("Cafeteria");
  });

  test("groups rows by a column", async ({ advancedDataGridPage }) => {
    await advancedDataGridPage.groupTrigger.click();
    await advancedDataGridPage.page
      .getByRole("menuitemradio", { name: "Type" })
      .click();

    // Group bands render the group value and member count.
    await expect(
      advancedDataGridPage.grid.getByText("Dome", { exact: false }).first()
    ).toBeVisible();
    await expect(
      advancedDataGridPage.grid.getByText("PTZ", { exact: false }).first()
    ).toBeVisible();
  });

  test("changes row density", async ({ advancedDataGridPage }) => {
    await advancedDataGridPage.densityTrigger.click();
    await advancedDataGridPage.page
      .getByRole("menuitemradio", { name: "Compact" })
      .click();

    // Grid stays rendered after density change.
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);
  });

  test("shows and dismisses active filter chips", async ({
    advancedDataGridPage,
  }) => {
    await advancedDataGridPage.addColumnFilter("Cam");

    // A dismissible chip summarises the active filter.
    await expect(advancedDataGridPage.activeFilters).toBeVisible();
    await expect(advancedDataGridPage.activeFilters).toContainText(
      "Name contains Cam"
    );
    // "Cam" matches Entrance Cam, Lobby Cam and Dock Camera.
    await expect(advancedDataGridPage.dataRows()).toHaveCount(3);

    // Dismissing the chip clears the filter.
    await advancedDataGridPage.activeFilters
      .getByLabel("Remove filter")
      .click();
    await expect(advancedDataGridPage.activeFilters).toBeHidden();
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);
  });

  test("toggles a saved filter on and off from the menu", async ({
    advancedDataGridPage,
  }) => {
    await advancedDataGridPage.addColumnFilter("Cam");
    await expect(advancedDataGridPage.dataRows()).toHaveCount(3);

    // The created filter is saved in the menu and checked by default.
    await advancedDataGridPage.filterTrigger.click();
    const savedItem = advancedDataGridPage.savedFilterItem("Name contains Cam");
    await expect(savedItem).toBeVisible();
    await expect(savedItem).toHaveAttribute("aria-checked", "true");

    // Unchecking disables the filter without deleting it.
    await savedItem.click();
    await advancedDataGridPage.page.keyboard.press("Escape");
    await expect(advancedDataGridPage.activeFilters).toBeHidden();
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);

    // The filter remains saved and can be re-enabled.
    await advancedDataGridPage.filterTrigger.click();
    await expect(savedItem).toHaveAttribute("aria-checked", "false");
    await savedItem.click();
    await advancedDataGridPage.page.keyboard.press("Escape");
    await expect(advancedDataGridPage.dataRows()).toHaveCount(3);
  });

  test("opens the create-filter form inside the filter menu", async ({
    advancedDataGridPage,
  }) => {
    await advancedDataGridPage.filterTrigger.click();

    // Preexisting saved filters are listed in the menu.
    await expect(
      advancedDataGridPage.savedFilterItem("Status equals Online")
    ).toBeVisible();

    // Choosing "Add filter" swaps the menu content for an inline form,
    // not a separate modal dialog.
    await advancedDataGridPage.page.getByTestId("adg-add-filter").click();
    await expect(
      advancedDataGridPage.page.getByText("Create filter")
    ).toBeVisible();
    await expect(
      advancedDataGridPage.page.getByLabel("Filter value")
    ).toBeVisible();
    await expect(advancedDataGridPage.page.getByRole("dialog")).toHaveCount(0);
  });

  test("filters a single column from its header funnel", async ({
    advancedDataGridPage,
  }) => {
    await advancedDataGridPage.applyColumnFilter("Name", "Cam");

    await expect(advancedDataGridPage.dataRows()).toHaveCount(3);
    await expect(
      advancedDataGridPage.activeFilters.getByText("Name contains Cam")
    ).toBeVisible();

    // The column funnel reflects the active filter and re-opening it shows the
    // applied value, which can be cleared again.
    await advancedDataGridPage.columnFilterTrigger("Name").click();
    await expect(
      advancedDataGridPage.page.getByLabel("Filter value")
    ).toHaveValue("Cam");
    await advancedDataGridPage.page
      .getByRole("button", { name: "Clear" })
      .click();
    await expect(advancedDataGridPage.dataRows()).toHaveCount(10);
  });

  test("exports the visible rows as CSV", async ({ advancedDataGridPage }) => {
    const downloadPromise = advancedDataGridPage.page.waitForEvent("download");
    await advancedDataGridPage.exportButton.click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toContain("devices");
    expect(download.suggestedFilename()).toMatch(/\.csv$/);
  });
});
