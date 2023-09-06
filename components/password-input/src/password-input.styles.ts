import { makeStyles } from "@fluentui/react-components";

// Hack to remove the Edge browsers built in
// password reveal functionality.
// https://github.com/microsoft/fluentui/issues/23482
export const usePasswordInputStyles = makeStyles({
  edgeHack: {
    "&::-ms-reveal": {
      display: "none",
    },
  },
});
