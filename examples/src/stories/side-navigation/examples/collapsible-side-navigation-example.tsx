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
  PersonFilled,
  PersonRegular,
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
    children: [
      { id: "workspaces-personal", label: "Personal" },
      { id: "workspaces-shared", label: "Shared with me" },
      { id: "workspaces-archived", label: "Archived" },
    ],
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular />,
    selectedIcon: <LayerFilled />,
    children: [
      { id: "onelake-catalog", label: "Data catalog" },
      { id: "onelake-shortcuts", label: "Shortcuts" },
    ],
  },
];

const footerItems: SideNavigationItem[] = [
  {
    id: "profile",
    label: "My profile",
    icon: <PersonRegular />,
    selectedIcon: <PersonFilled />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

export function CollapsibleSideNavigationExample() {
  const styles = useStyles();
  const [selectedItemId, setSelectedItemId] = useState("home");

  return (
    <div className={styles.shell}>
      <SideNavigation
        style={{ height: "100%" }}
        items={items}
        footerItems={footerItems}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        defaultExpanded
        defaultOpenItemIds={["workspaces"]}
        togglePosition="bottom"
        aria-label="Side navigation"
      />
    </div>
  );
}

export const CollapsibleSideNavigationExampleAsString = `
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
  PersonFilled,
  PersonRegular,
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
    children: [
      { id: "workspaces-personal", label: "Personal" },
      { id: "workspaces-shared", label: "Shared with me" },
      { id: "workspaces-archived", label: "Archived" },
    ],
  },
  {
    id: "onelake",
    label: "OneLake",
    icon: <LayerRegular />,
    selectedIcon: <LayerFilled />,
    children: [
      { id: "onelake-catalog", label: "Data catalog" },
      { id: "onelake-shortcuts", label: "Shortcuts" },
    ],
  },
];

const footerItems: SideNavigationItem[] = [
  {
    id: "profile",
    label: "My profile",
    icon: <PersonRegular />,
    selectedIcon: <PersonFilled />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
  },
];

export function CollapsibleSideNavigationExample() {
  const styles = useStyles();
  const [selectedItemId, setSelectedItemId] = useState("home");

  return (
    <div className={styles.shell}>
      <SideNavigation
        style={{ height: "100%" }}
        items={items}
        footerItems={footerItems}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        defaultExpanded
        defaultOpenItemIds={["workspaces"]}
        togglePosition="bottom"
        aria-label="Side navigation"
      />
    </div>
  );
}
`;
