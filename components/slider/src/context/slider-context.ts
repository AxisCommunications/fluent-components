import React from "react";

const sliderContext = React.createContext<SliderContextValue | undefined>(
  undefined
);

export interface SliderContextValue {
  min: number;
  max: number;
  values: number[];
  disabled: boolean;
}

const sliderContextDefaultValue: SliderContextValue = {
  min: 0,
  max: 100,
  values: [],
  disabled: false,
};

export const SliderContextProvider = sliderContext.Provider;

export const useSliderContext = () =>
  React.useContext(sliderContext) ?? sliderContextDefaultValue;
