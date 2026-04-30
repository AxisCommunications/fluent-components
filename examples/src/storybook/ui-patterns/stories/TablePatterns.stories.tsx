import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../components/composites/DataTable";

/**
 * Data Table Component
 *
 * Composable table structure with Root/Header/Row pattern.
 *
 * **Fluent Guidelines Applied:**
 * - Semantic `<table>` structure with proper `<thead>` and `<tbody>`
 * - Token-driven spacing, colors, and borders
 * - Hover states for row interactivity
 */
const meta: Meta<typeof DataTable.Root> = {
  title: "UI patterns/Table Patterns",
  component: DataTable.Root,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof DataTable.Root>;

const sampleColumns = [
  { label: "Name", width: "200px" },
  { label: "Email", width: "250px" },
  { label: "Status", width: "120px" },
  { label: "Created", width: "150px" },
];

const sampleData = [
  ["John Doe", "john@example.com", "Active", "Jan 15, 2024"],
  ["Jane Smith", "jane@example.com", "Active", "Jan 10, 2024"],
  ["Bob Johnson", "bob@example.com", "Inactive", "Jan 5, 2024"],
  ["Alice Williams", "alice@example.com", "Pending", "Jan 1, 2024"],
  ["Charlie Brown", "charlie@example.com", "Active", "Dec 28, 2023"],
];

/**
 * Default data table with sample data.
 */
export const Default: Story = {
  render: () => (
    <DataTable.Root>
      <DataTable.Header columns={sampleColumns} />
      <tbody>
        {sampleData.map((row, idx) => (
          <DataTable.Row key={idx} cells={row} />
        ))}
      </tbody>
    </DataTable.Root>
  ),
};

/**
 * Table with row click handlers.
 */
export const WithRowActions: Story = {
  render: () => (
    <DataTable.Root>
      <DataTable.Header columns={sampleColumns} />
      <tbody>
        {sampleData.map((row, idx) => (
          <DataTable.Row
            key={idx}
            cells={row}
            onRowAction={() => alert(`Clicked row: ${row[0]}`)}
          />
        ))}
      </tbody>
    </DataTable.Root>
  ),
};

/**
 * Empty table state.
 */
export const Empty: Story = {
  render: () => (
    <DataTable.Root>
      <DataTable.Header columns={sampleColumns} />
      <tbody>
        <tr>
          <td
            colSpan={4}
            style={{ textAlign: "center", padding: "40px", color: "#666" }}
          >
            No data available
          </td>
        </tr>
      </tbody>
    </DataTable.Root>
  ),
};

/**
 * Interactive table story.
 */
export const Interactive: Story = {
  render: () => (
    <DataTable.Root>
      <DataTable.Header columns={sampleColumns} />
      <tbody>
        {sampleData.map((row, idx) => (
          <DataTable.Row key={idx} cells={row} />
        ))}
      </tbody>
    </DataTable.Root>
  ),
};
