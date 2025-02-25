import {
  useMainMenuContainerStyles,
  useMainMenuTabListStyles,
  useMainMenuTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  Tab,
  TabList,
  TabProps,
  makeStyles,
  useTabListContext_unstable,
} from "@fluentui/react-components";
import {
  CardUiFilled,
  CardUiRegular,
  HomeFilled,
  HomeRegular,
  SettingsFilled,
  SettingsRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import React, { useState } from "react";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const RandomIcon = bundleIcon(CardUiFilled, CardUiRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export function MainMenu() {
  const [selectedTab, setSelectedTab] = useState("1");
  const styles = useStyles();

  const { rootStyle: containerRootStyle } =
    useMainMenuContainerStyles("horizontal");
  const { rootStyle, spacerStyle } = useMainMenuTabListStyles("horizontal");

  return (
    <div className={styles.root}>
      <div className={containerRootStyle}>
        <TabList
          className={rootStyle}
          size="large"
          selectedValue={selectedTab}
          onTabSelect={(_, { value }) => {
            setSelectedTab(value as unknown as string);
          }}
        >
          <MainMenuTab icon={<HomeIcon />} value="1" />
          <MainMenuTab icon={<RandomIcon />} value="2" />
          <div className={spacerStyle} />
          <MainMenuTab icon={<SettingsIcon />} value="3" />
        </TabList>
      </div>
    </div>
  );
}

type TMainMenuTab = TabProps;

function MainMenuTab({ children, ...props }: TMainMenuTab) {
  const selected = useTabListContext_unstable((c) => c.selectedValue);
  const { rootStyle } = useMainMenuTabStyles(selected === props.value);
  return (
    <Tab className={rootStyle} {...props}>
      {children}
    </Tab>
  );
}

export const MainMenuExampleString = `
import {
  useMainMenuContainerStyles,
  useMainMenuTabListStyles,
  useMainMenuTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  makeStyles,
  Tab,
  TabList,
  TabProps,
  useTabListContext_unstable,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CardUiFilled,
  CardUiRegular,
  HomeFilled,
  HomeRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import React, { useState } from "react";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const RandomIcon = bundleIcon(CardUiFilled, CardUiRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export function MainMenu() {
  const [selectedTab, setSelectedTab] = useState("1");
  const styles = useStyles();

  const { rootStyle: containerRootStyle } = useMainMenuContainerStyles(
    "horizontal"
  );
  const { rootStyle, spacerStyle } = useMainMenuTabListStyles("horizontal");

  return (
    <div className={styles.root}>
      <div className={containerRootStyle}>
        <TabList
          className={rootStyle}
          size="large"
          selectedValue={selectedTab}
          onTabSelect={(_, { value }) => {
            setSelectedTab(value as unknown as string);
          }}
        >
          <MainMenuTab icon={<HomeIcon />} value="1" />
          <MainMenuTab icon={<RandomIcon />} value="2" />
          <div className={spacerStyle} />
          <MainMenuTab icon={<SettingsIcon />} value="3" />
        </TabList>
      </div>
    </div>
  );
}

type TMainMenuTab = TabProps;

function MainMenuTab({ children, ...props }: TMainMenuTab) {
  const selected = useTabListContext_unstable((c) => c.selectedValue);
  const { rootStyle } = useMainMenuTabStyles(selected === props.value);
  return <Tab className={rootStyle} {...props}>{children}</Tab>;
}
`;
