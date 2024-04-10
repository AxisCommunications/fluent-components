import {
  useNavigationStyles,
  useTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  makeStyles,
  Tab,
  TabList,
  TabProps,
  useTabListContext_unstable,
} from "@fluentui/react-components";
import {
  CardUi20Regular,
  Home20Regular,
  Settings20Regular,
} from "@fluentui/react-icons";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "min-content",
    height: "250px",
  },
});

export function MainMenu() {
  const [selectedTab, setSelectedTab] = useState("1");
  const { container, spacer, tabList } = useNavigationStyles();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={container}>
        <TabList
          className={tabList}
          size="large"
          vertical
          defaultSelectedValue={selectedTab}
          selectedValue={selectedTab}
          onTabSelect={(_, { value }) => {
            setSelectedTab(value as unknown as string);
          }}
        >
          <MainMenuTab icon={<Home20Regular />} value="1" />
          <MainMenuTab icon={<CardUi20Regular />} value="2" />
          <div className={spacer} />
          <MainMenuTab icon={<Settings20Regular />} value="3" />
        </TabList>
      </div>
    </div>
  );
}

type TMainMenuTab = TabProps;

function MainMenuTab({ children, ...props }: TMainMenuTab) {
  const selected = useTabListContext_unstable((c) => c.selectedValue);
  const { rootStyle } = useTabStyles({ selected: selected === props.value });
  return <Tab className={rootStyle} {...props}>{children}</Tab>;
}

export const MainMenuExampleString = `
import { useNavigationStyles, useTabStyles } from '@axiscommunications/fluent-styles'
import { Tab, TabList, TabProps, makeStyles, useTabListContext_unstable } from '@fluentui/react-components'
import { CardUi20Filled, Home20Filled, Settings20Filled } from '@fluentui/react-icons'
import React, { useState } from 'react'

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "min-content",
    height: "250px"
  }
})

export function MainMenu() {
  const [selectedTab, setSelectedTab] = useState("1");
  const { container, spacer, tabList } = useNavigationStyles()
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={container}>
        <TabList
          className={tabList}
          size="large"
          vertical
          defaultSelectedValue={selectedTab}
          selectedValue={selectedTab}
          onTabSelect={(_, { value }) => {
            setSelectedTab(value as unknown as string);
          }}
        >
          <MainMenuTab icon={<Home20Filled />} value="1" />
          <MainMenuTab icon={<CardUi20Filled />} value="2" />
          <div className={spacer} />
          <MainMenuTab icon={<Settings20Filled />} value="3" />
        </TabList>
      </div>
    </div>
  )
}

type TMainMenuTab = TabProps

function MainMenuTab({ children, ...props }: TMainMenuTab) {
  const selected = useTabListContext_unstable((c) => c.selectedValue)
  const { rootStyle } = useTabStyles({ selected: selected === props.value });
  return <Tab className={rootStyle} {...props}>{children}</Tab>;
}
`;
