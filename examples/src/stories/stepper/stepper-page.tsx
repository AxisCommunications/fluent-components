import React from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  StepperDialogExample,
  StepperDialogExampleAsString,
} from "./stepper-dialog-example";
import {
  VerticalStepperDialogExample,
  VerticalStepperDialogExampleAsString,
} from "./vertical-stepper-dialog-example";

export const StepperPage = () => {
  const gh = getGhInfoByKey(routes.Stepper);
  return (
    <StoryPage
      title="Stepper"
      description={"A dialog which common use case is to guide user through instruction or/and information"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
    >
      <StorySection title="Stepper dialog">
        <StepperDialogExample />
        <StoryCodeBlockAccordion codeString={StepperDialogExampleAsString} />
      </StorySection>
      <StorySection title="Vertical stepper dialog">
        <VerticalStepperDialogExample />
        <StoryCodeBlockAccordion
          codeString={VerticalStepperDialogExampleAsString}
        />
      </StorySection>
    </StoryPage>
  );
};
