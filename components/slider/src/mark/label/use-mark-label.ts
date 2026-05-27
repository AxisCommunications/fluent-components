import {
  getNativeElementProps,
  useMergedRefs,
} from "@fluentui/react-utilities";
import React, { useLayoutEffect, useRef, useState } from "react";

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

  const [labelWidth, setLabelWidth] = useState(0);
  const el = useRef<HTMLElement | null>(null);
  const labelRef = useMergedRefs(ref, el);

  useLayoutEffect(() => {
    const element = el.current;
    if (element === null) {
      return;
    }
    setLabelWidth(element.clientWidth);

    if (typeof window.ResizeObserver === "undefined") {
      return;
    }
    const observer = new window.ResizeObserver((entries) => {
      if (entries === undefined || entries.length === 0) {
        return;
      }
      for (const entry of entries) {
        setLabelWidth(entry.target.clientWidth);
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return {
    root: getNativeElementProps("span", {
      ref: labelRef,
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
    labelWidth,
  };
};
