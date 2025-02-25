import React, { useMemo } from "react";

import {
  RangeSliderOnChangeData,
  SliderProps,
  SliderState,
} from "./slider.types";
import { useRangeSlider_unstable } from "./use-range-slider";

export const useSlider_unstable = (
  props: SliderProps,
  ref: React.Ref<HTMLElement>
): SliderState => {
  const {
    defaultValue: defaultValueProp,
    value: valueProp,
    onChange: onChangeProp,
    onChangeCommitted: onChangeCommittedProp,
    ...remainingProps
  } = props;

  const onChange = onChangeProp
    ? (data: RangeSliderOnChangeData) => {
        onChangeProp({ value: data.value[0] });
      }
    : undefined;

  const onChangeCommitted = onChangeCommittedProp
    ? (data: RangeSliderOnChangeData) => {
        onChangeCommittedProp({ value: data.value[0] });
      }
    : undefined;

  const defaultValue = useMemo(
    () => (defaultValueProp !== undefined ? [defaultValueProp] : undefined),
    [defaultValueProp]
  );
  const value = useMemo(
    () => (valueProp !== undefined ? [valueProp] : undefined),
    [valueProp]
  );

  return useRangeSlider_unstable(
    {
      ...remainingProps,
      defaultValue,
      value,
      onChange,
      onChangeCommitted,
    },
    ref
  );
};
