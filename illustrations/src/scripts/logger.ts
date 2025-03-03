import {
  ANSI_BOLD,
  ANSI_GREEN,
  ANSI_RED,
  ANSI_RESET,
  ANSI_YELLOW,
} from "../utils/constants.js";

const JSON_SPACE_COUNT = 2;

export enum LOG_LEVEL {
  DEBUG = 100,
  INFO = 30,
  WARN = 20,
  ERROR = 10,
}

export type TLogger = Pick<Console, "error" | "warn" | "info" | "trace">;

export class Logger implements TLogger {
  constructor(
    private readonly logPrefix: string,
    private readonly logLevel: () => LOG_LEVEL
  ) {}

  trace(...args: unknown[]) {
    if (this.logLevel() >= LOG_LEVEL.INFO) {
      console.info(
        `${ANSI_BOLD + this.logPrefix}:trace>${ANSI_RESET}`,
        ...this.prettyPrint(args)
      );
    }
  }

  info(...args: unknown[]) {
    if (this.logLevel() >= LOG_LEVEL.INFO) {
      console.info(
        `${ANSI_GREEN + this.logPrefix}:info>${ANSI_RESET}`,
        ...this.prettyPrint(args)
      );
    }
  }

  warn(...args: unknown[]) {
    if (this.logLevel() >= LOG_LEVEL.WARN) {
      console.warn(
        `${ANSI_YELLOW + this.logPrefix}:warn>${ANSI_RESET}`,
        ...this.prettyPrint(args)
      );
    }
  }

  error(...args: unknown[]) {
    if (this.logLevel() >= LOG_LEVEL.ERROR) {
      console.error(
        `${ANSI_RED + this.logPrefix}:error>${ANSI_RESET}`,
        ...this.prettyPrint(args)
      );
    }
  }

  log(...args: unknown[]) {
    console.info(this.logPrefix + ":important>", ...this.prettyPrint(args));
  }

  debug(...args: unknown[]) {
    if (this.logLevel() >= LOG_LEVEL.DEBUG) {
      console.debug(this.logPrefix + ":debug>", ...this.prettyPrint(args));
    }
  }

  private isPrimitive(test: unknown) {
    return test !== Object(test);
  }

  private prettyPrint(args: unknown[]): unknown[] {
    return args.map((arg) =>
      this.isPrimitive(arg) ? arg : JSON.stringify(arg, null, JSON_SPACE_COUNT)
    );
  }
}
