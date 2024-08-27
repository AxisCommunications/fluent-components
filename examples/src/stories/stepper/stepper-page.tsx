import React from "react";
import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  StepperDialogExample,
  StepperDialogExampleAsString,
} from "./examples/stepper-dialog-example";
import {
  VerticalStepperDialogExample,
  VerticalStepperDialogExampleAsString,
} from "./examples/vertical-stepper-dialog-example";
import {
  CustomStepperDialogExample,
  CustomStepperDialogExampleAsString,
} from "./examples/custom-style-example";
import {
  StepperDialogV2Example,
  StepperDialogV2ExampleAsString,
} from "./examples/stepper-dialog-v2-example";

const examples: pageData[] = [
  {
    title: "Stepper dialog V1 (default)",
    anchor: "StepperDialogExample",
    example: <StepperDialogExample />,
    codeString: StepperDialogExampleAsString,
  },
  {
    title: "Stepper dialog V2 (different button layout)",
    anchor: "StepperDialogV2Example",
    example: <StepperDialogV2Example />,
    codeString: StepperDialogV2ExampleAsString,
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
];

export const StepperPage = () => {
  const gh = getGhInfoByKey(routes.Stepper);
  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples
  );

  return (
    <StoryPage
      title="Stepper"
      description={"A dialog which common use case is to guide user through instruction or/and information"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
