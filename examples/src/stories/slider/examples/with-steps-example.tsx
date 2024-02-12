import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function WithStepsSliderExample() {
  return (
    <Slider
      min={0}
      max={100}
      title="Slider with Steps"
      defaultValue={50}
      marks={true}
      step={10}
    />
  );
}

export const WithStepsSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function WithStepsSliderExample() {
  return (
    <Slider min={0}
      max={100}
      title="Slider with Steps"
      defaultValue={50}
      marks={true}
      step={10} />
  )
}
`;
