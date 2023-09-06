import { CheckmarkFilled } from "@fluentui/react-icons";
import {
  getNativeElementProps,
  resolveShorthand,
} from "@fluentui/react-utilities";
import React from "react";
import type { StepSymbolProps, StepSymbolState } from "./step-symbol.types";

export const useStepSymbol_unstable = (
  props: StepSymbolProps,
  ref: React.Ref<HTMLElement>
): StepSymbolState => {
  const { step, currentStep } = props;

  const state: StepSymbolState = {
    step,
    currentStep,
    components: {
      root: "div",
      icon: "span",
    },
    root: getNativeElementProps("div", {
      ref,
      ...props,
    }),
    icon: resolveShorthand(props.icon, {
      required: true,
      defaultProps: {
        children: React.createElement(CheckmarkFilled),
      },
    }),
  };

  return state;
};
