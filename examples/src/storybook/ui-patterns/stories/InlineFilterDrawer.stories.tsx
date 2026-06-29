import {
  Building20Regular,
  ConferenceRoom20Regular,
  Folder20Regular,
  Globe20Regular,
  Layer20Regular,
  Location20Regular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  type FilterGroup,
  InlineFilterDrawer,
  type InlineFilterDrawerProps,
  ORGANISATION_FILTER_GROUPS,
  ORGANISATION_NAVIGATION_TREE,
  type OrganisationNode,
  type TagFilter,
} from "../components/composites/InlineFilterDrawer";

/**
 * Inline Filter Drawer
 *
 * A persistent, in-page filtering surface that pairs a navigable organisation
 * hierarchy (tree) with free-text search, tag-based filtering, and optional
 * cross-filtering by hierarchy level. Unlike a modal or overlay drawer, it is
 * always rendered inline next to the content it filters, so users keep their
 * filters in view while they browse results.
 *
 * **What it is for**
 * - Narrowing a large data set (devices, sites, cameras, recordings, etc.) by
 *   navigating an organisation tree and applying tags at the same time.
 * - Keeping the active filter context visible and editable alongside results,
 *   rather than hidden behind a button or dialog.
 * - Acting as the left rail of a list/table/detail layout in suite-style apps.
 *
 * **When to use it**
 * - The content can be scoped by a hierarchy (Global → Region → Site → Floor →
 *   Room) and/or by cross-cutting tags (status, priority, type).
 * - There is enough horizontal space to keep the filters permanently visible
 *   (desktop / wide layouts). On narrow viewports, enable `responsiveWidth`
 *   or move filtering into a `FilterToolbar` instead.
 * - Filters change frequently and benefit from staying on screen.
 *
 * **When NOT to use it**
 * - For a single flat set of filters with no hierarchy — use `Filter Toolbar`.
 * - For occasional, space-constrained filtering — use an overlay `Drawer`.
 *
 * **Fluent guidelines applied**
 * - Built from Fluent primitives: `Accordion`, `Input`, `Menu`, `Checkbox`,
 *   `TagGroup`, and `Dialog` (for inline rename/create).
 * - Token-based spacing, colors, borders, and motion (`motionTokens`).
 * - Controlled and uncontrolled APIs for tag filters, node selection, and
 *   width, so it can be driven by app state or manage its own.
 * - Responsive width via `@axiscommunications/fluent-hooks` `useMediaQuery`.
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=99-300"><img width="240" src="/figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof InlineFilterDrawer> = {
  title: "UI patterns/Inline Filter Drawer",
  component: InlineFilterDrawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "min(600px, 100vw)",
          maxWidth: "100%",
          minHeight: "500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Drawer heading text",
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for the free text filter input",
    },
    showTagFilter: {
      control: "boolean",
      description: "Shows the tag filter menu and active filter chips",
    },
    enableSubfolderCreation: {
      control: "boolean",
      description:
        "Enables a per-node menu to rename, add folders and remove nodes",
    },
    fullHeight: {
      control: "boolean",
      description:
        "Renders the drawer as a full-height panel surface (square corners, no card gap) instead of a rounded card. Use when the drawer is the left rail of a page layout.",
    },
    resizable: {
      control: "boolean",
      description:
        "Adds a drag handle on the right edge so users can resize the drawer width between `minWidth` and `maxWidth`.",
    },
    responsiveWidth: {
      control: "boolean",
      description:
        "Switches to a compact width on small viewports using the `smallViewport*` width props.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineFilterDrawer>;

const defaultArgs: InlineFilterDrawerProps = {
  nodes: ORGANISATION_NAVIGATION_TREE,
  filterGroups: ORGANISATION_FILTER_GROUPS,
  title: "Organisation Filter",
  searchPlaceholder: "Search organisation",
  showTagFilter: true,
};

const ICON_NAVIGATION_TREE: OrganisationNode[] = [
  {
    id: "icon-global",
    label: "Global",
    type: "global",
    icon: <Globe20Regular />,
    children: [
      {
        id: "icon-region-emea",
        label: "EMEA",
        type: "region",
        icon: <Location20Regular />,
        children: [
          {
            id: "icon-site-lund",
            label: "Lund HQ",
            type: "site",
            icon: <Building20Regular />,
            children: [
              {
                id: "icon-floor-2",
                label: "Floor 2",
                type: "floor",
                icon: <Layer20Regular />,
                children: [
                  {
                    id: "icon-room-201",
                    label: "Meeting Room 201",
                    type: "room",
                    icon: <ConferenceRoom20Regular />,
                    children: [
                      {
                        id: "icon-item-201",
                        label: "Desk booking",
                        type: "item",
                        icon: <Folder20Regular />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const SINGLE_GROUP_FILTER: FilterGroup[] = [
  {
    id: "status",
    label: "Status",
    options: [
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused" },
      { value: "archived", label: "Archived" },
    ],
  },
];

/**
 * Default
 *
 * The baseline drawer: a titled header, free-text search, the full tag filter
 * menu with active-filter chips, and a navigable organisation tree. Use this as
 * the starting point for most screens and switch features on or off via props.
 */
export const Default: Story = {
  args: defaultArgs,
};

/**
 * Without Header
 *
 * Hides the title row to save vertical space. Use when the drawer sits directly
 * beneath a page or section header that already provides context, so a second
 * heading would be redundant.
 */
