import React from "react";
import { FluentIllustration } from "./types";

export const createFluentIllustration = (
  displayName: string,
  width: number,
  paths: string
): FluentIllustration => {
  const Illustration = () => {
    const image = `data:image/svg+xml;utf8,${encodeURIComponent(paths)}`;
    return React.createElement("img", {
      src: image,
      alt: "Example Image",
      width, // Set your desired width
    });
  };
  Illustration.displayName = displayName;
  return Illustration;

  // const Icon = (props: AxisIllustrationProps) => {
  //   const state = {
  //     ...useIllustrationState(props), // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
  //     width,
  //     height: width,
  //     viewBox: `0 0 ${width} ${width}`,
  //     xmlns: "http://www.w3.org/2000/svg",
  //     fill: "none",
  //   };
  //   return React.createElement("svg", state, paths);
  // };
  // Icon.displayName = displayName;

  // return Icon;
};
