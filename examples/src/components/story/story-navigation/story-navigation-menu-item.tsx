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
    backgroundImage:
      `linear-gradient(90deg,${tokens.colorNeutralBackground3}0%,${tokens.colorNeutralBackground1}50%,${tokens.colorNeutralBackground3}100%)`,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  selected: {
    backgroundImage:
      `linear-gradient(90deg,${tokens.colorNeutralBackground1}0%,${tokens.colorNeutralBackground1Selected}50%,${tokens.colorNeutralBackground1}100%)`,
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
      data-testid={componentId}
      className={rootStyle}
      {...rest}
    >
      {children}
    </Button>
  );
}
