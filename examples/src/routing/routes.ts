export const routes = {
  Home: "/",
  Theme: "/theme",
  IconCatalog: "/icon-catalog",
  Stepper: "/stepper",
  TableUtilities: "/table-utilities",
  Slider: "/slider",
  PasswordInput: "/password-input",
  TabListUtilities: "/tab-list-utilities",
  Illustrations: "/illustrations-catalog",
  fluentImplementations: "/fluent-implementations",
} as const;

export type TRoute = (typeof routes)[keyof typeof routes];
