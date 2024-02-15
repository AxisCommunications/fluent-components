import {
  useFluent,
  useFocusWithin,
  useMergedRefs,
} from "@fluentui/react-components";
import {
  clamp,
  getNativeElementProps,
  resolveShorthand,
  useControllableState,
  useEventCallback,
} from "@fluentui/react-utilities";
import React, {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Mark } from "./mark/mark";
import { MarkProps } from "./mark/mark.types";
import { RangeSliderProps, SliderState } from "./slider.types";
import { Thumb } from "./thumb/thumb";
import { ThumbProps } from "./thumb/thumb.types";
import { toPercent } from "./utils";
import { MarkLabelProps } from "./mark/label/mark-label.types";
import { MarkLabel } from "./mark/label/mark-label";
import { sliderClassNames } from "./use-slider-styles";

const asc = (a: number, b: number): number => a - b;

const isMouseEvent = (event: MouseEvent | TouchEvent): event is MouseEvent =>
  event.type.startsWith("mouse");

const getClientX = (
  e: MouseEvent | TouchEvent,
  touchId: RefObject<number | undefined>
): number | undefined => {
  if (isMouseEvent(e)) {
    return e.clientX;
  }
  for (const touch of e.changedTouches) {
    if (touch.identifier === touchId.current) {
      return touch.clientX;
    }
  }

  return undefined;
};

const snapToNextValue = (
  currentValue: number,
  newValue: number,
  values: number[]
) => {
  const currentMarkIndex = values.indexOf(currentValue);
  if (currentMarkIndex < 0) {
    return findClosest(newValue, values).value;
  }

  if (newValue < currentValue) {
    return currentMarkIndex > 0 ? values[currentMarkIndex - 1] : undefined;
  } else if (newValue > currentValue) {
    return currentMarkIndex < values.length - 1
      ? values[currentMarkIndex + 1]
      : undefined;
  }

  // this can't actually happen, since there will be no change event if
  // value is unchanged.
  return currentValue;
};

const findClosest = (value: number, candidates: number[]) => {
  const closest = candidates
    .map((v, index) => ({ value: v, index, distance: Math.abs(v - value) }))
    .sort((a, b) => a.distance - b.distance)[0];
  return { value: closest.value, index: closest.index };
};

const isMarkLabelElement = (target: EventTarget | null): boolean => {
  if (
    !target || !(target instanceof Element)
    || target.classList.contains(sliderClassNames.root)
  ) {
    return false;
  }
  if (target.classList.contains(sliderClassNames.mark.label)) {
    return true;
  }
  return isMarkLabelElement(target.parentNode);
};

