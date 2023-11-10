import { writeFileSync } from "fs";
import { axisDarkTheme, axisLightTheme } from "../src";
import { Theme } from "@fluentui/react-components";

console.log("Build ts themes started...");

type TGenerate = {
  name: string;
  fileName: string;
  theme: Theme;
};
const THEMES: TGenerate[] = [
  {
    name: "AxisLightTheme",
    fileName: "light",
    theme: axisLightTheme,
  },
  {
    name: "AxisDarkTheme",
    fileName: "dark",
    theme: axisDarkTheme,
  },
];

console.log("ts");
THEMES.forEach(({ name, fileName, theme }) => {
  // Convert the object to a JSON string and sort keys
  const themeJson = JSON.stringify(theme, Object.keys(theme).sort(), 2);
  const themeJsonWithoutQuotes = themeJson.replace(/"([^"]+)":/g, "$1:");
  const importStatement =
    "import { Theme } from \"@fluentui/react-components\";\n\n";
  const typeDeclaration = `export const ${name}: Theme =`;
  const themeDeclaration =
    `${importStatement}${typeDeclaration} ${themeJsonWithoutQuotes};\n\n`;

  const destination = `tokens/generated/ts/${fileName}.ts`;

  writeFileSync(destination, themeDeclaration, "utf-8");
  console.log(`${destination}, generated `);
});
