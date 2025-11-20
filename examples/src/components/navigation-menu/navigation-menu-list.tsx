import { MenuList } from "@fluentui/react-components";
import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RouteCategory, getRouteByCategory } from "../../routing/route-map";
import { TRoute } from "../../routing/routes";
import { NavigationMenuItem } from "./navigation-menu.item";

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
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
