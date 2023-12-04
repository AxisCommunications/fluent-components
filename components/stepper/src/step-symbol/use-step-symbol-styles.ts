import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import type { SlotClassNames } from "@fluentui/react-utilities";
import type { StepSymbolSlots, StepSymbolState } from "./step-symbol.types";

export const stepSymbolClassNames: SlotClassNames<StepSymbolSlots> = {
  root: "axis-StepSymbol",
  icon: "axis-StepSymbol__icon",
};

const useRootStyles = makeStyles({
  base: {
    display: "inline-flex",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    minWidth: "24px",
    height: "28px",
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightRegular,
  },
  iconBase: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  previous: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorBrandForeground2
    ),
    color: tokens.colorBrandForeground2,
  },
  current: {
    ...shorthands.border(
      tokens.strokeWidthThick,
      "solid",
      tokens.colorBrandForeground2
    ),
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  next: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
  },
});

export const useStepSymbolStyles_unstable = (
  state: StepSymbolState
): StepSymbolState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    stepSymbolClassNames.root,
    rootStyles.base,
    state.step < state.currentStep && rootStyles.previous,
    state.step === state.currentStep && rootStyles.current,
    state.step > state.currentStep && rootStyles.next
  );

  state.icon.className = mergeClasses(
    stepSymbolClassNames.icon,
    rootStyles.iconBase
  );

  return state;
};
