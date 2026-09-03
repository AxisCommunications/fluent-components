import { PlatformConfig } from "style-dictionary";

export const getCssPlatform: (theme: string) => PlatformConfig = (theme) => ({
  transforms: ["attribute/cti", "name/kebab", "sizes/px", "shadow/boxShadow"],
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
