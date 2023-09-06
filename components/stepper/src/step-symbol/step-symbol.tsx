import React from "react";
import type { ForwardRefComponent } from "@fluentui/react-utilities";
import { useStepSymbol_unstable } from "./use-step-symbol";
import { useStepSymbolStyles_unstable } from "./use-step-symbol-styles";
import { renderStepSymbol_unstable } from "./render-step-symbol";
import type { StepSymbolProps } from "./step-symbol.types";

export const StepSymbol: ForwardRefComponent<StepSymbolProps> = React
  .forwardRef((props, ref) => {
    const state = useStepSymbol_unstable(props, ref);
    useStepSymbolStyles_unstable(state);

    return renderStepSymbol_unstable(state);
  });

StepSymbol.displayName = "StepSymbol";
