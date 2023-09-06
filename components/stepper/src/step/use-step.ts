import React from "react";
import { getNativeElementProps } from "@fluentui/react-utilities";
import type { StepProps, StepState } from "./step.types";

export const useStep_unstable = (
  props: StepProps,
  ref: React.Ref<HTMLElement>
): StepState => {
  const { step, currentStep, name } = props;

  const state: StepState = {
    step,
    currentStep,
    name,
    components: {
      root: "div",
    },
    root: getNativeElementProps("div", {
      ref,
      ...props,
    }),
  };

  return state;
};
