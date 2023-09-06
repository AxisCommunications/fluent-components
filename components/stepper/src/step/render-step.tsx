import React from "react";
import { getSlots } from "@fluentui/react-utilities";
import type { StepSlots, StepState } from "./step.types";
import { StepSymbol } from "../step-symbol";

export const renderStep_unstable = (state: StepState) => {
  const { slots, slotProps } = getSlots<StepSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <StepSymbol step={state.step} currentStep={state.currentStep} />
      {state.name}
    </slots.root>
  );
};
