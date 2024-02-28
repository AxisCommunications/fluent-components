import * as AxisIllustrations from "@axiscommunications/fluent-illustrations";
import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import React from "react";

export type TVariant = "All" | "Light" | "Dark";
export const variants: TVariant[] = ["All", "Light", "Dark"];
export const DEFAULT_VARIANT_FILTER: TVariant = "All";

export const axisIllustrations: React.FC<AxisIllustrationProps>[] = Object.keys(
  AxisIllustrations
)
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  .map((name) => (AxisIllustrations as any)[name])
  .filter((illustration) => !!illustration && !!illustration.displayName);
