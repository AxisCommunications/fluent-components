import type { Meta, StoryObj } from "@storybook/react";
import { CustomStepperDialogExample } from "../../stories/stepper/examples/custom-style-example";
import { MinimalWithCustomFooterStepperDialogExample } from "../../stories/stepper/examples/minimal-with-counter-stepper-example";
import { StepperDialogExample } from "../../stories/stepper/examples/stepper-dialog-example";
import { VerticalStepperDialogExample } from "../../stories/stepper/examples/vertical-stepper-dialog-example";

const meta: Meta = {
  title: "Components/Stepper",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  render: () => <StepperDialogExample />,
};

export const VerticalDialog: Story = {
  render: () => <VerticalStepperDialogExample />,
};

export const CustomStyles: Story = {
  render: () => <CustomStepperDialogExample />,
};

export const MinimalWithCounter: Story = {
  render: () => <MinimalWithCustomFooterStepperDialogExample />,
};
