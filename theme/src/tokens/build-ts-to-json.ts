import { axisDarkTheme, axisLightTheme } from "../index";
import { generateJsonGlobal, generateJsonTheme } from "./utils";

import { writeFileSync } from "node:fs";

export function generateJson() {
  const global: string = JSON.stringify(
    generateJsonGlobal(axisDarkTheme),
    null,
    2
  );
  const dark: string = JSON.stringify(
    generateJsonTheme(axisDarkTheme),
    null,
    2
  );
  const light: string = JSON.stringify(
    generateJsonTheme(axisLightTheme),
    null,
    2
  );

  console.log("generating global.json...");
  writeFileSync("global.json", global);

  console.log("generating dark.json");
  writeFileSync("dark.json", dark);

  console.log("generating light.json");
  writeFileSync("light.json", light);
}
