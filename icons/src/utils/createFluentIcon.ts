import * as React from "react";
import { useIconState } from "./useIconState";
import { AxisIconProps } from "./FluentIconsProps.types";

export type FluentIcon = {
  (props: AxisIconProps): JSX.Element;
  displayName?: string;
};

export const createFluentIcon = (
  displayName: string,
  width: string,
  paths: string[]
): FluentIcon => {
  const viewBoxWidth = width === "1em" ? "20" : width;
  const Icon = (props: AxisIconProps) => {
    const state = {
      ...useIconState(props), // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: "http://www.w3.org/2000/svg",
    };
    return React.createElement(
      "svg",
      state,
      ...paths.map((d) =>
        React.createElement("path", {
          d,
          fill: state.fill, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null
          // key: i // The key for static children is needless
        })
      )
    );
  };
  Icon.displayName = displayName;
  return Icon;
};
