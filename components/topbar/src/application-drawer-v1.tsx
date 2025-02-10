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
import { ArrowRightRegular, Dismiss20Regular } from "@fluentui/react-icons";
import React, { useState } from "react";
import { useApplicationDrawerStyles } from "./application-drawer-v1.styles";
import {
  ApplicationDrawerContent,
  ApplicationDrawerProps,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import {
  ApplicationAreaFlaworedIcon,
  ApplicationAreaIcon,
  applicationAreaLabel,
  findCurrent,
} from "./application-utils";
import { useApplicationStyles } from "./application.styles";
import { ApplicationArea } from "./top-bar.types";
import { useTranslation } from "./translation-context";

const DrawerTrigger = ({
  setIsOpen,
  applicationArea,
  currentSelection,
}: {
  setIsOpen: (isOpen: boolean) => void;
  applicationArea: ApplicationArea;
  currentSelection: SingleApplicationDrawerContent | undefined;
}) => {
  const styles = useApplicationDrawerStyles();
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.drawerTriggerRoot}
      data-testid="application-drawer-label"
    >
      <Button
        className={styles.drawerTriggerButton}
        data-testid="application-drawer-trigger"
        appearance="subtle"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {<ApplicationAreaIcon applicationArea={applicationArea} />}
        {currentSelection?.triggerGroupShortName ? (
          <>
            <Body1Strong className={styles.drawerTriggerTextWithGroup}>
              {currentSelection?.triggerGroupShortName}
            </Body1Strong>
            <div className={styles.triggerDividerWithGroup}></div>
          </>
        ) : (
          <Divider vertical style={{ padding: "0 0 0 12px" }}></Divider>
        )}
        {currentSelection ? (
          <div
            className={mergeClasses(
              styles.drawerTriggerApplication,
              currentSelection?.triggerGroupShortName &&
                styles.drawerTriggerApplicationWithGroup
            )}
          >
            <div
              className={mergeClasses(
                styles.drawerTriggerApplicationIcon,
                hover && styles.drawerTriggerApplicationIconHovered
              )}
            >
              {currentSelection.icon}
            </div>
            <Body1Strong className={styles.drawerTriggerApplicationText}>
              {currentSelection.triggerLabel ?? currentSelection.label}
            </Body1Strong>
          </div>
        ) : null}
      </Button>
    </div>
  );
};

const ApplicationGroupTitle = ({
  application,
}: {
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

const iconConverter = (
  icon: JSX.Element,
  isCurrent: boolean,
  applicationArea: ApplicationArea
) => {
  return isCurrent ? (
    <ApplicationAreaFlaworedIcon
      applicationArea={applicationArea}
      icon={icon}
    />
  ) : (
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
    <Button
      data-testid={`application-drawer-item-${application.id}`}
      className={mergeClasses(
        styles.contentButton,
        application.id === currentSelectionId && styles.contentButtonChecked
      )}
      appearance="subtle"
      icon={iconConverter(
        application.icon,
        application.id === currentSelectionId,
        applicationArea
      )}
      onClick={() => onChange(application.id)}
    >
      <Body1 className={styles.applicationButton}>{application.label}</Body1>
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

export const ApplicationDrawerV1 = ({
  link,
  title,
  applicationId,
  content,
  onChange,
  onChangeAndClose,
  applicationArea,
}: ApplicationDrawerProps & { applicationArea: ApplicationArea }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const styles = useApplicationDrawerStyles();
  const currentSelection = findCurrent(applicationId, content);

  const onClickItem = (id: string) => {
    if (id !== currentSelection?.id) {
      if (onChangeAndClose) {
        onChangeAndClose(id);
        setIsOpen(false);
      } else {
        onChange?.(id);
      }
    } else {
      setIsOpen(false);
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
        <DrawerHeader
          className={styles.header}
          onClick={() => setIsOpen(false)}
        >
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
                  {c.children ? (
                    <ApplicationWithChildren
                      application={c}
                      currentSelectionId={currentSelection?.id ?? ""}
                      onChange={onClickItem}
                      applicationArea={applicationArea ?? ""}
                    />
                  ) : (
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
