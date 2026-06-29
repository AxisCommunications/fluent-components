import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  AdvancedDataGridExample,
  AdvancedDataGridExampleAsString,
} from "./examples/advanced-data-grid-example";
import {
  AdvancedDataGridMinimalExample,
  AdvancedDataGridMinimalExampleAsString,
} from "./examples/advanced-data-grid-minimal-example";

const examples: pageData[] = [
  {
    title: "Full featured",
    anchor: "AdvancedDataGridExample",
    example: <AdvancedDataGridExample />,
    codeString: AdvancedDataGridExampleAsString,
  },
  {
    title: "Minimal",
    anchor: "AdvancedDataGridMinimalExample",
    example: <AdvancedDataGridMinimalExample />,
    codeString: AdvancedDataGridMinimalExampleAsString,
  },
];

export const AdvancedDataGridPage = () => {
  const gh = getGhInfoByKey(routes.AdvancedDataGrid);
  const { renderSections, renderNavigation } =
    useExampleWithNavigation(examples);

  return (
    <StoryPage
      title="Advanced data grid"
      description={
        "A data grid combined with a filter toolbar that brings advanced data grid functionality to Fluent UI: searching, per-column filtering, sorting, pagination, selection, column visibility, density, CSV export, pinning, reordering and grouping with aggregation."
      }
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
