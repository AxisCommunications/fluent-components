import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import type { SlotClassNames } from "@fluentui/react-utilities";
import type { StepSlots, StepState } from "./step.types";

export const stepClassNames: SlotClassNames<StepSlots> = {
  root: "axis-Step",
};

export const useRootStyles = makeStyles({
  base: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    flexBasis: "fit-content",
    whiteSpace: "nowrap",
  },

  previousStep: {
    color: tokens.colorNeutralForeground1,
  },
  currentStep: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  nextStep: {
    color: tokens.colorNeutralForeground2,
  },
});
export const useStepStyles_unstable = (state: StepState): StepState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    stepClassNames.root,
    rootStyles.base,
    state.step !== state.currentStep &&
      state.step < state.currentStep &&
      rootStyles.previousStep,
    state.step === state.currentStep && rootStyles.currentStep,
    state.step > state.currentStep && rootStyles.nextStep
  );

  return state;
};
