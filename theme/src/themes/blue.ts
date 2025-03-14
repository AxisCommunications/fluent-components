import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
} from "@fluentui/react-theme";
import { AxisTheme } from "../index.js";

export const blueBrand: BrandVariants = {
  10: "#032B3D",
  20: "#05435E",
  30: "#025578",
  40: "#026690",
  50: "#0373A3",
  60: "#0182B3",
  70: "#028FCC",
  80: "#009DDE",
  90: "#00AEF2",
  100: "#0ABAFF",
  110: "#29C7FF",
  120: "#5CD4FF",
  130: "#91E1FF",
  140: "#AEE9FF",
  150: "#C4EFFF",
  160: "#D4F3FF",
};

export const axisBlueDarkTheme: AxisTheme = {
  ...createDarkTheme(blueBrand),
  axisCustomColorMySystemsBackground: "#004F6E",
  axisCustomColorMySystemsForeground: "#99D8F1",
  axisCustomColorMyAxisBackground: "#BC8D00",
  axisCustomColorMyAxisForeground: "#FFEBAD",
  axisCustomColorMyBusinessBackground: "#6B0646",
  axisCustomColorMyBusinessForeground: "#EF9BD1",
  axisCustomColorMyProductsBackground: "#476320",
  axisCustomColorMyProductsForeground: "#D1E8B2",
  axisCustomUtilityThemeName: "axisBlueDarkTheme",
  axisCustomUtilityThemeVariant: "dark",
};

export const axisBlueLightTheme: AxisTheme = {
  ...createLightTheme(blueBrand),
  axisCustomColorMyAxisBackground: "#DFA001",
  axisCustomColorMyAxisForeground: "#FFF5D6",
  axisCustomColorMySystemsBackground: "#008DC6",
  axisCustomColorMySystemsForeground: "#CCEBF8",
  axisCustomColorMyBusinessBackground: "#C10B7E",
  axisCustomColorMyBusinessForeground: "#F7CEE8",
  axisCustomColorMyProductsBackground: "#7FB239",
  axisCustomColorMyProductsForeground: "#E8F4D9",
  axisCustomUtilityThemeName: "axisBlueLightTheme",
  axisCustomUtilityThemeVariant: "light",
};
