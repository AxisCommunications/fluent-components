import { makeStyles, tokens } from "@fluentui/react-components";

import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

export const useTabStyles = makeStyles({
  root: {
    [`& .${iconFilledClassName}`]: {
      color: tokens.colorNeutralForeground1,
    },
    [`& .${iconRegularClassName}`]: {
      color: tokens.colorNeutralForeground1,
    },
    "&:hover": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
  },
  selected: {
    backgroundColor: tokens.colorSubtleBackgroundSelected,
    "&:hover": {
      backgroundColor: tokens.colorSubtleBackgroundSelected,
    },
  },
});
