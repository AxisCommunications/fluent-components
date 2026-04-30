import type { Meta, StoryObj } from "@storybook/react";
import { ThemePage } from "../../stories/theme/theme-page";

const meta: Meta = {
  title: "Theme/Token Explorer",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Explorer: Story = {
  render: () => <ThemePage />,
};
