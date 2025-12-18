"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  axisBlueDarkTheme: () => axisBlueDarkTheme,
  axisBlueLightTheme: () => axisBlueLightTheme,
  axisCustomTokens: () => axisCustomTokens,
  axisDarkTheme: () => axisDarkTheme,
  axisLightTheme: () => axisLightTheme,
  blueBrand: () => blueBrand,
  brand: () => brand,
  useIdentifyCurrentAxisTheme: () => useIdentifyCurrentAxisTheme
});
module.exports = __toCommonJS(index_exports);

// src/hooks/use-identify-current-axis-theme.hook.ts
var import_react = __toESM(require("react"));
var import_react_components = require("@fluentui/react-components");
function useIdentifyCurrentAxisTheme() {
  const state = (0, import_react_components.useFluentProvider_unstable)({}, import_react.default.createRef());
  const { theme } = (0, import_react_components.useFluentProviderContextValues_unstable)(state);
  const AxisCustomUtilityThemeTokens = theme;
  return AxisCustomUtilityThemeTokens ? {
    name: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeName,
    variant: AxisCustomUtilityThemeTokens.axisCustomUtilityThemeVariant
  } : null;
}

// src/themes/blue.ts
var import_react_theme = require("@fluentui/react-theme");
var blueBrand = {
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
  160: "#D4F3FF"
};
var axisBlueDarkTheme = {
  ...(0, import_react_theme.createDarkTheme)(blueBrand),
  axisCustomColorMySystemsBackground: "#004F6E",
  axisCustomColorMySystemsForeground: "#99D8F1",
  axisCustomColorMyAxisBackground: "#BC8D00",
  axisCustomColorMyAxisForeground: "#FFEBAD",
  axisCustomColorMyBusinessBackground: "#6B0646",
  axisCustomColorMyBusinessForeground: "#EF9BD1",
  axisCustomColorMyProductsBackground: "#476320",
  axisCustomColorMyProductsForeground: "#D1E8B2",
  axisCustomUtilityThemeName: "axisBlueDarkTheme",
  axisCustomUtilityThemeVariant: "dark"
};
var axisBlueLightTheme = {
  ...(0, import_react_theme.createLightTheme)(blueBrand),
  axisCustomColorMyAxisBackground: "#DFA001",
  axisCustomColorMyAxisForeground: "#FFF5D6",
  axisCustomColorMySystemsBackground: "#008DC6",
  axisCustomColorMySystemsForeground: "#CCEBF8",
  axisCustomColorMyBusinessBackground: "#C10B7E",
  axisCustomColorMyBusinessForeground: "#F7CEE8",
  axisCustomColorMyProductsBackground: "#7FB239",
  axisCustomColorMyProductsForeground: "#E8F4D9",
  axisCustomUtilityThemeName: "axisBlueLightTheme",
  axisCustomUtilityThemeVariant: "light"
};

