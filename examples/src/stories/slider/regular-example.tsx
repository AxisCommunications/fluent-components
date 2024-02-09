import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function RegularSliderExample() {
  return <Slider title={"Slider"} min={0} max={100} defaultValue={50} />;
}

export const RegularSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function RegularSliderExample() {
  return (
    <Slider title={"Slider"} min={0} max={100} defaultValue={50} />
  )
}
`;
