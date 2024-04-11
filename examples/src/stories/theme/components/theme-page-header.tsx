import {
  Input,
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SelectTabData,
  SelectTabEvent,
  shorthands,
  Switch,
  Tab,
  TabList,
  tokens,
} from "@fluentui/react-components";
import { DarkThemeRegular } from "@fluentui/react-icons";
import { useAppContext } from "../../../context/ApplicationStateProvider";
import React, { useCallback } from "react";
import { axisThemes, TaxisThemes, themeMap } from "../theme-page.types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  switch: {
    marginLeft: "auto",
  },
});

type ThemePageHeader = {
  search: string;
  selectedTab: TaxisThemes;
  setSelectedTab: (value: TaxisThemes) => void;
  onSearchQueryChanged: (ev?: React.FormEvent<HTMLInputElement>) => void;
};

export function ThemePageHeader(
  {
    selectedTab,
    setSelectedTab,
    search,
    onSearchQueryChanged,
  }: ThemePageHeader
) {
  const setAppTheme = useAppContext((context) => context.setTheme);
  const toggleDir = useAppContext((context) => context.toggleDir);
  const dir = useAppContext((context) => context.dir);
  const styles = useStyles();

  const applyLightTheme = useCallback(() => {
    const theme = themeMap[selectedTab].light;
    setAppTheme(theme);
  }, [selectedTab, setAppTheme]);

  const applyDarkTheme = useCallback(() => {
    const theme = themeMap[selectedTab].dark;
    setAppTheme(theme);
  }, [selectedTab, setAppTheme]);

  const onThemeSelect = useCallback(
    (_: SelectTabEvent, { value }: SelectTabData) =>
      setSelectedTab(value as TaxisThemes),
    []
  );

  return (
    <div className={styles.root}>
      <div>
        <Input
          size="small"
          type="search"
          placeholder="Search tokens"
          value={search}
          aria-label="search"
          onChange={onSearchQueryChanged}
        />
      </div>
      <TabList
        defaultSelectedValue={selectedTab}
        onTabSelect={onThemeSelect}
      >
        <Tab value={axisThemes.main}>Main theme</Tab>
        <Tab value={axisThemes.blue}>Blue Theme</Tab>
      </TabList>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton shape="circular" icon={<DarkThemeRegular />}>
            Apply theme
          </MenuButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem onClick={applyLightTheme}>light</MenuItem>
            <MenuItem onClick={applyDarkTheme}>dark</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      <Switch
        className={styles.switch}
        label="Swap direction"
        checked={dir === "ltr"}
        onChange={toggleDir}
      />
    </div>
  );
}
