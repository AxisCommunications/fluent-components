import {
  ApplicationDrawer,
  ApplicationMenu,
  OrganizationMenu,
  ProfileMenu,
  TopBar,
} from "@axiscommunications/fluent-topbar";
import { Button, MenuItem, Text } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const applicationOptions = [
  { id: "mySystems", label: "My Systems" },
  { id: "myAxis", label: "My Axis" },
  { id: "myBusiness", label: "My Business" },
];

const organizationOptions = [
  { id: "acme", label: "Acme Corp" },
  { id: "northwind", label: "Northwind Traders" },
  { id: "tailspin", label: "Tailspin Toys" },
  { id: "woodgrove", label: "Woodgrove Bank" },
];

const languageOptions = [
  { id: "en", label: "English" },
  { id: "sv", label: "Svenska" },
];

const themeOptions = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
];

const meta: Meta = {
  title: "Components/Topbar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FullTopBar: Story = {
  render: function Render() {
    const [application, setApplication] = useState("mySystems");
    const [organization, setOrganization] = useState("acme");
    const [language, setLanguage] = useState("en");
    const [theme, setTheme] = useState("dark");

    return (
      <TopBar
        appMenu={{
          options: applicationOptions,
          value: application,
          onChange: setApplication,
        }}
        applicationArea="mySystems"
        centerCustomContent={<Text>Device Management</Text>}
        customContent={
          <Button size="small" appearance="subtle">
            Support
          </Button>
        }
        orgMenu={{
          options: organizationOptions,
          value: organization,
          onChange: setOrganization,
          filter: {
            showFilter: true,
            placeholderText: "Find organization",
          },
        }}
        profileMenu={{
          email: "alex@example.com",
          initials: "AR",
          language: {
            options: languageOptions,
            value: language,
            onChange: setLanguage,
          },
          name: "Alex Rivera",
          onSignOut: () => undefined,
          tag: "Administrator",
          theme: {
            options: themeOptions,
            value: theme,
            onChange: setTheme,
          },
        }}
      />
    );
  },
};

export const ApplicationMenuOnly: Story = {
  render: function Render() {
    const [application, setApplication] = useState("mySystems");

    return (
      <ApplicationMenu
        options={applicationOptions}
        value={application}
        onChange={setApplication}
      />
    );
  },
};

export const ApplicationDrawerV2: Story = {
  render: function Render() {
    const [applicationId, setApplicationId] = useState("camera-station");

    return (
      <ApplicationDrawer
        version="v2"
        applicationArea="mySystems"
        applicationId={applicationId}
        onChange={setApplicationId}
        title={<Text>Applications</Text>}
        content={[
          {
            id: "video",
            label: "Video",
            icon: <span>■</span>,
            children: [
              {
                id: "camera-station",
                label: "Camera Station",
                icon: <span>■</span>,
              },
              {
                id: "site-designer",
                label: "Site Designer",
                icon: <span>■</span>,
              },
            ],
          },
          {
            id: "insights",
            label: "Insights",
            icon: <span>■</span>,
          },
        ]}
      />
    );
  },
};

export const OrganizationMenuOnly: Story = {
  render: function Render() {
    const [organization, setOrganization] = useState("acme");

    return (
      <OrganizationMenu
        options={organizationOptions}
        value={organization}
        onChange={setOrganization}
        filter={{
          showFilter: true,
          placeholderText: "Find organization",
        }}
      />
    );
  },
};

export const ProfileMenuOnly: Story = {
  render: function Render() {
    const [language, setLanguage] = useState("en");
    const [theme, setTheme] = useState("dark");

    return (
      <ProfileMenu
        customContent={<MenuItem>My profile</MenuItem>}
        email="alex@example.com"
        initials="AR"
        language={{
          options: languageOptions,
          value: language,
          onChange: setLanguage,
        }}
        name="Alex Rivera"
        onSignOut={() => undefined}
        theme={{
          options: themeOptions,
          value: theme,
          onChange: setTheme,
        }}
      />
    );
  },
};
