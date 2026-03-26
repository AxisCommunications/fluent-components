import {
  MenuItem,
  MenuItemProps,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

const componentId = "navigation-menu-item";
export const navigationMenuItemClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding(
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalM
    ),
    minHeight: "unset",
    color: tokens.colorNeutralForeground2,
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  selected: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    "::before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "25%",
      height: "50%",
      width: "3px",
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
      backgroundColor: tokens.colorBrandForeground1,
    },
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1,
    },
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
