import React from "react";
import type { ForwardRefComponent } from "@fluentui/react-utilities";
import { useStep_unstable } from "./use-step";
import { useStepStyles_unstable } from "./use-step-styles";
import { renderStep_unstable } from "./render-step";
import type { StepProps } from "./step.types";

export const Step: ForwardRefComponent<StepProps> = React.forwardRef(
  (props, ref) => {
    const state = useStep_unstable(props, ref);
    useStepStyles_unstable(state);

    return renderStep_unstable(state);
  }
);

Step.displayName = "Step";
