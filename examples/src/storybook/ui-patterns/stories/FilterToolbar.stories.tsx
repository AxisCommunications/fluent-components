import { FilterRegular } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterToolbar } from "../components/composites/FilterToolbar";

const meta: Meta<typeof FilterToolbar> = {
  title: "UI patterns/Filter Toolbar",
  component: FilterToolbar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Accessible label for the toolbar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterToolbar>;

export const Default: Story = {
  args: {
    filters: [
      { id: "status-in-progress", label: "Status: In Progress" },
      { id: "owner-design", label: "Owner: Design Team" },
      { id: "region-emea", label: "Region: EMEA" },
      { id: "priority-high", label: "Priority: High" },
    ],
    defaultSelectedFilterIds: ["status-in-progress", "owner-design"],
    searchPlaceholder: "Search projects",
    primaryActions: [
      { id: "refresh", label: "Refresh", appearance: "primary" },
      { id: "export", label: "Export", appearance: "secondary" },
    ],
    filterButtonLabel: "Filters",
    filterButtonIcon: <FilterRegular />,
  },
};

export const WithRemovableLabels: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([
      "status-blocked",
      "priority-high",
      "team-platform",
    ]);

    return (
      <FilterToolbar
        filters={[
          { id: "status-blocked", label: "Status: Blocked" },
          { id: "priority-high", label: "Priority: High" },
          { id: "team-platform", label: "Team: Platform" },
          { id: "owner-me", label: "Owner: Me" },
        ]}
        selectedFilterIds={selectedIds}
        onSelectedFilterIdsChange={setSelectedIds}
        searchPlaceholder="Search items"
        onSearchChange={(value) => console.log("search", value)}
        primaryActions={[
          { id: "refresh", label: "Refresh", appearance: "primary" },
          { id: "export", label: "Export", appearance: "secondary" },
        ]}
        filterButtonLabel="Filters"
        filterButtonIcon={<FilterRegular />}
      />
    );
  },
};

export const ToolbarOnly: Story = {
  args: {
    filters: [
      { id: "status-open", label: "Status: Open" },
      { id: "priority-low", label: "Priority: Low" },
    ],
    searchPlaceholder: "Search",
    primaryActions: [
      { id: "refresh", label: "Refresh", appearance: "primary" },
      { id: "export", label: "Export", appearance: "secondary" },
    ],
    selectedFilterIds: [],
    filterButtonLabel: "Filters",
    filterButtonIcon: <FilterRegular />,
  },
};
