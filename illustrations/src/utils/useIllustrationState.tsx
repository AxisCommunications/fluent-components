import React from "react";

import { AxisIllustrationProps } from "./types";

export const useIllustrationState = <
  TBaseAttributes extends
    | React.ImgHTMLAttributes<HTMLImageElement>
    | React.HTMLAttributes<HTMLElement> = React.ImgHTMLAttributes<HTMLImageElement>,
>(
  props: AxisIllustrationProps<TBaseAttributes>
): Omit<AxisIllustrationProps<TBaseAttributes>, "primaryFill"> => {
  const { title, ...rest } = props;
  const state = {
    ...rest,
    title: undefined,
  } as Omit<AxisIllustrationProps<TBaseAttributes>, "primaryFill">;

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
