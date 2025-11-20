import { RangeSlider } from "@axiscommunications/fluent-slider";

export function RangeSliderExample() {
  return (
    <RangeSlider
      title="Range Slider"
      min={0}
      max={100}
      defaultValue={[25, 50, 75]}
      marks={[
        { value: 20, label: "20" },
        { value: 40, label: "40" },
        { value: 60 },
        { value: 80, label: "80" },
        { value: 100, label: "-" },
      ]}
    />
  );
}

export const RangeSliderExampleAsString = `
import { RangeSlider } from "@axiscommunications/fluent-slider";

export function RangeSliderExample() {
  return (
    <RangeSlider title="Range Slider"
      min={0}
      max={100}
      defaultValue={[25, 75]}
      marks={[
        { value: 20, label: "20" },
        { value: 40, label: "40" },
        { value: 60 },
        { value: 80, label: "80" },
        { value: 100, label: "-" },
      ]} />
  )
}
`;
