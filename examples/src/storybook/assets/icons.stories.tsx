import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconShowcase } from "./icon-showcase";

const meta: Meta = {
  title: "Assets/Icons",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => <IconShowcase />,
};
