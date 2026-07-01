import {
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import { Theme } from "@fluentui/react-components";

export type TaxisThemeVariants = "light" | "dark";

export const mainTheme: Record<TaxisThemeVariants, Theme> = {
  light: axisLightTheme,
  dark: axisDarkTheme,
};
