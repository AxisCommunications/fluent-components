import React, { useCallback, useState } from "react";

import { Stepper, StepperDialog } from "@axiscommunications/fluent-stepper";
import { mergeClasses } from "@fluentui/react-components";
import { PageHeader } from "../components/page-header";
import { SectionTitle } from "../components/section-title";
import { steps } from "./stepper-page";
import { useLayoutStyles, useScrollPageStyle } from "../styles/page";

export const VerticalStepperPage = () => {
  const [step, setStep] = useState(0);
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();
  const onFinish = useCallback(() => alert("Finish!"), []);
  const onCancel = useCallback(() => setStep(0), []);
  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Vertical stepper" />
      <div
        className={mergeClasses(
          layoutStyles.content,
          layoutStyles.sections,
          scrollPageStyle
        )}
      >
        <Stepper currentStep={step} steps={steps} vertical />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionTitle title={"vertical stepper dialog"} />
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
              vertical
            />
          </div>
        </div>
      </div>
    </div>
  );
};
