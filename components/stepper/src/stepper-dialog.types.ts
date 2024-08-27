import { Step } from "./stepper.types";

export type DialogStep = Step & {
  content: JSX.Element;
};

export type StepperDialogProps = {
  currentStep: number;
  steps: DialogStep[];
  vertical?: boolean;
  onStepChange: (newStep: number) => void;
  onFinish: () => void;
  onCancel?: () => void;
  cancelLabel?: string;
  nextLabel?: string;
  previousLabel?: string;
  finishLabel: string;
  disableProgression?: boolean;
  className?: string;
  /**
   * Version of the stepper, changing will give different button layouts. Defaults to v1 if unset.
   * ```
   * v1 has button layout: |Cancel|          |Previous| |Next/Finish|
   * ```
   * ```
   * v2 has button layout: |Previous|          |Cancel| |Next/Finish|
   * ```
   */
  version?: "v1" | "v2";
};

export type StepperDialogFooterProps =
  & Pick<
    StepperDialogProps,
    | "currentStep"
    | "steps"
    | "disableProgression"
    | "onFinish"
    | "onCancel"
    | "cancelLabel"
    | "nextLabel"
    | "previousLabel"
    | "finishLabel"
  >
  & {
    onNext: () => void;
    onPrevious: () => void;
  };
