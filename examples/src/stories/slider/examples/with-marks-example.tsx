import { Slider } from "@axiscommunications/fluent-slider";

export function WithMarkSliderExample() {
  return (
    <Slider
      title={"Slider with marks"}
      min={0}
      max={100}
      defaultValue={50}
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
    />
  );
}

export const WithMarkSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";

export function WithMarkSliderExample() {
  return (
    <Slider title={"Slider with marks"}
      min={0}
      max={100}
      defaultValue={50}
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]} />
  )
}
`;
