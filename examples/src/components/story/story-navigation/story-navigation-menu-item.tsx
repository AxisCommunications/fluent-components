import {
  Button,
  makeStyles,
  MenuButtonProps,
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
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  selected: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2,
    },
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
} & MenuButtonProps;

export function StoryNavigationMenuItem(
  { children, selected, ...rest }: TStoryNavigationMenuItem
) {
  const { rootStyle } = useNavigationMenuItemStyles({ selected });

  return (
    <Button
      appearance="transparent"
      shape="circular"
      data-testid={componentId}
      className={rootStyle}
      {...rest}
    >
      {children}
    </Button>
  );
}