// src/themes/brand.ts
var import_react_theme2 = require("@fluentui/react-theme");
var brand = {
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
  160: "#FFFCF1"
};
var axisDarkTheme = {
  ...(0, import_react_theme2.createDarkTheme)(brand),
  colorNeutralStroke3: "#2E2E2E",
  colorNeutralStroke2: "#383838",
  colorBrandStroke2: "#5C3E00",
  colorBrandForegroundLink: "#0ABAFF",
  colorBrandForegroundLinkHover: "#29C7FF",
  colorBrandForegroundLinkPressed: "#00AEF2",
  colorBrandForegroundLinkSelected: "#0ABAFF",
  colorNeutralForegroundOnBrand: "#000000",
  colorScrollbarOverlay: "rgba(255,255,255,0.2)",
  colorStatusDangerBackground1: "#481D20",
  colorStatusDangerBorder1: "#901c27",
  colorStatusWarningBackground1: "#492D1D",
  colorStatusWarningBorder1: "#884228",
  colorStatusSuccessBackground1: "#113711",
  colorStatusSuccessBorder1: "#116811",
  axisCustomColorMySystemsBackground: "#004F6E",
  axisCustomColorMySystemsForeground: "#99D8F1",
  axisCustomColorMyAxisBackground: "#BC8D00",
  axisCustomColorMyAxisForeground: "#FFEBAD",
  axisCustomColorMyBusinessBackground: "#6B0646",
  axisCustomColorMyBusinessForeground: "#EF9BD1",
  axisCustomColorMyProductsBackground: "#476320",
  axisCustomColorMyProductsForeground: "#D1E8B2",
  axisCustomUtilityThemeName: "axisDarkTheme",
  axisCustomUtilityThemeVariant: "dark"
};
var axisLightTheme = {
  ...(0, import_react_theme2.createLightTheme)(brand),
  colorNeutralBackgroundInverted: "#B2D3FB",
  colorNeutralBackground2: "#fcfcfc",
  colorBrandBackground: "#ffcc33",
  colorBrandBackgroundHover: "#FEC10C",
  colorBrandBackgroundPressed: "#B07A0F",
  colorBrandBackgroundSelected: "#B07A0F",
  colorSubtleBackgroundHover: "rgba(0,0,0,0.04)",
  colorCompoundBrandBackground: "#FEC10C",
  colorCompoundBrandBackgroundHover: "#EFAB01",
  colorCompoundBrandBackgroundPressed: "#E0A101",
  colorNeutralForegroundOnBrand: "#000000",
  colorNeutralForegroundInverted: "#242424",
  colorBrandForeground1: brand[60],
  colorBrandForeground2: brand[60],
  colorBrandForeground2Hover: brand[50],
  colorBrandForeground2Pressed: brand[30],
  colorBrandForegroundLink: "#028fcc",
  colorBrandForegroundLinkHover: "#0182b3",
  colorBrandForegroundLinkPressed: "#026690",
  colorBrandForegroundLinkSelected: "#028fcc",
  colorBrandStroke2Contrast: "#FFDC70",
  colorScrollbarOverlay: "rgba(0,0,0,0.2)",
  axisCustomColorMyAxisBackground: "#DFA001",
  axisCustomColorMyAxisForeground: "#FFF5D6",
  axisCustomColorMySystemsBackground: "#008DC6",
  axisCustomColorMySystemsForeground: "#CCEBF8",
  axisCustomColorMyBusinessBackground: "#C10B7E",
  axisCustomColorMyBusinessForeground: "#F7CEE8",
  axisCustomColorMyProductsBackground: "#7FB239",
  axisCustomColorMyProductsForeground: "#E8F4D9",
  axisCustomUtilityThemeName: "axisLightTheme",
  axisCustomUtilityThemeVariant: "light"
};

// src/types/theme.types.ts
var axisCustomTokens = {
  axisCustomColorMyAxisBackground: "var(--axisCustomColorMyAxisBackground)",
  axisCustomColorMyAxisForeground: "var(--axisCustomColorMyAxisForeground)",
  axisCustomColorMySystemsBackground: "var(--axisCustomColorMySystemsBackground)",
  axisCustomColorMySystemsForeground: "var(--axisCustomColorMySystemsForeground)",
  axisCustomColorMyBusinessBackground: "var(--axisCustomColorMyBusinessBackground)",
  axisCustomColorMyBusinessForeground: "var(--axisCustomColorMyBusinessForeground)",
  axisCustomColorMyProductsBackground: "var(--axisCustomColorMyProductsBackground)",
  axisCustomColorMyProductsForeground: "var(--axisCustomColorMyProductsForeground)",
  axisCustomUtilityThemeName: "var(--axisCustomUtilityThemeName)",
  axisCustomUtilityThemeVariant: "var(--axisCustomUtilityThemeName)"
};
//# sourceMappingURL=index.js.map
