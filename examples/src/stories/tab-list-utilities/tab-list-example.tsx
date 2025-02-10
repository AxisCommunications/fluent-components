import {
  useTabListStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  Tab,
  TabList,
  TabListProps,
  TabProps,
} from "@fluentui/react-components";
import { HomeFilled, HomeRegular, bundleIcon } from "@fluentui/react-icons";
import React, { useState } from "react";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

export type TTabListComponent = {
  withText?: boolean;
} & TabListProps;

export function StyledTabListComponent({
  withText = true,
  ...props
}: TTabListComponent) {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const { rootStyle } = useTabListStyles({ vertical: props.vertical });

  return (
    <TabList
      selectedValue={selectedTab}
      className={rootStyle}
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

function StyledTabComponent({
  selected,
  children,
  ...props
}: TStyledTabComponent) {
  const { rootStyle } = useTabStyles({ selected });

  return (
    <Tab className={rootStyle} {...props}>
      {children}
    </Tab>
  );
}

export const StyledTabListComponentAsJson = `
import {
  useTabListStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  Tab,
  TabList,
  TabListProps,
  TabProps,
} from "@fluentui/react-components";
import { HomeFilled, HomeRegular, bundleIcon } from "@fluentui/react-icons";
import React, { useState } from "react";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

export type TTabListComponent = {
  withText?: boolean;
} & TabListProps;

export function StyledTabListComponent(
  { withText = true, ...props }: TTabListComponent
) {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const { rootStyle } = useTabListStyles({ vertical: props.vertical });

  return (
    <TabList
      selectedValue={selectedTab}
      className={rootStyle}
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
`;
