import { FluentProvider } from "@fluentui/react-components";
import React, { useMemo } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/ApplicationStateProvider";
import { MainPage } from "./main-page";
import { useScrollStaticStyles } from "@axiscommunications/fluent-styles";
import { WelcomePage } from "./landingpage";
import { getRouteByGroup, RouteGroup } from "./routing/route-map";
import { routes } from "./routing/routes";
import { PageNotFound } from "./routing/page-not-found";

export const App = () => {
  useScrollStaticStyles();
  const theme = useAppContext((context) => context.theme);
  const dir = useAppContext((context) => context.dir);

  const storyRoutes = getRouteByGroup(RouteGroup.STORY);

  const renderStoryRoutes = useMemo(
    () =>
      Array.from(storyRoutes.entries()).map((entry) => {
        const [key, [route, routeData]] = entry;
        return <Route key={key} path={route} element={routeData.element} />;
      }),
    [storyRoutes]
  );

  return (
    <FluentProvider theme={theme} dir={dir}>
      <HashRouter>
        <Routes>
          <Route path={routes.Home} element={<MainPage />}>
            <Route index element={<WelcomePage />} />
            {renderStoryRoutes}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </FluentProvider>
  );
};
