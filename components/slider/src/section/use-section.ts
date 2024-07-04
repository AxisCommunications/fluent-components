import { getNativeElementProps } from "@fluentui/react-utilities";
import React from "react";

import { useSliderContext } from "../context/slider-context";
import { SectionProps, SectionState } from "./section.types";
import { toPercent } from "../utils";

export const useSection_unstable = (
  props: SectionProps,
  ref: React.Ref<HTMLElement>
): SectionState => {
  const { min, max, disabled, values } = useSliderContext();

  const from = props.edges.from ?? min;
  const to = props.edges.to ?? max;

  /**
   * The sections center position, calculated as the midpoint between left and right.
   */
  const center = from + (to - from) / 2;

  const minValue = values.length > 1 ? Math.min(...values) : min;
  const maxValue = Math.max(...values);

  const active = (minValue > from && minValue < to)
    || (minValue <= from && maxValue > to)
    || (maxValue > from && maxValue <= to);

  return {
    root: getNativeElementProps("span", {
      ref,
      children: props.label,
      ...props,
    }),
    components: {
      root: "span",
    },
    offset: toPercent(center, min, max),
    disabled,
    active,
  };
};
