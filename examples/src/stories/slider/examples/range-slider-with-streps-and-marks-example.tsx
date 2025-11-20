import { RangeSlider } from "@axiscommunications/fluent-slider";

export function WithStepsAndMarksRangeSliderExample() {
  return (
    <RangeSlider
      min={0}
      max={100}
      title="Range Slider with steps and marks"
      defaultValue={[50, 75]}
      marks={[
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
      step={25}
    />
  );
}

export const WithStepsAndMarksRangeSliderExampleAsString = `
import { RangeSlider } from "@axiscommunications/fluent-slider";

export function WithStepsAndMarksRangeSliderExample() {
  return (
    <RangeSlider
      min={0}
      max={100}
      title="Range Slider with steps and marks"
      defaultValue={[50, 75]}
      marks={[
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
      step={25}
    />
  )
}
`;
