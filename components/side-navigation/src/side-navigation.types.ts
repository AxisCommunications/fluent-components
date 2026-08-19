import { ComponentProps, ReactNode } from "react";

/**
 * A nested navigation entry. Sub-items are revealed when their parent item's
 * group is open and the rail is expanded.
 */
export type SideNavigationSubItem = {
  /** Unique identifier used to track and report selection. */
  id: string;
  /** Visible text label. Also used as the accessible name. */
  label: string;
  /** When `true`, the sub-item is rendered dimmed and cannot be selected. */
  disabled?: boolean;
};

/**
 * A top-level navigation entry rendered in the rail. Provide a {@link icon} for
 * the collapsed rail and an optional {@link selectedIcon} (e.g. a filled
 * variant) shown while the item is selected.
 */
export type SideNavigationItem = {
  /** Unique identifier used to track and report selection. */
  id: string;
  /** Visible text label. Also used as the accessible name and rail tooltip. */
  label: string;
  /** Icon rendered in the rail's fixed icon column. */
  icon: ReactNode;
  /** Icon shown while the item is selected (e.g. a filled variant). */
  selectedIcon?: ReactNode;
  /**
   * Nested items revealed when the item's group is open. Items with children
   * render a chevron and act as expandable groups while the rail is expanded.
   * While the rail is collapsed, these instead appear in a foldout menu that
   * opens when the item is hovered.
   */
  children?: SideNavigationSubItem[];
  /** When `true`, the item is rendered dimmed and cannot be selected. */
  disabled?: boolean;
};

export type SideNavigationProps = Omit<ComponentProps<"nav">, "onSelect"> & {
  /** Top-level navigation items, rendered from top to bottom. */
  items: SideNavigationItem[];
  /**
   * Items pinned to the bottom of the rail, separated from {@link items} by a
   * divider. Useful for settings, help, or a site/profile switcher.
   */
  footerItems?: SideNavigationItem[];
  /** The id of the selected item (controlled). */
  selectedItemId?: string;
  /** The id of the item selected initially (uncontrolled). */
  defaultSelectedItemId?: string;
  /** Called with the id of an item or sub-item when it is selected. */
  onSelect?: (id: string) => void;
  /** Whether the rail is expanded to reveal labels (controlled). */
  expanded?: boolean;
  /**
   * Whether the rail is expanded initially (uncontrolled). Defaults to `false`,
   * i.e. an icon-only rail.
   */
  defaultExpanded?: boolean;
  /** Called with the next expanded state when the toggle is used. */
  onExpandedChange?: (expanded: boolean) => void;
  /**
   * Whether to render the expand/collapse toggle button. When `false` the rail
   * stays fixed in its current expanded state. Defaults to `true`.
   */
  collapsible?: boolean;
  /**
   * Where the expand/collapse toggle button is rendered: above the items or
   * pinned to the bottom of the rail (alongside {@link footerItems}, if any).
   * Defaults to `"top"`.
   */
  togglePosition?: "top" | "bottom";
  /** The ids of group items whose sub-items are open initially. */
  defaultOpenItemIds?: string[];
  /** Width in pixels of the rail when expanded. Defaults to `260`. */
  expandedWidth?: number;
  /**
   * Accessible label and tooltip for the toggle button while collapsed.
   * Defaults to `"Expand navigation"`.
   */
  expandLabel?: string;
  /**
   * Accessible label and tooltip for the toggle button while expanded.
   * Defaults to `"Collapse navigation"`.
   */
  collapseLabel?: string;
};
