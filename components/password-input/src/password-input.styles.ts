import { makeStyles } from "@fluentui/react-components";

// Hack to remove the Edge browsers built in
// password reveal functionality.
// https://github.com/microsoft/fluentui/issues/23482
const isEdgeLegacy =
  typeof window !== "undefined" && /Edge\/\d./i.test(navigator.userAgent);

export const usePasswordInputStyles = makeStyles({
  edgeHack: isEdgeLegacy
    ? {
        "&::-ms-reveal": {
          display: "none",
        },
      }
    : {},
});
