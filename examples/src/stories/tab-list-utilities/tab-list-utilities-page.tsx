import React from "react";
import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  StyledTabListComponent,
  StyledTabListComponentAsJson,
} from "./tab-list-example";

const examples: pageData[] = [
  {
    title: "Default",
    anchor: "StepperDialogExample",
    example: (
      <>
        <StyledTabListComponent />
        <StyledTabListComponent withText={false} />
        <StyledTabListComponent vertical />
        <StyledTabListComponent withText={false} vertical />
      </>
    ),
    codeString: StyledTabListComponentAsJson,
  },
];

export const FluentUiTabStylesPage = () => {
  const gh = getGhInfoByKey(routes.TabListUtilities);
  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples
  );

  return (
    <StoryPage
      title="Tablist"
      description={"Style utilities that can be used with fluent´s tablist component"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
