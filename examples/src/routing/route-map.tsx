import { TRoute, routes } from "./routes";

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
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.Home,
    {
      label: "Home",
      group: RouteGroup.MISC,
    },
  ],
  [
    routes.Theme,
    {
      label: "Themes",
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-theme",
        packageName: "@axiscommunications/fluent-theme",
      },
    },
  ],
  [
    routes.IconCatalog,
    {
      label: "Icons",
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-icons",
        packageName: "@axiscommunications/fluent-icons",
      },
    },
  ],
  [
    routes.Stepper,
    {
      label: "Stepper",
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-stepper",
        packageName: "@axiscommunications/fluent-stepper",
      },
    },
  ],
  [
    routes.Slider,
    {
      label: "Slider",
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-slider",
        packageName: "@axiscommunications/fluent-slider",
      },
    },
  ],
  [
    routes.PasswordInput,
    {
      label: "Password input",
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-password-input",
        packageName: "@axiscommunications/fluent-password-input",
      },
    },
  ],
  [
    routes.EmptyView,
    {
      label: "Empty view",
      group: RouteGroup.STORY,
      category: RouteCategory.COMPONENT,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-empty-view",
        packageName: "@axiscommunications/fluent-empty-view",
      },
    },
  ],
  [
    routes.TableUtilities,
    {
      label: "Table",
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.TabListUtilities,
    {
      label: "Tablist",
      group: RouteGroup.STORY,
      category: RouteCategory.STYLE,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-styles",
        packageName: "@axiscommunications/fluent-styles",
      },
    },
  ],
  [
    routes.Illustrations,
    {
      label: "Illustrations",
      group: RouteGroup.STORY,
      category: RouteCategory.MISC,
      ghInfo: {
        url: "https://github.com/AxisCommunications/fluent-components/pkgs/npm/fluent-illustrations",
        packageName: "@axiscommunications/fluent-illustrations",
      },
    },
  ],
]);

export function getGhInfoByKey(routeKey: TRoute): {
  url: string;
  packageName: string;
} {
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
