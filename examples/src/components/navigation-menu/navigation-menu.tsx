import {
  Caption1,
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  BeachFilled,
  BeachRegular,
  ChevronRightRegular,
  DarkThemeFilled,
  DarkThemeRegular,
  DocumentCssFilled,
  DocumentCssRegular,
  FluentIcon,
  IconsFilled,
  IconsRegular,
  PuzzlePieceFilled,
  PuzzlePieceRegular,
} from "@fluentui/react-icons";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GitHubUrls } from "../../constants/constants";
import { TRoute, routes } from "../../routing/routes";

const componentId = "navigation-menu";
export const navigationMenuClassNames = {
  root: componentId,
};

type NavLink = {
  label: string;
  route: TRoute;
};

type NavItemDef = NavLink & {
  icon: FluentIcon;
  activeIcon: FluentIcon;
};

type NavGroupDef = {
  id: string;
  label: string;
  icon: FluentIcon;
  activeIcon: FluentIcon;
  items: NavLink[];
};

const topLevelItems: NavItemDef[] = [
  {
    label: "Themes",
    route: routes.Theme,
    icon: DarkThemeRegular,
    activeIcon: DarkThemeFilled,
  },
  {
    label: "Icons",
    route: routes.IconCatalog,
    icon: IconsRegular,
    activeIcon: IconsFilled,
  },
  {
    label: "Illustrations",
    route: routes.Illustrations,
    icon: BeachRegular,
    activeIcon: BeachFilled,
  },
];

const groups: NavGroupDef[] = [
  {
    id: "components",
    label: "Components",
    icon: PuzzlePieceRegular,
    activeIcon: PuzzlePieceFilled,
    items: [
      { label: "Stepper", route: routes.Stepper },
      { label: "Slider", route: routes.Slider },
      { label: "Password input", route: routes.PasswordInput },
      { label: "Side navigation", route: routes.SideNavigation },
      { label: "Empty view", route: routes.EmptyView },
      { label: "Advanced data grid", route: routes.AdvancedDataGrid },
    ],
  },
  {
    id: "styles",
    label: "Styles",
    icon: DocumentCssRegular,
    activeIcon: DocumentCssFilled,
    items: [
      { label: "Main menu", route: routes.mainMenu },
      { label: "Table", route: routes.TableUtilities },
      { label: "Tablist", route: routes.TabListUtilities },
    ],
  },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    height: "100%",
    width: "236px",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    ...shorthands.gap("2px"),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    overflowY: "auto",
    overflowX: "hidden",
  },
  item: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "38px",
    ...shorthands.gap(tokens.spacingHorizontalM),
    ...shorthands.padding(0, tokens.spacingHorizontalM),
    ...shorthands.border(0),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    backgroundColor: "transparent",
    color: tokens.colorNeutralForeground2,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    textAlign: "left",
    cursor: "pointer",
    transitionDuration: tokens.durationFaster,
    transitionProperty: "background-color, color",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2Hover,
      color: tokens.colorNeutralForeground1,
    },
    ":active": {
      backgroundColor: tokens.colorNeutralBackground2Pressed,
    },
  },
  itemActive: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
    ":hover": {
      backgroundColor: tokens.colorBrandBackground2,
      color: tokens.colorBrandForeground1,
    },
    "::before": {
      content: '""',
      position: "absolute",
      left: "3px",
      top: "9px",
      bottom: "9px",
      width: "3px",
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
      backgroundColor: tokens.colorBrandForeground1,
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "20px",
    height: "20px",
    fontSize: "20px",
  },
  label: {
    flexGrow: 1,
    ...shorthands.overflow("hidden"),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  chevron: {
    flexShrink: 0,
    fontSize: "16px",
    color: tokens.colorNeutralForeground3,
    transitionDuration: tokens.durationFaster,
    transitionProperty: "transform",
  },
  chevronOpen: {
    transform: "rotate(90deg)",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("2px"),
  },
  subGroup: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("2px"),
    marginTop: "2px",
    marginLeft: "26px",
    paddingLeft: tokens.spacingHorizontalS,
    ...shorthands.borderLeft(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
  },
  subItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "32px",
    ...shorthands.padding(0, tokens.spacingHorizontalM),
    ...shorthands.border(0),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    backgroundColor: "transparent",
    color: tokens.colorNeutralForeground3,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    textAlign: "left",
    cursor: "pointer",
    transitionDuration: tokens.durationFaster,
    transitionProperty: "background-color, color",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground2Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  subItemActive: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
    ":hover": {
      backgroundColor: tokens.colorBrandBackground2,
      color: tokens.colorBrandForeground1,
    },
  },
  footer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalXL),
    ...shorthands.borderTop(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
  },
  footerIcon: {
    display: "inline-flex",
    color: tokens.colorNeutralForeground3,
    transitionDuration: tokens.durationNormal,
    transitionProperty: "transform, color",
    ":hover": {
      color: tokens.colorNeutralForeground1,
      transform: "scale(1.12) rotate(8deg)",
    },
  },
  footerText: {
    color: tokens.colorNeutralForeground3,
  },
});

export function NavigationMenu() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const group of groups) {
      initial[group.id] = true;
    }
    return initial;
  });

  const toggleGroup = (id: string) =>
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));

  const rootStyle = useMemo(
    () => mergeClasses(navigationMenuClassNames.root, styles.root),
    [styles.root]
  );

  return (
    <nav data-testid={componentId} className={rootStyle}>
      <div className={styles.body}>
        {topLevelItems.map((item) => {
          const active = pathname === item.route;
          const Icon = active ? item.activeIcon : item.icon;
          return (
            <button
              key={item.route}
              type="button"
              aria-current={active ? "page" : undefined}
              className={mergeClasses(styles.item, active && styles.itemActive)}
              onClick={() => navigate(item.route)}
            >
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.label}>{item.label}</span>
            </button>
          );
        })}

        {groups.map((group) => {
          const isOpen = openGroups[group.id];
          const hasActiveChild = group.items.some(
            (item) => item.route === pathname
          );
          const Icon = hasActiveChild ? group.activeIcon : group.icon;
          return (
            <div key={group.id} className={styles.group}>
              <button
                type="button"
                aria-expanded={isOpen}
                className={styles.item}
                onClick={() => toggleGroup(group.id)}
              >
                <span className={styles.icon}>
                  <Icon />
                </span>
                <span className={styles.label}>{group.label}</span>
                <ChevronRightRegular
                  className={mergeClasses(
                    styles.chevron,
                    isOpen && styles.chevronOpen
                  )}
                />
              </button>
              {isOpen && (
                <div className={styles.subGroup}>
                  {group.items.map((item) => {
                    const active = pathname === item.route;
                    return (
                      <button
                        key={item.route}
                        type="button"
                        aria-current={active ? "page" : undefined}
                        className={mergeClasses(
                          styles.subItem,
                          active && styles.subItemActive
                        )}
                        onClick={() => navigate(item.route)}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <Link href={GitHubUrls.home} className={styles.footerIcon}>
          <svg
            aria-hidden="true"
            height="20"
            version="1.1"
            viewBox="0 0 16 16"
            width="20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </Link>
        <Caption1 className={styles.footerText}>@axiscommunications</Caption1>
      </div>
    </nav>
  );
}
