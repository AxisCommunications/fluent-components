import { axisLightTheme } from "@axiscommunications/fluent-theme";
import { FluentProvider } from "@fluentui/react-components";
import { AddRegular, ArrowSyncRegular } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "../components/composites/SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "UI patterns/Section Header",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "An advanced h2 pattern for section-level page content. All props are optional: use `title`, `description`, `meta`, and `actions` only when the section needs them, and omit everything for a no-op render.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Optional h2 heading for the current section.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
    description: {
      control: "text",
      description: "Optional supporting copy shown below the h2 heading.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
    meta: {
      control: "text",
      description: "Optional compact label shown above the heading.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
    actions: {
      control: "object",
      description:
        "Optional local action buttons. Each action object supports optional `label`, `onClick`, `icon`, `appearance`, and `disabled` fields. Actions without a label are ignored.",
      table: {
        type: {
          summary:
            "Array<{ label?: string; onClick?: () => void; icon?: ReactElement | null; appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent'; disabled?: boolean }> | undefined",
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
    meta: "Current section",
    title: "Deployments",
    description:
      "Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.",
    actions: [
      {
        label: "Refresh",
        icon: <ArrowSyncRegular />,
        appearance: "secondary",
        onClick: () => console.log("Refresh"),
      },
      {
        label: "Add target",
        icon: <AddRegular />,
        appearance: "primary",
        onClick: () => console.log("Add target"),
      },
    ],
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={axisLightTheme}>
        <Story />
      </FluentProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const CurrentSectionHeader: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Full-featured with all props: meta label, title, description, and actions.",
      },
    },
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description:
      "Use this advanced h2 to introduce the active section, clarify the task, and provide local section actions without repeating page-level identity.",
    actions: [
      {
        label: "Refresh",
        icon: <ArrowSyncRegular />,
        appearance: "secondary",
        onClick: () => console.log("Refresh"),
      },
      {
        label: "Add target",
        icon: <AddRegular />,
        appearance: "primary",
        onClick: () => console.log("Add target"),
      },
    ],
  },
};

export const Minimal: Story = {
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions.",
      },
    },
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined,
  },
};

export const WithActionsOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: "Title with actions, no meta or description.",
      },
    },
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: [
      {
        label: "Refresh",
        icon: <ArrowSyncRegular />,
        appearance: "secondary",
        onClick: () => console.log("Refresh"),
      },
      {
        label: "Add target",
        icon: <AddRegular />,
        appearance: "primary",
        onClick: () => console.log("Add target"),
      },
    ],
  },
};

export const WithoutActions: Story = {
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and description, but no actions.",
      },
    },
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description:
      "Section with meta, title, and description but no action buttons.",
    actions: undefined,
  },
};

export const WithoutDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: "Meta, title, and actions, but no description.",
      },
    },
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: [
      {
        label: "Refresh",
        icon: <ArrowSyncRegular />,
        appearance: "secondary",
        onClick: () => console.log("Refresh"),
      },
      {
        label: "Add target",
        icon: <AddRegular />,
        appearance: "primary",
        onClick: () => console.log("Add target"),
      },
    ],
  },
};

export const TitleOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: "Only a title, no meta, description, or actions.",
      },
    },
  },
  args: {
    title: "Deployments",
    description: undefined,
    meta: undefined,
    actions: undefined,
  },
};

export const TitleAndMeta: Story = {
  parameters: {
    docs: {
      description: {
        story: "Title with meta label, no description or actions.",
      },
    },
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: undefined,
    actions: undefined,
  },
};

export const WithMetaAndDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: "Meta label with title and description, but no actions.",
      },
    },
  },
  args: {
    meta: "Current section",
    title: "Deployments",
    description: "Section with meta text and description but no actions.",
    actions: undefined,
  },
};

export const ActionsWithoutTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: "Meta label with actions, but no title or description.",
      },
    },
  },
  args: {
    meta: "Quick actions",
    title: undefined,
    description: undefined,
    actions: [
      {
        label: "Refresh",
        icon: <ArrowSyncRegular />,
        appearance: "secondary",
        onClick: () => console.log("Refresh"),
      },
      {
        label: "Add target",
        icon: <AddRegular />,
        appearance: "primary",
        onClick: () => console.log("Add target"),
      },
    ],
  },
};

export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "All props undefined, component renders null with no visual presence.",
      },
    },
  },
  args: {
    title: undefined,
    description: undefined,
    meta: undefined,
    actions: undefined,
  },
};
