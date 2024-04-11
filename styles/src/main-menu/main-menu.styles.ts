import {
  makeStyles,
  mergeClasses,
  shorthands,
  tabClassNames,
  tokens,
} from "@fluentui/react-components";

const useContainerStyle = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground4,
  },
  vertical: {
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalS,
      tokens.spacingVerticalL
    ),
  },
  horizontal: {
    width: "100%",
    ...shorthands.padding(
      tokens.spacingHorizontalS,
      tokens.spacingVerticalL,
      tokens.spacingHorizontalS,
      tokens.spacingVerticalXXL
    ),
  },
});

export const useMainMenuContainerStyles = (
  orientation: "vertical" | "horizontal" = "vertical"
) => {
  const styles = useContainerStyle();
  const rootStyle = mergeClasses(styles.root, styles[orientation]);
  return { styles, rootStyle };
};

const useTabListStyles = makeStyles({
  root: {
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
  vertical: {
    height: "100%",
  },
  horizontal: {
    width: "100%",
  },
  spacer: {
    flexGrow: 1,
  },
});

export const useMainMenuTabListStyles = (
  orientation: "vertical" | "horizontal" = "vertical"
) => {
  const styles = useTabListStyles();
  const rootStyle = mergeClasses(styles.root, styles[orientation]);
  const spacerStyle = mergeClasses(styles.spacer);
  return { styles, rootStyle, spacerStyle };
};

const useTabStyles = makeStyles({
  root: {
    [`& .${tabClassNames.icon} `]: {
      color: tokens.colorNeutralForeground1,
    },
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Hover,
      [`& .${tabClassNames.icon}`]: {
        color: tokens.colorNeutralForeground1,
      },
    },
    "&:active": {
      backgroundColor: tokens.colorNeutralBackground3Hover,
      [`& .${tabClassNames.icon}`]: {
        color: tokens.colorNeutralForeground1,
      },
    },
  },
  selected: {
    backgroundColor: tokens.colorNeutralBackground3Selected,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Hover,
    },
  },
});

export const useMainMenuTabStyles = (selected?: boolean) => {
  const styles = useTabStyles();
  const rootStyle = mergeClasses(styles.root, selected && styles.selected);
  return { styles, rootStyle };
};
