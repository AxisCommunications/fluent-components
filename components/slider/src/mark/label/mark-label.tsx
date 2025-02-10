import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { MarkLabelProps } from "./mark-label.types";
import { renderMarkLabel_unstable } from "./render-mark-label";
import { useMarkLabel_unstable } from "./use-mark-label";
import { useMarkLabelStyles_unstable } from "./use-mark-label-styles";

export const MarkLabel: ForwardRefComponent<MarkLabelProps> = React.forwardRef(
  (props, ref) => {
    const state = useMarkLabel_unstable(props, ref);

    useMarkLabelStyles_unstable(state);

    return renderMarkLabel_unstable(state);
  }
);
