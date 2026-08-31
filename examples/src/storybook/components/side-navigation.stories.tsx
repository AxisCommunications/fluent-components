import {
  SideNavigation,
  SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import { makeStyles } from "@fluentui/react-components";
import {
  AppsFilled,
  AppsRegular,
  HomeFilled,
  HomeRegular,
  LayerFilled,
  LayerRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomToggleSideNavigationExample } from "../../stories/side-navigation/examples/bottom-toggle-side-navigation-example";
import { CollapsibleSideNavigationExample } from "../../stories/side-navigation/examples/collapsible-side-navigation-example";
import { CompactSideNavigationExample } from "../../stories/side-navigation/examples/compact-side-navigation-example";
import { IconOnlySideNavigationExample } from "../../stories/side-navigation/examples/icon-only-side-navigation-example";

const useStyles = makeStyles({
  frame: {
    display: "flex",
    height: "520px",
  },
});

// Default `args` so the Interactive story (and the Controls panel) render a
// working rail out of the box.
const interactiveItems: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular />,
    selectedIcon: <HomeFilled />,
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <AppsRegular />,
    selectedIcon: <AppsFilled />,
    children: [
      { id: "workspaces-personal", label: "Personal" },
      { id: "workspaces-shared", label: "Shared with me" },
      {
        id: "workspaces-team",
        label: "Team",
        children: [{ id: "workspaces-team-members", label: "Members" }],
      },
    ],
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular />,
    selectedIcon: <LayerFilled />,
  },
];

const interactiveFooterItems: SideNavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

