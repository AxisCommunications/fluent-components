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
export type MySystemsAppId = typeof mySystemsAppIds[number];

const _mySystemsAppIdSet = new Set(mySystemsAppIds);
export function isMySystemsAppId(name: unknown): name is MySystemsAppId {
  return typeof name === "string"
    && _mySystemsAppIdSet.has(name as MySystemsAppId);
}

export interface MySystemsAppData {
  readonly icon: JSX.Element;
  readonly labelKey: TranslationKey;
}

export const defaultMySystemsAppData: Record<
  MySystemsAppId,
  MySystemsAppData
> = {
  dm: { icon: <SystemManagementIcon />, labelKey: "app_dm" },
  iam: { icon: <UserManagementIcon />, labelKey: "app_iam" },
  lm: { icon: <LicenseManagementIcon />, labelKey: "app_lm" },
  portal: { icon: <MySystemsIcon />, labelKey: "app_portal" },
  shm: {
    icon: <SystemHealthMonitoringIcon />,
    labelKey: "app_shm",
  },
  video: { icon: <VideoOperationIcon />, labelKey: "app_video" },
};
