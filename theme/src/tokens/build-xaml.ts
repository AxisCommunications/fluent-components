import { appendFileSync, existsSync, readFileSync, unlinkSync } from "fs";
import StyleDictionaryPackage, { Dictionary, Platform } from "style-dictionary";

const resDictStartTag =
  '<ResourceDictionary\r\n  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r\n  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r\n>';
const resDictBrushesStartTag =
  '<ResourceDictionary\r\n  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r\n  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r\n  xmlns:p="http://schemas.microsoft.com/winfx/2006/xaml/presentation/options"\r\n>\r\n  <ResourceDictionary.MergedDictionaries>\r\n    <ResourceDictionary Source="Colors.xaml" />\r\n  </ResourceDictionary.MergedDictionaries>\r\n';
const resDictGlobalStartTag =
  '<ResourceDictionary\r\n  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r\n  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r\n  xmlns:system="clr-namespace:System;assembly=mscorlib"\r\n>';
const resDictEndTag = "</ResourceDictionary>";

const getXamlColorTokens = (
  dictionary: Dictionary,
  prefix: string
): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category?.startsWith("color"))
    .map((t) => `<Color x:Key="${prefix}${t.name}">${t.value}</Color>`)
    .join("\r\n  ");
};

const getXamlBrushTokens = (
  dictionary: Dictionary,
  prefix: string
): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category?.startsWith("color"))
    .map(
      (t) =>
        `<SolidColorBrush\r\n    x:Key="${t.name}"\r\n    Color="{StaticResource ${prefix}${t.name}}"\r\n    p:Freeze="True"\r\n  />`
    )
    .join("\r\n  ");
};

const getXamlFontSizeTokens = (dictionary: Dictionary): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category === "fontSize")
    .map((t) => `<system:Double x:Key="${t.name}">${t.value}</system:Double>`)
    .join("\r\n  ");
};

// https://docs.microsoft.com/en-us/dotnet/api/system.windows.fontweights
const xamlFontWeightValues: Record<string, string> = {
  "100": "Thin",
  "200": "ExtraLight",
  "300": "Light",
  "400": "Regular",
  "500": "Medium",
  "600": "SemiBold",
  "700": "Bold",
  "800": "ExtraBold",
  "900": "Heavy",
  "950": "ExtraBlack",
};

const getXamlFontWeightTokens = (
  dictionary: Dictionary
): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category === "fontWeight")
    .map(
      (t) =>
        `<FontWeight x:Key="${t.name}">${
          xamlFontWeightValues[t.value as string]
        }</FontWeight>`
    )
    .join("\r\n  ");
};

const getXamlStrokeWidthTokens = (
  dictionary: Dictionary
): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category === "strokeWidth")
    .map((t) => `<Thickness x:Key="${t.name}">${t.value}</Thickness>`)
    .join("\r\n  ");
};

const getXamlBorderRadiusTokens = (
  dictionary: Dictionary
): string | undefined => {
  return dictionary.allTokens
    .filter((t) => t.attributes?.category === "borderRadius")
    .map((t) => `<CornerRadius x:Key="${t.name}">${t.value}</CornerRadius>`)
    .join("\r\n  ");
};

const getXamlFileHeader = () =>
  `<!--\r\n  Do not edit directly\r\n  Generated on ${new Date().toUTCString()}\r\n-->`;

StyleDictionaryPackage.registerFormat({
  name: "xaml/fluentui/color",
  formatter: ({ dictionary, options }) => {
    const tokens = getXamlColorTokens(dictionary, options.prefix);
    return `  ${tokens}\r\n`;
  },
});

StyleDictionaryPackage.registerFormat({
  name: "xaml/fluentui/brush",
  formatter: ({ dictionary, options }) => {
    const tokens = getXamlBrushTokens(dictionary, options.prefix);
    return `${getXamlFileHeader()}\r\n${resDictBrushesStartTag}\r\n  ${tokens}\r\n${resDictEndTag}`;
  },
});

StyleDictionaryPackage.registerFormat({
  name: "xaml/fluentui/global",
  formatter: ({ dictionary }) => {
    const tokens = [
      getXamlFontSizeTokens(dictionary),
      getXamlFontWeightTokens(dictionary),
      getXamlStrokeWidthTokens(dictionary),
      getXamlBorderRadiusTokens(dictionary),
    ].join("\r\n\r\n  ");
    return `${getXamlFileHeader()}\r\n${resDictGlobalStartTag}\r\n  ${tokens}\r\n${resDictEndTag}`;
  },
});

export const getXamlPlatform: (theme: string) => Platform = (theme) => ({
  transforms: ["attribute/cti", "name/cti/pascal"],
  files:
    theme === "global"
      ? [
          {
            format: "xaml/fluentui/global",
            destination: "ConstantResources.xaml",
          },
        ]
      : [
          {
            format: "xaml/fluentui/color",
            destination: `${theme}.Colors.xaml`,
            options: {
              prefix: `${theme[0].toUpperCase()}${theme
                .substring(1)
                .toLowerCase()}.`,
            },
          },
          {
            format: "xaml/fluentui/brush",
            destination: `${theme[0].toUpperCase()}${theme
              .substring(1)
              .toLowerCase()}.xaml`,
            options: {
              prefix: `${theme[0].toUpperCase()}${theme
                .substring(1)
                .toLowerCase()}.`,
            },
          },
        ],
});

const concatFiles = (
  sources: string[],
  destination: string,
  header?: string,
  footer?: string
) => {
  if (existsSync(destination)) {
    unlinkSync(destination);
  }
  if (header) {
    appendFileSync(destination, header);
  }
  for (const src of sources) {
    const content = readFileSync(src);
    appendFileSync(destination, content);
    unlinkSync(src);
  }
  if (footer) {
    appendFileSync(destination, footer);
  }
};

export const concatXamlFiles = () => {
  concatFiles(
    ["dark.Colors.xaml", "light.Colors.xaml"],
    "Colors.xaml",
    `${getXamlFileHeader()}\r\n${resDictStartTag}\r\n`,
    resDictEndTag
  );
};
