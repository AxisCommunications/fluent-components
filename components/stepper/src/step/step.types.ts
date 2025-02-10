import type {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";

export type StepSlots = {
  root: Slot<"div">;
};

export type StepProps = ComponentProps<StepSlots> & {
  currentStep: number;
  step: number;
  name: string;
};

export type StepState = ComponentState<StepSlots> &
  Required<Pick<StepProps, "currentStep" | "step" | "name">>;
