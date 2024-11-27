import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    ...shorthands.margin("auto"),
    height: "100%",
    maxWidth: "500px",
  },
  fixedSpacer: {
    height: "60px",
  },
  spacer: {
    flexGrow: 1,
  },
  illustrationLarge: {
    flex: "none",
    height: "160px",
    width: "230px",
    marginBottom: tokens.spacingVerticalS,
  },
  illustrationMedium: {
    flex: "none",
    height: "140px",
    width: "200px",
    marginBottom: tokens.spacingVerticalXS,
  },
  illustrationSmall: {
    flex: "none",
    height: "80px",
    width: "115px",
    marginBottom: tokens.spacingVerticalXS,
  },
  title: {
    color: tokens.colorNeutralForeground2,
    textAlign: "center",
    marginBottom: tokens.spacingVerticalS,
  },
  text: {
    color: tokens.colorNeutralForeground2,
    textAlign: "center",
    marginBottom: tokens.spacingVerticalL,
  },
  after: {
    verticalAlign: "middle",
  },
});
