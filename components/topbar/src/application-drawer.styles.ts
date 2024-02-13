import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useApplicationDrawrStyles = makeStyles({
  drawer: {
    ...shorthands.borderRight(0),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground3,
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  body: {
    backgroundColor: tokens.colorNeutralBackground2,
    backgroundImage: "none",
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  drawerTriggerButton: {
    paddingLeft: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    ...shorthands.borderWidth(0),
    ...shorthands.borderRadius(
      tokens.borderRadiusXLarge,
      tokens.borderRadiusLarge,
      tokens.borderRadiusLarge,
      tokens.borderRadiusXLarge
    ),
  },
  drawerTriggerApplication: {
    fontSize: "1.8em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
  },
  drawerTriggerApplicationIcon: {
    color: tokens.colorNeutralForeground2,
    "&:hover": {
      color: tokens.colorNeutralForeground2BrandHover,
    },
  },
  drawerTriggerApplicationIconHovered: {
    color: tokens.colorNeutralForeground2BrandHover,
  },
  drawerTriggerApplicationText: {
    color: tokens.colorNeutralForeground2,
  },
  applicationGroupTitle: {
    fontSize: "1.4em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalS),
  },
  applicationGroupTitleIcon: {
    color: tokens.colorNeutralForeground2,
  },
  applicationGroupTitleText: {
    color: tokens.colorNeutralForeground4,
  },
  applicationButton: {
    paddingLeft: tokens.spacingHorizontalXXS,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    ...shorthands.gap(tokens.spacingVerticalS),
    paddingTop: tokens.spacingVerticalXXXL,
  },
  contentGroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentDivider: {
    paddingTop: tokens.spacingVerticalS,
  },
  contentChildren: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "24px",
    boxSizing: "border-box",
  },
  contentButton: {
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: tokens.spacingHorizontalSNudge,
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
});
