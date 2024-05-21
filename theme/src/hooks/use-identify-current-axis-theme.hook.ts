import { AxisCustomUtilityTokens, AxisThemeVariant } from "..";
import {
  useFluentProvider_unstable,
  useFluentProviderContextValues_unstable,
} from "@fluentui/react-components";
import { AxisThemeName } from "../index";
import React from "react";

type Result = {
  name: AxisThemeName;
  variant: AxisThemeVariant;
};

export function useIdentifyCurrentAxisTheme(): Result {
  const state = useFluentProvider_unstable({}, React.createRef());
  const { theme } = useFluentProviderContextValues_unstable(state);
  const AxisCustomUtilityThemeTokens = theme as AxisCustomUtilityTokens;

  return {
    name: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeName,
    variant: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeVariant,
  };
}
