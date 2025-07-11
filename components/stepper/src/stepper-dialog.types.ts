import { TStep } from "./stepper.types";

export type DialogStep = TStep & {
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
};
