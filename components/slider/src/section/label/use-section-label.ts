import { getNativeElementProps } from "@fluentui/react-utilities";
import React from "react";

import { useSliderContext } from "../../context/slider-context";
import {
  SectionLabelProps,
  SectionLabelState,
} from "./section-label.types";
import { toPercent } from "../../utils";

export const useSectionLabel_unstable = (
  props: SectionLabelProps,
  ref: React.Ref<HTMLElement>
): SectionLabelState => {
  const { min, max, disabled, values } = useSliderContext();

  /**
   * The left (end) section position.
   */
  const left = props.edges.left ?? min;

  /**
   * The right (start) section position.
   */
  const right = props.edges.right ?? max;

  /**
   * The sections center position, calculated as the midpoint between left and right.
   */
  const center = left + (right - left) / 2;

  const maxValue = Math.max(...values);

  // Purpose is to only active labels when value is on the section label and not on the mark.
  const isBeyondLeftOrLeftIsMin = maxValue > left
    || maxValue === left && left === min;
  const isBeforeRightOrRightIsMax = maxValue < right
    || maxValue === right && right === max;
  const active = isBeyondLeftOrLeftIsMin
    && isBeforeRightOrRightIsMax;

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
