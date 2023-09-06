import React from "react";
import { useStepperStyles } from "./stepper.styles";
import { StepperProps } from "./stepper.types";
import { Step } from "./step";
import { Divider, mergeClasses } from "@fluentui/react-components";

export const stepperClassNames: Record<"root" | "divider", string> = {
  root: "axis-Stepper",
  divider: "axis-Stepper__divider",
};

export const Stepper = ({ currentStep, steps, vertical }: StepperProps) => {
  const styles = useStepperStyles();
  const rootStyles = mergeClasses(
    stepperClassNames.root,
    styles.root,
    vertical && styles.rootVertical
  );
  const dividerStyles = mergeClasses(
    stepperClassNames.root,
    styles.divider,
    vertical && styles.dividerVertical
  );
  return (
    <div className={rootStyles}>
      {steps.map((step, stepIndex) => (
        <React.Fragment key={stepIndex}>
          <Step currentStep={currentStep} name={step.name} step={stepIndex} />
          {stepIndex !== steps.length - 1 && (
            <div className={dividerStyles}>
              <Divider vertical={vertical} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
Stepper.displayName = "Stepper";
