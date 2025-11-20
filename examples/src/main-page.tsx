import { makeStyles } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";
import { MainMenu } from "./components/main-menu/main-menu";
import { NavigationMenu } from "./components/navigation-menu/navigation-menu";
import { Navbar } from "./components/top-bar";
import { Layout } from "./layout";
import { useScrollToAnchor } from "./routing/use-scroll-to-anchor";
import { useStaticStyles } from "./styles/static";

const useStyles = makeStyles({
  navigationContainer: {
    display: "flex",
    height: "100%",
  },
});

export const MainPage = () => {
  useStaticStyles();
  useScrollToAnchor();

  const styles = useStyles();

  return (
    <Layout
      header={<Navbar />}
      navigation={
        <div className={styles.navigationContainer}>
          <MainMenu />
          <NavigationMenu />
        </div>
      }
      content={<Outlet />}
    />
  );
};
