import type { Meta, StoryObj } from "@storybook/react-vite";
import { IllustrationShowcase } from "./illustration-showcase";

const meta: Meta = {
  title: "Assets/Illustrations",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => <IllustrationShowcase />,
};
