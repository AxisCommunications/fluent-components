import { getSlots } from "@fluentui/react-utilities";

import React from "react";
import {
  SectionLabelSlots,
  SectionLabelState,
} from "./section-label.types";

export const renderSectionLabel_unstable = (state: SectionLabelState) => {
  const { slots, slotProps } = getSlots<SectionLabelSlots>(state);

  return <slots.root {...slotProps.root} />;
};
