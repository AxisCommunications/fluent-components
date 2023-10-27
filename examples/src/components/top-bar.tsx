import {
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import {
  ApplicationOption,
  LanguageOption,
  OrganizationOption,
  ThemeOption,
  TopBar,
} from "@axiscommunications/fluent-topbar";
import {
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  AddRegular,
  BoxFilled,
  BoxRegular,
  bundleIcon,
  MailFilled,
  MailRegular,
  OpenRegular,
  QuestionCircleRegular,
} from "@fluentui/react-icons";
import React, { useCallback, useState } from "react";
import { useAppContext } from "../context/ApplicationStateProvider";

const ApplicationIcon = bundleIcon(BoxFilled, BoxRegular);
const MailIcon = bundleIcon(MailFilled, MailRegular);

const useStyles = makeStyles({
  topBar: {
    height: "46px",
  },
});

export const Navbar = () => {
  const applications: ApplicationOption[] = [
    {
      id: "components",
      label: "Fluent components",
      icon: <ApplicationIcon />,
      beta: true,
    },
    { id: "portal" },
    { id: "video" },
    { id: "dm", beta: true },
    { id: "shm" },
    { id: "iam" },
    { id: "lm" },
  ];
  const organizations: OrganizationOption[] = [
    { id: "1", label: "organizationenn2" },
    { id: "2", label: "organizationen AB" },
    ...new Array(50).fill(0).map((_, i) => ({
      id: "extra" + i,
      label: "organization-" + i,
    })),
  ];
  const themes: ThemeOption[] = [{ id: "light" }, { id: "dark" }];
  const languages: LanguageOption[] = [
    { id: "sv" },
    { id: "en" },
    ...new Array<LanguageOption>(50).fill({ id: "fi" }),
  ];

  const [selectedApp, setSelectedApp] = useState(applications[0].id);

  const [currentOrganizationId, setCurrentOrganizationId] = useState<string>(
    () => organizations[0]?.id ?? ""
  );
  const selectedTheme = useAppContext((context) => context.theme);
  const setTheme = useAppContext((context) => context.setTheme);
  const currentThemeId = selectedTheme === axisDarkTheme ? "dark" : "light";

  const styles = useStyles();

  const setSelectedTheme = useCallback(
    (id: string) => {
      id === "dark" ? setTheme(axisDarkTheme) : setTheme(axisLightTheme);
    },
    [setTheme]
  );

  const [currentLanguageId, setCurrentLanguageId] = useState("en");

  const onSignOutCallback = React.useCallback(() => {
    alert("sign me in");
  }, []);

  const onNavigateToApplication = React.useCallback((appid: string) => {
    setSelectedApp(appid);
    alert("lets navigate! => " + appid);
  }, [setSelectedApp]);

  return (
    <div className={styles.topBar}>
      <TopBar
        appMenu={{
          options: applications,
          value: selectedApp,
          onChange: onNavigateToApplication,
        }}
        customContent={
          <Menu>
            <MenuTrigger>
              <MenuButton
                icon={<QuestionCircleRegular />}
                appearance="subtle"
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>FAQ</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        }
        orgMenu={{
          customContent: (
            <MenuItem icon={<AddRegular />}>Create organization</MenuItem>
          ),
          onChange: setCurrentOrganizationId,
          options: organizations,
          value: currentOrganizationId,
        }}
        profileMenu={{
          customContent: (
            <MenuItem
              icon={<OpenRegular />}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => {
                window.open(
                  "https://auth.axis.com/user-center/account",
                  "myAxisTab"
                );
              }}
            >
              Account settings
            </MenuItem>
          ),
          email: "user.person@axis.com",
          name: "User Person",
          language: {
            value: currentLanguageId,
            options: languages,
            onChange: setCurrentLanguageId,
          },
          onSignOut: onSignOutCallback,
          theme: {
            value: currentThemeId,
            onChange: setSelectedTheme,
            options: themes,
          },
          hasNotification: true,
          notificationIcon: <MailIcon />,
        }}
      />
    </div>
  );
};
