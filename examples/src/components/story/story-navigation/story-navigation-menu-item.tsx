import {
  Button,
  MenuButtonProps,
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
    justifyContent: "flex-start",
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    minHeight: "unset",
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
    ":hover": {
      color: tokens.colorNeutralForeground1,
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  selected: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    position: "relative",
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
  },
});

type TUseStoryNavigationMenuItemStyles = {
  selected: boolean;
};

export function useNavigationMenuItemStyles({
  selected,
}: TUseStoryNavigationMenuItemStyles) {
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

export function StoryNavigationMenuItem({
  children,
  selected,
  ...rest
}: TStoryNavigationMenuItem) {
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
