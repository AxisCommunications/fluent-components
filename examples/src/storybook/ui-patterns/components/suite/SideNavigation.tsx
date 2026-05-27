import {
  Button,
  Divider,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  AppsRegular,
  BuildingRegular,
  HomeRegular,
  LayerRegular,
  MoreHorizontalRegular,
  PeopleRegular,
} from "@fluentui/react-icons";
import type { ReactElement } from "react";

const useStyles = makeStyles({
  root: {
    width: "68px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    ...{
      borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    },
    backgroundColor: tokens.colorNeutralBackground1,
  },
  navGroup: {
    display: "grid",
    justifyItems: "center",
    rowGap: "0",
    ...{
      paddingTop: "0",
    },
  },
  tile: {
    width: "68px",
    height: "56px",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    rowGap: "2px",
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground2,
  },
  label: {
    fontSize: tokens.fontSizeBase100,
    lineHeight: "14px",
    textAlign: "center",
  },
  workspaceSection: {
    width: "68px",
    display: "grid",
    justifyItems: "center",
  },
  divider: {
    width: "24px",
  },
  switcher: {
    width: "68px",
    height: "68px",
    display: "grid",
    placeItems: "center",
  },
  switcherButton: {
    width: "68px",
    minWidth: "68px",
    height: "56px",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    rowGap: "2px",
    fontSize: tokens.fontSizeBase100,
    ...{
      paddingTop: "0",
      paddingRight: "0",
      paddingBottom: "0",
      paddingLeft: "0",
    },
  },
});

type NavItem = {
  key: string;
  label: string;
  icon: ReactElement;
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", icon: <HomeRegular fontSize={20} /> },
  {
    key: "workspaces",
    label: "Workspaces",
    icon: <AppsRegular fontSize={20} />,
  },
  { key: "onelake", label: "OneLake", icon: <LayerRegular fontSize={20} /> },
  {
    key: "realtime",
    label: "Real-Time",
    icon: <PeopleRegular fontSize={20} />,
  },
  { key: "monitor", label: "Monitor", icon: <BuildingRegular fontSize={20} /> },
  { key: "workloads", label: "Workloads", icon: <AppsRegular fontSize={20} /> },
];

export interface SideNavigationProps {
  onSiteFilterClick?: () => void;
}

export function SideNavigation({ onSiteFilterClick }: SideNavigationProps) {
  const styles = useStyles();

  return (
    <aside className={styles.root}>
      <div className={styles.navGroup}>
        {navItems.map((item) => (
          <Button
            key={item.key}
            appearance="subtle"
            className={styles.tile}
            icon={item.icon}
          >
            <span className={styles.label}>{item.label}</span>
          </Button>
        ))}

        <div className={styles.workspaceSection}>
          <Divider className={styles.divider} />
          <Button
            appearance="subtle"
            className={styles.tile}
            icon={<BuildingRegular fontSize={20} />}
          >
            <span className={styles.label}>Contoso Workspace</span>
          </Button>
        </div>

        <Button
          appearance="subtle"
          className={styles.tile}
          icon={<MoreHorizontalRegular fontSize={20} />}
        >
          <span className={styles.label}>More</span>
        </Button>
      </div>

      <div className={styles.switcher}>
        <Button
          appearance="secondary"
          className={styles.switcherButton}
          icon={<AppsRegular fontSize={20} />}
          onClick={onSiteFilterClick}
        >
          <span className={styles.label}>Site</span>
        </Button>
      </div>
    </aside>
  );
}
