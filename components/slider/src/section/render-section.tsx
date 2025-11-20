import { getSlots } from "@fluentui/react-utilities";

import { SectionSlots, SectionState } from "./section.types";

export const renderSection_unstable = (state: SectionState) => {
  const { slots, slotProps } = getSlots<SectionSlots>(state);

  return <slots.root {...slotProps.root} />;
};
