import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";
import { ReactNode } from "react";

export type SectionLabelDef = {
  edges: SectionEdges;
  label: ReactNode;
  trackColor?: string;
};

export type SectionLabelSlots = {
  root: Slot<"span">;
};

interface SectionEdges {
  left?: number;
  right?: number;
}

export type SectionLabelProps = ComponentProps<SectionLabelSlots> & {
  edges: Required<SectionEdges>;
  label: ReactNode;
  trackColor?: string;
};

export type SectionLabelState =
  & ComponentState<SectionLabelSlots>
  & {
    offset: number;
    disabled: boolean;
    active: boolean;
  };
