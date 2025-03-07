import StyleDictionaryPackage, { Dictionary, Platform } from "style-dictionary";

const getTypeName = (category: string) =>
  `${category[0].toUpperCase()}${category.substring(1)}Tokens`;

const getTsTokens = (
  sortCategories: string[],
  dictionary: Dictionary,
  category: string
): string | undefined => {
  let tokens = dictionary.allTokens.filter(
    (t) => t.attributes?.category === category
  );
  if (sortCategories.includes(category)) {
    tokens = tokens.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true })
    );
  }
  const tokensString = tokens
    .map((t) =>
      t.attributes?.category === "fontWeight"
        ? `${t.name}: ${t.value},`
        : t.attributes?.category === "color" ||
            t.attributes?.category === "colorStatus"
          ? `${t.name}: "${(t.value as string).toLowerCase()}",`
          : `${t.name}: "${t.value}",`
    )
    .join("\n  ");

  if (category === "shadow") {
    return tokensString.length > 0
      ? `export const ${category}Tokens: ShadowTokens & ShadowBrandTokens = {\n  ${tokensString}\n};`
      : undefined;
  }

  if (category === "colorStatus") {
    return tokensString.length > 0
      ? `export const ${category}Tokens: Record<string, string> = {\n  ${tokensString}\n};`
      : undefined;
  }

  const typeName = getTypeName(category);
  return tokensString.length > 0
    ? `export const ${category}Tokens: ${typeName} = {\n  ${tokensString}\n};`
    : undefined;
};

const getTsImports = (categories: string[]) => {
  const types = categories
    .filter((c) => c !== "colorStatus")
    .map((c) =>
      c === "shadow" ? "ShadowTokens, ShadowBrandTokens" : getTypeName(c)
    )
    .join(", ");
  return `import { ${types} } from "@fluentui/react-theme";`;
};

const getTsFileHeader = () =>
  `/**\n * Do not edit directly\n * Generated on ${new Date().toUTCString()}\n */`;

StyleDictionaryPackage.registerFormat({
  name: "typescript/fluentui",
  formatter: ({ dictionary, options }) => {
    const tokens = options.categories
      .map((c: string) => getTsTokens(options.sortCategories, dictionary, c))
      .filter((t: string | undefined) => !!t)
      .join("\n\n");
    return `${getTsFileHeader()}\n\n${getTsImports(
      options.categories
    )}\n\n${tokens}\n`;
  },
});

export const getTsPlatform: (theme: string) => Platform = (theme) => ({
  transforms: [
    "attribute/cti",
    "name/cti/camel",
    "sizes/px",
    "shadow/boxShadow",
  ],
  transformGroup: "js",
  files: [
    {
      format: "typescript/fluentui",
      destination: theme === "global" ? "base.ts" : `${theme}.ts`,
      options: {
        name: theme !== "global" ? theme : undefined,
        categories:
          theme === "global"
            ? [
                "lineHeight",
                "fontFamily",
                "fontSize",
                "fontWeight",
                "borderRadius",
                "strokeWidth",
              ]
            : ["color", "colorStatus", "shadow"],
        sortCategories: [
          "color",
          "colorStatus",
          "shadow",
          "lineHeight",
          "fontSize",
        ],
      },
    },
  ],
});
