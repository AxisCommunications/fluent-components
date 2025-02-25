import { createContext, useContext } from "react";
import { ApplicationArea } from ".";
import { MySystemsAppId } from "./applications";

export const translationKeys = ["dark", "light", "logout"] as const;
export type TranslationKey =
  | (typeof translationKeys)[number]
  | `app_${MySystemsAppId}`
  | ApplicationArea;
export type Translations = { readonly [key in TranslationKey]: string };

export type TranslationFn = (key: keyof Translations) => string;
export type TranslateLocaleFn = (lc: string | undefined) => string;

export const TranslationContext: React.Context<
  | {
      readonly t: TranslationFn;
      readonly tLocale: TranslateLocaleFn;
    }
  | undefined
> = createContext<
  { readonly t: TranslationFn; readonly tLocale: TranslateLocaleFn } | undefined
>(undefined);

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error("attempt to use t outside TranslationContext");
  }

  return context;
}
