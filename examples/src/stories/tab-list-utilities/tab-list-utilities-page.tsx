import React from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  StyledTabListComponent,
  StyledTabListComponentAsJson,
} from "./tab-list-example";

export const FluentUiTabStylesPage = () => {
  const gh = getGhInfoByKey(routes.TabListUtilities);
  return (
    <StoryPage
      title="Tablist"
      description={"Style utilities that can be used with fluent´s tablist component"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
    >
      <StorySection title="Default">
        <StyledTabListComponent />
        <StyledTabListComponent withText={false} />
        <StyledTabListComponent vertical />
        <StyledTabListComponent withText={false} vertical />
        <StoryCodeBlockAccordion codeString={StyledTabListComponentAsJson} />
      </StorySection>
    </StoryPage>
  );
};
