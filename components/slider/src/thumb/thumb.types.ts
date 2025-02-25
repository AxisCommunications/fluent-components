import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";
import { ChangeEvent } from "react";

export type ThumbSlots = {
  root: Slot<"div">;
  input: NonNullable<Slot<"input">> & { children?: never };
  label: NonNullable<Slot<"span">>;
};

export type ThumbProps = Omit<
  ComponentProps<Partial<ThumbSlots>, "input">,
  "value"
> & {
  children?: never;
  value: number;
  handleFocus: () => void;
  handleBlur: () => void;
  handleMouseOver: () => void;
  handleMouseLeave: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  valueLabelTransform?: (value: number) => number | string;
  active: boolean;
  open: boolean;
  dragging: boolean;
  "data-index": number;
};

export type ThumbState = ComponentState<ThumbSlots> &
  Required<Pick<ThumbProps, "value" | "active" | "open" | "dragging">> & {
    offset: number;
    disabled: boolean;
  };
