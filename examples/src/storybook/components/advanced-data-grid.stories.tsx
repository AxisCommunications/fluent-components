import {
  AdvancedColumnDef,
  AdvancedDataGrid,
  AdvancedDataGridProps,
} from "@axiscommunications/fluent-advanced-data-grid";
import type { Meta, StoryObj } from "@storybook/react";
import type { JSX } from "react";
import { AdvancedDataGridExample } from "../../stories/advanced-data-grid/examples/advanced-data-grid-example";
import { AdvancedDataGridMinimalExample } from "../../stories/advanced-data-grid/examples/advanced-data-grid-minimal-example";

interface User {
  id: string;
  user: string;
  role: string;
  luckyNumber: number;
}

const users: User[] = [
  { id: "1", user: "Robin", role: "Admin", luckyNumber: 1337 },
  { id: "2", user: "Batman", role: "Hero", luckyNumber: 7 },
  { id: "3", user: "Alfred", role: "Butler", luckyNumber: 9 },
  { id: "4", user: "Joker", role: "Villain", luckyNumber: 4 },
  { id: "5", user: "Harley Quinn", role: "Villain", luckyNumber: 5 },
  { id: "6", user: "Bane", role: "Villain", luckyNumber: 6 },
  { id: "7", user: "Poison Ivy", role: "Villain", luckyNumber: 7 },
];

const columns: AdvancedColumnDef<User>[] = [
  { columnId: "user", header: "User", getValue: (u) => u.user },
  {
    columnId: "role",
    header: "Role",
    getValue: (u) => u.role,
    groupable: true,
  },
  {
    columnId: "luckyNumber",
    header: "Lucky number",
    type: "number",
    aggregation: "sum",
    getValue: (u) => u.luckyNumber,
  },
];

// `AdvancedDataGrid` is generic; alias it to a concrete item type so Storybook
// can infer `args` and render the Controls / ArgTypes table.
const AdvancedDataGridStory = AdvancedDataGrid as (
  props: AdvancedDataGridProps<User>
) => JSX.Element;

/**
 * Advanced data grid
 *
 * A data grid combined with a filter toolbar that brings advanced data grid
 * functionality to Fluent UI: global search, per-column filtering, sorting,
 * pagination, selection, column visibility, density, CSV export, pinning,
 * reordering and grouping with aggregation.
 *
 * Use the **Controls** below to toggle features and see how the grid responds.
 *
 * ## Guidelines
 *
 * - Always provide a `getRowId` that returns a stable id; it backs selection,
 *   grouping and CSV export.
 * - Set a column `type` so the filter toolbar offers the right operators and the
 *   grid sorts/aggregates correctly.
 * - Provide an `aria-label` describing the grid contents.
 * - Disable the features you do not need (e.g. `enableGrouping={false}`) to keep
 *   the toolbar focused.
 */