/**
 * Side Navigation
 *
 * A vertical navigation rail for Fluent UI v9 applications. It renders a compact
 * icon rail (68px) that can expand to reveal labels and nested sub-items, with
 * an animated indicator that tracks the selected item. Optional `footerItems`
 * are pinned to the bottom and separated by a divider.
 *
 * ## Variants
 *
 * - **Collapsible rail** — a toggle button expands the icon rail to reveal
 *   labels, group chevrons, and any open sub-items, then collapses it back.
 *   Use this as the default.
 * - **Permanent icon rail** — set `collapsible={false}` to remove the toggle and
 *   keep an icons-only rail. Use when horizontal space is at a premium and the
 *   destinations are well known.
 * - **Expanded with sub-menus** — start expanded with `defaultExpanded` and seed
 *   open groups with `defaultOpenItemIds`. Items with `children` render an
 *   expandable group of sub-items. Sub-items can use `children` to create a
 *   third-level group.
 * - **Collapsed with sub-menus** — while the rail is collapsed, an item with
 *   `children` opens a foldout menu on hover (or focus) instead of an inline
 *   group, so its sub-items stay reachable without expanding the rail.
 * - **Toggle at the bottom** — `togglePosition="bottom"` pins the
 *   expand/collapse toggle below the items (and any `footerItems`) instead of
 *   above them. Every example below uses it; it is the recommended placement so
 *   the chevron stays in a predictable spot as the item list grows. The prop
 *   still defaults to `"top"`.
 *
 * ## Guidelines
 *
 * - Pin the toggle to the bottom with `togglePosition="bottom"` so the chevron
 *   never shifts position when items are added or removed.
 * - Provide a meaningful `aria-label` on the rail (e.g. "Side navigation").
 * - Keep labels short (one or two words) so they fit the expanded rail.
 * - Always supply a recognizable `icon` for every item; while collapsed the icon
 *   is the only visual cue and the `label` is exposed via `aria-label`/tooltip.
 * - Use `selectedIcon` to provide a filled counterpart for the active item; the
 *   rail automatically swaps to it for the selected destination.
 * - Reserve `footerItems` for persistent, context-level actions (e.g. settings
 *   or a profile/site switcher).
 *
 * ## Accessibility
 *
 * - The rail renders as a `<nav>` landmark; the selected item is marked with
 *   `aria-current="page"`.
 * - Group items expose `aria-expanded`, and the toggle exposes both
 *   `aria-expanded` and an accessible label (`expandLabel` / `collapseLabel`).
 * - While collapsed, each item's `label` stays available to assistive technology
 *   via `aria-label` and on hover via a tooltip.
 * - Animations are disabled when the user prefers reduced motion.
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=44-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof SideNavigation> = {
  title: "UI patterns/Side Navigation",
  component: SideNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    items: interactiveItems,
    footerItems: interactiveFooterItems,
    defaultSelectedItemId: "home",
    togglePosition: "bottom",
    "aria-label": "Side navigation",
  },
  argTypes: {
    items: {
      control: false,
      description: "Top-level items, rendered top to bottom. **Required.**",
      table: { type: { summary: "SideNavigationItem[]" } },
    },
    footerItems: {
      control: false,
      description:
        "Items pinned to the bottom of the rail, separated by a divider.",
      table: { type: { summary: "SideNavigationItem[]" } },
    },
    selectedItemId: {
      control: false,
      description: "The id of the selected item (controlled).",
      table: { type: { summary: "string" } },
    },
    defaultSelectedItemId: {
      control: false,
      description: "The id of the item selected initially (uncontrolled).",
      table: { type: { summary: "string" } },
    },
    onSelect: {
      control: false,
      description:
        "Called with the id of an item, sub-item, or nested sub-item when selected.",
      table: { type: { summary: "(id: string) => void" } },
    },
    expanded: {
      control: false,
      description:
        "Whether the rail is expanded to reveal labels (controlled).",
      table: { type: { summary: "boolean" } },
    },
    defaultExpanded: {
      control: "boolean",
      description: "Whether the rail is expanded initially (uncontrolled).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onExpandedChange: {
      control: false,
      description:
        "Called with the next expanded state when the toggle is used.",
      table: { type: { summary: "(expanded: boolean) => void" } },
    },
    collapsible: {
      control: "boolean",
      description:
        "Whether to render the expand/collapse toggle button. When `false` the rail stays fixed in its current expanded state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    togglePosition: {
      control: "radio",
      options: ["top", "bottom"],
      description:
        "Where the toggle button is rendered: above the items, or pinned to the bottom alongside `footerItems`.",
      table: {
        type: { summary: '"top" | "bottom"' },
        defaultValue: { summary: '"top"' },
      },
    },
    defaultOpenItemIds: {
      control: false,
      description:
        "The ids of group items whose nested items are open initially.",
      table: { type: { summary: "string[]" }, defaultValue: { summary: "[]" } },
    },
    expandedWidth: {
      control: "number",
      description: "Width in pixels of the rail when expanded.",
      table: { type: { summary: "number" }, defaultValue: { summary: "260" } },
    },
    expandLabel: {
      control: "text",
      description:
        "Accessible label and tooltip for the toggle button while collapsed.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Expand navigation"' },
      },
    },
    collapseLabel: {
      control: "text",
      description:
        "Accessible label and tooltip for the toggle button while expanded.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Collapse navigation"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * All args are wired up here — use the **Controls** panel below to toggle
 * `togglePosition`, `collapsible`, `defaultExpanded`, `expandedWidth`, and the
 * toggle labels and see the rail update live.
 */
export const Interactive: Story = {
  render: (args) => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <SideNavigation {...args} />
      </div>
    );
  },
};

/**
 * A collapsible rail that starts collapsed. The toggle button pinned to the
 * bottom expands the rail to reveal labels and collapses it back to icons.
 * `footerItems` sit above the toggle.
 */
export const CollapsibleRail: Story = {
  render: () => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <CompactSideNavigationExample />
      </div>
    );
  },
};

/**
 * Setting `collapsible={false}` removes the toggle and keeps an icons-only rail.
 * Labels stay accessible via `aria-label` and the hover tooltip.
 */
export const IconOnlyRail: Story = {
  render: () => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <IconOnlySideNavigationExample />
      </div>
    );
  },
};

/**
 * Starting expanded with `defaultExpanded`, this rail reveals labels, group
 * chevrons, and nested sub-items. Groups seeded with `defaultOpenItemIds` are
 * open initially. Use the toggle button to collapse the rail and hover an
 * item with sub-items to see them appear in a foldout menu instead.
 */
export const ExpandedWithSubMenus: Story = {
  render: () => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <CollapsibleSideNavigationExample />
      </div>
    );
  },
};

/**
 * `togglePosition="bottom"` in isolation: the expand/collapse toggle sits below
 * the items, alongside any `footerItems`, instead of above them. The other
 * examples on this page use the same placement.
 */
export const ToggleAtBottom: Story = {
  render: () => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <BottomToggleSideNavigationExample />
      </div>
    );
  },
};
