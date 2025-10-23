import React from "react";
import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  CustomStepperDialogExample,
  CustomStepperDialogExampleAsString,
} from "./examples/custom-style-example";
import {
  MinimalWithCustomFooterStepperDialogExample,
  MinimalWithCustomFooterStepperDialogExampleAsString,
} from "./examples/minimal-with-counter-stepper-example";
import {
  StepperDialogExample,
  StepperDialogExampleAsString,
} from "./examples/stepper-dialog-example";
import {
  VerticalStepperDialogExample,
  VerticalStepperDialogExampleAsString,
} from "./examples/vertical-stepper-dialog-example";

const examples: pageData[] = [
  {
    title: "Stepper dialog",
    anchor: "StepperDialogExample",
    example: <StepperDialogExample />,
    codeString: StepperDialogExampleAsString,
  },
  {
    title: "Vertical stepper dialog",
    anchor: "VerticalStepperDialogExample",
    example: <VerticalStepperDialogExample />,
    codeString: VerticalStepperDialogExampleAsString,
  },
  {
    title: "Override styling",
    anchor: "Override styling",
    example: <CustomStepperDialogExample />,
    codeString: CustomStepperDialogExampleAsString,
  },
  {
    title: "Minimal with custom footer",
    anchor: "Minimal with custom footer",
    example: <MinimalWithCustomFooterStepperDialogExample />,
    codeString: MinimalWithCustomFooterStepperDialogExampleAsString,
  },
];

export const StepperPage = () => {
  const gh = getGhInfoByKey(routes.Stepper);
  const { renderSections, renderNavigation } =
    useExampleWithNavigation(examples);

  return (
    <StoryPage
      title="Stepper"
      description={
        "A dialog which common use case is to guide user through instruction or/and information"
      }
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
