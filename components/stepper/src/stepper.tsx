import { Divider, mergeClasses } from "@fluentui/react-components";
import React from "react";
import { Step } from "./step";
import { useStepperStyles } from "./stepper.styles";
import { StepperProps } from "./stepper.types";

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
