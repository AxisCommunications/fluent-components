import {
  useMainMenuContainerStyles,
  useMainMenuTabListStyles,
  useMainMenuTabStyles,
} from "@axiscommunications/fluent-styles";
import {
  Tab,
  TabList,
  TabProps,
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
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../routing/routes";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const RandomIcon = bundleIcon(CardUiFilled, CardUiRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);

const HOME_VALUE = "1";

export function MainMenu() {
  const [selectedTab, setSelectedTab] = useState(HOME_VALUE);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === routes.Home) {
      setSelectedTab(HOME_VALUE);
    }
  }, [pathname]);

  const { rootStyle: containerRootStyle } = useMainMenuContainerStyles();
  const { rootStyle, spacerStyle } = useMainMenuTabListStyles();

  return (
    <div className={containerRootStyle}>
      <TabList
        className={rootStyle}
        size="large"
        vertical
        selectedValue={selectedTab}
        onTabSelect={(_, { value }) => {
          setSelectedTab(value as unknown as string);
        }}
      >
        <MainMenuTab
          onClick={() => navigate(routes.Home)}
          icon={<HomeIcon />}
          value={HOME_VALUE}
        />
        <MainMenuTab icon={<RandomIcon />} value="2" />
        <div className={spacerStyle} />
        <MainMenuTab icon={<SettingsIcon />} value="3" />
      </TabList>
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
