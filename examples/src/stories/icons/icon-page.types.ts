import * as AxisIcons from "@axiscommunications/fluent-icons";
import { AxisIconProps } from "@axiscommunications/fluent-icons";
import React from "react";

export type TVariant = 16 | 20 | 24 | 28 | 32 | 48 | "Unsized" | "All";
export const variants: TVariant[] = [16, 20, 24, 28, 32, 48, "Unsized", "All"];
export const DEFAULT_VARIANT_FILTER: TVariant = "All";

export const axisIcons: React.FC<AxisIconProps>[] = Object.keys(AxisIcons)

  .map((name) => (AxisIcons as any)[name])
  .filter((illustration) => !!illustration && !!illustration.displayName);
