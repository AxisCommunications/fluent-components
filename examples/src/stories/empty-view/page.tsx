import React from "react";

import { makeStyles } from "@fluentui/react-components";

import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { StoryPage } from "../../components/story/story-page";

import {
  MainEmptyViewExample,
  MainEmptyViewExampleAsString,
} from "./examples/main";
import {
  PanelEmptyViewExample,
  PanelEmptyViewExampleAsString,
} from "./examples/panel";
import {
  SubmenuEmptyViewExample,
  SubmenuEmptyViewExampleAsString,
} from "./examples/submenu";
import {
  DialogEmptyViewExample,
  DialogEmptyViewExampleAsString,
} from "./examples/dialog";

const useStyles = makeStyles({
  height: {
    height: "500px",
  },
});

const examples: pageData[] = [
  {
    title: "Main empty view",
    anchor: "MainEmptyViewExample",
    example: <MainEmptyViewExample />,
    codeString: MainEmptyViewExampleAsString,
  },
  {
    title: "Panel empty view",
    anchor: "PanelEmptyViewExample",
    example: <PanelEmptyViewExample />,
    codeString: PanelEmptyViewExampleAsString,
  },
  {
    title: "Submenu empty view",
    anchor: "SubmenuEmptyViewExample",
    example: <SubmenuEmptyViewExample />,
    codeString: SubmenuEmptyViewExampleAsString,
  },
  {
    title: "Dialog empty view",
    anchor: "DialogEmptyViewExample",
    example: <DialogEmptyViewExample />,
    codeString: DialogEmptyViewExampleAsString,
  },
];

export const EmptyViewPage = () => {
  const gh = getGhInfoByKey(routes.EmptyView);
  const styles = useStyles();

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples.map((d) => {
      return {
        ...d,
        example: (
          <div
            className={d.anchor === "DialogEmptyViewExample"
              ? undefined
              : styles.height}
          >
            {d.example}
          </div>
        ),
      };
    })
  );

  return (
    <StoryPage
      title="EmptyView"
      description={"This is a component used when no data to display."}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
