import React from "react";

import {
  BoxMultipleFilled,
  BoxMultipleRegular,
  BuildingBankFilled,
  BuildingBankRegular,
  bundleIcon,
  HeartPulseFilled,
  HeartPulseRegular,
  HomeMoreFilled,
  HomeMoreRegular,
  PeopleFilled,
  PeopleRegular,
  VideoClipMultipleFilled,
  VideoClipMultipleRegular,
} from "@fluentui/react-icons";
import { TranslationKey } from "./translation-context";

const MySystemsIcon = bundleIcon(HomeMoreFilled, HomeMoreRegular);
const VideoOperationIcon = bundleIcon(
  VideoClipMultipleFilled,
  VideoClipMultipleRegular
);
const SystemManagementIcon = bundleIcon(BoxMultipleFilled, BoxMultipleRegular);
const SystemHealthMonitoringIcon = bundleIcon(
  HeartPulseFilled,
  HeartPulseRegular
);
const UserManagementIcon = bundleIcon(PeopleFilled, PeopleRegular);
const LicenseManagementIcon = bundleIcon(
  BuildingBankFilled,
  BuildingBankRegular
);

export const mySystemsAppIds = [
  "dm",
  "iam",
  "lm",
  "portal",
  "shm",
  "video",
] as const;
export type MySystemsAppId = (typeof mySystemsAppIds)[number];

const _mySystemsAppIdSet = new Set(mySystemsAppIds);
export function isMySystemsAppId(name: unknown): name is MySystemsAppId {
  return (
    typeof name === "string" && _mySystemsAppIdSet.has(name as MySystemsAppId)
  );
}

export interface MySystemsAppData {
  readonly icon: JSX.Element;
  readonly labelKey: TranslationKey;
}

export const defaultMySystemsAppData: Record<
  MySystemsAppId,
  MySystemsAppData & { filledIcon: JSX.Element }
> = {
  dm: {
    icon: <SystemManagementIcon />,
    filledIcon: <SystemManagementIcon filled />,
    labelKey: "app_dm",
  },
  iam: {
    icon: <UserManagementIcon />,
    filledIcon: <UserManagementIcon filled />,
    labelKey: "app_iam",
  },
  lm: {
    icon: <LicenseManagementIcon />,
    filledIcon: <LicenseManagementIcon filled />,
    labelKey: "app_lm",
  },
  portal: {
    icon: <MySystemsIcon />,
    filledIcon: <MySystemsIcon filled />,
    labelKey: "app_portal",
  },
  shm: {
    icon: <SystemHealthMonitoringIcon />,
    filledIcon: <SystemHealthMonitoringIcon filled />,
    labelKey: "app_shm",
  },
  video: {
    icon: <VideoOperationIcon />,
    filledIcon: <VideoOperationIcon filled />,
    labelKey: "app_video",
  },
};
