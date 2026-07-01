import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCard } from "../components/composites/StatCard";

/**
 * Stat Card Component
 *
 * Display key metrics with optional trend indicators.
 *
 * **Fluent Guidelines Applied:**
 * - Grid layout with proper content hierarchy
 * - Color-coded trends (green=up, red=down, neutral=same)
 * - Token-driven spacing and text sizes
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=59-160"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof StatCard> = {
  title: "UI patterns/Data Display",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Card title / label.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "text",
      description: 'Main metric value (e.g., "1,234").',
      table: { type: { summary: "string | number" } },
    },
    change: {
      control: "text",
      description: 'Optional change indicator (e.g., "+12%" or "-5%").',
      table: { type: { summary: "string | undefined" } },
    },
    trend: {
      control: "radio",
      options: ["up", "down", "neutral"],
      description:
        "Trend direction used for color coding (up = positive, down = negative, neutral = no change).",
      table: { type: { summary: "'up' | 'down' | 'neutral' | undefined" } },
    },
    icon: {
      control: false,
      description: "Optional icon or decorator shown in the card header.",
      table: { type: { summary: "ReactNode" } },
    },
    description: {
      control: "text",
      description: "Optional supporting description text.",
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
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: "Revenue",
    value: "$45,230",
    change: "+12%",
    trend: "up",
    description: "vs. last month",
  },
};

export const TrendUp: Story = {
  args: {
    title: "Active Users",
    value: "2,341",
    change: "+8%",
    trend: "up",
    description: "Last 30 days",
  },
};

export const TrendDown: Story = {
  args: {
    title: "Bounce Rate",
    value: "42%",
    change: "-3%",
    trend: "down",
    description: "Lower is better",
  },
};

export const NoTrend: Story = {
  args: {
    title: "Total Items",
    value: "1,234",
    description: "Current inventory",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        padding: "24px",
      }}
    >
      <StatCard
        title="Revenue"
        value="$45,230"
        change="+12%"
        trend="up"
        description="vs. last month"
      />
      <StatCard title="Active Users" value="2,341" change="+8%" trend="up" />
      <StatCard title="Bounce Rate" value="42%" change="-3%" trend="down" />
      <StatCard title="Total Items" value="1,234" />
    </div>
  ),
};

export const Interactive: Story = {
  render: (args) => <StatCard {...args} />,
};
