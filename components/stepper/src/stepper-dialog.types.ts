import { ReactElement } from "react";
import { TStep } from "./stepper.types";

export type DialogStep = TStep & {
  content: ReactElement;
};

export type StepperDialogProps = {
  currentStep: number;
  steps: DialogStep[];
  hideSteps?: boolean;
  footerContent?: ReactElement;
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
