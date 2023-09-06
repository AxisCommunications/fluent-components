import React, { PropsWithChildren, useCallback } from "react";
import { isSupportedLocale, SupportedLocale } from "./languages";
import { TranslationContext, Translations } from "./translation-context";
import { languageName, translations } from "./translations";

const fallbackTranslationLocale: SupportedLocale = "en";

function tLocale(lc: string | undefined) {
  if (isSupportedLocale(lc)) {
    return languageName[lc];
  }
  return lc ?? "";
}

interface TranslationProviderProps {
  readonly locale: string | undefined;
}
export function TranslationProvider({
  children,
  locale,
}: PropsWithChildren<TranslationProviderProps>) {
  const t = useCallback(
    (key: keyof Translations) => {
      if (!isSupportedLocale(locale)) {
        return translations[fallbackTranslationLocale][key];
      }
      return translations[locale][key];
    },
    [locale]
  );

  return (
    <TranslationContext.Provider value={{ t, tLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}
