import { getSlots } from "@fluentui/react-utilities";

import { MarkSlots, MarkState } from "./mark.types";

export const renderMark_unstable = (state: MarkState) => {
  const { slots, slotProps } = getSlots<MarkSlots>(state);

  return <slots.root {...slotProps.root} />;
};
