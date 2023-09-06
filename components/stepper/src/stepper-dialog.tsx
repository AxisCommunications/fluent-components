import React, { useCallback } from "react";
import { Button, mergeClasses } from "@fluentui/react-components";
import { useStepperDialogStyles } from "./stepper-dialog.styles";
import { StepperDialogProps } from "./stepper-dialog.types";
import { Stepper } from "./stepper";

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
}: StepperDialogProps) => {
  const onNext = useCallback(
    () => onStepChange(currentStep + 1),
    [currentStep, onStepChange]
  );
  const onPrevious = useCallback(
    () => onStepChange(currentStep - 1),
    [currentStep, onStepChange]
  );
  const styles = useStepperDialogStyles();
  const rootStyles = mergeClasses("axis-StepperDialog", styles.root);
  const stepperContainerStyles = mergeClasses(
    styles.stepperContainer,
    vertical && styles.stepperContainerVertical
  );
  return (
    <div className={rootStyles}>
      <div className={stepperContainerStyles}>
        <div>
          <Stepper
            currentStep={currentStep}
            steps={steps}
            vertical={vertical}
          />
        </div>
        <div className={styles.stepContent}>{steps[currentStep].content}</div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttons}>
          {cancelLabel && onCancel && (
            <Button onClick={onCancel}>{cancelLabel}</Button>
          )}
        </div>
        <div className={styles.buttons}>
          {currentStep > 0 && (
            <Button onClick={onPrevious}>{previousLabel}</Button>
          )}
          {currentStep !== steps.length - 1 && (
            <Button
              disabled={disableProgression}
              onClick={onNext}
              appearance="primary"
            >
              {nextLabel}
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
              onClick={onFinish}
              disabled={disableProgression}
              appearance="primary"
            >
              {finishLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
StepperDialog.displayName = "StepperDialog";
