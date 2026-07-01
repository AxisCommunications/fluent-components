import {
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Switch,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { DarkThemeRegular } from "@fluentui/react-icons";
import React, { useCallback } from "react";
import { useAppContext } from "../../../context/ApplicationStateProvider";
import { mainTheme } from "../theme-page.types";

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
  onSearchQueryChanged: (ev?: React.FormEvent<HTMLInputElement>) => void;
};

export function ThemePageHeader({
  search,
  onSearchQueryChanged,
}: ThemePageHeader) {
  const setAppTheme = useAppContext((context) => context.setTheme);
  const toggleDir = useAppContext((context) => context.toggleDir);
  const dir = useAppContext((context) => context.dir);
  const styles = useStyles();

  const applyLightTheme = useCallback(() => {
    setAppTheme(mainTheme.light);
  }, [setAppTheme]);

  const applyDarkTheme = useCallback(() => {
    setAppTheme(mainTheme.dark);
  }, [setAppTheme]);

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
