import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";

import { SliderContextValue } from "./context/slider-context";
import { MarkLabelProps } from "./mark/label/mark-label.types";
import { MarkDef, MarkProps } from "./mark/mark.types";
import { SectionDef, SectionProps } from "./section/section.types";
import { ThumbProps } from "./thumb/thumb.types";

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
  sectionLabel: Slot<Partial<SectionProps>>;
};

export type SliderOnChangeData = {
  value: number;
};

export type RangeSliderOnChangeData = {
  value: number[];
};

/**
 * Props for {@link RangeSlider}, a slider with two or more thumbs selecting a
 * range of values. Extends the Fluent slot props with Axis-specific options.
 */
export type RangeSliderProps = Omit<
  Partial<ComponentProps<SliderSlots>>,
  "value" | "defaultValue" | "onChange" | "control"
> & {
  /** When `true`, the slider is non-interactive and rendered dimmed. */
  disabled?: boolean;
  /**
   * Tick marks along the rail. Pass `true` to derive marks from `step`, or an
   * array of {@link MarkDef} to place and label marks explicitly.
   */
  marks?: boolean | MarkDef[];
  /** Labelled, optionally coloured sections rendered along the track. */
  sectionLabels?: SectionDef[];
  /**
   * Granularity of value changes. A number sets a fixed step; `"marks"` snaps
   * the thumbs to the provided {@link marks}.
   */
  step?: number | "marks";
  /** Visual size of the slider. Defaults to `"medium"`. */
  size?: "small" | "medium";
  /** Minimum selectable value. **Required.** */
  min: number;
  /** Maximum selectable value. **Required.** */
  max: number;
  /** Selected values (controlled), one per thumb. */
  value?: number[];
  /** Initially selected values (uncontrolled), one per thumb. */
  defaultValue?: number[];
  /** Called continuously as a thumb is dragged. */
  onChange?: (data: RangeSliderOnChangeData) => void;
  /** Called when the interaction ends and the value is committed. */
  onChangeCommitted?: (data: RangeSliderOnChangeData) => void;
  /** Maps a raw value to the text shown in its value label/tooltip. */
  valueLabelTransform?: (value: number) => number | string;
};

/**
 * Props for {@link Slider}, a single-thumb slider selecting one value.
 * Identical to {@link RangeSliderProps} but with scalar `value`/`defaultValue`
 * and scalar change callbacks.
 */
export type SliderProps = Omit<
  RangeSliderProps,
  "value" | "defaultValue" | "onChange" | "onChangeCommitted"
> & {
  /** Selected value (controlled). */
  value?: number;
  /** Initially selected value (uncontrolled). */
  defaultValue?: number;
  /** Called continuously as the thumb is dragged. */
  onChange?: (data: SliderOnChangeData) => void;
  /** Called when the interaction ends and the value is committed. */
  onChangeCommitted?: (data: SliderOnChangeData) => void;
};

export type SliderState = ComponentState<SliderSlots> &
  Required<Pick<RangeSliderProps, "disabled" | "min" | "max" | "size">> & {
    values: number[];
    marks: MarkProps[];
    markLabels: MarkLabelProps[];
    sectionLabels: SectionProps[];
    thumbs: ThumbProps[];
    trackOffset: number;
    trackWidth: number;
    active: boolean;
  };
