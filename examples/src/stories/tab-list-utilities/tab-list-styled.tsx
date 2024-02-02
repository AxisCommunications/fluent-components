import React from "react";
import {
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
...
import {
  useTabListStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";
...

//standard usage
const { rootStyle: tabListStyle } = useTabListStyles({ vertical: true/false });
const { rootStyle: tabStyle } = useTabStyles({ selected: true/false });

<TabList className={tabListStyle} {...TabListProps}>
    <Tab className={tabStyle} {...TabProps}>tab1</Tab>
</TabList>

//not happy with style? all styles can be grabbed from styles prop
const { styles } = useTabListStyles();
const newStyle = mergeClasses(styles.root, overrideStyles.root ...)
...
`;

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

export type TTabListComponent = {
  withText?: boolean;
} & TabListProps;

export function StyledTabListComponent(
  { withText = true, ...props }: TTabListComponent
) {
  const { selectedTab, setSelectedTab } = useTabListContext();
  const { rootStyle } = useTabListStyles({ vertical: props.vertical });

  return (
    <TabList
      selectedValue={selectedTab}
      className={rootStyle}
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
  const { rootStyle } = useTabStyles({ selected });

  return <Tab className={rootStyle} {...props}>{children}</Tab>;
}