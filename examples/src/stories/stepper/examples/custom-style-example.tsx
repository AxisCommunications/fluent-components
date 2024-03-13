import React, { useCallback, useState } from "react";
import {
  DialogStep,
  StepperDialog,
  StepperDialogClassNames,
} from "@axiscommunications/fluent-stepper";
import { makeStyles } from "@fluentui/react-components";

const useOverrideStyles = makeStyles({
  root: {
    // use StepperDialogClassNames template string to see all selectors
    [`> * .${StepperDialogClassNames.previous}`]: {
      display: "none",
    },
  },
});

const steps: DialogStep[] = [
  {
    name: "First step",
    content: <>{"This is the content of the first step. ".repeat(20)}</>,
  },
  {
    name: "Second step",
    content: <>{"This is the content of the second step. ".repeat(20)}</>,
  },
  {
    name: "Third step",
    content: <>{"This is the content of the third step. ".repeat(20)}</>,
  },
];

export function CustomStepperDialogExample() {
  const [step, setStep] = useState(0);
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);

  const overrideStyles = useOverrideStyles();

  return (
    <StepperDialog
      className={overrideStyles.root}
      currentStep={step}
      steps={steps}
      disableProgression={false}
      onStepChange={setStep}
      onFinish={onFinish}
      onCancel={onCancel}
      cancelLabel="Cancel"
      nextLabel="Next"
      previousLabel="Previous"
      finishLabel="Finish"
    />
  );
}

export const CustomStepperDialogExampleAsString = `
import React, { useCallback, useState } from "react";
import { DialogStep, StepperDialog, StepperDialogClassNames } from "@axiscommunications/fluent-stepper";
import { makeStyles } from "@fluentui/react-components";

const useOverrideStyles = makeStyles({
  root: {
    // use StepperDialogClassNames template string to see all selectors
    [> * .${StepperDialogClassNames.previous}]: {
      display: "none",
    },
  },
})

const steps: DialogStep[] = [
  {
    name: "First step",
    content: <>{"This is the content of the first step. ".repeat(20)}</>,
  },
  {
    name: "Second step",
    content: <>{"This is the content of the second step. ".repeat(20)}</>,
  },
  {
    name: "Third step",
    content: <>{"This is the content of the third step. ".repeat(20)}</>,
  },
];

export function CustomStepperDialogExample() {
  const [step, setStep] = useState(0);
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);

  const overrideStyles = useOverrideStyles()

  return (
    <StepperDialog
      className={overrideStyles.root}
      currentStep={step}
      steps={steps}
      disableProgression={false}
      onStepChange={setStep}
      onFinish={onFinish}
      onCancel={onCancel}
      cancelLabel="Cancel"
      nextLabel="Next"
      previousLabel="Previous"
      finishLabel="Finish"
    />
  );
}
`;
