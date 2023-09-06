import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { renderThumb_unstable } from "./render-thumb";
import { ThumbProps } from "./thumb.types";
import { useThumb_unstable } from "./use-thumb";
import { useThumbStyles_unstable } from "./use-thumb-styles";

export const Thumb: ForwardRefComponent<ThumbProps> = React.forwardRef(
  (props, ref) => {
    const state = useThumb_unstable(props, ref);

    useThumbStyles_unstable(state);

    return renderThumb_unstable(state);
  }
);
