import { ReactElement } from "react";
import { StoryPage } from "../../components/story/story-page";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { IllustrationPageHeader } from "./components/illustration-page-header";
import {
  BundleIllustration,
  BundleIllustrationExampleAsString,
} from "./examples/bundle-illustration";
import {
  BundleIllustrationSmart,
  BundleIllustrationSmartExampleAsString,
} from "./examples/bundle-illustration-smart";
import { IllustrationList } from "./examples/illustration-list";
import { useIllustrationPage } from "./illustration-page.hooks";

export const IllustrationPage = (): ReactElement => {
  const gh = getGhInfoByKey(routes.Illustrations);

  const {
    search,
    filteredIllustrations,
    onSearchQueryChanged,
    filterByVariant,
  } = useIllustrationPage();

  const { renderSections, renderNavigation } = useExampleWithNavigation([
    {
      title: "IllustrationList",
      anchor: "IllustrationList",
      example: <IllustrationList illustrations={filteredIllustrations} />,
      storySectionProps: {
        description: "Click illustration for preview.",
      },
    },
    {
      title: "BundleIllustration",
      anchor: "BundleIllustration",
      example: <BundleIllustration />,
      codeString: BundleIllustrationExampleAsString,
      storySectionProps: {
        description:
          "Pre-bundles 2 illustrations and enables a controlled switch between variants.",
      },
    },
    {
      title: "BundleIllustrationSmart",
      anchor: "BundleIllustrationSmart",
      example: <BundleIllustrationSmart />,
      codeString: BundleIllustrationSmartExampleAsString,
      storySectionProps: {
        description:
          "Smart bundleIllustration will auto toggle bundled illustrations when fluent theme changes, please change theme in profile-menu. Uses bundleIllustration internally, and only work within a FluentProvider using axis-themes. You may provide a fallback value.",
      },
    },
  ]);
  return (
    <StoryPage
      title="Illustrations"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded illustrations"}
      navigation={renderNavigation}
      customHeader={
        <IllustrationPageHeader
          search={search}
          onSearchQueryChanged={onSearchQueryChanged}
          filterByVariant={filterByVariant}
        />
      }
    >
      {renderSections}
    </StoryPage>
  );
};
