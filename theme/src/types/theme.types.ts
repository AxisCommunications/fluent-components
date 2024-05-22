import { Theme } from "@fluentui/react-components";

export type AxisCustomColorTokens = {
  axisCustomColorMySystemsBackground: string;
  axisCustomColorMySystemsForeground: string;
  axisCustomColorMyAxisBackground: string;
  axisCustomColorMyAxisForeground: string;
  axisCustomColorMyBusinessBackground: string;
  axisCustomColorMyBusinessForeground: string;
  axisCustomColorMyProductsBackground: string;
  axisCustomColorMyProductsForeground: string;
};

export type AxisThemeVariant = "dark" | "light";
export type AxisDarkThemeName = "axisDarkTheme" | "axisBlueDarkTheme";
export type AxisLightThemeName = "axisLightTheme" | "axisBlueLightTheme";
export type AxisThemeName = AxisDarkThemeName | AxisLightThemeName;

export type AxisCustomUtilityTokens = {
  axisCustomUtilityThemeName: AxisThemeName;
  axisCustomUtilityThemeVariant: AxisThemeVariant;
};

export type AxisCustomTokens = AxisCustomColorTokens & AxisCustomUtilityTokens;
export type AxisTheme = Theme & AxisCustomTokens;

export const axisCustomTokens: Record<keyof AxisCustomTokens, string> = {
  axisCustomColorMyAxisBackground: "var(--axisCustomColorMyAxisBackground)",
  axisCustomColorMyAxisForeground: "var(--axisCustomColorMyAxisForeground)",
  axisCustomColorMySystemsBackground:
    "var(--axisCustomColorMySystemsBackground)",
  axisCustomColorMySystemsForeground:
    "var(--axisCustomColorMySystemsForeground)",
  axisCustomColorMyBusinessBackground:
    "var(--axisCustomColorMyBusinessBackground)",
  axisCustomColorMyBusinessForeground:
    "var(--axisCustomColorMyBusinessForeground)",
  axisCustomColorMyProductsBackground:
    "var(--axisCustomColorMyProductsBackground)",
  axisCustomColorMyProductsForeground:
    "var(--axisCustomColorMyProductsForeground)",
  axisCustomUtilityThemeName: "var(--axisCustomUtilityThemeName)",
  axisCustomUtilityThemeVariant: "var(--axisCustomUtilityThemeName)",
};
