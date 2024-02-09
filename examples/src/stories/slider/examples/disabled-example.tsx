import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function DisabledSliderExample() {
  return (
    <Slider
      title={"Slider (disabled)"}
      min={0}
      max={100}
      defaultValue={50}
      disabled
    />
  );
}

export const DisabledSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function DisabledSliderExample() {
  return (
    <Slider title={"Slider (disabled)"}
      min={0}
      max={100}
      defaultValue={50}
      disabled />
  )
}
`;
