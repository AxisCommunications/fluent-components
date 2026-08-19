# Side Navigation - @axiscommunications/fluent-side-navigation

A vertical navigation rail for Fluent UI v9 applications. It renders a compact
icon rail that can expand to reveal labels and nested sub-items, with an
animated indicator that tracks the selected item.

## How to install

```sh
yarn add @axiscommunications/fluent-side-navigation
```

```sh
npm install @axiscommunications/fluent-side-navigation
```

## Usage

```tsx
import { useState } from "react";
import {
  SideNavigation,
  SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import {
  HomeFilled,
  HomeRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";

const items: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular />,
    selectedIcon: <HomeFilled />,
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <HomeRegular />,
    children: [
      { id: "personal", label: "Personal" },
      { id: "shared", label: "Shared with me" },
    ],
  },
];

const footerItems: SideNavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

export const SideNavigationExample = () => {
  const [selectedItemId, setSelectedItemId] = useState("home");

  return (
    <SideNavigation
      items={items}
      footerItems={footerItems}
      selectedItemId={selectedItemId}
      onSelect={setSelectedItemId}
      defaultExpanded
      defaultOpenItemIds={["workspaces"]}
      aria-label="Main"
    />
  );
};
```

## Behaviour

- **Collapsed rail (default):** shows only icons in a fixed 68px column. An
  item with `children` opens a foldout menu on hover (or focus) instead of an
  inline group, so its sub-items stay reachable without expanding the rail.
- **Expanded:** reveals labels beside icons, chevrons for groups, and any open
  sub-items. The width animates between the rail and `expandedWidth`.
- **Group labels aren't pages:** an item with `children` only toggles its
  group open or closed when clicked — it never becomes the selected item.
  Only an actual sub-item (or a childless item) can be selected.
- **Selection indicator:** a sliding marker animates to the selected item or
  sub-item. When the selected sub-item isn't currently rendered (collapsed
  rail, or its group is closed), the marker sticks to the parent category
  instead.
- **Auto-opening the right group:** selecting a sub-item from the collapsed
  rail's foldout menu remembers its parent group; expanding the rail again
  opens just that group and collapses any others.
- **Controlled or uncontrolled:** both selection (`selectedItemId` /
  `defaultSelectedItemId`) and the expanded state (`expanded` /
  `defaultExpanded`) can be driven by the consumer or managed internally.

## Props

| Prop                    | Type                        | Default               | Description                                                        |
| ----------------------- | --------------------------- | --------------------- | ----------------------------------------------------------------- |
| `items`                 | `SideNavigationItem[]`      | —                     | Top-level items, rendered top to bottom. **Required.**            |
| `footerItems`           | `SideNavigationItem[]`      | —                     | Items pinned to the bottom, separated by a divider.               |
| `selectedItemId`        | `string`                    | —                     | The selected item id (controlled).                                |
| `defaultSelectedItemId` | `string`                    | —                     | The initially selected item id (uncontrolled).                    |
| `onSelect`              | `(id: string) => void`      | —                     | Called with the id of a selected item or sub-item.                |
| `expanded`              | `boolean`                   | —                     | Whether the rail is expanded (controlled).                        |
| `defaultExpanded`       | `boolean`                   | `false`               | Whether the rail is expanded initially (uncontrolled).            |
| `onExpandedChange`      | `(expanded: boolean) => void` | —                   | Called with the next expanded state when the toggle is used.      |
| `collapsible`           | `boolean`                   | `true`                | Whether to render the expand/collapse toggle button.              |
| `togglePosition`        | `"top" \| "bottom"`       | `"top"`               | Where the toggle button is rendered: above the items, or pinned to the bottom alongside `footerItems`. |
| `defaultOpenItemIds`    | `string[]`                  | `[]`                  | Ids of group items whose sub-items are open initially.            |
| `expandedWidth`         | `number`                    | `260`                 | Width in pixels of the rail when expanded.                        |
| `expandLabel`           | `string`                    | `"Expand navigation"` | Accessible label/tooltip for the toggle while collapsed.          |
| `collapseLabel`         | `string`                    | `"Collapse navigation"` | Accessible label/tooltip for the toggle while expanded.         |

All other props are forwarded to the underlying `<nav>` element (e.g.
`aria-label`, `style`, `className`).

### `SideNavigationItem`

| Field          | Type                     | Description                                            |
| -------------- | ------------------------ | ------------------------------------------------------ |
| `id`           | `string`                 | Unique identifier used to track selection.             |
| `label`        | `string`                 | Visible label, accessible name, and rail tooltip.      |
| `icon`         | `ReactNode`              | Icon rendered in the rail's icon column.               |
| `selectedIcon` | `ReactNode`              | Icon shown while the item is selected.                 |
| `children`     | `SideNavigationSubItem[]`| Nested items revealed when the group is open.          |
| `disabled`     | `boolean`                | When `true`, the item cannot be selected or expanded.  |

### `SideNavigationSubItem`

| Field      | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| `id`       | `string`  | Unique identifier used to track selection. |
| `label`    | `string`  | Visible label and accessible name.         |
| `disabled` | `boolean` | When `true`, the sub-item cannot be selected. |

## Accessibility

- Renders as a `<nav>` landmark — pass an `aria-label` to distinguish multiple
  navigation regions on a page.
- Items and sub-items are native `<button>` elements; the selected item exposes
  `aria-current="page"`.
- Group items expose `aria-expanded`, and the collapse/expand toggle exposes
  both `aria-expanded` and an accessible label (`expandLabel` / `collapseLabel`).
- While collapsed, each item's `label` is used as its accessible name and
  tooltip so icon-only items remain understandable; a foldout menu for its
  sub-items uses Fluent's `Menu` primitives (`role="menu"`/`role="menuitem"`).
- Animations are disabled when the user prefers reduced motion.
```
