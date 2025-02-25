import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { renderSlider_unstable } from "./render-slider";
import { RangeSliderProps } from "./slider.types";
import { useRangeSlider_unstable } from "./use-range-slider";
import { useSliderContextValues } from "./use-slider-context-values";
import { useSliderStyles_unstable } from "./use-slider-styles";

export const RangeSlider: ForwardRefComponent<RangeSliderProps> =
  React.forwardRef((props, ref) => {
    const state = useRangeSlider_unstable(props, ref);
    const contextValues = useSliderContextValues(state);

    useSliderStyles_unstable(state);

    return renderSlider_unstable(state, contextValues);
  });

RangeSlider.displayName = "RangeSlider";
