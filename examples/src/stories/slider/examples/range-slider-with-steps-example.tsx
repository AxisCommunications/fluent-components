import { RangeSlider } from "@axiscommunications/fluent-slider";
import React from "react";

export function WithStepsRangeSliderExample() {
  return (
    <RangeSlider
      min={0}
      max={100}
      title="Range Slider with steps"
      defaultValue={[25, 75]}
      marks={true}
      step={25}
    />
  );
}

export const WithStepsRangeSliderExampleAsString = `
import { RangeSlider } from "@axiscommunications/fluent-slider";
import React from "react";

export function WithStepsRangeSliderExample() {
  return (
    <RangeSlider min={0}
      max={100}
      title="Range Slider with steps"
      defaultValue={[25, 75]}
      marks={true}
      step={25} />
  )
}
`;
