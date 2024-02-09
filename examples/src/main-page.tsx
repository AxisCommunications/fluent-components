import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/top-bar";
import { Layout } from "./layout";
import { useStaticStyles } from "./styles/static";
import { NavigationMenu } from "./components/navigation-menu/navigation-menu";
import { useScrollToAnchor } from "./routing/use-scroll-to-anchor";

export const useStyles = makeStyles({
  navigation: {
    paddingRight: tokens.spacingHorizontalL,
  },
});

export const MainPage = () => {
  useStaticStyles();
  useScrollToAnchor();

  return (
    <Layout
      header={<Navbar />}
      navigation={<NavigationMenu />}
      content={<Outlet />}
    />
  );
};
