const supportedLocales = [
  "ar",
  "cs",
  "de",
  "en",
  "es",
  "fa",
  "fi",
  "fr",
  "he",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt-BR",
  "ro",
  "ru",
  "sv",
  "th",
  "tr",
  "vi",
  "zh",
  "zh-TW",
] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

const _supportedLocaleSet = new Set<string>(supportedLocales);
export function isSupportedLocale(lc: unknown): lc is SupportedLocale {
  return typeof lc === "string" && _supportedLocaleSet.has(lc);
}
