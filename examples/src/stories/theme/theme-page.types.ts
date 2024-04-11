import {
  axisBlueDarkTheme,
  axisBlueLightTheme,
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import { Theme } from "@fluentui/react-components";

export const axisThemes = {
  main: "main",
  blue: "blue",
} as const;

export type TaxisThemes = (typeof axisThemes)[keyof typeof axisThemes];

export type TaxisThemeVariants = "light" | "dark";

export const themeMap: Record<
  TaxisThemes,
  Record<TaxisThemeVariants, Theme>
> = {
  [axisThemes.main]: { light: axisLightTheme, dark: axisDarkTheme },
  [axisThemes.blue]: { light: axisBlueLightTheme, dark: axisBlueDarkTheme },
};
