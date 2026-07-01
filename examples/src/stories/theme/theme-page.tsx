import React from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { ColorTokens } from "./components/color-tokens";
import { ThemePageHeader } from "./components/theme-page-header";
import { mainTheme } from "./theme-page.types";

export const ThemePage = () => {
  const gh = getGhInfoByKey(routes.Theme);

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
        />
      }
    >
      <StorySection title="colorTokens" description="Axis branded colors">
        <StoryCodeBlockAccordion codeString={themeCodeAsString} />
        <ColorTokens filter={search} theme={mainTheme} />
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
