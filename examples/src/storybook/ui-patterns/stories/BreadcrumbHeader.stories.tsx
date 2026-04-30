import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbHeader } from "../components/composites/BreadcrumbHeader";

/**
 * Breadcrumb Header Component
 *
 * Compact breadcrumb navigation with an inline title icon and label.
 *
 * **Fluent Guidelines Applied:**
 * - Uses Fluent breadcrumb and text primitives only
 * - Token-driven styling for spacing and typography
 * - Compact layout aligned to the Figma breadcrumb header reference
 */
const meta: Meta<typeof BreadcrumbHeader> = {
  title: "UI patterns/Breadcrumb Header",
  component: BreadcrumbHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbHeader>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Europe", onClick: () => console.log("Europe") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
  },
};

export const LongTrail: Story = {
  args: {
    breadcrumbs: [
      { label: "Global Regions" },
      { label: "Northern Europe" },
      { label: "Western Norway" },
      { label: "Bergen Municipality" },
    ],
    title: "District Overview",
  },
};

export const Interactive: Story = {
  render: (args) => <BreadcrumbHeader {...args} />,
  args: {
    breadcrumbs: [
      { label: "Europe", onClick: () => console.log("Europe") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
  },
};