const meta: Meta<typeof AdvancedDataGridStory> = {
  title: "UI patterns/Advanced data grid",
  component: AdvancedDataGridStory,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    items: users,
    columns,
    getRowId: (u) => u.id,
    "aria-label": "Users",
  },
  argTypes: {
    items: {
      control: false,
      description: "The data rows to display.",
      table: { type: { summary: "TItem[]" } },
    },
    columns: {
      control: false,
      description:
        "Column definitions describing how each column is rendered, sorted, filtered and grouped.",
      table: { type: { summary: "AdvancedColumnDef<TItem>[]" } },
    },
    getRowId: {
      control: false,
      description:
        "Returns a stable, unique id for an item. Used for selection, grouping and React keys.",
      table: { type: { summary: "(item: TItem) => string" } },
    },
    selectionMode: {
      control: "inline-radio",
      options: ["single", "multiselect", "none"],
      description: "Controls how many rows can be selected at once.",
      table: {
        type: { summary: '"single" | "multiselect" | "none"' },
        defaultValue: { summary: '"multiselect"' },
      },
    },
    pageSizeOptions: {
      control: "object",
      description: "Page sizes the user can choose from in the pagination bar.",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[5, 10, 25]" },
      },
    },
    defaultPageSize: {
      control: "number",
      description: "Page size selected when the grid first renders.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "first pageSizeOptions entry" },
      },
    },
    defaultDensity: {
      control: "inline-radio",
      options: ["comfortable", "medium", "compact"],
      description: "Initial row density.",
      table: {
        type: { summary: '"comfortable" | "medium" | "compact"' },
        defaultValue: { summary: '"comfortable"' },
      },
    },
    enableSearch: {
      control: "boolean",
      description: "Shows the global quick-filter search box in the toolbar.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableFiltering: {
      control: "boolean",
      description:
        "Enables the per-column filter panel and active filter chips.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    defaultFilterModel: {
      control: "object",
      description: "Filters that are applied when the grid first renders.",
      table: { type: { summary: "FilterModelItem[]" } },
    },
    enableColumnVisibility: {
      control: "boolean",
      description: "Shows the column visibility menu in the toolbar.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableDensity: {
      control: "boolean",
      description: "Shows the density toggle in the toolbar.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableExport: {
      control: "boolean",
      description: "Enables exporting the visible rows as a CSV file.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableGrouping: {
      control: "boolean",
      description: "Enables grouping rows by a groupable column.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enablePinning: {
      control: "boolean",
      description: "Enables pinning columns to the left or right edge.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableReordering: {
      control: "boolean",
      description: "Enables drag-and-drop column reordering.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    enableRowReordering: {
      control: "boolean",
      description: "Enables drag-and-drop row reordering.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    exportFileName: {
      control: "text",
      description: "File name (without extension) used for the CSV export.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"data"' },
      },
    },
    emptyState: {
      control: false,
      description: "Content rendered when there are no rows to display.",
      table: { type: { summary: "ReactNode" } },
    },
    onSelectionChange: {
      control: false,
      description:
        "Called with the selected row ids whenever the selection changes.",
      table: { type: { summary: "(selectedRowIds: string[]) => void" } },
    },
    "aria-label": {
      control: "text",
      description: "Accessible label for the underlying grid.",
      table: { type: { summary: "string" } },
    },
    className: {
      control: "text",
      description: "Additional class applied to the grid root element.",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AdvancedDataGridStory>;

/**
 * Interactive playground. Use the **Controls** panel to toggle features such as
 * search, filtering, grouping, pinning and export on the sample data.
 */
export const Playground: Story = {};

/**
 * Reorder both columns and rows with native drag-and-drop. Grab any column
 * header and drag it onto another column, or grab a row and drag it onto another
 * row — a drop indicator shows where it will land. Column reordering is enabled
 * with `enableReordering` (the column header menu also offers **Move left** /
 * **Move right** as a keyboard-accessible alternative), and row reordering is
 * enabled with `enableRowReordering`.
 */
export const DragAndDrop: Story = {
  args: {
    enableReordering: true,
    enableRowReordering: true,
    enableGrouping: false,
    enablePinning: false,
    enableExport: false,
    enableColumnVisibility: false,
    selectionMode: "none",
  },
};

/**
 * Per-column filtering. Open the **Filters** menu next to the search box to
 * toggle saved filters or choose **Add filter** to build a new one inline. The
 * filters seeded through `defaultFilterModel` appear in the menu on first
 * render; enabled ones are applied immediately and shown as dismissible chips,
 * while disabled ones stay available to switch on later.
 */
export const ColumnFiltering: Story = {
  args: {
    defaultFilterModel: [
      { columnId: "role", operator: "equals", value: "Villain" },
      { columnId: "user", operator: "contains", value: "a", enabled: false },
    ],
    enableGrouping: false,
    enablePinning: false,
    enableExport: false,
    enableReordering: false,
    enableColumnVisibility: false,
    selectionMode: "none",
  },
};

/**
 * Every capability enabled: global search, per-column filtering, sorting,
 * selection, column visibility, density, CSV export, pinning, reordering and
 * grouping with aggregation.
 */
export const FullFeatured: Story = {
  render: () => <AdvancedDataGridExample />,
  parameters: { controls: { disable: true } },
};

/**
 * Only the required props (`items`, `columns`, `getRowId`) with most toolbar
 * features turned off — the smallest viable configuration.
 */
export const Minimal: Story = {
  render: () => <AdvancedDataGridMinimalExample />,
  parameters: { controls: { disable: true } },
};
