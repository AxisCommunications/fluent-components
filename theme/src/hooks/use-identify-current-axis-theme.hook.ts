import {
  useFluentProviderContextValues_unstable,
  useFluentProvider_unstable,
} from "@fluentui/react-components";
import React from "react";
import { AxisCustomUtilityTokens, AxisThemeVariant } from "..";
import { AxisThemeName } from "../index";

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
