import { getNativeElementProps } from "@fluentui/react-utilities";
import React from "react";

import { useSliderContext } from "../../context/slider-context";
import { toPercent } from "../../utils";
import { MarkLabelProps, MarkLabelState } from "./mark-label.types";

export const useMarkLabel_unstable = (
  props: MarkLabelProps,
  ref: React.Ref<HTMLElement>
): MarkLabelState => {
  const { min, max, disabled, values } = useSliderContext();

  const minValue = values.length > 1 ? Math.min(...values) : 0;
  const maxValue = Math.max(...values);

  const active = props.activeEqual
    ? values.some((value) => value === props.value)
    : props.value >= minValue && props.value <= maxValue;

  return {
    root: getNativeElementProps("span", {
      ref,
      children: props.label,
      ...props,
    }),
    components: {
      root: "span",
    },
    offset: toPercent(props.value, min, max),
    value: props.value,
    disabled,
    active,
  };
};
