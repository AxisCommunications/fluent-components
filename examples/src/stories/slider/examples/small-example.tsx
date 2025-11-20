import { Slider } from "@axiscommunications/fluent-slider";

export function SmallSliderExample() {
  return <Slider min={0} max={100} title={"Slider (small)"} size="small" />;
}

export const SmallSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";

export function SmallSliderExample() {
  return (
    <Slider min={0} max={100} title={"Slider (small)"} size="small" />
  )
}
`;
