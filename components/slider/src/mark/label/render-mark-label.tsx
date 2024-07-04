import { getSlots } from "@fluentui/react-utilities";

import React from "react";
import type { MarkLabelSlots, MarkLabelState } from "./mark-label.types";

export const renderMarkLabel_unstable = (state: MarkLabelState) => {
	const { slots, slotProps } = getSlots<MarkLabelSlots>(state);

	return <slots.root {...slotProps.root} />;
};
