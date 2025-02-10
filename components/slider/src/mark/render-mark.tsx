import { getSlots } from "@fluentui/react-utilities";

import React from "react";
import { MarkSlots, MarkState } from "./mark.types";

export const renderMark_unstable = (state: MarkState) => {
  const { slots, slotProps } = getSlots<MarkSlots>(state);

  return <slots.root {...slotProps.root} />;
};