export const useRangeSlider_unstable = (
  props: RangeSliderProps,
  ref: React.Ref<HTMLElement>
): SliderState => {
  const {
    valueLabelTransform,
    disabled,
    size,
    marks: markDefs,
    step: stepProp,
    min,
    max,
    defaultValue: defaultValues,
    value: values,
    onChange,
    onChangeCommitted,
  } = props;

  const [internalValues, setInternalValues] = useControllableState({
    state: values,
    defaultState: defaultValues,
    initialState: [min],
  });

  // this is the index of a thumb which value label is supposed to be open for any reason other than touch, such as
  // having focus or being hovered by the mouse.
  const [open, setOpen] = useState<number>(-1);
  // this is true if the user has started dragging the thumb, not just touching it
  const [dragging, setDragging] = useState<boolean>(false);
  // this is the index of thumbs that the user is currently touching or holding mouse down on (not necessarily
  // dragging yet)
  const [active, setActive] = useState<number>(-1);

  const steps = useMemo<number[]>(() => {
    if (typeof stepProp === "number") {
      const stepSize = stepProp;
      const stepCount = Math.floor((max - min) / stepSize) + 1;
      return Array.from(Array(stepCount)).map(
        (_, step) => min + stepSize * step
      );
    }
    return [];
  }, [max, min, stepProp]);

  const { marks, markLabels } = useMemo<{
    marks: MarkProps[];
    markLabels: MarkLabelProps[];
  }>(() => {
    const marks: MarkProps[] = [];
    const markLabels: MarkLabelProps[] = [];
    if (markDefs === true && typeof stepProp === "number") {
      for (const step of steps) {
        marks.push({ value: step });
      }
    } else if (Array.isArray(markDefs)) {
      for (const markDef of markDefs) {
        marks.push({ value: markDef.value });
        if (markDef.label !== undefined) {
          markLabels.push({
            value: markDef.value,
            label: markDef.label,
          });
        }
      }
    }
    return { marks, markLabels };
  }, [markDefs, stepProp, steps]);

  const markValues = useMemo(() => marks.map((m) => m.value), [marks]);

  const snapValues = useMemo(() => {
    if (stepProp === "marks" && markValues.length > 0) {
      return markValues;
    } else if (typeof stepProp === "number") {
      return steps;
    }
    return undefined;
  }, [markValues, stepProp, steps]);

  const { dir } = useFluent();

  const sliderRef = useMergedRefs(ref, useFocusWithin());
  const controlRef = useFocusWithin<HTMLSpanElement>();

  const snapValueToClosest = useCallback(
    (value: number, snapToMarkValue: boolean) => {
      if (snapValues) {
        return findClosest(value, snapValues).value;
      }
      if (snapToMarkValue) {
        return findClosest(value, markValues).value;
      }
      return value;
    },
    [snapValues, markValues]
  );

  const getNewValue = useCallback(
    (clientX: number, snapToMarkValue: boolean): number => {
      const clientRect = controlRef.current?.getBoundingClientRect() as DOMRect;
      let relativePosition = clamp(
        (clientX - clientRect.x) / clientRect.width,
        0,
        1
      );

      if (dir === "rtl") {
        relativePosition = 1 - relativePosition;
      }

      return snapValueToClosest(
        Math.round(relativePosition * (max - min) + min),
        snapToMarkValue
      );
    },
    [controlRef, dir, max, min, snapValueToClosest]
  );

  const focusThumb = useCallback(
    (index: number) => {
      const selector = `[type="range"][data-index="${index}"]`;
      const inputElement = controlRef.current?.querySelector(
        selector
      ) as HTMLInputElement;
      inputElement.focus();
    },
    [controlRef]
  );

  const onMouseDown = useEventCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0) {
        return;
      }

      const newValue = getNewValue(e.clientX, isMarkLabelElement(e.target));

      // avoid text selection
      e.preventDefault();

      const closestThumbIndex = findClosest(newValue, internalValues).index;

      const newValues = internalValues.slice();
      newValues[closestThumbIndex] = newValue;
      setInternalValues(newValues);

      if (onChange) {
        onChange({ value: newValues });
      }

      setActive(closestThumbIndex);
      focusThumb(closestThumbIndex);

      document.addEventListener("mouseup", handleUp);
      document.addEventListener("mousemove", handleMove);
    }
  );

  const handleMove = useEventCallback((e: MouseEvent | TouchEvent) => {
    // manually trigger mouse up if mouse is moving when no button is pressed
    if (isMouseEvent(e) && e.type === "mousemove" && e.buttons === 0) {
      handleUp(e);
      return;
    }

    const clientX = getClientX(e, touchId);
    if (clientX === undefined) {
      return;
    }

    const wantedValue = getNewValue(clientX, false);
    const previousValue = wantedValue;
    const newValues = internalValues.slice();
    newValues[active] = wantedValue;
    newValues.sort(asc);

    // swap focused thumb if previous value is not on the same index
    const newIndex = newValues.indexOf(previousValue);
    if (newIndex !== active) {
      setActive(newIndex);
      focusThumb(newIndex);
    }
    setInternalValues(newValues);
    setDragging(true);

    if (onChange) {
      onChange({ value: newValues });
    }
  });

  const handleUp = useEventCallback((e: MouseEvent | TouchEvent) => {
    setActive(-1);
    setDragging(false);
    if (e.type === "touchend") {
      setOpen(-1);
    }
    touchId.current = undefined;

    if (onChangeCommitted) {
      onChangeCommitted({ value: internalValues });
    }

    removeListeners();
  });

  const touchId = useRef<number>();

  const handleTouchStart = useEventCallback((event: TouchEvent) => {
    // prevent scrolling
    event.preventDefault();

    const touch = event.changedTouches[0];
    if (touch) {
      touchId.current = touch.identifier;
    }

    const newValue = getNewValue(
      touch.clientX,
      isMarkLabelElement(event.target)
    );
    const closestIndex = findClosest(newValue, internalValues).index;

    const newValues = internalValues.slice();
    newValues[closestIndex] = newValue;
    setInternalValues(newValues);

    if (onChange) {
      onChange({ value: newValues });
    }

    setActive(closestIndex);
    focusThumb(closestIndex);

    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleUp);
  });

  const removeListeners = useCallback(() => {
    document.removeEventListener("mouseup", handleUp);
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleUp);
  }, [handleMove, handleUp]);

  useEffect(() => {
    const { current: control } = controlRef;
    if (!control) {
      return;
    }
    control.addEventListener("touchstart", handleTouchStart);

    return () => {
      control?.removeEventListener("touchstart", handleTouchStart);
      removeListeners();
    };
  }, [controlRef, handleTouchStart, removeListeners]);

  const minValue = internalValues.length > 1 ? Math.min(...internalValues) : 0;
  const maxValue = Math.max(...internalValues);

  const trackOffset = toPercent(minValue, min, max);
  const trackWidth = toPercent(maxValue, min, max) - trackOffset;

  const createHandleFocus = useCallback(
    (index: number) => () => {
      setOpen(index);
    },
    []
  );

  const handleBlur = useCallback(() => {
    setOpen(-1);
  }, []);

  const createHandleMouseOver = useCallback(
    (index: number) => () => {
      setOpen(index);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setOpen(-1);
  }, []);

  const createHandleInputChange = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const currentValue = internalValues[index];

      const newValue = snapValues
        ? snapToNextValue(currentValue, event.target.valueAsNumber, snapValues)
        : event.target.valueAsNumber;
      if (newValue === undefined) {
        return;
      }

      const previousNewValue = newValue;
      const newValues = internalValues.slice();
      newValues[index] = newValue;
      newValues.sort(asc);

      // swap focused thumb?
      const newIndex = newValues.indexOf(previousNewValue);
      if (newIndex !== index) {
        focusThumb(newIndex);
      }
      setInternalValues(newValues);

      if (onChange) {
        onChange({ value: newValues });
      }

      if (onChangeCommitted) {
        onChangeCommitted({ value: newValues });
      }
    },
    [
      internalValues,
      snapValues,
      setInternalValues,
      onChange,
      onChangeCommitted,
      focusThumb,
    ]
  );

  return {
    root: getNativeElementProps(
      "span",
      {
        ref: sliderRef,
        ...props,
      },
      ["onChange"] // prevents empty onChange events during keyboard events
    ),
    control: getNativeElementProps("span", {
      ref: controlRef,
      onMouseDown,
    }),
    rail: resolveShorthand(props.rail, { required: true }),
    track: resolveShorthand(props.track, { required: true }),
    thumb: resolveShorthand(props.thumb, {
      required: true,
      defaultProps: { disabled },
    }),
    mark: resolveShorthand(props.mark, { required: true }),
    markLabel: resolveShorthand(props.markLabel, { required: true }),
    components: {
      root: "span",
      control: "span",
      rail: "span",
      track: "span",
      thumb: Thumb as React.FC<Partial<ThumbProps>>,
      mark: Mark as React.FC<Partial<MarkProps>>,
      markLabel: MarkLabel as React.FC<Partial<MarkLabelProps>>,
    },
    marks,
    markLabels,
    thumbs: internalValues.map((value, index) => ({
      value,
      valueLabelTransform,
      "data-index": index,
      open: open === index || active === index,
      active: active === index,
      dragging,
      handleFocus: createHandleFocus(index),
      handleBlur,
      handleMouseOver: createHandleMouseOver(index),
      handleMouseLeave,
      handleInputChange: createHandleInputChange(index),
    })),
    disabled: !!disabled,
    min,
    max,
    values: internalValues,
    trackOffset,
    trackWidth,
    active: active !== -1,
    size: size ?? "medium",
  };
};
