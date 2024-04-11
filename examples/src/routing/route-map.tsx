import React from "react";
import { WelcomePage } from "../landingpage";
import { IconPage } from "../stories/icon-page";
import { PasswordInputPage } from "../stories/password-input/password-input-page";
import { SliderPage } from "../stories/slider/slider-page";
import { StepperPage } from "../stories/stepper/stepper-page";
import { FluentUiTabStylesPage } from "../stories/tab-list-utilities/tab-list-utilities-page";
import { ThemePage } from "../stories/theme-page";
import { routes, TRoute } from "./routes";
import { TableUtilitiesPage } from "../stories/table-utilities/table-utlities-page";
import { IllustrationPage } from "../stories/illustrations/illustration-page";
import { MainMenuPage } from "../stories/main-menu/main-menu-page";

export enum RouteGroup {
  MISC,
  STORY,
}

export enum RouteCategory {
  MISC,
  COMPONENT,
  STYLE,
}

type TRouteData = {
  label: string;
  element: JSX.Element;
  group: RouteGroup;
  category?: RouteCategory;
  ghInfo?: {
    url: string;
    packageName: string;
  };
};

export const routeMap: Map<TRoute, TRouteData> = new Map([
  [
    routes.mainMenu,
    {
      label: "Main menu",
      element: <MainMenuPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.Home,
    {
      label: "Home",
      element: <WelcomePage />,
      group: RouteGroup.MISC,
    },
  ],
  [
    routes.Theme,
    {
      label: "Themes",
      element: <ThemePage />,
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-theme",
        packageName: "@axiscommunications/fluent-theme",
      },
    },
  ],
  [
    routes.IconCatalog,
    {
      label: "Icons",
      element: <IconPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-icons",
        packageName: "@axiscommunications/fluent-icons",
      },
    },
  ],
  [
    routes.Stepper,
    {
      label: "Stepper",
      element: <StepperPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-stepper",
        packageName: "@axiscommunications/fluent-stepper",
      },
    },
  ],
  [
    routes.Slider,
    {
      label: "Slider",
      element: <SliderPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-slider",
        packageName: "@axiscommunications/fluent-slider",
      },
    },
  ],
  [
    routes.PasswordInput,
    {
      label: "Password input",
      element: <PasswordInputPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-password-input",
        packageName: "@axiscommunications/fluent-password-input ",
      },
    },
  ],
  [
    routes.TableUtilities,
    {
      label: "Table",
      element: <TableUtilitiesPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.TabListUtilities,
    {
      label: "Tablist",
      element: <FluentUiTabStylesPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.Illustrations,
    {
      label: "Illustrations",
      element: <IllustrationPage />,
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url:
          "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-illustrations",
        packageName: "@axiscommunications/fluent-illustrations",
      },
    },
  ],
]);

export function getGhInfoByKey(
  routeKey: TRoute
): { url: string; packageName: string } {
  const routeData = routeMap.get(routeKey);

  if (routeData?.ghInfo) {
    return routeData.ghInfo;
  }

  throw new Error("getGhInfoByKey should not happen");
}

export const getRouteByGroup = (group: RouteGroup) => {
  return [...routeMap.entries()].filter((e) => e[1].group === group);
};

export const getRouteByCategory = (category: RouteCategory) => {
  return [...routeMap.entries()].filter((e) => e[1].category === category);
};
