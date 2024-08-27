import React, { useCallback, useState } from "react";

import { DialogStep, StepperDialog } from "@axiscommunications/fluent-stepper";

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
export function StepperDialogV2Example() {
  const [step, setStep] = useState(0);
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);

  return (
    <StepperDialog
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
      version="v2"
    />
  );
}

export const StepperDialogV2ExampleAsString = `
import React, { useCallback, useState } from "react";

import {
  DialogStep,
  StepperDialog
} from "@axiscommunications/fluent-stepper";

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
export function StepperDialogExample() {
  const [step, setStep] = useState(0);
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);

  return (
    <StepperDialog
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
      version="v2"
    />
  )
}
`;
