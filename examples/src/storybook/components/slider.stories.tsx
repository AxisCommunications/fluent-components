import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactElement } from "react";
import { CustomSliderExample } from "../../stories/slider/examples/custom-example";
import { DisabledSliderExample } from "../../stories/slider/examples/disabled-example";
import { DualSectionSliderExample } from "../../stories/slider/examples/dual-section-example";
import { RangeSliderWithSectionExample } from "../../stories/slider/examples/range-slider-with-section-example";
import { WithStepsRangeSliderExample } from "../../stories/slider/examples/range-slider-with-steps-example";
import { WithStepsAndMarksRangeSliderExample } from "../../stories/slider/examples/range-slider-with-streps-and-marks-example";
import { RegularSliderExample } from "../../stories/slider/examples/regular-example";
import { SmallSliderExample } from "../../stories/slider/examples/small-example";
import { SteppingToMarksSliderExample } from "../../stories/slider/examples/stepping-to-marks-example";
import { TransformValueSliderExample } from "../../stories/slider/examples/transform-value-example";
import { TripleSectionSliderExample } from "../../stories/slider/examples/triple-section-example";
import { TripleSectionSliderNoZeroStartExample } from "../../stories/slider/examples/triple-section-no-zero-start-example";
import { ExternalButtonsSliderExample } from "../../stories/slider/examples/with-external-buttons-example";
import { WithMarkSliderExample } from "../../stories/slider/examples/with-marks-example";
import { RangeSliderExample } from "../../stories/slider/examples/with-range-example";
import { WithStepsSliderExample } from "../../stories/slider/examples/with-steps-example";

const useStyles = makeStyles({
  frame: {
    maxWidth: "640px",
  },
});

const meta: Meta = {
  title: "Components/Slider",
};

export default meta;

type Story = StoryObj<typeof meta>;

const wrap = (node: ReactElement) => {
  return function Render() {
    const styles = useStyles();

    return <div className={styles.frame}>{node}</div>;
  };
};

export const Default: Story = { render: wrap(<RegularSliderExample />) };
export const Disabled: Story = { render: wrap(<DisabledSliderExample />) };
export const Small: Story = { render: wrap(<SmallSliderExample />) };
export const WithMarks: Story = { render: wrap(<WithMarkSliderExample />) };
export const WithSteps: Story = { render: wrap(<WithStepsSliderExample />) };
export const WithStepsAndMarks: Story = {
  render: wrap(<WithStepsAndMarksRangeSliderExample />),
};
export const SteppingToMarks: Story = {
  render: wrap(<SteppingToMarksSliderExample />),
};
export const TransformValue: Story = {
  render: wrap(<TransformValueSliderExample />),
};
export const ExternalButtons: Story = {
  render: wrap(<ExternalButtonsSliderExample />),
};
export const Custom: Story = { render: wrap(<CustomSliderExample />) };
export const RangeSlider: Story = { render: wrap(<RangeSliderExample />) };
export const RangeSliderWithSteps: Story = {
  render: wrap(<WithStepsRangeSliderExample />),
};
export const DualSection: Story = {
  render: wrap(<DualSectionSliderExample />),
};
export const TripleSection: Story = {
  render: wrap(<TripleSectionSliderExample />),
};
export const TripleSectionWithNegative: Story = {
  render: wrap(<TripleSectionSliderNoZeroStartExample />),
};
export const RangeSliderWithSection: Story = {
  render: wrap(<RangeSliderWithSectionExample />),
};
