import React, { useCallback, useState } from "react";

import {
  DialogStep,
  Stepper,
  StepperDialog,
} from "@axiscommunications/fluent-stepper";
import { mergeClasses } from "@fluentui/react-components";
import { PageHeader } from "../components/page-header";
import { SectionTitle } from "../components/section-title";
import { useLayoutStyles, useScrollPageStyle } from "../styles/page";

export const steps: DialogStep[] = [
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

export const StepperPage = () => {
  const [step, setStep] = useState(0);
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();

  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);
  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Stepper" />
      <div
        className={mergeClasses(
          "content",
          layoutStyles.content,
          layoutStyles.sections,
          scrollPageStyle
        )}
      >
        <Stepper currentStep={step} steps={steps} />
        <div>
          <SectionTitle title={"stepper dialog"} />
          <div style={{ height: "300px" }}>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};
