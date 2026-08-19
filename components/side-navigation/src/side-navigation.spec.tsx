import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { fireEvent, render } from "@testing-library/react";
import { ReactElement } from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import { SideNavigation } from "./side-navigation";
import { SideNavigationItem } from "./side-navigation.types";

const items: SideNavigationItem[] = [
  { id: "home", label: "Home", icon: <span /> },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <span />,
    children: [
      { id: "personal", label: "Personal" },
      { id: "shared", label: "Shared", disabled: true },
    ],
  },
  { id: "disabled", label: "Disabled", icon: <span />, disabled: true },
];

const footerItems: SideNavigationItem[] = [
  { id: "settings", label: "Settings", icon: <span /> },
];

const renderNav = (ui: ReactElement) =>
  render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);

describe("SideNavigation", () => {
  it("should render all top-level items", () => {
    const { getByText } = renderNav(<SideNavigation items={items} />);

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Workspaces")).toBeInTheDocument();
  });

  it("should render footer items", () => {
    const { getByText } = renderNav(
      <SideNavigation items={items} footerItems={footerItems} />
    );

    expect(getByText("Settings")).toBeInTheDocument();
  });

  it("should select an item when clicked (uncontrolled) and call onSelect", () => {
    const onSelect = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation items={items} onSelect={onSelect} />
    );

    const home = getByRole("button", { name: "Home" });
    fireEvent.click(home);

    expect(onSelect).toHaveBeenCalledWith("home");
    expect(home).toHaveAttribute("aria-current", "page");
  });

  it("should reflect the controlled selectedItemId", () => {
    const { getByRole } = renderNav(
      <SideNavigation items={items} selectedItemId="home" onSelect={vi.fn()} />
    );

    expect(getByRole("button", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("should not change selection in controlled mode without consumer update", () => {
    const onSelect = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation
        items={items}
        footerItems={footerItems}
        selectedItemId="home"
        onSelect={onSelect}
      />
    );

    fireEvent.click(getByRole("button", { name: "Settings" }));

    expect(onSelect).toHaveBeenCalledWith("settings");
    expect(getByRole("button", { name: "Settings" })).not.toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("should not select a group label when clicked, only toggle it", () => {
    const onSelect = vi.fn();
    const { getByRole, queryByText } = renderNav(
      <SideNavigation items={items} onSelect={onSelect} defaultExpanded />
    );

    fireEvent.click(getByRole("button", { name: "Workspaces" }));

    expect(onSelect).not.toHaveBeenCalled();
    expect(queryByText("Personal")).toBeInTheDocument();
  });

  it("should not select a disabled item", () => {
    const onSelect = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation items={items} onSelect={onSelect} />
    );

    const disabled = getByRole("button", { name: "Disabled" });

    expect(disabled).toBeDisabled();
    fireEvent.click(disabled);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("should render a collapse/expand toggle by default and call onExpandedChange", () => {
    const onExpandedChange = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation items={items} onExpandedChange={onExpandedChange} />
    );

    fireEvent.click(getByRole("button", { name: "Expand navigation" }));

    expect(onExpandedChange).toHaveBeenCalledWith(true);
  });

  it("should hide the toggle when collapsible is false", () => {
    const { queryByRole } = renderNav(
      <SideNavigation items={items} collapsible={false} />
    );

    expect(
      queryByRole("button", { name: "Expand navigation" })
    ).not.toBeInTheDocument();
  });

  it("should render the toggle after the footer items when togglePosition is bottom", () => {
    const { getByRole } = renderNav(
      <SideNavigation
        items={items}
        footerItems={footerItems}
        togglePosition="bottom"
      />
    );

    const toggle = getByRole("button", { name: "Expand navigation" });
    const settings = getByRole("button", { name: "Settings" });

    expect(
      toggle.compareDocumentPosition(settings) &
        Node.DOCUMENT_POSITION_PRECEDING
    ).toBeTruthy();
  });

  it("should reveal sub-items when expanded and the group is open", () => {
    const { getByText, queryByText } = renderNav(
      <SideNavigation
        items={items}
        defaultExpanded
        defaultOpenItemIds={["workspaces"]}
      />
    );

    expect(getByText("Personal")).toBeInTheDocument();
    expect(queryByText("Personal")).toBeVisible();
  });

  it("should not render sub-items while collapsed", () => {
    const { queryByText } = renderNav(
      <SideNavigation items={items} defaultOpenItemIds={["workspaces"]} />
    );

    expect(queryByText("Personal")).not.toBeInTheDocument();
  });

  it("should toggle a group open and closed when its item is clicked", () => {
    const { getByRole, queryByText } = renderNav(
      <SideNavigation items={items} defaultExpanded />
    );

    const group = getByRole("button", { name: "Workspaces" });

    expect(queryByText("Personal")).not.toBeInTheDocument();
    fireEvent.click(group);
    expect(queryByText("Personal")).toBeInTheDocument();
    fireEvent.click(group);
    expect(queryByText("Personal")).not.toBeInTheDocument();
  });

  it("should select a sub-item", () => {
    const onSelect = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation
        items={items}
        onSelect={onSelect}
        defaultExpanded
        defaultOpenItemIds={["workspaces"]}
      />
    );

    fireEvent.click(getByRole("button", { name: "Personal" }));

    expect(onSelect).toHaveBeenCalledWith("personal");
  });

  it("should not select a disabled sub-item", () => {
    const onSelect = vi.fn();
    const { getByRole } = renderNav(
      <SideNavigation
        items={items}
        onSelect={onSelect}
        defaultExpanded
        defaultOpenItemIds={["workspaces"]}
      />
    );

    const sharedSubItem = getByRole("button", { name: "Shared" });

    expect(sharedSubItem).toBeDisabled();
    fireEvent.click(sharedSubItem);
    expect(onSelect).not.toHaveBeenCalled();
  });
});
