import React, { useState } from "react";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { ColorTokens } from "./components/color-tokens";
import { ThemePageHeader } from "./components/theme-page-header";
import { axisThemes, TaxisThemes, themeMap } from "./theme-page.types";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";

export const ThemePage = () => {
  const gh = getGhInfoByKey(routes.Theme);

  const [selectedTab, setSelectedTab] = useState<TaxisThemes>(axisThemes.main);
  const [search, setSearch] = React.useState("");

  const onSearchQueryChanged = (ev?: React.FormEvent<HTMLInputElement>) => {
    setSearch(ev ? ev.currentTarget.value : "");
  };

  return (
    <StoryPage
      title="Theme"
      description={"Axis branded theme"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      customHeader={
        <ThemePageHeader
          search={search}
          onSearchQueryChanged={onSearchQueryChanged}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      }
    >
      <StorySection
        title="colorTokens"
        description="Axis branded colors"
      >
        <StoryCodeBlockAccordion codeString={themeCodeAsString} />
        <ColorTokens
          filter={search}
          theme={themeMap[selectedTab]}
        />
      </StorySection>
    </StoryPage>
  );
};

export const themeCodeAsString = `
import { makeStyles, FluentProvider } from "@fluentui/react-components";
import {
  axisLightTheme,
  axisDarkTheme,
  axisBlueLightTheme,
  axisBlueDarkTheme,
} from "@axiscommunications/fluent-theme";
import { axisCustomTokens } from "@axiscommunications/fluent-theme";

export const useApplicationStyles = makeStyles({
  root: {
    backgroundColor: axisCustomTokens.axisCustomColorMyBusinessBackground
  }
});

<FluentProvider theme={axisDarkTheme}>
  <App/>
</FluentProvider>
`;
