import * as AxisIllustrations from "@axiscommunications/fluent-illustrations";
import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import React from "react";

export type TVariant = "All" | "Light" | "Dark";
export const variants: TVariant[] = ["All", "Light", "Dark"];
export const DEFAULT_VARIANT_FILTER: TVariant = "All";
export const DEFAULT_ILLUSTRATION_WIDTH = 160;

export const axisIllustrations: React.FC<AxisIllustrationProps>[] = Object.keys(
  AxisIllustrations
)

  .map((name) => (AxisIllustrations as any)[name])
  .filter((illustration) => !!illustration && !!illustration.displayName);
