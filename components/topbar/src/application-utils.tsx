import {
  ArrowWrap20Filled,
  BoxFilled,
  BoxRegular,
  bundleIcon,
  CatchUp20Filled,
  Search20Filled,
} from "@fluentui/react-icons";
import { defaultMySystemsAppData, isMySystemsAppId } from "./applications";
import { TranslationFn } from "./translation-context";
import React from "react";
import { ApplicationArea } from "./top-bar.types";
import { useApplicationStyles } from "./application.styles";
import { mergeClasses } from "@fluentui/react-components";
import { MySystems24Filled } from "@axiscommunications/fluent-icons";

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
    applicationArea === appAreas.MY_SYSTEMS
      && styles.mySystemsMenuRectangle,
    applicationArea === appAreas.MY_AXIS && styles.myAxisMenuRectangle,
    applicationArea === appAreas.MY_BUSINESS
      && styles.myBusinessMenuRectangle,
    applicationArea === appAreas.MY_PARTNERS
      && styles.myPartnersMenuRectangle
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
    applicationArea === appAreas.MY_SYSTEMS
      && styles.mySystemsMenuRectangle,
    applicationArea === appAreas.MY_AXIS && styles.myAxisMenuRectangle,
    applicationArea === appAreas.MY_BUSINESS
      && styles.myBusinessMenuRectangle,
    applicationArea === appAreas.MY_PARTNERS
      && styles.myPartnersMenuRectangle
  );

  const applicationAreaIcon = (applicationArea?: ApplicationArea) => {
    switch (applicationArea) {
      case appAreas.MY_AXIS:
        return <CatchUp20Filled />;
      case appAreas.MY_BUSINESS:
        return <Search20Filled />;
      case appAreas.MY_PARTNERS:
        return <ArrowWrap20Filled />;
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
