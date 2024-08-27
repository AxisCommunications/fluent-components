import { Button } from "@fluentui/react-components";
import React from "react";
import { useStepperDialogFooterStyles } from "./stepper-dialog-footer.styles";
import { StepperDialogFooterProps } from "./stepper-dialog.types";

export const StepperDialogFooterV2 = ({
  currentStep,
  steps,
  disableProgression,
  onFinish,
  onCancel,
  cancelLabel,
  nextLabel,
  previousLabel,
  finishLabel,
  onNext,
  onPrevious,
}: StepperDialogFooterProps) => {
  const {
    buttonStyles,
    buttonCancel,
    buttonPrevious,
    buttonNext,
    buttonFinish,
  } = useStepperDialogFooterStyles();

  return (
    <>
      <div className={buttonStyles}>
        {currentStep > 0 && previousLabel && (
          <Button className={buttonPrevious} onClick={onPrevious}>
            {previousLabel}
          </Button>
        )}
      </div>
      <div className={buttonStyles}>
        {cancelLabel && onCancel && (
          <Button className={buttonCancel} onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
        {currentStep !== steps.length - 1 && nextLabel && (
          <Button
            className={buttonNext}
            disabled={disableProgression}
            onClick={onNext}
            appearance="primary"
          >
            {nextLabel}
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button
            className={buttonFinish}
            onClick={onFinish}
            disabled={disableProgression}
            appearance="primary"
          >
            {finishLabel}
          </Button>
        )}
      </div>
    </>
  );
};
