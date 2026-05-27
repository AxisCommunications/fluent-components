import { makeStyles } from "@fluentui/react-components";
import { StoryPage } from "../../components/story/story-page";
import type { pageData } from "../../components/story/story.utils";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  CompactSideNavigationExample,
  CompactSideNavigationExampleAsString,
} from "./examples/compact-side-navigation-example";

const useStyles = makeStyles({
  example: {
    maxWidth: "400px",
  },
});

const examples: pageData[] = [
  {
    title: "Compact side navigation",
    anchor: "CompactSideNavigationExample",
    example: <CompactSideNavigationExample />,
    codeString: CompactSideNavigationExampleAsString,
  },
];

export const SideNavigationPage = () => {
  const gh = getGhInfoByKey(routes.SideNavigation);
  const styles = useStyles();

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples.map((d) => {
      return {
        ...d,
        example: <div className={styles.example}>{d.example}</div>,
      };
    })
  );

  return (
    <StoryPage
      title="Side navigation"
      description={
        "A compact vertical navigation rail based on the Fluent Unification design"
      }
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
