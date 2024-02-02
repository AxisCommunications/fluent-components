import { ArrowRightRegular, Dismiss20Regular } from "@fluentui/react-icons";
import React, { Fragment, useState } from "react";

import { ApplicationArea } from "./top-bar.types";
import { useTranslation } from "./translation-context";
import {
  Body1,
  Body1Strong,
  Button,
  Caption1Stronger,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Link,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { useApplicationDrawrStyles as useApplicationDrawerStyles } from "./application-drawer.styles";
import {
  ApplicationAreaFlaworedIcon,
  ApplicationAreaIcon,
  applicationAreaLabel,
} from "./application-utils";
import {
  ApplicationDrawerContent,
  ApplicationDrawerProps,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import { useApplicationStyles } from "./application.styles";

const CurrentApplication = ({ application }: {
  application: SingleApplicationDrawerContent;
}): JSX.Element => {
  const styles = useApplicationDrawerStyles();

  return (
    <div className={styles.iconAndText}>
      <div
        className={styles.currentSpplicationGroupTitleIcon}
      >
        {application.icon}
      </div>
      <Body1Strong className={styles.currentApplicationGroupTitleText}>
        {application.label}
      </Body1Strong>
    </div>
  );
};

const ApplicationGroupTitle = ({ application }: {
  application: ApplicationDrawerContent;
}): JSX.Element => {
  const styles = useApplicationDrawerStyles();
  const appStyles = useApplicationStyles();

  return (
    <div className={styles.iconAndText}>
      <div
        className={mergeClasses(
          styles.applicationGroupTitleIcon,
          appStyles.filledIcon
        )}
      >
        {application.icon}
      </div>
      <Caption1Stronger className={styles.applicationGroupTitleText}>
        {application.label.toLocaleUpperCase()}
      </Caption1Stronger>
    </div>
  );
};

const findCurrent = (
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

const iconConverter = (
  icon: JSX.Element,
  isCurrent: boolean,
  applicationArea: ApplicationArea
) => {
  return isCurrent
    ? (
      <ApplicationAreaFlaworedIcon
        applicationArea={applicationArea}
        icon={icon}
      />
    )
    : (
      icon
    );
};

const SingleApplication = ({
  application,
  currentSelectionId,
  onChange,
  applicationArea,
}: {
  application: SingleApplicationDrawerContent;
  currentSelectionId: string;
  onChange: (id: string) => void;
  applicationArea: ApplicationArea;
}): JSX.Element => {
  const styles = useApplicationDrawerStyles();
  const buttonStyle = mergeClasses(
    styles.contentButton,
    application.id === currentSelectionId && styles.selectedContentButton
  );

  return (
    <Button
      data-testid={`application-drawer-item-${application.id}`}
      className={buttonStyle}
      appearance="subtle"
      icon={iconConverter(
        application.icon,
        application.id === currentSelectionId,
        applicationArea
      )}
      onClick={() => onChange(application.id)}
    >
      <Body1 className={styles.applicationButton}>
        {application.label}
      </Body1>
    </Button>
  );
};

const ApplicationWithChildren = ({
  application,
  currentSelectionId,
  onChange,
  applicationArea,
}: {
  application: ApplicationDrawerContent;
  currentSelectionId: string;
  onChange: (id: string) => void;
  applicationArea: ApplicationArea;
}): JSX.Element => {
  const styles = useApplicationDrawerStyles();

  return (
    <>
      <ApplicationGroupTitle application={application} />
      <div className={styles.contentChildren}>
        {application.children?.map((child) => {
          return (
            <SingleApplication
              key={child.id}
              application={child}
              applicationArea={applicationArea}
              currentSelectionId={currentSelectionId}
              onChange={onChange}
            />
          );
        })}
      </div>
    </>
  );
};

export const ApplicationDrawer = ({
  link,
  title,
  applicationId,
  content,
  onChange,
  applicationArea,
}: ApplicationDrawerProps & { applicationArea: ApplicationArea }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const styles = useApplicationDrawerStyles();
  const currentSelection = findCurrent(applicationId, content);

  const onClickItem = (id: string) => {
    if (id === currentSelection?.id) {
      setIsOpen(false);
    } else {
      onChange(id);
    }
  };

  return (
    <>
      <Button
        data-testid="application-drawer-trigger"
        appearance="subtle"
        onClick={() => setIsOpen(true)}
      >
        {<ApplicationAreaIcon applicationArea={applicationArea} />}
        <Divider vertical style={{ padding: "0 0 0 12px" }}></Divider>
        {currentSelection
          ? <CurrentApplication application={currentSelection} />
          : null}
      </Button>
      <Drawer open={isOpen} onOpenChange={(_, { open }) => setIsOpen(open)}>
        <DrawerHeader className={styles.header}>
          <div className={styles.headerTitle}>
            <ApplicationAreaIcon applicationArea={applicationArea} />
            <Body1Strong>
              {applicationAreaLabel(t, applicationArea)}
            </Body1Strong>
          </div>
          <Button
            data-testid={"application-drawer-dismiss"}
            size="small"
            appearance="subtle"
            aria-label="Close"
            icon={<Dismiss20Regular color={tokens.colorNeutralForeground3} />}
            onClick={() => setIsOpen(false)}
          />
        </DrawerHeader>

        <DrawerBody>
          {link && (
            <div className={styles.linkWrapper}>
              <Link
                data-testid={"application-drawer-link"}
                className={styles.link}
                href={link.url}
              >
                {link.text}
                <ArrowRightRegular />
              </Link>
            </div>
          )}
          <div className={styles.content}>
            {title}
            <Divider></Divider>
            {content?.map((c) => {
              return (
                <Fragment key={c.id}>
                  {c.children
                    ? (
                      <ApplicationWithChildren
                        application={c}
                        currentSelectionId={currentSelection?.id ?? ""}
                        onChange={onClickItem}
                        applicationArea={applicationArea ?? ""}
                      />
                    )
                    : (
                      <SingleApplication
                        application={c}
                        currentSelectionId={currentSelection?.id ?? ""}
                        onChange={onClickItem}
                        applicationArea={applicationArea}
                      />
                    )}
                  <Divider></Divider>
                </Fragment>
              );
            })}
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
};
