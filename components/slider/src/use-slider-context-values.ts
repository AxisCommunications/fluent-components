import { useMemo } from "react";

import { SliderContextValues, SliderState } from "./slider.types";

export const useSliderContextValues = (
  state: SliderState
): SliderContextValues => {
  const { min, max, disabled, values } = state;
  const slider = useMemo(
    () => ({
      min,
      max,
      disabled,
      values,
    }),
    [min, max, disabled, values]
  );
  return { slider };
};
