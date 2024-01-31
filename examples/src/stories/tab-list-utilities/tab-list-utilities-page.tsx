import React, { createContext, useContext, useState } from "react";
import {
  makeStyles,
  mergeClasses,
  shorthands,
  Tab,
  TabList,
  tokens,
} from "@fluentui/react-components";
import { PageHeader } from "../../components/page-header";
import { useLayoutStyles, useScrollPageStyle } from "../../styles/page";
import { SectionTitle } from "../../components/section-title";
import { bundleIcon, HomeFilled, HomeRegular } from "@fluentui/react-icons";
import { CodeBlock } from "../../components/code-block";
import {
  codeBlockStyled,
  StyledTabListComponent,
  TTabListComponent,
} from "./tab-list-styled.";

type TTabListContext = {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
};

const TabListContext = createContext<TTabListContext | null>(null);
export const useTabListContext = () => {
  const context = useContext(TabListContext);
  if (context === null) {
    throw new Error("cant use context outside its provider");
  }
  return context;
};

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

const useTabListUtilitiesStyles = makeStyles({
  section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalXXL),
  },
  group: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
});

export const FluentUiTabStylesPage = () => {
  const styles = useTabListUtilitiesStyles();
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div className={layoutStyles.grid}>
      <TabListContext.Provider value={{ selectedTab, setSelectedTab }}>
        <PageHeader className={layoutStyles.header} title="Vertical stepper" />
        <div
          className={mergeClasses(
            layoutStyles.content,
            layoutStyles.sections,
            scrollPageStyle
          )}
        >
          <div className={styles.section}>
            <div className={styles.group}>
              <SectionTitle title={"TabList default"} />
              <TabListComponent />
              <TabListComponent withText={false} />
              <TabListComponent vertical />
              <TabListComponent withText={false} vertical />
            </div>

            <div className={styles.group}>
              <SectionTitle title={"TabList styled tabs"} />
              <StyledTabListComponent />
              <StyledTabListComponent withText={false} />
              <StyledTabListComponent vertical />
              <StyledTabListComponent withText={false} vertical />

              <CodeBlock codeString={codeBlockStyled} title={"code"} />
            </div>
          </div>
        </div>
      </TabListContext.Provider>
    </div>
  );
};

function TabListComponent({ withText = true, ...props }: TTabListComponent) {
  const { selectedTab, setSelectedTab } = useTabListContext();
  return (
    <TabList
      selectedValue={selectedTab}
      defaultSelectedValue={selectedTab}
      onTabSelect={(_, { value }) => {
        setSelectedTab(value as unknown as string);
      }}
      {...props}
    >
      <Tab icon={<HomeIcon />} value="tab1">{withText && "First Tab"}</Tab>
      <Tab icon={<HomeIcon />} value="tab2">{withText && "First Tab"}</Tab>
      <Tab icon={<HomeIcon />} value="tab3">{withText && "First Tab"}</Tab>
    </TabList>
  );
}
