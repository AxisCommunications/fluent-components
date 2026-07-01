import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader } from "../components/composites/PageHeader";

/**
 * PageHeader Component
 *
 * A top-of-page section combining optional breadcrumb navigation, a page title,
 * an optional description, and an optional set of action buttons aligned to the
 * right. Use it to establish page identity and primary page-level actions.
 *
 * **Fluent Guidelines Applied:**
 * - Uses Fluent `Breadcrumb` and `Button` primitives
 * - Semantic heading and typographic hierarchy (title → description)
 * - Action buttons grouped on the trailing edge
 * - Token-based spacing, borders, and color
 */
const meta: Meta<typeof PageHeader> = {
  title: "UI patterns/Page Header",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A page-level header with optional breadcrumbs, a title, an optional description, and right-aligned action buttons. Only `title` is required; provide the other props as the page needs them.\n\n<p align='right'><a href='https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=86-367'><img width='240' src='/figma-global-components-cover.svg' alt='Open in Figma — AXIS Fluent Global components' /></a></p>",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main page title rendered as a heading.",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "Optional supporting copy shown below the title.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
    breadcrumbs: {
      control: "object",
      description:
        "Optional breadcrumb trail. Each item supports a `label` and an optional `onClick`; the final item is rendered as the current page.",
      table: {
        type: {
          summary: "Array<{ label: string; onClick?: () => void }> | undefined",
        },
      },
    },
    actions: {
      control: "object",
      description:
        "Optional right-aligned action buttons. Each action supports `label`, `onClick`, and an optional `appearance` ('primary' | 'secondary').",
      table: {
        type: {
          summary:
            "Array<{ label: string; onClick: () => void; appearance?: 'primary' | 'secondary' }> | undefined",
        },
      },
    },
    className: {
      control: "text",
      description: "Optional CSS class applied to the root element.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
  },
  args: {
    breadcrumbs: [
      { label: "Home", onClick: () => console.log("Home") },
      { label: "Workspaces", onClick: () => console.log("Workspaces") },
      { label: "My workspace" },
    ],
    title: "My workspace",
    description: "Production data workspace",
    actions: [
      { label: "Reset", onClick: () => console.log("Reset") },
      {
        label: "Apply",
        onClick: () => console.log("Apply"),
        appearance: "primary",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

/**
 * Full header with breadcrumbs, description, and actions.
 */
export const Default: Story = {};

/**
 * Header without breadcrumb navigation.
 */
export const WithoutBreadcrumbs: Story = {
  parameters: {
    docs: {
      description: {
        story: "Title, description, and actions without a breadcrumb trail.",
      },
    },
  },
  args: {
    breadcrumbs: undefined,
  },
};

/**
 * Minimal header — title only.
 */
export const Minimal: Story = {
  parameters: {
    docs: {
      description: {
        story: "Only the required title, with all optional props omitted.",
      },
    },
  },
  args: {
    breadcrumbs: undefined,
    description: undefined,
    actions: undefined,
  },
};

/**
 * Header with actions but no description.
 */
export const WithActionsOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: "Breadcrumbs, title, and actions without a description.",
      },
    },
  },
  args: {
    description: undefined,
  },
};
