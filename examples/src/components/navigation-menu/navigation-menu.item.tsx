import {
  MenuItem,
  MenuItemProps,
  makeStyles,
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
    backgroundImage: `linear-gradient(90deg,${tokens.colorNeutralBackground1}0%,${tokens.colorNeutralBackground3}95%)`,
  },
  selected: {
    backgroundImage: `linear-gradient(90deg,${tokens.colorNeutralBackground1}100%,${tokens.colorNeutralBackground3}0%)`,
  },
});

type TUseNavigationMenuItemStyles = {
  selected: boolean;
};

export function useNavigationMenuItemStyles({
  selected,
}: TUseNavigationMenuItemStyles) {
  const styles = useStyles();
  const rootStyle = mergeClasses(
    navigationMenuItemClassNames.root,
    styles.root,
    selected && styles.selected
  );
  return { styles, rootStyle };
}

type TNavigationMenuItem = {
  selected: boolean;
} & MenuItemProps;

export function NavigationMenuItem({
  children,
  selected,
  ...rest
}: TNavigationMenuItem) {
  const { rootStyle } = useNavigationMenuItemStyles({ selected });

  return (
    <MenuItem data-testid={componentId} className={rootStyle} {...rest}>
      {children}
    </MenuItem>
  );
}
