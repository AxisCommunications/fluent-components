import type { Meta, StoryObj } from "@storybook/react";
import { IllustrationPage } from "../../stories/illustrations/illustration-page";

const meta: Meta = {
  title: "Assets/Illustrations",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => <IllustrationPage />,
};
