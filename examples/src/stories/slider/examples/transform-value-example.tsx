import { Slider } from "@axiscommunications/fluent-slider";

export function TransformValueSliderExample() {
  return (
    <Slider
      title={"Slider with transformed value"}
      min={0}
      max={100}
      valueLabelTransform={(value) => (value < 100 ? value * 2 : "∞")}
      defaultValue={50}
    />
  );
}

export const TransformValueSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";

export function TransformValueSliderExample() {
  return (
    <Slider title={"Slider with transformed value"}
      min={0}
      max={100}
      valueLabelTransform={(value) => (value < 100 ? value * 2 : "∞")}
      defaultValue={50} />
  )
}
`;
