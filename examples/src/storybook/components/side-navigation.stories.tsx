import { SideNavigation } from "@axiscommunications/fluent-side-navigation";
import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { CollapsibleSideNavigationExample } from "../../stories/side-navigation/examples/collapsible-side-navigation-example";
import { CompactSideNavigationExample } from "../../stories/side-navigation/examples/compact-side-navigation-example";
import { IconOnlySideNavigationExample } from "../../stories/side-navigation/examples/icon-only-side-navigation-example";

const useStyles = makeStyles({
  frame: {
    display: "flex",
    height: "520px",
  },
});

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
 *   expandable group of sub-items.
 *
 * ## Guidelines
 *
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
const meta: Meta = {
  title: "UI patterns/Side Navigation",
  component: SideNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A collapsible rail that starts collapsed. The toggle button at the top expands
 * the rail to reveal labels and collapses it back to icons. `footerItems` are
 * pinned to the bottom.
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
 * open initially.
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
