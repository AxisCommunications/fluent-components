import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Outlet, useLocation } from "react-router-dom";
import { MainMenu } from "./components/main-menu/main-menu";
import { NavigationMenu } from "./components/navigation-menu/navigation-menu";
import { Navbar } from "./components/top-bar";
import { Layout } from "./layout";
import { useScrollToAnchor } from "./routing/use-scroll-to-anchor";
import { useStaticStyles } from "./styles/static";

const fadeIn = {
  from: { opacity: 0, transform: "translateY(4px)" },
  to: { opacity: 1, transform: "translateY(0)" },
};

const useStyles = makeStyles({
  navigationContainer: {
    display: "flex",
    height: "100%",
  },
  pageTransition: {
    height: "100%",
    animationName: fadeIn,
    animationDuration: tokens.durationNormal,
    animationTimingFunction: tokens.curveDecelerateMin,
    animationFillMode: "both",
    ...shorthands.overflow("hidden"),
  },
});

export const MainPage = () => {
  useStaticStyles();
  useScrollToAnchor();

  const styles = useStyles();
  const { pathname } = useLocation();

  return (
    <Layout
      header={<Navbar />}
      navigation={
        <div className={styles.navigationContainer}>
          <MainMenu />
          <NavigationMenu />
        </div>
      }
      content={
        <div key={pathname} className={styles.pageTransition}>
          <Outlet />
        </div>
      }
    />
  );
};
