import { MySystems24Filled } from "@axiscommunications/fluent-icons";
import { mergeClasses } from "@fluentui/react-components";
import {
  BoxFilled,
  BoxRegular,
  Circle20Filled,
  DataBarVertical20Filled,
  HomeMore20Filled,
  bundleIcon,
} from "@fluentui/react-icons";
import React from "react";
import {
  ApplicationDrawerContent,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import { useApplicationStyles } from "./application.styles";
import { defaultMySystemsAppData, isMySystemsAppId } from "./applications";
import { ApplicationArea } from "./top-bar.types";
import { TranslationFn } from "./translation-context";

enum appAreas {
  MY_SYSTEMS = "mySystems",
  MY_AXIS = "myAxis",
  MY_BUSINESS = "myBusiness",
  MY_PARTNERS = "myPartners",
}

export const DefaultApplicationIcon = bundleIcon(BoxFilled, BoxRegular);

export function appLabel(t: TranslationFn, id: string): string {
  if (isMySystemsAppId(id)) {
    return t(defaultMySystemsAppData[id].labelKey);
  }
  return id;
}

export function appIcon(id: string, filled = false): JSX.Element {
  if (isMySystemsAppId(id)) {
    return filled
      ? defaultMySystemsAppData[id].filledIcon
      : defaultMySystemsAppData[id].icon;
  }
  return <DefaultApplicationIcon filled={filled} />;
}

export const ApplicationAreaFlaworedIcon = ({
  applicationArea,
  icon,
}: {
  applicationArea?: ApplicationArea;
  icon: JSX.Element;
}) => {
  const styles = useApplicationStyles();

  const applicationAreaStyle = mergeClasses(
    styles.applicationIconBase,
    styles.filledIcon,
    applicationArea === appAreas.MY_SYSTEMS && styles.mySystemsMenuRectangle,
    applicationArea === appAreas.MY_AXIS && styles.myAxisMenuRectangle,
    applicationArea === appAreas.MY_BUSINESS && styles.myBusinessMenuRectangle,
    applicationArea === appAreas.MY_PARTNERS && styles.myPartnersMenuRectangle
  );

  return <div className={applicationAreaStyle}>{icon}</div>;
};

export const ApplicationAreaIcon = ({
  applicationArea,
}: {
  applicationArea?: ApplicationArea;
}) => {
  const styles = useApplicationStyles();

  const applicationAreaStyle = mergeClasses(
    styles.myApplicationAreaBase,
    applicationArea === appAreas.MY_SYSTEMS && styles.mySystemsMenuRectangle,
    applicationArea === appAreas.MY_AXIS && styles.myAxisMenuRectangle,
    applicationArea === appAreas.MY_BUSINESS && styles.myBusinessMenuRectangle,
    applicationArea === appAreas.MY_PARTNERS && styles.myPartnersMenuRectangle
  );

  const applicationAreaIcon = (applicationArea?: ApplicationArea) => {
    switch (applicationArea) {
      case appAreas.MY_AXIS:
        return <HomeMore20Filled />;
      case appAreas.MY_BUSINESS:
        return <DataBarVertical20Filled />;
      case appAreas.MY_PARTNERS:
        return <Circle20Filled />;
      case appAreas.MY_SYSTEMS:
        return <MySystems24Filled />;
    }
    return <DefaultApplicationIcon />;
  };

  return (
    <div className={applicationAreaStyle}>
      {applicationAreaIcon(applicationArea)}
    </div>
  );
};

export const applicationAreaLabel = (
  t: TranslationFn,
  applicationArea?: ApplicationArea
) => {
  return applicationArea ? t(applicationArea) : "";
};

export const findCurrent = (
  applicationId: string,
  content?: ApplicationDrawerContent[]
): SingleApplicationDrawerContent | undefined => {
  if (!content) {
    return undefined;
  }

  let currentApplication: SingleApplicationDrawerContent | undefined =
    undefined;

  content.forEach((c) => {
    if (c.id === applicationId) {
      currentApplication = c;
    }
    return c.children?.forEach((child) => {
      if (child.id === applicationId) {
        currentApplication = child;
      }
    });
  });

  return currentApplication;
};
