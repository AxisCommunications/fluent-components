import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { SectionProps } from "./section.types";
import { useSection_unstable } from "./use-section";
import { useSectionStyles_unstable } from "./use-section-styles";
import { renderSection_unstable } from "./render-section";

export const Section: ForwardRefComponent<SectionProps> = React
  .forwardRef((props, ref) => {
    const state = useSection_unstable(props, ref);

    useSectionStyles_unstable(state);

    return renderSection_unstable(state);
  });
