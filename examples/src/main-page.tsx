/*! *****************************************************************************
Copyright 2022 Axis Communications AB, SWEDEN. All rights reserved.
***************************************************************************** */
import {
  Divider,
  makeStyles,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  tokens,
} from "@fluentui/react-components";
import React, { useCallback, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/top-bar";
import { Layout } from "./layout";
import { getRouteByGroup, RouteGroup, routeMap } from "./routing/route-map";
import { routes, TRoute } from "./routing/routes";
import { useStaticStyles } from "./styles/static";
import { useUtilStyles } from "./styles/utils";

export const useStyles = makeStyles({
  navigation: {
    paddingRight: tokens.spacingHorizontalL,
  },
});

export const MainPage = () => {
  useStaticStyles();
  const styles = useStyles();
  const utilStyles = useUtilStyles();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = useCallback(
    (_: SelectTabEvent, { value }: SelectTabData) => {
      navigate(value as TRoute);
    },
    [navigate]
  );

  const storyRoutes = getRouteByGroup(RouteGroup.STORY);

  const renderStoryTabs = useMemo(
    () =>
      Array.from(storyRoutes.entries()).map((entry) => {
        const [key, [route, routeData]] = entry;
        return (
          <Tab key={key} value={route} icon={routeData.icon}>
            {routeData.label}
          </Tab>
        );
      }),
    [storyRoutes]
  );

  const homeRoute = routeMap.get(routes.Home);

  return (
    <Layout
      header={<Navbar />}
      navigation={
        <TabList
          className={styles.navigation}
          vertical
          selectedValue={pathname}
          onTabSelect={goTo}
        >
          {homeRoute && (
            <Tab value={routes.Home} icon={homeRoute.icon}>
              {homeRoute.label}
            </Tab>
          )}
          <Divider className={utilStyles.resetGrow} />
          {renderStoryTabs}
        </TabList>
      }
      content={<Outlet />}
    />
  );
};
