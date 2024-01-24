import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useApplicationDrawrStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: tokens.colorNeutralBackground5,
    color: tokens.colorNeutralForeground3,
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  iconAndText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    ...shorthands.gap(tokens.spacingVerticalM),
    paddingTop: tokens.spacingVerticalXXXL,
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
  },
  selectedContentButton: {
    backgroundColor: tokens.colorNeutralBackground2Hover,
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
