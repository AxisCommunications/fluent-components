import type { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { renderSlider_unstable } from "./render-slider";
import type { SliderProps } from "./slider.types";
import { useSlider_unstable } from "./use-slider";
import { useSliderContextValues } from "./use-slider-context-values";
import { useSliderStyles_unstable } from "./use-slider-styles";

export const Slider: ForwardRefComponent<SliderProps> = React.forwardRef(
  (props, ref) => {
    const state = useSlider_unstable(props, ref);
    const contextValues = useSliderContextValues(state);

    useSliderStyles_unstable(state);

    return renderSlider_unstable(state, contextValues);
  }
);

Slider.displayName = "Slider";
