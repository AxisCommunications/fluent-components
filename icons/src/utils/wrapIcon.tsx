import React from "react";
import { AxisIconProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon: (iconProps: AxisIconProps) => JSX.Element, displayName?: string) => {
  const WrappedIcon = (props: AxisIconProps) => {
    const state = useIconState(props);
    return <Icon {...state} />
  }
  WrappedIcon.displayName = displayName;
  return WrappedIcon;
}

export default wrapIcon;