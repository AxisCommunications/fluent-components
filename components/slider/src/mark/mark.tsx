import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { MarkProps } from "./mark.types";
import { renderMark_unstable } from "./render-mark";
import { useMark_unstable } from "./use-mark";
import { useMarkStyles_unstable } from "./use-mark-styles";

export const Mark: ForwardRefComponent<MarkProps> = React.forwardRef(
  (props, ref) => {
    const state = useMark_unstable(props, ref);

    useMarkStyles_unstable(state);

    return renderMark_unstable(state);
  }
);
