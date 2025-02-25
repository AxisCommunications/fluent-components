import React from "react";
import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { TableExample, TableExampleAsJson } from "./table-example";

const examples: pageData[] = [
  {
    title: "Default",
    anchor: "TableExample",
    example: <TableExample />,
    codeString: TableExampleAsJson,
  },
];

export const TableUtilitiesPage = () => {
  const gh = getGhInfoByKey(routes.TableUtilities);
  const { renderSections, renderNavigation } =
    useExampleWithNavigation(examples);

  return (
    <StoryPage
      title="Table"
      description={
        "Style utilities that can be used with fluent´s table component"
      }
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
