import {
  AxisThemeVariant,
  useIdentifyCurrentAxisTheme,
} from "@axiscommunications/fluent-theme";
import React from "react";
import { AxisIllustrationProps } from "./types.js";

export type TBundleIllustrationVariant = AxisThemeVariant;

export type TBundleIllustration = {
  variant: TBundleIllustrationVariant;
};

export const bundleIllustration = (
  DarkIllustration: React.FC<AxisIllustrationProps>,
  LightIllustration: React.FC<AxisIllustrationProps>
) => {
  const Component: React.FC<AxisIllustrationProps & TBundleIllustration> = ({
    variant,
    ...rest
  }) => {
    return variant === "dark" ? (
      <DarkIllustration data-testid="bundleIllustration-dark" {...rest} />
    ) : (
      <LightIllustration data-testid="bundleIllustration-light" {...rest} />
    );
  };

  Component.displayName = "CompoundIllustration";
  return Component;
};

export type TBundleIllustrationSmart = {
  fallback?: TBundleIllustrationVariant;
};

export const bundleIllustrationSmart = (
  DarkIllustration: React.FC<AxisIllustrationProps>,
  LightIllustration: React.FC<AxisIllustrationProps>
) => {
  const BundledIllustration = bundleIllustration(
    DarkIllustration,
    LightIllustration
  );

  const Component: React.FC<
    AxisIllustrationProps & TBundleIllustrationSmart
  > = ({ fallback = "light", ...rest }) => {
    const currentTheme = useIdentifyCurrentAxisTheme();
    const variant = currentTheme ? currentTheme.variant : fallback;

    return <BundledIllustration variant={variant} {...rest} />;
  };

  Component.displayName = "CompoundIllustrationSmart";
  return Component;
};
