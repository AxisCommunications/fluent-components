import { useScrollStaticStyles } from "@axiscommunications/fluent-styles";
import { FluentProvider } from "@fluentui/react-components";
import { ReactElement, useMemo } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { useAppContext } from "./context/ApplicationStateProvider";
import { WelcomePage } from "./landingpage";
import { MainPage } from "./main-page";
import { PageNotFound } from "./routing/page-not-found";
import { RouteGroup, getRouteByGroup } from "./routing/route-map";
import { TRoute, routes } from "./routing/routes";
import { EmptyViewPage } from "./stories/empty-view/page";
import { IconPage } from "./stories/icons/icon-page";
import { IllustrationPage } from "./stories/illustrations/illustration-page";
import { MainMenuPage } from "./stories/main-menu/main-menu-page";
import { PasswordInputPage } from "./stories/password-input/password-input-page";
import { SliderPage } from "./stories/slider/slider-page";
import { StepperPage } from "./stories/stepper/stepper-page";
import { FluentUiTabStylesPage } from "./stories/tab-list-utilities/tab-list-utilities-page";
import { TableUtilitiesPage } from "./stories/table-utilities/table-utlities-page";
import { ThemePage } from "./stories/theme/theme-page";

export const App = () => {
  useScrollStaticStyles();
  const theme = useAppContext((context) => context.theme);
  const dir = useAppContext((context) => context.dir);

  const storyRoutes = getRouteByGroup(RouteGroup.STORY);

  const renderStoryRoutes = useMemo(
    () =>
      Array.from(storyRoutes.entries()).map((entry) => {
        const [key, [route]] = entry;
        return <Route key={key} path={route} element={routeElements[route]} />;
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

const routeElements: Record<TRoute, ReactElement> = {
  [routes.mainMenu]: <MainMenuPage />,
  [routes.Home]: <WelcomePage />,
  [routes.Theme]: <ThemePage />,
  [routes.IconCatalog]: <IconPage />,
  [routes.Stepper]: <StepperPage />,
  [routes.Slider]: <SliderPage />,
  [routes.PasswordInput]: <PasswordInputPage />,
  [routes.EmptyView]: <EmptyViewPage />,
  [routes.TableUtilities]: <TableUtilitiesPage />,
  [routes.TabListUtilities]: <FluentUiTabStylesPage />,
  [routes.Illustrations]: <IllustrationPage />,
};
