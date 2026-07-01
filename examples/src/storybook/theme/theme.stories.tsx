import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorTokens } from "../../stories/theme/components/color-tokens";
import { ThemePage } from "../../stories/theme/theme-page";
import { mainTheme } from "../../stories/theme/theme-page.types";

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

export const ColorTokenReference: Story = {
  name: "Color tokens",
  parameters: {
    layout: "padded",
  },
  render: () => <ColorTokens filter="" theme={mainTheme} />,
};
