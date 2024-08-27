import React, { useCallback } from "react";
import { Stepper } from "./stepper";
import { useStepperDialogStyles } from "./stepper-dialog.styles";
import { StepperDialogProps } from "./stepper-dialog.types";
import { StepperDialogFooterV1 } from "./stepper-dialog-footer-v1";
import { StepperDialogFooterV2 } from "./stepper-dialog-footer-v2";

export const StepperDialog = ({
  currentStep,
  steps,
  vertical,
  disableProgression,
  onStepChange,
  onFinish,
  onCancel,
  cancelLabel,
  nextLabel,
  previousLabel,
  finishLabel,
  className,
  version,
}: StepperDialogProps) => {
  const {
    rootStyles,
    containerStyles,
    contentStyles,
    buttonContainerStyles,
  } = useStepperDialogStyles({ vertical, className });

  const onNext = useCallback(
    () => onStepChange(currentStep + 1),
    [currentStep, onStepChange]
  );
  const onPrevious = useCallback(
    () => onStepChange(currentStep - 1),
    [currentStep, onStepChange]
  );

  return (
    <div className={rootStyles}>
      <div className={containerStyles}>
        <div>
          <Stepper
            currentStep={currentStep}
            steps={steps}
            vertical={vertical}
          />
        </div>
        <div className={contentStyles}>{steps[currentStep].content}</div>
      </div>
      <div className={buttonContainerStyles}>
        {(version === undefined || version === "v1")
          && (
            <StepperDialogFooterV1
              currentStep={currentStep}
              steps={steps}
              disableProgression={disableProgression}
              onFinish={onFinish}
              onCancel={onCancel}
              cancelLabel={cancelLabel}
              nextLabel={nextLabel}
              previousLabel={previousLabel}
              finishLabel={finishLabel}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          )}
        {(version === "v2")
          && (
            <StepperDialogFooterV2
              currentStep={currentStep}
              steps={steps}
              disableProgression={disableProgression}
              onFinish={onFinish}
              onCancel={onCancel}
              cancelLabel={cancelLabel}
              nextLabel={nextLabel}
              previousLabel={previousLabel}
              finishLabel={finishLabel}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          )}
      </div>
    </div>
  );
};
StepperDialog.displayName = "StepperDialog";
