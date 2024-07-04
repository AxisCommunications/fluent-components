import type { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import type { MarkLabelProps } from "./mark-label.types";
import { useMarkLabel_unstable } from "./use-mark-label";
import { useMarkLabelStyles_unstable } from "./use-mark-label-styles";
import { renderMarkLabel_unstable } from "./render-mark-label";

export const MarkLabel: ForwardRefComponent<MarkLabelProps> = React.forwardRef(
  (props, ref) => {
    const state = useMarkLabel_unstable(props, ref);

    useMarkLabelStyles_unstable(state);

    return renderMarkLabel_unstable(state);
  }
);
