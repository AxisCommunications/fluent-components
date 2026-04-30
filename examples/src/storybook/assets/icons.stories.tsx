import type { Meta, StoryObj } from "@storybook/react";
import { IconPage } from "../../stories/icons/icon-page";

const meta: Meta = {
  title: "Assets/Icons",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => <IconPage />,
};
