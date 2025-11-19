import { getSlots } from "@fluentui/react-utilities";

import { MarkLabelSlots, MarkLabelState } from "./mark-label.types";

export const renderMarkLabel_unstable = (state: MarkLabelState) => {
  const { slots, slotProps } = getSlots<MarkLabelSlots>(state);

  return <slots.root {...slotProps.root} />;
};
