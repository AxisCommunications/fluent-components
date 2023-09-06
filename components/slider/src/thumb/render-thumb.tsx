import { getSlots } from "@fluentui/react-utilities";

import { ThumbSlots, ThumbState } from "./thumb.types";
import React from "react";

export const renderThumb_unstable = (state: ThumbState) => {
  const { slots, slotProps } = getSlots<ThumbSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.input {...slotProps.input} />
      <slots.label {...slotProps.label} />
    </slots.root>
  );
};
