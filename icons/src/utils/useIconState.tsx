import { makeStyles, mergeClasses } from "@griffel/react";
import React from "react";
import { AxisIconProps } from "./FluentIconsProps.types";

const useRootStyles = makeStyles({
  root: {
    display: "inline",
    lineHeight: 0,

    "@media (forced-colors: active)": {
      forcedColorAdjust: "auto",
    },
  },
});

export const useIconState = <
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
>(
  props: AxisIconProps<TBaseAttributes>
): Omit<AxisIconProps<TBaseAttributes>, "primaryFill"> => {
  const { title, primaryFill = "currentColor", ...rest } = props;
  const state = {
    ...rest,
    title: undefined,
    fill: primaryFill,
  } as Omit<AxisIconProps<TBaseAttributes>, "primaryFill">;

  const styles = useRootStyles();

  state.className = mergeClasses(styles.root, state.className);

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
