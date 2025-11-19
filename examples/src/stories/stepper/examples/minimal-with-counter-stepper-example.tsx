import { DialogStep, StepperDialog } from "@axiscommunications/fluent-stepper";
import { Body1 } from "@fluentui/react-components";
import { useCallback, useState } from "react";

const steps: DialogStep[] = [
  {
    content: <>{"This is the content of the first step. ".repeat(20)}</>,
  },
  {
    content: <>{"This is the content of the second step. ".repeat(20)}</>,
  },
  {
    content: <>{"This is the content of the third step. ".repeat(20)}</>,
  },
];

export function MinimalWithCustomFooterStepperDialogExample() {
  const [step, setStep] = useState(0);
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);

  return (
    <StepperDialog
      currentStep={step}
      steps={steps}
      hideSteps
      footerContent={<Body1>{`${step + 1} of ${steps.length}`}</Body1>}
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

export const MinimalWithCustomFooterStepperDialogExampleAsString = `
import { useCallback, useState } from "react";

import {
  DialogStep,
  StepperDialog
} from "@axiscommunications/fluent-stepper";

const steps: DialogStep[] = [
  {
    content: <>{"This is the content of the first step. ".repeat(20)}</>,
  },
  {
    content: <>{"This is the content of the second step. ".repeat(20)}</>,
  },
  {
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
      hideSteps={true}
      footerContent={"<Body1>$\{step + 1} of $\{steps.length}</Body1>"}
      disableProgression={false}
      onStepChange={setStep}
      onFinish={onFinish}
      onCancel={onCancel}
      cancelLabel="Cancel"
      nextLabel="Next"
      previousLabel="Previous"
      finishLabel="Finish"
    />
  )
}
`;
