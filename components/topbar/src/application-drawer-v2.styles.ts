import {
  makeStyles,
  shorthands,
  tabClassNames,
  tokens,
} from "@fluentui/react-components";
import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

export const useApplicationDrawerV2Styles = makeStyles({
  drawer: {
    ...shorthands.borderRight(0),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  drawerTriggerRoot: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    paddingLeft: tokens.spacingHorizontalSNudge,
    color: tokens.colorNeutralForeground2,
  },
  drawerTriggerGap: {
    width: "26px",
  },
  drawerTriggerLabel: {
    marginLeft: tokens.spacingHorizontalXXS,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "46px",
    padding: "0 8px 0 19px",
  },
  body: {
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
  },
  linkWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    ...shorthands.padding(tokens.spacingVerticalS, 0),
  },
  link: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "40px",
  },
  title: {
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingRight: tokens.spacingHorizontalSNudge,
    paddingBottom: tokens.spacingVerticalL,
  },
  contentDivider: {
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalSNudge,
  },
  applicationGroupTitleText: {
    color: tokens.colorNeutralForeground4,
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalMNudge,
  },
  tabList: {
    width: "100%",
    marginRight: "32px",
  },
  tabWrap: {
    width: "100%",
    paddingLeft: tokens.spacingHorizontalSNudge,
    boxSizing: "border-box",
  },
  tab: {
    width: "100%",
    display: "flex",
    [`& .${tabClassNames.content}`]: {
      display: "flex",
      flex: 1,
    },
    padding: 0,
  },
  contentButton: {
    flex: 1,
    justifyContent: "flex-start",
    "&:hover, &:active:hover": {
      color: tokens.colorNeutralForeground2Hover,
    },
  },
  regularIconOnHover: {
    "&:hover": {
      [`& .${iconFilledClassName}`]: {
        display: "none",
      },
      [`& .${iconRegularClassName}`]: {
        display: "inline",
      },
    },
  },
  filledIcon: {
    [`& .${iconFilledClassName}`]: {
      display: "inline",
    },
    [`& .${iconRegularClassName}`]: {
      display: "none",
    },
  },
});
