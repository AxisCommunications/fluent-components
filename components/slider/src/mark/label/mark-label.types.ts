import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";
import { ReactNode } from "react";

export type MarkLabelSlots = {
  root: Slot<"span">;
};

export type MarkLabelProps = ComponentProps<MarkLabelSlots> & {
  value: number;
  label: ReactNode;
  /** Label is ***active*** only when slider value is **equal** to mark value. */
  activeEqual?: boolean;
};

export type MarkLabelState = ComponentState<MarkLabelSlots> &
  Required<Pick<MarkLabelProps, "value">> & {
    offset: number;
    disabled: boolean;
    active: boolean;
  };
