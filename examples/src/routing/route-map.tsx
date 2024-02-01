import {
  bundleIcon,
  DarkThemeFilled,
  DarkThemeRegular,
  DocumentCssFilled,
  DocumentCssRegular,
  EyeFilled,
  EyeRegular,
  HomeFilled,
  HomeRegular,
  IconsFilled,
  IconsRegular,
  OptionsFilled,
  OptionsRegular,
  StepsFilled,
  StepsRegular,
  TableFilled,
  TableRegular,
} from "@fluentui/react-icons";
import React from "react";
import { IconPage } from "../stories/icon-page";
import { StepperPage } from "../stories/stepper-page";
import { TableUtilitiesPage } from "../stories/table-utlities-page";
import { ThemePage } from "../stories/theme-page";
import { VerticalStepperPage } from "../stories/vertical-stepper-page";
import { routes, TRoute } from "./routes";
import { SliderPage } from "../stories/slider-page";
import { WelcomePage } from "../landingpage";
import { PasswordInputPage } from "../stories/password-input-page";
import { FluentUiTabStylesPage } from "../stories/tab-list-utilities/tab-list-utilities-page";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const ThemeIcon = bundleIcon(DarkThemeFilled, DarkThemeRegular);
const IconCatalogIcon = bundleIcon(IconsFilled, IconsRegular);
const StepperIcon = bundleIcon(StepsFilled, StepsRegular);
const VStepperIcon = bundleIcon(StepsFilled, StepsRegular);
const TableUtilitiesIcon = bundleIcon(TableFilled, TableRegular);
const SliderIcon = bundleIcon(OptionsFilled, OptionsRegular);
const PasswordIcon = bundleIcon(EyeFilled, EyeRegular);
const TabStylesIcon = bundleIcon(DocumentCssFilled, DocumentCssRegular);

export enum RouteGroup {
  MISC,
  STORY,
}

type TRouteData = {
  label: string;
  element: JSX.Element;
  icon?: JSX.Element;
  group: RouteGroup;
};

export const routeMap: Map<TRoute, TRouteData> = new Map([
  [
    routes.Home,
    {
      label: "Home",
      icon: <HomeIcon />,
      element: <WelcomePage />,
      group: RouteGroup.MISC,
    },
  ],
  [
    routes.Theme,
    {
      label: "Theme",
      element: <ThemePage />,
      icon: <ThemeIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.IconCatalog,
    {
      label: "Icon Catalog",
      element: <IconPage />,
      icon: <IconCatalogIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.Stepper,
    {
      label: "Stepper",
      element: <StepperPage />,
      icon: <StepperIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.VerticalStepper,
    {
      label: "Vertical Stepper",
      element: <VerticalStepperPage />,
      icon: <VStepperIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.Slider,
    {
      label: "Slider",
      element: <SliderPage />,
      icon: <SliderIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.PasswordInput,
    {
      label: "Password input",
      element: <PasswordInputPage />,
      icon: <PasswordIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.TableUtilities,
    {
      label: "Table Utilities",
      element: <TableUtilitiesPage />,
      icon: <TableUtilitiesIcon />,
      group: RouteGroup.STORY,
    },
  ],
  [
    routes.TabListUtilities,
    {
      label: "Tablist utilities",
      element: <FluentUiTabStylesPage />,
      icon: <TabStylesIcon />,
      group: RouteGroup.STORY,
    },
  ],
]);

export const getRouteByGroup = (group: RouteGroup) => {
  return [...routeMap.entries()].filter((e) => e[1].group === group);
};
