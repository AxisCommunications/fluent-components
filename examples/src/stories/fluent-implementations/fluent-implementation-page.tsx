import { pageData } from "examples/src/components/story/story.utils";
import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { MainMenu, MainMenuExampleString } from "./examples/main-menu";

const examples: pageData[] = [
  {
    title: "MainMenu",
    anchor: "MainMenu",
    example: <MainMenu />,
    codeString: MainMenuExampleString,
  },
];

export const FluentImplementationPage = () => {
  const gh = getGhInfoByKey(routes.fluentImplementations);

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples.map(d => {
      return {
        ...d,
        example: (
          d.example
        ),
      };
    })
  );

  return (
    <StoryPage
      title="Fluent implementation"
      description={"Various component styled using fluent or/and axis styling"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
