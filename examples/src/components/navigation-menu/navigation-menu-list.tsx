import { MenuList } from "@fluentui/react-components";
import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NavigationMenuItem } from "./navigation-menu.item";
import { getRouteByCategory, RouteCategory } from "../../routing/route-map";
import { TRoute } from "../../routing/routes";

const componentId = "navigation-menu-list";
export const navigationMenuListClassNames = {
  root: componentId,
};

type TNavigationMenuList = {
  category: RouteCategory;
};

export function NavigationMenuList({ category, ...rest }: TNavigationMenuList) {
  const routes = getRouteByCategory(category);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = useCallback(
    (route: TRoute) => {
      navigate(route);
    },
    [navigate]
  );

  const renderMenuItems = useMemo(
    () =>
      Array.from(routes.entries()).map((entry) => {
        const [key, [route, routeData]] = entry;
        return (
          <NavigationMenuItem
            key={key}
            onClick={() => goTo(route)}
            selected={route === pathname}
          >
            {routeData.label}
          </NavigationMenuItem>
        );
      }),
    [routes]
  );

  return (
    <MenuList data-testid={componentId} {...rest}>
      {renderMenuItems}
    </MenuList>
  );
}
