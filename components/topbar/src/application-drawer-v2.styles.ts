import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useApplicationDrawerV2Styles = makeStyles({
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  body: {
    backgroundColor: tokens.colorNeutralBackground2,
    backgroundImage: "none",
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
    ...shorthands.gap(tokens.spacingVerticalS),
    paddingTop: "48px",
  },
  contentDivider: {
    paddingTop: tokens.spacingVerticalS,
  },
});
