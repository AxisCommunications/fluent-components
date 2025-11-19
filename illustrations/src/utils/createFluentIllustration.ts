import { createElement } from "react";
import { AxisIllustrationProps, FluentIllustration } from "./types.js";
import { useIllustrationState } from "./useIllustrationState.js";

export const createFluentIllustration = (
  displayName: string,
  paths: string
): FluentIllustration => {
  const Illustration = (props: AxisIllustrationProps) => {
    const image = `data:image/svg+xml;utf8,${encodeURIComponent(paths)}`;
    return createElement("img", {
      alt: "Axis illustration",
      src: image,
      ...useIllustrationState(props),
    });
  };
  Illustration.displayName = displayName;
  return Illustration;
};
