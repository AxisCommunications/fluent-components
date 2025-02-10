import { getNativeElementProps } from "@fluentui/react-utilities";
import React from "react";

import { useSliderContext } from "../context/slider-context";
import { toPercent } from "../utils";
import { MarkProps, MarkState } from "./mark.types";

export const useMark_unstable = (
  props: MarkProps,
  ref: React.Ref<HTMLElement>
): MarkState => {
  const { min, max, disabled, values } = useSliderContext();

  const minValue = values.length > 1 ? Math.min(...values) : 0;
  const maxValue = Math.max(...values);

  return {
    root: getNativeElementProps("span", { ref, ...props }),
    components: {
      root: "span",
    },
    offset: toPercent(props.value, min, max),
    value: props.value,
    disabled,
    active: props.value >= minValue && props.value <= maxValue,
  };
};
