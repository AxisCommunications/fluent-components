import { pageData } from "examples/src/components/story/story.utils";
import { StoryPage } from "../../components/story/story-page";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { MainMenu, MainMenuExampleString } from "./examples/main-menu";
import {
  MainMenuExampleStringVertical,
  MainMenuVertical,
} from "./examples/main-menu-vertical";

const examples: pageData[] = [
  {
    title: "Vertical",
    anchor: "Vertical",
    example: <MainMenuVertical />,
    codeString: MainMenuExampleStringVertical,
  },
  {
    title: "Horizontal",
    anchor: "Horizontal",
    example: <MainMenu />,
    codeString: MainMenuExampleString,
  },
];

export const MainMenuPage = () => {
  const gh = getGhInfoByKey(routes.mainMenu);

  const { renderSections, renderNavigation } =
    useExampleWithNavigation(examples);

  return (
    <StoryPage
      title="Main menu"
      description={
        "Variant of a main menu using fluent TabList and axis styling"
      }
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
