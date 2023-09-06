import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useNotificationBarStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.padding(tokens.spacingVerticalS),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground3,
  },
  iconAndText: {
    display: "flex",
    ...shorthands.flex(1),
    ...shorthands.gap(tokens.spacingHorizontalM),
    alignItems: "center",
  },
  icon: {
    display: "flex",
    ...shorthands.flex(0, 0, "24px"),
  },
  warning: {
    backgroundColor: tokens.colorPaletteDarkOrangeBackground1,
    ...shorthands.border("1px", "solid", tokens.colorPaletteDarkOrangeBorder1),
  },
});
