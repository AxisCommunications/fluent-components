import StyleDictionaryPackage, { Platform } from "style-dictionary";

export const getCssPlatform: (theme: string) => Platform = (theme) => ({
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "sizes/px",
    "shadow/boxShadow",
  ],
  buildPath: "tokens/generated/css/",
  files: [
    {
      destination: `${theme}.css`,
      format: "css/variables",
      options: {
        selector: theme !== "global" ? `.${theme}` : undefined,
      },
    },
  ],
});
