import {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";
import { ReactNode } from "react";

/**
 * Definition of a labelled, optionally coloured section of the slider track.
 */
export type SectionDef = {
  /** Start/end values bounding the section. */
  edges: SectionEdges;
  /** Label rendered for the section. */
  label: ReactNode;
  /** Optional custom colour for the section's portion of the track. */
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
