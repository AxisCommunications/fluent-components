import React from "react";
import {
  mergeClasses,
  Tab,
  TabList,
  TabListProps,
  TabProps,
} from "@fluentui/react-components";
import { bundleIcon, HomeFilled, HomeRegular } from "@fluentui/react-icons";
import {
  useTabListStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";
import { useTabListContext } from "./tab-list-utilities-page";

export const codeBlockStyled = `
import {
  useTabListStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";

type TTabListComponent = {
  withText?: boolean;
} & TabListProps;

function StyledTabListComponent(
  { withText = true, ...props }: TTabListComponent
) {
  const { selectedTab, setSelectedTab } = useTabListContext()
  const styles = useTabListStyles();
  const rootStyles = mergeClasses(
    styles.root,
    props.vertical && styles.vertical
  );
  return (
    <TabList
      selectedValue={selectedTab}
      className={rootStyles}
      defaultSelectedValue={selectedTab}
      onTabSelect={(_, { value }) => {
        setSelectedTab(value as unknown as string);
      }}
      {...props}
    >
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab1"
        selected={selectedTab === "tab1"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab2"
        selected={selectedTab === "tab2"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab3"
        selected={selectedTab === "tab3"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
    </TabList>
  );
}

type TStyledTabComponent = {
  selected?: boolean;
} & TabProps;

function StyledTabComponent(
  { selected, children, ...props }: TStyledTabComponent
) {
  const styles = useTabStyles();
  const rootStyles = mergeClasses(styles.root, selected && styles.selected);
  return <Tab className={rootStyles} {...props}>{children}</Tab>;
}
`;

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

export type TTabListComponent = {
  withText?: boolean;
} & TabListProps;

export function StyledTabListComponent(
  { withText = true, ...props }: TTabListComponent
) {
  const { selectedTab, setSelectedTab } = useTabListContext();
  const styles = useTabListStyles();
  const rootStyles = mergeClasses(
    styles.root,
    props.vertical && styles.vertical
  );
  return (
    <TabList
      selectedValue={selectedTab}
      className={rootStyles}
      defaultSelectedValue={selectedTab}
      onTabSelect={(_, { value }) => {
        setSelectedTab(value as unknown as string);
      }}
      {...props}
    >
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab1"
        selected={selectedTab === "tab1"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab2"
        selected={selectedTab === "tab2"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
      <StyledTabComponent
        icon={<HomeIcon />}
        value="tab3"
        selected={selectedTab === "tab3"}
      >
        {withText && "First Tab"}
      </StyledTabComponent>
    </TabList>
  );
}

export type TStyledTabComponent = {
  selected?: boolean;
} & TabProps;

function StyledTabComponent(
  { selected, children, ...props }: TStyledTabComponent
) {
  const styles = useTabStyles();
  const rootStyles = mergeClasses(styles.root, selected && styles.selected);
  return <Tab className={rootStyles} {...props}>{children}</Tab>;
}

export function TabListComponent(
  { withText = true, ...props }: TTabListComponent
) {
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
