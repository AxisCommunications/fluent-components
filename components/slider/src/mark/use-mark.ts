import { getNativeElementProps } from "@fluentui/react-utilities";
import type React from "react";

import { useSliderContext } from "../context/slider-context";
import type { MarkProps, MarkState } from "./mark.types";
import { toPercent } from "../utils";

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
