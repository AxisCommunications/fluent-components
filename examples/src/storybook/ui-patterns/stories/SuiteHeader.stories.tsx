import type { Meta, StoryObj } from "@storybook/react";
import { SuiteHeader } from "../components/suite/SuiteHeader";

const meta: Meta<typeof SuiteHeader> = {
  title: "UI patterns/Suite Header",
  component: SuiteHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A suite header pattern with app launcher, product name, global search, quick actions, and user avatar.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuiteHeader>;

export const Default: Story = {
  args: {
    productName: "Product name",
    showSearch: true,
  },
};

export const WithAppLauncher: Story = {
  args: {
    productName: "Product name",
    showAppLauncher: false,
    showSearch: true,
  },
};

export const WithTimeDate: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
    showTimeDate: true,
  },
};

export const WithoutSearch: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
  },
};
