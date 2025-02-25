import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";
import { ReactNode } from "react";

export type SectionDef = {
  edges: SectionEdges;
  label: ReactNode;
  trackColor?: string;
};

export type SectionSlots = {
  root: Slot<"span">;
};

interface SectionEdges {
  from?: number;
  to?: number;
}

export type SectionProps = ComponentProps<SectionSlots> & {
  edges: Required<SectionEdges>;
  label: ReactNode;
  trackColor?: string;
};

export type SectionState = ComponentState<SectionSlots> & {
  offset: number;
  disabled: boolean;
  active: boolean;
};
