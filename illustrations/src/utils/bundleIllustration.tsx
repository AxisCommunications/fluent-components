import React from "react";
import { AxisIllustrationProps } from "./types";

export type TBundleIllustrationVariant = "dark" | "light"

export type TBundleIllustration = {
  variant: TBundleIllustrationVariant
}

export const bundleIllustration = (DarkIllustration: React.FC<AxisIllustrationProps>, LightIllustration: React.FC<AxisIllustrationProps>) => {
  const Component: React.FC<AxisIllustrationProps & TBundleIllustration> = ({ variant, ...rest }) => {
    return (
      variant === "dark" ?
        <DarkIllustration {...rest}
        /> :
        <LightIllustration {...rest}
        />
    )
  }

  Component.displayName = "CompoundIllustration";
  return Component;
}

