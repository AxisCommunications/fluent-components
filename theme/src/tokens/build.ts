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
  filter: (token) =>
    ["fontSizes", "lineHeights", "borderRadius", "borderWidth"].includes(
      token.type ?? ""
    ),
  transform: (token) => toPixelValue(token.original.value),
});

StyleDictionaryPackage.registerTransform({
  name: "shadow/boxShadow",
  type: "value",
  filter: (token) => token.type === "boxShadow",
  transform: (token) =>
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

const build = async () => {
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

    const StyleDictionary = new StyleDictionaryPackage(
      getStyleDictionaryConfig(theme)
    );

    await StyleDictionary.buildAllPlatforms();

    console.log("\nEnd processing");
  }

  concatXamlFiles();

  mergeJsonDictFiles();

  console.log("Start building ts-theme");
  generateTsTheme();
  console.log("Build ts-theme completed!");

  console.log("\n==============================================");
  console.log("\nBuild completed!");
};

build();
