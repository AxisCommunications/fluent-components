import {
  Title2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  BeachRegular,
  DarkThemeRegular,
  DocumentCssRegular,
  IconsRegular,
  PuzzlePieceRegular,
} from "@fluentui/react-icons";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TestId } from "../../system-test/util/test-id";
import { RouteCategory, getRouteByCategory } from "../routing/route-map";
import { routes } from "../routing/routes";
import { WelcomeCard } from "./welcome-card";
import { WelcomeImage } from "./welcome-image/welcome-image.component";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
    ...shorthands.overflow("auto"),
    ...shorthands.padding(tokens.spacingVerticalXXL),
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  content: {
    zIndex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
});

export const WelcomePage = () => {
  const styles = useStyles();
  const {
    navigateToFirstComponent,
    navigateToFirstStyle,
    navigateToIcon,
    navigateToIllustration,
    navigateToTheme,
  } = useWelcomePage();

  return (
    <div data-testid={TestId.welcomePage} className={styles.root}>
      <div className={styles.content}>
        <Title2 block wrap>
          Welcome to Axis Fluent Components
        </Title2>
        <div className={styles.cardContainer}>
          <WelcomeCard
            icon={<PuzzlePieceRegular fontSize={tokens.fontSizeBase600} />}
            title="Components"
            description={"Axis branded component"}
            text={"Complement to fluent ui components"}
            onClick={navigateToFirstComponent}
          />
          <WelcomeCard
            icon={<DarkThemeRegular fontSize={tokens.fontSizeBase600} />}
            title="Theme"
            description={"Axis branded themes"}
            onClick={navigateToTheme}
          />
          <WelcomeCard
            icon={<IconsRegular fontSize={tokens.fontSizeBase600} />}
            title="Icons"
            description={"Axis branded icons"}
            onClick={navigateToIcon}
          />
          <WelcomeCard
            icon={<BeachRegular fontSize={tokens.fontSizeBase600} />}
            title="Illustrations"
            description={"Axis branded illustrations"}
            onClick={navigateToIllustration}
          />
          <WelcomeCard
            icon={<DocumentCssRegular fontSize={tokens.fontSizeBase600} />}
            title="Styles"
            description={"Utilities for existing components"}
            onClick={navigateToFirstStyle}
          />
        </div>
      </div>
      <div className={styles.image}>
        <WelcomeImage />
      </div>
    </div>
  );
};

function useWelcomePage() {
  const navigate = useNavigate();

  const navigateToFirstComponent = useCallback(() => {
    const [firstComponent] = getRouteByCategory(RouteCategory.COMPONENT)[0];
    navigate(firstComponent);
  }, [navigate]);

  const navigateToFirstStyle = useCallback(() => {
    const [firstComponent] = getRouteByCategory(RouteCategory.STYLE)[0];
    navigate(firstComponent);
  }, [navigate]);

  const navigateToIcon = useCallback(() => {
    navigate(routes.IconCatalog);
  }, [navigate]);

  const navigateToIllustration = useCallback(() => {
    navigate(routes.Illustrations);
  }, [navigate]);

  const navigateToTheme = useCallback(() => {
    navigate(routes.Theme);
  }, [navigate]);

  return {
    navigateToFirstComponent,
    navigateToFirstStyle,
    navigateToIcon,
    navigateToIllustration,
    navigateToTheme,
  };
}
