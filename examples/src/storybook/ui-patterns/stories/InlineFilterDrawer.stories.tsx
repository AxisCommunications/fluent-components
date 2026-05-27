import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  type DeviceTypeFilter,
  InlineFilterDrawer,
  type InlineFilterDrawerProps,
  ORGANISATION_NAVIGATION_TREE,
  type OrganisationNode,
} from "../components/composites/InlineFilterDrawer";

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
    showDeviceTypeFilter: {
      control: "boolean",
      description: "Shows camera/audio/access control filter buttons",
    },
    enableSubfolderCreation: {
      control: "boolean",
      description:
        "Enables + action on each level to add generic folders or real locations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineFilterDrawer>;

const defaultArgs: InlineFilterDrawerProps = {
  nodes: ORGANISATION_NAVIGATION_TREE,
  title: "Organisation Filter",
  searchPlaceholder: "Search organisation",
  showDeviceTypeFilter: true,
};

const TOPOLOGY_DOMAIN_TREE: OrganisationNode[] = [
  {
    id: "loc-001",
    label: "Sweden (GeographicalArea)",
    type: "global",
    children: [
      {
        id: "loc-002",
        label: "Stockholm (GeographicalArea)",
        type: "region",
        children: [
          {
            id: "loc-003",
            label: "Stockholm Office (Site) - timeZone: Europe/Stockholm",
            type: "site",
            children: [
              {
                id: "loc-004",
                label:
                  "World Trade Center (Building) - buildingType: OfficeBuilding",
                type: "building",
                children: [
                  {
                    id: "loc-005",
                    label: "Ground Level (Floor) - floorLevel: G",
                    type: "city",
                    children: [
                      {
                        id: "loc-006",
                        label: "Entrance (Room) - roomType: Lobby",
                        type: "zoneOrArea",
                        children: [
                          {
                            id: "loc-007",
                            label:
                              "Entrance Gates (AreaOfInterest) - dataSource:camera-101",
                            type: "zoneOrArea",
                          },
                          {
                            id: "loc-008",
                            label:
                              "Cafe (AreaOfInterest) - dataSource:audio-sensor-1",
                            type: "zoneOrArea",
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
    ],
  },
];

export const Default: Story = {
  args: defaultArgs,
};

export const DeviceModelSearch: Story = {
  args: {
    nodes: ORGANISATION_NAVIGATION_TREE,
    title: "AXIS Device Navigation",
    searchPlaceholder: "Search model, city, site, or area",
    showDeviceTypeFilter: true,
  },
};

export const DeviceTypeFiltering: Story = {
  render: function DeviceTypeFilteringStory() {
    const [activeFilter, setActiveFilter] = useState<DeviceTypeFilter>([
      "camera",
    ]);

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        title="AXIS Device Navigation"
        searchPlaceholder="Search model, city, site, or area"
        deviceTypeFilter={activeFilter}
        onDeviceTypeFilterChange={setActiveFilter}
      />
    );
  },
};

export const CrossFilteringLevels: Story = {
  render: function CrossFilteringLevelsStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([
      "region-emea",
      "site-lund-hq",
    ]);

    return (
      <InlineFilterDrawer
        nodes={ORGANISATION_NAVIGATION_TREE}
        title="Cross-filter Navigation"
        searchPlaceholder="Search model, city, site, or area"
        selectionByLevel={{
          global: true,
          region: true,
          country: true,
          city: true,
          site: true,
          building: true,
          zoneOrArea: true,
          device: true,
        }}
        selectedNodeIds={selectedNodeIds}
        onSelectedNodeIdsChange={setSelectedNodeIds}
      />
    );
  },
};

export const TopologyDomainConcepts: Story = {
  render: function TopologyDomainConceptsStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([
      "loc-003",
      "loc-007",
    ]);

    return (
      <InlineFilterDrawer
        nodes={TOPOLOGY_DOMAIN_TREE}
        title="Topology Domain - Location Hierarchy"
        searchPlaceholder="Search location, type, or reference"
        showDeviceTypeFilter={false}
        selectionByLevel={{
          global: true,
          region: true,
          site: true,
          building: true,
          city: true,
          zoneOrArea: true,
          device: false,
        }}
        selectedNodeIds={selectedNodeIds}
        onSelectedNodeIdsChange={setSelectedNodeIds}
      />
    );
  },
};

export const SubfolderCreationWithAutocomplete: Story = {
  render: function SubfolderCreationWithAutocompleteStory() {
    const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([
      "loc-003",
      "loc-007",
    ]);

    return (
      <InlineFilterDrawer
        nodes={TOPOLOGY_DOMAIN_TREE}
        title="Topology Domain - Add Subfolders"
        searchPlaceholder="Search location, type, or reference"
        showDeviceTypeFilter={false}
        enableSubfolderCreation
        selectionByLevel={{
          global: true,
          region: true,
          site: true,
          building: true,
          city: true,
          zoneOrArea: true,
          device: false,
        }}
        selectedNodeIds={selectedNodeIds}
        onSelectedNodeIdsChange={setSelectedNodeIds}
      />
    );
  },
};
