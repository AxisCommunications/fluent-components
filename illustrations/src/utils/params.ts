import yargs from "yargs";

export type TGenerateSVGConfig = {
  from: string;
  to: string;
};

export function parseParamsGenerateSVG(): TGenerateSVGConfig {
  const argv = yargs(process.argv.slice(2))
    .options({
      from: { type: "string", demandOption: true },
      to: { type: "string", demandOption: true },
    })
    .parserConfiguration({ "camel-case-expansion": true })
    .parseSync();

  return { from: argv.from, to: argv.to } as const;
}

export type TGenerateREACTConfig = {
  from: string;
  to: string;
};

export function parseParamsGenerateREACT(): TGenerateREACTConfig {
  const argv = yargs(process.argv.slice(2))
    .options({
      from: { type: "string", demandOption: true },
      to: { type: "string", demandOption: true },
    })
    .parserConfiguration({ "camel-case-expansion": true })
    .parseSync();

  return { from: argv.from, to: argv.to } as const;
}
