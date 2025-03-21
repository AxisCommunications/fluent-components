import StyleDictionaryPackage from "style-dictionary";

import { getCssPlatform } from "./build-css";
import { getJsonPlatform, mergeJsonDictFiles } from "./build-json";
import { getTsPlatform } from "./build-ts";
import { generateTsTheme } from "./build-ts-theme";
import { generateJson } from "./build-ts-to-json";
import { concatXamlFiles, getXamlPlatform } from "./build-xaml";

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

const toPixelValue = (value: string) => {
  const numericValue = parseFloat(value);
  return Number.isNaN(numericValue) || numericValue === 0
    ? value
    : `${numericValue}px`;
};

// NOTE: Built-in 'size/px' only working if prop.attributes.category === 'size'.
StyleDictionaryPackage.registerTransform({
  name: "sizes/px",
  type: "value",
  matcher: (token) =>
    ["fontSizes", "lineHeights", "borderRadius", "borderWidth"].includes(
      token.type
    ),
  transformer: (token) => toPixelValue(token.original.value),
});

StyleDictionaryPackage.registerTransform({
  name: "shadow/boxShadow",
  type: "value",
  matcher: (token) => token.type === "boxShadow",
  transformer: (token) =>
    token.value
      .map(
        (v: {
          x: string;
          y: string;
          blur: string;
          spread: string;
          color: string;
        }) =>
          `${[v.x, v.y, v.blur, v.spread]
            .map((pv) => toPixelValue(pv))
            .join(" ")} ${v.color}`
      )
      .join(", "),
});

const getStyleDictionaryConfig = (theme: string) => ({
  source: [`${theme}.json`],
  platforms: {
    css: getCssPlatform(theme),
    ts: getTsPlatform(theme),
    xaml: getXamlPlatform(theme),
    json: getJsonPlatform(theme),
  },
});

console.log("Build started...");

// JSON token definitions are generated first as needed later
// in the styles config as file paths.

console.log("Converting fluent themes to json...");
generateJson();
console.log("End conversion");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS

for (const theme of ["global", "dark", "light"]) {
  console.log("\n==============================================");
  console.log(`\nProcessing: ${theme}`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(theme)
  );

  StyleDictionary.buildPlatform("css");
  StyleDictionary.buildPlatform("ts");
  StyleDictionary.buildPlatform("xaml");
  StyleDictionary.buildPlatform("json");

  console.log("\nEnd processing");
}

concatXamlFiles();

mergeJsonDictFiles();

console.log("Start building ts-theme");
generateTsTheme();
console.log("Build ts-theme completed!");

console.log("\n==============================================");
console.log("\nBuild completed!");
