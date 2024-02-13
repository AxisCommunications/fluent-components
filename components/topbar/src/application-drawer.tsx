import { ArrowRightRegular, Dismiss20Regular } from "@fluentui/react-icons";
import React, { useState } from "react";
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
  ToggleButton,
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

const DrawerTrigger = (
  { setIsOpen, applicationArea, currentSelection }: {
    setIsOpen: (isOpen: boolean) => void;
    applicationArea: ApplicationArea;
    currentSelection: SingleApplicationDrawerContent | undefined;
  }
) => {
  const styles = useApplicationDrawerStyles();
  const [hover, setHover] = useState(false);

  return (
    <Button
      className={styles.drawerTriggerButton}
      data-testid="application-drawer-trigger"
      appearance="subtle"
      onClick={() => setIsOpen(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {<ApplicationAreaIcon applicationArea={applicationArea} />}
      <Divider vertical style={{ padding: "0 0 0 12px" }}></Divider>
      {currentSelection
        ? (
          <div className={styles.drawerTriggerApplication}>
            <div
              className={mergeClasses(
                styles.drawerTriggerApplicationIcon,
                hover && styles.drawerTriggerApplicationIconHovered
              )}
            >
              {currentSelection.icon}
            </div>
            <Body1Strong
              className={styles.drawerTriggerApplicationText}
            >
              {currentSelection.label}
            </Body1Strong>
          </div>
        )
        : null}
    </Button>
  );
};

const ApplicationGroupTitle = ({ application }: {
  application: ApplicationDrawerContent;
}): JSX.Element => {
  const styles = useApplicationDrawerStyles();
  const appStyles = useApplicationStyles();

  return (
    <div className={styles.applicationGroupTitle}>
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

  return (
    <ToggleButton
      checked={application.id === currentSelectionId}
      data-testid={`application-drawer-item-${application.id}`}
      className={styles.contentButton}
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
    </ToggleButton>
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
      <DrawerTrigger
        applicationArea={applicationArea}
        currentSelection={currentSelection}
        setIsOpen={setIsOpen}
      />

      <Drawer
        className={styles.drawer}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
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

        <DrawerBody className={styles.body}>
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
            <Divider />
            {content?.map((c) => {
              return (
                <div className={styles.contentGroup} key={c.id}>
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
                  <Divider className={styles.contentDivider} />
                </div>
              );
            })}
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
};
