import React from "react";

// import { makeStyles, mergeClasses } from "@griffel/react";
import { AxisIllustrationProps } from "./types";

// const useRootStyles = makeStyles({
//   root: {
//     display: 'inline',
//     lineHeight: 0,

//     "@media (forced-colors: active)": {
//       forcedColorAdjust: 'auto',
//     }
//   }
// });

export const useIllustrationState = <
  TBaseAttributes extends (
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement>
  ) = React.SVGAttributes<SVGElement>,
>(
  props: AxisIllustrationProps<TBaseAttributes>
): Omit<AxisIllustrationProps<TBaseAttributes>, "primaryFill"> => {
  const { title, primaryFill = "currentColor", ...rest } = props;
  const state = {
    ...rest,
    title: undefined,
    fill: primaryFill,
  } as Omit<AxisIllustrationProps<TBaseAttributes>, "primaryFill">;

  // const styles = useRootStyles();

  // state.className = mergeClasses(styles.root, state.className);

  if (title) {
    state["aria-label"] = title;
  }

  if (!state["aria-label"] && !state["aria-labelledby"]) {
    state["aria-hidden"] = true;
  } else {
    state.role = "img";
  }

  return state;
};
