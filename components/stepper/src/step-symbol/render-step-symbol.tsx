import { getSlots } from "@fluentui/react-utilities";
import React from "react";
import type { StepSymbolSlots, StepSymbolState } from "./step-symbol.types";

export const renderStepSymbol_unstable = (state: StepSymbolState) => {
  const { slots, slotProps } = getSlots<StepSymbolSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {state.step < state.currentStep && <slots.icon {...slotProps.icon} />}
      {state.step >= state.currentStep && <>{state.step + 1}</>}
    </slots.root>
  );
};
