import type { Meta, StoryObj } from "@storybook/react";
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
      description: "Card title",
    },
    value: {
      control: "text",
      description: "Main metric value",
    },
    change: {
      control: "text",
      description: 'Change indicator (e.g., "+12%")',
    },
    trend: {
      control: "radio",
      options: ["up", "down", "neutral"],
      description: "Trend direction for color coding",
    },
    description: {
      control: "text",
      description: "Optional description text",
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
