import yargs from "yargs";

export function parseParamsGenerateSVG() {
  const argv = yargs(process.argv.slice(2))
    .options({
      from: { type: "string", demandOption: true },
      to: { type: "string", demandOption: true },
    })
    .parserConfiguration({ "camel-case-expansion": true })
    .parseSync();

  return { from: argv.from, to: argv.to };
}

export function parseParamsGenerateREACT() {
  const argv = yargs(process.argv.slice(2))
    .options({
      from: { type: "string", demandOption: true },
      to: { type: "string", demandOption: true },
    })
    .parserConfiguration({ "camel-case-expansion": true })
    .parseSync();

  return { from: argv.from, to: argv.to };
}