export const WithoutHeader: Story = {
  args: {
    nodes: ORGANISATION_NAVIGATION_TREE,
    filterGroups: ORGANISATION_FILTER_GROUPS,
    searchPlaceholder: "Search organisation",
    showTagFilter: true,
  },
};

/**
 * Per-Level Icons
 *
 * Renders an icon before each node label, with a distinct icon per hierarchy
 * level (global, region, site, floor, room, item). Use to make deep trees
 * easier to scan and to reinforce what kind of entity each level represents.
 * Tag filtering is disabled here to keep the focus on navigation.
 */
export const PerLevelIcons: Story = {
  args: {
    nodes: ICON_NAVIGATION_TREE,
    title: "Navigation with Icons",
    searchPlaceholder: "Search organisation",
    showTagFilter: false,
  },
};

/**
 * Tag Filtering (single group)
 *
 * Demonstrates a single tag group (Status) driving the filter, with the
 * selected values controlled by app state and surfaced as dismissible chips.
 * Use when items carry one cross-cutting attribute you want users to filter by
 * independently of the hierarchy.
 */
export const TagFiltering: Story = {
  render: function TagFilteringStory() {
    const [activeFilter, setActiveFilter] = useState<TagFilter>({
      status: ["active"],
    });

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        filterGroups={SINGLE_GROUP_FILTER}
        title="Filter by Status"
        searchPlaceholder="Search organisation"
        tagFilter={activeFilter}
        onTagFilterChange={setActiveFilter}
      />
    );
  },
};

/**
 * Multi-Group Filtering
 *
 * Combines several tag groups (e.g. Status and Priority) in one menu. Selections
 * across groups are ANDed together, and every active value appears as its own
 * chip. Use when items have multiple independent attributes that users should
 * be able to combine.
 */
export const MultiGroupFiltering: Story = {
  render: function MultiGroupFilteringStory() {
    const [activeFilter, setActiveFilter] = useState<TagFilter>({
      status: ["active"],
      priority: ["high"],
    });

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        filterGroups={ORGANISATION_FILTER_GROUPS}
        title="Filter by Status and Priority"
        searchPlaceholder="Search organisation"
        tagFilter={activeFilter}
        onTagFilterChange={setActiveFilter}
      />
    );
  },
};

/**
 * Cross-Filtering Levels
 *
 * Turns on checkboxes for chosen hierarchy levels (via `selectionByLevel`) so
 * users can select one or more nodes and cross-filter the content by those
 * nodes. Use when results should be scoped to specific branches of the tree
 * rather than only by tags or search.
 */
export const CrossFilteringLevels: Story = {
  render: function CrossFilteringLevelsStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([
      "region-emea",
      "site-lund",
    ]);

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        filterGroups={ORGANISATION_FILTER_GROUPS}
        title="Cross-filter Navigation"
        searchPlaceholder="Search organisation"
        selectionByLevel={{
          region: true,
          site: true,
          folder: true,
          item: true,
        }}
        selectedNodeIds={selectedNodeIds}
        onSelectedNodeIdsChange={setSelectedNodeIds}
      />
    );
  },
};

/**
 * Subfolder Creation
 *
 * Enables a per-node menu (`enableSubfolderCreation`) for inline renaming,
 * adding child folders, and removing nodes, with changes reported via
 * `onNodesChange`. Use for editable navigation where users curate their own
 * structure (e.g. custom folders or saved groupings).
 */
export const SubfolderCreation: Story = {
  render: function SubfolderCreationStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([
      "site-lund",
    ]);

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        title="Editable Navigation"
        searchPlaceholder="Search organisation"
        showTagFilter={false}
        enableSubfolderCreation
        selectionByLevel={{
          region: true,
          site: true,
          folder: true,
          item: true,
        }}
        selectedNodeIds={selectedNodeIds}
        onSelectedNodeIdsChange={setSelectedNodeIds}
      />
    );
  },
};

/**
 * Full Height
 *
 * Renders the drawer as a full-height panel surface (`fullHeight`) with square
 * corners and a stronger divider, instead of a rounded floating card. Use when
 * the drawer is the permanent left rail of a page layout and should stretch to
 * fill the available height next to the content area.
 */
export const FullHeight: Story = {
  args: {
    ...defaultArgs,
    fullHeight: true,
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", height: "600px", width: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Resizable
 *
 * Adds a drag handle on the right edge (`resizable`) so users can adjust the
 * drawer width between `minWidth` and `maxWidth`, with the final width reported
 * via `onWidthChange`. Use when label lengths or deep trees vary and users
 * benefit from controlling how much horizontal space the drawer takes.
 */
export const Resizable: Story = {
  args: {
    ...defaultArgs,
    resizable: true,
    defaultWidth: 320,
    minWidth: 240,
    maxWidth: 480,
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", minHeight: "500px", width: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Responsive Width
 *
 * Enables `responsiveWidth` so the drawer collapses to a compact width on small
 * viewports using the `smallViewport*` props. Use when the same layout must work
 * across desktop and narrow screens without hiding the filters entirely. Resize
 * the preview to see the width adapt.
 */
export const ResponsiveWidth: Story = {
  args: {
    ...defaultArgs,
    responsiveWidth: true,
    defaultWidth: 320,
    smallViewportWidth: 220,
    smallViewportMinWidth: 200,
    smallViewportMaxWidth: 280,
  },
};
