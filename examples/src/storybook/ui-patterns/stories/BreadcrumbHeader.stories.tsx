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
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=53-157"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof BreadcrumbHeader> = {
  title: "UI patterns/Breadcrumb Header",
  component: BreadcrumbHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    breadcrumbs: {
      control: "object",
      description:
        "Breadcrumb items shown before the title. Each item supports a `label` and an optional `onClick`. The trail collapses into a 'More' menu when space is limited.",
      table: {
        type: {
          summary: "Array<{ label: string; onClick?: () => void }>",
        },
      },
    },
    title: {
      control: "text",
      description: "Main title shown after the breadcrumb trail.",
      table: { type: { summary: "string" } },
    },
    icon: {
      control: false,
      description: "Optional leading icon shown in the title area.",
      table: { type: { summary: "ReactNode" } },
    },
    maxDisplayedItems: {
      control: "number",
      description:
        "Maximum number of breadcrumb items to display before collapsing the middle items into an overflow menu.",
      table: { type: { summary: "number | undefined" } },
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the breadcrumb navigation landmark.",
      table: { type: { summary: "string | undefined" } },
    },
    className: {
      control: "text",
      description: "Optional CSS class applied to the root element.",
      table: { type: { summary: "string | undefined" } },
    },
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
