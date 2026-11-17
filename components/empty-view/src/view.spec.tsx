import { act, render } from "@testing-library/react";
import { PanelEmptyView, SubmenuEmptyView } from "./view.js";

const failingLoad = vi.hoisted(() => ({ shouldFail: true }));

vi.mock(
  "@axiscommunications/fluent-illustrations/no-emails",
  async (importOriginal) => {
    if (failingLoad.shouldFail) {
      throw new Error("Failed to fetch dynamically imported module");
    }
    return importOriginal();
  }
);

describe("EmptyView illustrations", () => {
  it("Should render title and body before the illustration has loaded", async () => {
    const { getByText, queryByRole, findByTestId } = render(
      <PanelEmptyView illustration="no-match" title="No results">
        Try another search
      </PanelEmptyView>
    );

    expect(getByText("No results")).toBeInTheDocument();
    expect(getByText("Try another search")).toBeInTheDocument();
    expect(queryByRole("img", { hidden: true })).not.toBeInTheDocument();

    expect(await findByTestId("bundleIllustration-light")).toBeInTheDocument();
  });

  it("Should reserve the illustration size while it loads", async () => {
    const { container, findByTestId } = render(
      <SubmenuEmptyView illustration="no-sites" title="No sites">
        Add a site
      </SubmenuEmptyView>
    );
    const placeholder = container.querySelector('div[aria-hidden="true"]');
    expect(placeholder).toBeInTheDocument();

    const illustration = await findByTestId("bundleIllustration-light");

    expect(illustration.className).toBe(placeholder?.className);
    expect(placeholder).not.toBeInTheDocument();
  });

  it("Should load the illustration requested by the illustration prop", async () => {
    const { EmptyGeneralLight } = await import(
      "@axiscommunications/fluent-illustrations/empty-general"
    );
    const expected = render(<EmptyGeneralLight data-testid="expected" />);
    const { findByTestId } = render(
      <PanelEmptyView illustration="general" title="Nothing here" />
    );

    const illustration = await findByTestId("bundleIllustration-light");

    expect(illustration.getAttribute("src")).toBe(
      expected.getByTestId("expected").getAttribute("src")
    );
  });

  it("Should keep the placeholder and retry on next mount when loading fails", async () => {
    const first = render(
      <PanelEmptyView illustration="no-emails" title="No emails">
        Add an email
      </PanelEmptyView>
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(first.getByText("No emails")).toBeInTheDocument();
    expect(
      first.container.querySelector('div[aria-hidden="true"]')
    ).toBeInTheDocument();
    expect(first.queryByTestId("bundleIllustration-light")).toBeNull();
    first.unmount();

    failingLoad.shouldFail = false;
    const second = render(
      <PanelEmptyView illustration="no-emails" title="No emails" />
    );

    expect(
      await second.findByTestId("bundleIllustration-light")
    ).toBeInTheDocument();
  });
});
