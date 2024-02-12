import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function SteppingToMarksSliderExample() {
  return (
    <Slider
      title={"Slider stepping to marks"}
      min={0}
      max={100}
      defaultValue={50}
      step="marks"
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
    />
  );
}

export const SteppingToMarksSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";
import React from "react";

export function SteppingToMarksSliderExample() {
  return (
    <Slider title={"Slider stepping to marks"}
      min={0}
      max={100}
      defaultValue={50}
      step="marks"
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]} />
  )
}
`;
