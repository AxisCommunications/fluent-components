import {
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import {
  ApplicationDrawerContent,
  ApplicationOption,
  LanguageOption,
  OrganizationOption,
  ThemeOption,
  TopBar,
} from "@axiscommunications/fluent-topbar";
import {
  Button,
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Title1,
} from "@fluentui/react-components";
import {
  AddRegular,
  AddSubtractCircle20Filled,
  AddSubtractCircle20Regular,
  AnimalCat20Filled,
  AnimalCat20Regular,
  bundleIcon,
  FoodApple24Regular,
  FoodCarrot20Filled,
  FoodFish20Filled,
  FoodFish20Regular,
  MailFilled,
  MailRegular,
  Megaphone24Filled,
  OpenRegular,
  QuestionCircleRegular,
  ZoomFit16Filled,
  ZoomFit16Regular,
} from "@fluentui/react-icons";
import React, { useCallback, useState } from "react";
import { useAppContext } from "../context/ApplicationStateProvider";

const ApplicationIcon = bundleIcon(AnimalCat20Filled, AnimalCat20Regular);
const MailIcon = bundleIcon(MailFilled, MailRegular);
const ZoomIcon = bundleIcon(ZoomFit16Filled, ZoomFit16Regular);
const FishIcon = bundleIcon(FoodFish20Filled, FoodFish20Regular);
const CatIcon = bundleIcon(AnimalCat20Filled, AnimalCat20Regular);
const AddSubIcon = bundleIcon(
  AddSubtractCircle20Filled,
  AddSubtractCircle20Regular
);

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

  const appDrawerContent: ApplicationDrawerContent[] = [
    {
      icon: <ZoomIcon />,
      label: "Zoo",
      id: "zoo",
      children: [
        {
          icon: <FishIcon />,
          label: "Fisk",
          id: "fisk",
        },
        {
          icon: <CatIcon />,
          label: "Cat",
          id: "cat",
        },
      ],
    },
    {
      icon: <AddSubIcon />,
      label: "Add",
      id: "add",
    },
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

  const [selectedApp, setSelectedApp] = useState(applications[1].id);
  const [drawerSelectedApp, setDrawerSelectedApp] = useState(
    appDrawerContent[1].id
  );

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

  const onNavigateToApplication = React.useCallback(
    (appid: string) => {
      setSelectedApp(appid);
      alert("lets navigate! => " + appid);
    },
    [setSelectedApp]
  );

  const onDrawerNavigate = React.useCallback(
    (id: string) => {
      setDrawerSelectedApp(id);
      alert("lets navigate! => " + id);
    },
    [setDrawerSelectedApp]
  );

  const [showDrawer, setShowDrawer] = useState(true);

  return (
    <div className={styles.topBar}>
      <TopBar
        appDrawer={showDrawer
          ? {
            link: { text: "Learn more", url: "https://example.com" },
            applicationId: drawerSelectedApp,
            title: <Title1>My Apps</Title1>,
            content: appDrawerContent,
            onChange: onDrawerNavigate,
          }
          : undefined}
        appMenu={{
          customContent: (
            <MenuItem icon={<FoodApple24Regular />}>
              Custom app menu item
            </MenuItem>
          ),
          options: applications,
          value: selectedApp,
          onChange: onNavigateToApplication,
        }}
        applicationArea={"mySystems"}
        leftCustomContent={
          <Button
            appearance="subtle"
            icon={<Megaphone24Filled />}
            iconPosition="before"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {showDrawer ? "Use application menu" : "Use application drawer"}
          </Button>
        }
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
        centerCustomContent={
          <Button icon={<FoodCarrot20Filled />}>I AM CENTER</Button>
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
