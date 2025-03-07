import React from "react";

import {
  useFluentProviderContextValues_unstable,
  useFluentProvider_unstable,
} from "@fluentui/react-components";
import { AxisCustomUtilityTokens, AxisThemeVariant } from "../index.js";
import { AxisThemeName } from "../index.js";

export type Result = {
  name: AxisThemeName;
  variant: AxisThemeVariant;
} | null;

export function useIdentifyCurrentAxisTheme(): Result {
  const state = useFluentProvider_unstable({}, React.createRef());
  const { theme } = useFluentProviderContextValues_unstable(state);
  const AxisCustomUtilityThemeTokens = theme as AxisCustomUtilityTokens;

  return AxisCustomUtilityThemeTokens
    ? {
        name: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeName,
        variant: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeVariant,
      }
    : null;
}
