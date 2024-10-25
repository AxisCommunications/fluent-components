import React from "react";
import { ApplicationDrawerV1 } from "./application-drawer-v1";
import { ApplicationDrawerProps } from "./application-drawer.types";
import { ApplicationArea } from "./top-bar.types";
import { ApplicationDrawerV2 } from "./application-drawer-v2";

export const ApplicationDrawer = (
  props: ApplicationDrawerProps & { applicationArea: ApplicationArea }
) => {
  if (props.version === "v2") {
    return <ApplicationDrawerV2 {...props} />;
  } else {
    return <ApplicationDrawerV1 {...props} />;
  }
};
