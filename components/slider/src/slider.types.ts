import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";

import { SliderContextValue } from "./context/slider-context";
import { MarkDef, MarkProps } from "./mark/mark.types";
import { ThumbProps } from "./thumb/thumb.types";
import { MarkLabelProps } from "./mark/label/mark-label.types";

export type SliderContextValues = {
  slider: SliderContextValue;
};

export type SliderSlots = {
  root: Slot<"span">;
  control: NonNullable<Slot<"span">>;
  rail: NonNullable<Slot<"span">>;
  track: NonNullable<Slot<"span">>;
  thumb: Slot<Partial<ThumbProps>>;
  mark: Slot<Partial<MarkProps>>;
  markLabel: Slot<Partial<MarkLabelProps>>;
};

export type SliderOnChangeData = {
  value: number;
};

export type RangeSliderOnChangeData = {
  value: number[];
};

export type RangeSliderProps =
  & Omit<
    Partial<ComponentProps<SliderSlots>>,
    "value" | "defaultValue" | "onChange" | "control"
  >
  & {
    disabled?: boolean;
    marks?: boolean | MarkDef[];
    step?: number | "marks";
    size?: "small" | "medium";
    min: number;
    max: number;
    value?: number[];
    defaultValue?: number[];
    onChange?: (data: RangeSliderOnChangeData) => void;
    onChangeCommitted?: (data: RangeSliderOnChangeData) => void;
    valueLabelTransform?: (value: number) => number | string;
  };

export type SliderProps =
  & Omit<
    RangeSliderProps,
    "value" | "defaultValue" | "onChange" | "onChangeCommitted"
  >
  & {
    value?: number;
    defaultValue?: number;
    onChange?: (data: SliderOnChangeData) => void;
    onChangeCommitted?: (data: SliderOnChangeData) => void;
  };

export type SliderState =
  & ComponentState<SliderSlots>
  & Required<Pick<RangeSliderProps, "disabled" | "min" | "max" | "size">>
  & {
    values: number[];
    marks: MarkProps[];
    markLabels: MarkLabelProps[];
    thumbs: ThumbProps[];
    trackOffset: number;
    trackWidth: number;
    active: boolean;
  };
