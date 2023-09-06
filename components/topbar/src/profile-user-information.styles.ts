import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useUserInfoStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.padding(
      tokens.spacingVerticalS,
      tokens.spacingHorizontalMNudge,
      tokens.spacingVerticalS,
      tokens.spacingHorizontalXS
    ),
  },
});
