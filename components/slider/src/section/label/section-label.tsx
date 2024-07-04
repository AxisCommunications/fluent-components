import { ForwardRefComponent } from "@fluentui/react-utilities";
import React from "react";

import { SectionLabelProps } from "./section-label.types";
import { useSectionLabel_unstable } from "./use-section-label";
import { useSectionLabelStyles_unstable } from "./use-section-label-styles";
import { renderSectionLabel_unstable } from "./render-section-label";

export const SectionLabel: ForwardRefComponent<SectionLabelProps> = React
  .forwardRef((props, ref) => {
    const state = useSectionLabel_unstable(props, ref);

    useSectionLabelStyles_unstable(state);

    return renderSectionLabel_unstable(state);
  });
