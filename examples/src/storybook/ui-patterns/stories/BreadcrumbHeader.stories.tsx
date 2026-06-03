import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbHeader } from "../components/composites/BreadcrumbHeader";

/**
 * Breadcrumb Header Component
 *
 * A header component essential for navigation, showcasing a clear title that indicates the current
 * selection or a breadcrumb trail to illustrate the user's path. This aids users in understanding
 * their location within the application.
 *
 * ## Properties
 *
 * The compact variant has a low visual emphasis and only displays the breadcrumb trail and title.
 * This variant is recommended to use when:
 *
 * - Navigation paths are short, simple, or self-explanatory
 * - Space or layout constraints prevent using the full page header
 *
 * ## Behaviour
 *
 * In responsive designs, when space is limited, the breadcrumb component smartly collapses its
 * central content into a "More" menu, as detailed in the
 * [breadcrumb documentation](https://react.fluentui.dev/?path=/docs/components-breadcrumb--docs).
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

/**
 * Resize the container to see breadcrumbs progressively collapse into an
 * overflow menu as space becomes limited.
 */
export const Overflow: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 380,
          border: "1px dashed #ccc",
          padding: 8,
          resize: "horizontal",
          overflow: "auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    breadcrumbs: [
      { label: "Europe", onClick: () => console.log("Europe") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
      { label: "District", onClick: () => console.log("District") },
    ],
    title: "City",
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
