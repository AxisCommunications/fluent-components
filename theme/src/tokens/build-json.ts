import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";

import StyleDictionaryPackage, { Dictionary, Platform } from "style-dictionary";

const getJsonColorToTokensDict = (
  dictionary: Dictionary,
  theme: string
): Record<string, string[]> => {
  const colorDict: Record<string, string[]> = {};
  for (const token of dictionary.allTokens.filter(
    (t) => t.attributes?.category === "color"
  )) {
    const k = (token.value as string).toLowerCase();
    colorDict[k] = [...(colorDict[k] ?? []), `${theme}.${token.name}`];
  }
  return colorDict;
};

StyleDictionaryPackage.registerFormat({
  name: "json/fluentui/color",
  formatter: ({ dictionary, options }) => {
    const tokens = getJsonColorToTokensDict(dictionary, options.theme);
    return JSON.stringify(tokens);
  },
});

export const getJsonPlatform: (theme: string) => Platform = (theme) => ({
  transforms: ["attribute/cti", "name/cti/camel"],
  files:
    theme === "global"
      ? []
      : [
          {
            format: "json/fluentui/color",
            destination: `${theme}-colors.json`,
            options: {
              theme,
            },
          },
        ],
});

export const mergeJsonDictFiles = () => {
  const sources = ["dark-colors.json", "light-colors.json"];
  const destination = "colors.json";

  const dict: Record<string, string[]> = {};
  if (existsSync(destination)) {
    unlinkSync(destination);
  }
  for (const src of sources) {
    const jsonContent: Record<string, string[]> = JSON.parse(
      readFileSync(src).toString()
    );
    unlinkSync(src);
    for (const key of Object.keys(jsonContent)) {
      const k = key.toLowerCase();
      dict[k] = [...(dict[k] ?? []), ...jsonContent[k]];
    }
  }
  writeFileSync(
    destination,
    Buffer.from(JSON.stringify(dict, Object.keys(dict).sort(), "  "))
  );
};
