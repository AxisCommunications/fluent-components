import React from "react";
import { AxisIllustrationProps, FluentIllustration } from "./types";
import { useIllustrationState } from "./useIllustrationState";

export const createFluentIllustration = (
  displayName: string,
  paths: string
): FluentIllustration => {
  const Illustration = (props: AxisIllustrationProps) => {
    const image = `data:image/svg+xml;utf8,${encodeURIComponent(paths)}`;
    return React.createElement("img", {
      alt: "Axis illustration",
      src: image,
      ...useIllustrationState(props),
    });
  };
  Illustration.displayName = displayName;
  return Illustration;
};
