import { axisDarkTheme, axisLightTheme } from "../src/index";
import { generateJsonGlobal, generateJsonTheme } from "./utils";

var fs = require("fs");

console.log("Build started fluent to json...");

const global: string = JSON.stringify(
  generateJsonGlobal(axisDarkTheme),
  null,
  2
);
const dark: string = JSON.stringify(generateJsonTheme(axisDarkTheme), null, 2);
const light: string = JSON.stringify(
  generateJsonTheme(axisLightTheme),
  null,
  2
);

console.log("generating global.json...");
fs.writeFileSync(__dirname + "/generated/tokens/global.json", global);

console.log("generating dark.json");
fs.writeFileSync(__dirname + "/generated/tokens/dark.json", dark);

console.log("generating light.json");
fs.writeFileSync(__dirname + "/generated/tokens/light.json", light);

console.log("Done with fluent to json!");
