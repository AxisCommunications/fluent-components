import { writeFileSync } from "fs";
import type { Theme } from "@fluentui/react-theme";
import { axisDarkTheme, axisLightTheme } from "../index";

type TGenerate = {
  name: string;
  fileName: string;
  theme: Theme;
};
const THEMES: TGenerate[] = [
  {
    name: "AxisLightTheme",
    fileName: "axisLightTheme",
    theme: axisLightTheme,
  },
  {
    name: "AxisDarkTheme",
    fileName: "axisDarkTheme",
    theme: axisDarkTheme,
  },
];

const getTsFileHeader = () =>
  `/**\n * Do not edit directly\n * Generated on ${new Date().toUTCString()}\n */ \n\n`;

export function generateTsTheme() {
  THEMES.forEach(({ name, fileName, theme }) => {
    // Convert the object to a JSON string and sort keys
    const themeJson = JSON.stringify(theme, Object.keys(theme).sort(), 2);
    const themeJsonWithoutQuotes = themeJson.replace(/"([^"]+)":/g, "$1:");
    const importStatement =
      'import { Theme } from "@fluentui/react-theme";\n\n';
    const typeDeclaration = `export const ${name}: Theme =`;
    const themeDeclaration = `${getTsFileHeader()}${importStatement}${typeDeclaration} ${themeJsonWithoutQuotes};\n\n`;

    const destination = `${fileName}.ts`;
    writeFileSync(destination, themeDeclaration, "utf-8");
    console.log(`${destination}, generated `);
  });
}
