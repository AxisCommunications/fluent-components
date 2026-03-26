import {
  Caption1,
  Link,
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerFooter,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  BeachRegular,
  DarkThemeRegular,
  IconsRegular,
  PuzzlePieceRegular,
  SlideTextRegular,
} from "@fluentui/react-icons";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GitHubUrls } from "../../constants/constants";
import { routes } from "../../routing/routes";

const componentId = "navigation-menu";
export const navigationMenuClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "280px",
    ...shorthands.border(0),
  },
  body: {
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalS),
  },
  subItemGroup: {
    ...shorthands.borderLeft(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
    marginLeft: "28px",
    "& .fui-NavSubItem": {
      fontSize: tokens.fontSizeBase200,
      color: tokens.colorNeutralForeground3,
    },
    "& .fui-NavSubItem:hover": {
      color: tokens.colorNeutralForeground1,
    },
    "& .fui-NavSubItem[aria-current='page']": {
      color: tokens.colorNeutralForeground1,
      fontWeight: tokens.fontWeightSemibold,
    },
  },
  footer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalL),
  },
  footerIcon: {
    transitionDuration: tokens.durationNormal,
    transitionProperty: "transform",
    ":hover": {
      transform: "scale(1.15) rotate(10deg)",
    },
  },
  footerText: {
    color: tokens.colorNeutralForeground3,
  },
});

export function useNavigationMenuStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(navigationMenuClassNames.root, styles.root);
  return { styles, rootStyle };
}

export function NavigationMenu({ ...rest }) {
  const { styles, rootStyle } = useNavigationMenuStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavSelect = useCallback(
    (_: unknown, data: { value: string }) => {
      navigate(data.value);
    },
    [navigate]
  );

  return (
    <NavDrawer
      data-testid={componentId}
      open={true}
      type="inline"
      className={rootStyle}
      selectedValue={pathname}
      onNavItemSelect={handleNavSelect}
      defaultOpenCategories={["components", "styles"]}
      multiple
      {...rest}
    >
      <NavDrawerBody className={styles.body}>
        <NavItem icon={<DarkThemeRegular />} value={routes.Theme}>
          Themes
        </NavItem>
        <NavItem icon={<IconsRegular />} value={routes.IconCatalog}>
          Icons
        </NavItem>
        <NavItem icon={<BeachRegular />} value={routes.Illustrations}>
          Illustrations
        </NavItem>

        <NavCategory value="components">
          <NavCategoryItem icon={<PuzzlePieceRegular />}>
            Components
          </NavCategoryItem>
          <NavSubItemGroup className={styles.subItemGroup}>
            <NavSubItem value={routes.Stepper}>Stepper</NavSubItem>
            <NavSubItem value={routes.Slider}>Slider</NavSubItem>
            <NavSubItem value={routes.PasswordInput}>Password input</NavSubItem>
            <NavSubItem value={routes.EmptyView}>Empty view</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>

        <NavCategory value="styles">
          <NavCategoryItem icon={<SlideTextRegular />}>Styles</NavCategoryItem>
          <NavSubItemGroup className={styles.subItemGroup}>
            <NavSubItem value={routes.mainMenu}>Main menu</NavSubItem>
            <NavSubItem value={routes.TableUtilities}>Table</NavSubItem>
            <NavSubItem value={routes.TabListUtilities}>Tablist</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
      </NavDrawerBody>
      <NavDrawerFooter className={styles.footer}>
        <Link href={GitHubUrls.home} className={styles.footerIcon}>
          <svg
            aria-hidden="true"
            height="20"
            version="1.1"
            viewBox="0 0 16 16"
            width="20"
          >
            <path
              fill={tokens.colorNeutralForeground3}
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </Link>
        <Caption1 className={styles.footerText}>@axiscommunications</Caption1>
      </NavDrawerFooter>
    </NavDrawer>
  );
}
