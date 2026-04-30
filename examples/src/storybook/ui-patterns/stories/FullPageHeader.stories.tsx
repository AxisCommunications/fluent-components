import { FluentProvider } from "@fluentui/react-components";
import {
  AppsRegular,
  PeopleRegular,
  RocketRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { FullPageHeader } from "../components/composites/FullPageHeader";
import { dsgLightTheme } from "../theme/dsgTheme";

/**
 * Full Page Header Component
 *
 * Page-level header composed from the breadcrumb header, optional status messaging,
 * right-side actions, and optional page tabs.
 */
const meta: Meta<typeof FullPageHeader> = {
  title: "UI patterns/Full Page Header",
  component: FullPageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={dsgLightTheme}>
        <Story />
      </FluentProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FullPageHeader>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Europe", onClick: () => console.log("Europe") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
    status: {
      label: "Offline",
      meta: "Last sync 2 hours ago",
      color: "warning",
    },
    actions: [
      {
        label: "Create deployment pipeline",
        icon: <RocketRegular />,
        appearance: "secondary",
      },
      { label: "Create app", icon: <AppsRegular />, appearance: "secondary" },
      {
        label: "Manage access",
        icon: <PeopleRegular />,
        appearance: "secondary",
      },
    ],
    tabs: [
      { value: "overview", label: "Overview" },
      { value: "data", label: "Data" },
      { value: "pipelines", label: "Pipelines" },
    ],
    defaultSelectedTab: "overview",
  },
};

export const WithoutStatus: Story = {
  args: {
    breadcrumbs: [
      { label: "Europe" },
      { label: "Norway" },
      { label: "Bergen" },
    ],
    title: "City",
    actions: [
      { label: "Create app", icon: <AppsRegular />, appearance: "secondary" },
    ],
    tabs: [
      { value: "overview", label: "Overview" },
      { value: "data", label: "Data" },
    ],
    defaultSelectedTab: "overview",
  },
};

export const Minimal: Story = {
  args: {
    breadcrumbs: [{ label: "Europe" }, { label: "Norway" }],
    title: "City",
  },
};
