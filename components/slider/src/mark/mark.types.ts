import { ReactNode } from "react";
import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";

export type MarkDef = {
  value: number;
  label?: ReactNode;
};

export type MarkSlots = {
  root: Slot<"span">;
};

export type MarkProps = ComponentProps<MarkSlots> & {
  value: number;
};

export type MarkState =
  & ComponentState<MarkSlots>
  & Required<Pick<MarkProps, "value">>
  & {
    offset: number;
    disabled: boolean;
    active: boolean;
  };
