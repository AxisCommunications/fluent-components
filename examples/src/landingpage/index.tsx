import {
  Body1,
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
  SparkleRegular,
} from "@fluentui/react-icons";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TestId } from "../../system-test/util/test-id";
import { RouteCategory, getRouteByCategory } from "../routing/route-map";
import { routes } from "../routing/routes";
import { WelcomeCard } from "./welcome-card";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
    ...shorthands.overflow("auto"),
    ...shorthands.padding("48px"),
  },
  content: {
    zIndex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXXL),
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
    maxWidth: "640px",
  },
  kicker: {
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "flex-start",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    ...shorthands.padding(tokens.spacingVerticalXXS, tokens.spacingHorizontalS),
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  title: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightHero800,
    color: tokens.colorNeutralForeground1,
  },
  subtitle: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase400,
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    ...shorthands.gap(tokens.spacingHorizontalL),
    maxWidth: "980px",
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
        <div className={styles.hero}>
          <span className={styles.kicker}>
            <SparkleRegular />
            Axis Design System
          </span>
          <span className={styles.title}>
            Welcome to Axis Fluent Components
          </span>
          <Body1 className={styles.subtitle}>
            Explore components, themes, icons, illustrations, and style
            utilities built on Fluent UI.
          </Body1>
        </div>
        <div className={styles.cardContainer}>
          <WelcomeCard
            icon={<PuzzlePieceRegular />}
            title="Components"
            description="Axis branded components that complement Fluent UI"
            onClick={navigateToFirstComponent}
          />
          <WelcomeCard
            icon={<DarkThemeRegular />}
            title="Theme"
            description="Axis branded light and dark themes"
            onClick={navigateToTheme}
          />
          <WelcomeCard
            icon={<IconsRegular />}
            title="Icons"
            description="Axis branded icon library"
            onClick={navigateToIcon}
          />
          <WelcomeCard
            icon={<BeachRegular />}
            title="Illustrations"
            description="Axis branded illustrations for empty states"
            onClick={navigateToIllustration}
          />
          <WelcomeCard
            icon={<DocumentCssRegular />}
            title="Styles"
            description="Utility styles for existing components"
            onClick={navigateToFirstStyle}
          />
        </div>
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
