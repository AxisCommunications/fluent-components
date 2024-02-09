import React from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { TableExample, TableExampleAsJson } from "./table-example";

export const TableUtilitiesPage = () => {
  const gh = getGhInfoByKey(routes.TableUtilities);
  return (
    <StoryPage
      title="Table"
      description={"Style utilities that can be used with fluent´s table component"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
    >
      <StorySection title="Default">
        <TableExample />
        <StoryCodeBlockAccordion codeString={TableExampleAsJson} />
      </StorySection>
    </StoryPage>
  );
};
