import type {
  ComponentProps,
  ComponentState,
  Slot,
} from "@fluentui/react-utilities";

export type StepSymbolSlots = {
  root: NonNullable<Slot<"div">>;
  icon: NonNullable<Slot<"span">>;
};

export type StepSymbolProps = Partial<ComponentProps<StepSymbolSlots>> & {
  currentStep: number;
  step: number;
};

export type StepSymbolState =
  & ComponentState<StepSymbolSlots>
  & Required<Pick<StepSymbolProps, "currentStep" | "step">>;
