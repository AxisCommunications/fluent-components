import {
  makeStyles,
  MenuItem,
  MenuItemProps,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import React from "react";

const componentId = "navigation-menu-item";
export const navigationMenuItemClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  selected: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
  },
});

type TUseStoryNavigationMenuItemStyles = {
  selected: boolean;
};

export function useNavigationMenuItemStyles(
  { selected }: TUseStoryNavigationMenuItemStyles
) {
  const styles = useStyles();
  const rootStyle = mergeClasses(
    navigationMenuItemClassNames.root,
    styles.root,
    selected && styles.selected
  );
  return { styles, rootStyle };
}

type TStoryNavigationMenuItem = {
  selected: boolean;
} & MenuItemProps;

export function StoryNavigationMenuItem(
  { children, selected, ...rest }: TStoryNavigationMenuItem
) {
  const { rootStyle } = useNavigationMenuItemStyles({ selected });

  return (
    <MenuItem data-testid={componentId} className={rootStyle} {...rest}>
      {children}
    </MenuItem>
  );
}
