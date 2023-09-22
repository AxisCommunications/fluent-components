import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
  Theme,
} from "@fluentui/react-components";

// if theme edited or fluent-version up:ed theme,
// remember to run tokens:runall

export const brand: BrandVariants = {
  10: "#281E03",
  20: "#342818",
  30: "#3E2F1D",
  40: "#4C381E",
  50: "#674808",
  60: "#B07A0F",
  70: "#E0A101",
  80: "#EFAB01",
  90: "#FEC10C",
  100: "#FFCC33",
  110: "#FFD450",
  120: "#FFDC70",
  130: "#FFE79B",
  140: "#FFEEBA",
  150: "#FFF6D7",
  160: "#FFFCF1",
};

export const axisDarkTheme: Theme = {
  ...createDarkTheme(brand),
  colorNeutralForegroundOnBrand: "#000000",
  colorNeutralStroke3: "#2E2E2E",
  colorNeutralStroke2: "#383838",
  colorBrandStroke2: "#5C3E00",
  colorBrandForegroundLink: "#34c9ff",
  colorBrandForegroundLinkHover: "#54d2ff",
  colorBrandForegroundLinkPressed: "#00aef2",
  colorBrandForegroundLinkSelected: "#34c9ff",
  colorScrollbarOverlay: "rgba(255,255,255,0.2)",
};

export const axisLightTheme: Theme = {
  ...createLightTheme(brand),
  colorNeutralForegroundOnBrand: "#000000",
  colorBrandBackground: "#ffcc33",
  colorBrandBackgroundHover: "#FEC10C",
  colorBrandBackgroundPressed: "#B07A0F",
  colorBrandBackgroundSelected: "#B07A0F",
  colorNeutralForegroundInverted: "#242424",
  colorCompoundBrandBackground: "#FEC10C",
  colorCompoundBrandBackgroundHover: "#EFAB01",
  colorCompoundBrandBackgroundPressed: "#E0A101",
  colorBrandForegroundLink: "#028fcc",
  colorBrandForegroundLinkHover: "#0182b3",
  colorBrandForegroundLinkPressed: "#026690",
  colorBrandForegroundLinkSelected: "#028fcc",
  colorScrollbarOverlay: "rgba(0,0,0,0.2)",
};

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
  100: "#34C9FF",
  110: "#54D2FF",
  120: "#74DAFF",
  130: "#91E1FF",
  140: "#AEE9FF",
  150: "#C4EFFF",
  160: "#D4F3FF",
};

export const axisBlueDarkTheme: Theme = { ...createDarkTheme(blueBrand) };

export const axisBlueLightTheme: Theme = { ...createLightTheme(blueBrand) };
