import {
  SideNavigation,
  SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import { makeStyles } from "@fluentui/react-components";
import {
  AppsFilled,
  AppsRegular,
  HomeFilled,
  HomeRegular,
  LayerFilled,
  LayerRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import { useState } from "react";

const useStyles = makeStyles({
  shell: {
    height: "520px",
    display: "flex",
  },
});

const items: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular />,
    selectedIcon: <HomeFilled />,
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <AppsRegular />,
    selectedIcon: <AppsFilled />,
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular />,
    selectedIcon: <LayerFilled />,
  },
];

const footerItems: SideNavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

export function CompactSideNavigationExample() {
  const [selectedItemId, setSelectedItemId] = useState("home");
  const styles = useStyles();

  return (
    <div className={styles.shell}>
      <SideNavigation
        style={{ height: "100%" }}
        items={items}
        footerItems={footerItems}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        aria-label="Side navigation"
      />
    </div>
  );
}

export const CompactSideNavigationExampleAsString = `
import {
  SideNavigation,
  SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import { makeStyles } from "@fluentui/react-components";
import {
  AppsFilled,
  AppsRegular,
  HomeFilled,
  HomeRegular,
  LayerFilled,
  LayerRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import { useState } from "react";

const useStyles = makeStyles({
  shell: {
    height: "520px",
    display: "flex",
  },
});

const items: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular />,
    selectedIcon: <HomeFilled />,
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: <AppsRegular />,
    selectedIcon: <AppsFilled />,
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular />,
    selectedIcon: <LayerFilled />,
  },
];

const footerItems: SideNavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

export function CompactSideNavigationExample() {
  const [selectedItemId, setSelectedItemId] = useState("home");
  const styles = useStyles();

  return (
    <div className={styles.shell}>
      <SideNavigation
        style={{ height: "100%" }}
        items={items}
        footerItems={footerItems}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        aria-label="Side navigation"
      />
    </div>
  );
}
`;
