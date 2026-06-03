import type { Meta, StoryObj } from "@storybook/react";
import { FullPageHeader } from "../components/composites/FullPageHeader";

/**
 * Full Page Header (Main Content Page)
 *
 * A header component essential for navigation, showcasing a clear title that indicates the current
 * selection or a breadcrumb trail to illustrate the user's path. This aids users in understanding
 * their location within the application.
 *
 * It also features a tab component for easy access to related sections, enhancing the overall user
 * experience with quick transitions between different views.
 *
 * Additionally, it includes an info area for displaying important status updates when needed.
 *
 * ## Properties
 *
 * The detailed variant contains more information and shows both the breadcrumb trail, title,
 * status messaging, actions, and tabs. It also displays contextual information. This variant
 * is recommended to use when:
 *
 * - Users need clear awareness of the full process, including completed, current, and upcoming steps
 * - Step titles provide meaningful context for understanding the flow
 * - Users need confirmation of progress but do not need an overview of all steps
 *
 * ## Behaviour
 *
 * In responsive designs, when space is limited, the breadcrumb component smartly collapses its
 * central content into a "More" menu, as detailed in the
 * [breadcrumb documentation](https://react.fluentui.dev/?path=/docs/components-breadcrumb--docs).
 * Tabs then adjust to fit the available space.
 *
 * When even less space is available the tabs will break onto a new line and position themselves
 * below the breadcrumbs or title. This ensures a clean layout that adapts seamlessly to different
 * screen sizes, enhancing user navigation.
 */
const meta: Meta<typeof FullPageHeader> = {
  title: "UI patterns/Full Page Header",
  component: FullPageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
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
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger",
    },
    tabs: [
      { value: "first", label: "First Tab" },
      { value: "second", label: "Second Tab" },
      { value: "third", label: "Third Tab" },
      { value: "fourth", label: "Fourth Tab" },
    ],
    defaultSelectedTab: "first",
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
    tabs: [
      { value: "first", label: "First Tab" },
      { value: "second", label: "Second Tab" },
      { value: "third", label: "Third Tab" },
      { value: "fourth", label: "Fourth Tab" },
    ],
    defaultSelectedTab: "first",
  },
};

export const Minimal: Story = {
  args: {
    breadcrumbs: [{ label: "Europe" }, { label: "Norway" }],
    title: "City",
  },
};

/**
 * When space is limited, the breadcrumb collapses its central content into a
 * "More" menu and tabs adjust to fit the available space.
 */
export const ResponsiveBreadcrumbOverflow: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 480,
          border: "1px dashed #ccc",
          padding: 16,
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
      { label: "Scandinavia", onClick: () => console.log("Scandinavia") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Western Norway", onClick: () => console.log("Western Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger",
    },
    tabs: [
      { value: "first", label: "First Tab" },
      { value: "second", label: "Second Tab" },
      { value: "third", label: "Third Tab" },
      { value: "fourth", label: "Fourth Tab" },
    ],
    defaultSelectedTab: "first",
  },
};

/**
 * When even less space is available, the tabs break onto a new line and
 * position themselves below the breadcrumbs or title.
 * This works both with and without action buttons.
 */
export const ResponsiveStackedTabs: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 380,
          border: "1px dashed #ccc",
          padding: 16,
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
      { label: "Scandinavia", onClick: () => console.log("Scandinavia") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Western Norway", onClick: () => console.log("Western Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger",
    },
    tabs: [
      { value: "first", label: "First Tab" },
      { value: "second", label: "Second Tab" },
      { value: "third", label: "Third Tab" },
      { value: "fourth", label: "Fourth Tab" },
    ],
    defaultSelectedTab: "first",
  },
};

/**
 * Tabs stack below the breadcrumb even when there are no action buttons,
 * ensuring the layout adapts to limited space regardless of header configuration.
 */
export const ResponsiveStackedTabsNoActions: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 380, border: "1px dashed #ccc", padding: 16 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    breadcrumbs: [
      { label: "Europe", onClick: () => console.log("Europe") },
      { label: "Norway", onClick: () => console.log("Norway") },
      { label: "Bergen", onClick: () => console.log("Bergen") },
    ],
    title: "City",
    status: {
      label: "Unreachable",
      meta: "Checked every 45 seconds",
      color: "danger",
    },
    tabs: [
      { value: "first", label: "First Tab" },
      { value: "second", label: "Second Tab" },
      { value: "third", label: "Third Tab" },
      { value: "fourth", label: "Fourth Tab" },
    ],
    defaultSelectedTab: "first",
  },
};
