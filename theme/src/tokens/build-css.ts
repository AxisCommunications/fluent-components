import { Platform } from "style-dictionary";

export const getCssPlatform: (theme: string) => Platform = (theme) => ({
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "sizes/px",
    "shadow/boxShadow",
  ],
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
