import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { renderSlider_unstable } from "./render-slider";
import { RangeSliderProps } from "./slider.types";
import { useSliderContextValues } from "./use-slider-context-values";
import { useSliderStyles_unstable } from "./use-slider-styles";
import { useRangeSlider_unstable } from "./use-range-slider";

export const RangeSlider: ForwardRefComponent<RangeSliderProps> = React
  .forwardRef((props, ref) => {
    const state = useRangeSlider_unstable(props, ref);
    const contextValues = useSliderContextValues(state);

    useSliderStyles_unstable(state);

    return renderSlider_unstable(state, contextValues);
  });

RangeSlider.displayName = "RangeSlider";
