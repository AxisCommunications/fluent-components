import { getSlots } from "@fluentui/react-utilities";

import { SliderContextProvider } from "./context/slider-context";
import type {
  SliderContextValues,
  SliderSlots,
  SliderState,
} from "./slider.types";
import React from "react";

export const renderSlider_unstable = (
  state: SliderState,
  contextValues: SliderContextValues
) => {
  const { slots, slotProps } = getSlots<SliderSlots>(state);

  const { marks, markLabels, thumbs } = state;

  return (
    <SliderContextProvider value={contextValues.slider}>
      <slots.root {...slotProps.root}>
        <slots.control {...slotProps.control}>
          <slots.rail {...slotProps.rail}>
            <slots.track {...slotProps.track} />
            {marks.map((markProps) => (
              <slots.mark
                key={markProps.value.toString()}
                {...slotProps.mark}
                {...markProps}
              />
            ))}
          </slots.rail>
          {markLabels.map((markLabelProps) => (
            <slots.markLabel
              key={markLabelProps.value.toString()}
              {...slotProps.markLabel}
              {...markLabelProps}
            />
          ))}
          {thumbs.map((thumbProps) => (
            <slots.thumb
              key={thumbProps["data-index"]}
              {...slotProps.thumb}
              {...thumbProps}
            />
          ))}
        </slots.control>
      </slots.root>
    </SliderContextProvider>
  );
};
