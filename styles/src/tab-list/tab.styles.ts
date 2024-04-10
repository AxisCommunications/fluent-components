import {
  makeStyles,
  mergeClasses,
  tabClassNames,
  tokens,
} from "@fluentui/react-components";

import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    [`& .${iconFilledClassName}`]: {
      color: tokens.colorNeutralForeground1,
    },
    [`& .${iconRegularClassName} `]: {
      color: tokens.colorNeutralForeground1,
    },
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

export const useTabStyles = ({ selected }: { selected?: boolean }) => {
  const styles = useStyles();
  const rootStyle = mergeClasses(styles.root, selected && styles.selected);
  return { styles, rootStyle };
};
