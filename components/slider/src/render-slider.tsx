import React from "react";

import { getSlots } from "@fluentui/react-utilities";

import { SliderContextProvider } from "./context/slider-context";
import { SliderContextValues, SliderSlots, SliderState } from "./slider.types";

export const renderSlider_unstable = (
  state: SliderState,
  contextValues: SliderContextValues
) => {
  const { slots, slotProps } = getSlots<SliderSlots>(state);

  const { marks, markLabels, sectionLabels, thumbs } = state;

  return (
    <SliderContextProvider value={contextValues.slider}>
      <slots.root {...slotProps.root}>
        <slots.control {...slotProps.control}>
          <slots.rail {...slotProps.rail}>
            <slots.track {...slotProps.track} />
          </slots.rail>
          {marks.map((markProps) => (
            <slots.mark
              key={markProps.value.toString()}
              {...slotProps.mark}
              {...markProps}
            />
          ))}
          {markLabels.map((markLabelProps) => (
            <slots.markLabel
              key={markLabelProps.value.toString()}
              {...slotProps.markLabel}
              {...markLabelProps}
            />
          ))}

          {sectionLabels.map((sectionLabelProps) => (
            <slots.sectionLabel
              key={`${sectionLabelProps.edges.from}-${sectionLabelProps.edges.to}`}
              {...slotProps.sectionLabel}
              {...sectionLabelProps}
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
