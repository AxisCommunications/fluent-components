import {
  getPartitionedNativeProps,
  useFluent,
  useId,
} from "@fluentui/react-components";
import {
  getNativeElementProps,
  resolveShorthand,
} from "@fluentui/react-utilities";
import React from "react";

import { useSliderContext } from "../context/slider-context";
import { ThumbProps, ThumbState } from "./thumb.types";
import { toPercent } from "../utils";

export const useThumb_unstable = (
  props: ThumbProps,
  ref: React.Ref<HTMLInputElement>
): ThumbState => {
  const { min, max, disabled } = useSliderContext();

  const { dir } = useFluent();

  const rtl = dir === "rtl";

  const {
    value,
    active,
    open,
    dragging,
    valueLabelTransform,
    handleFocus,
    handleBlur,
    handleInputChange,
    handleMouseOver,
    handleMouseLeave,
  } = props;

  const offset = toPercent(value, min, max);

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: "input",
  });

  return {
    root: getNativeElementProps("div", {
      required: true,
      ...nativeProps.root,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
    }),
    input: resolveShorthand(props.input, {
      required: true,
      defaultProps: {
        id: useId("slider-thumb-", props.id),
        ref,
        ...nativeProps.primary,
        type: "range",
        min,
        max,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleInputChange,
      },
    }),
    label: resolveShorthand(props.label, {
      required: true,
      defaultProps: {
        children: valueLabelTransform ? valueLabelTransform(value) : value,
      },
    }),
    components: {
      root: "div",
      input: "input",
      label: "span",
    },
    offset: rtl ? 100 - offset : offset,
    value,
    disabled,
    active,
    open,
    dragging,
  };
};
