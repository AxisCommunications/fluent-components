import React, { useState } from "react";
import {
  ApplicationDrawerContent,
  ApplicationDrawerProps,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import { ApplicationArea } from "./top-bar.types";
import {
  Body1,
  Body1Strong,
  Button,
  Caption1Stronger,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Link,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { useApplicationDrawerV2Styles } from "./application-drawer-v2.styles";
import {
  ArrowRightRegular,
  bundleIcon,
  Dismiss20Regular,
  DividerShortRegular,
  DividerTall16Filled,
  DividerTallFilled,
  GridDots20Filled,
  GridDots20Regular,
} from "@fluentui/react-icons";
import { findCurrent } from "./application-utils";
import { useApplicationDrawerStyles } from "./application-drawer-v1.styles";

const GridDots20 = bundleIcon(GridDots20Filled, GridDots20Regular);

const DrawerTrigger = ({ setIsOpen, currentSelection }: {
  setIsOpen: (isOpen: boolean) => void;
  currentSelection: SingleApplicationDrawerContent | undefined;
}) => {
  const styles = useApplicationDrawerV2Styles();
  return (
    <div className={styles.drawerTriggerRoot}>
      <Button
        appearance="subtle"
        icon={<GridDots20 />}
        onClick={() => setIsOpen(true)}
      />
      <div className={styles.drawerTriggerGap}></div>
      {currentSelection === undefined
        ? null
        : (
          <>
            {currentSelection?.triggerGroupShortName
              ? (
                <>
                  <Body1Strong>
                    {currentSelection?.triggerGroupShortName}
                  </Body1Strong>
                  <DividerTall16Filled />
                </>
              )
              : null}

            {currentSelection.icon}
            <Body1Strong className={styles.drawerTriggerLabel}>
              {currentSelection.label}
            </Body1Strong>
          </>
        )}
    </div>
  );
};

const ApplicationGroupTitle = ({ application }: {
  application: ApplicationDrawerContent;
}): JSX.Element => {
  const styles = useApplicationDrawerV2Styles();
  return (
    <Caption1Stronger className={styles.applicationGroupTitleText}>
      {application.label.toLocaleUpperCase()}
    </Caption1Stronger>
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
  const styles = useApplicationDrawerV2Styles();

  return (
    <Button
      data-testid={`application-drawer-item-${application.id}`}
      as="a"
      href={application.link ?? undefined}
      icon={application.icon}
      appearance="subtle"
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation
        onChange(application.id);
      }}
    >
      {application.label}
    </Button>
    // <Button
    //   data-testid={`application-drawer-item-${application.id}`}
    //   className={mergeClasses(
    //     styles.contentButton,
    //     application.id === currentSelectionId && styles.contentButtonChecked
    //   )}
    //   appearance="subtle"
    //   icon={application.icon}
    //   onClick={() => onChange(application.id)}
    // >
    //   <Body1 className={styles.applicationButton}>
    //     {application.label}
    //   </Body1>
    // </Button>
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
  const styles = useApplicationDrawerV2Styles();

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

export const ApplicationDrawerV2 = (
  {
    link,
    title,
    applicationId,
    content,
    onChange,
    applicationArea,
  }: ApplicationDrawerProps & { applicationArea: ApplicationArea }
) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useApplicationDrawerV2Styles();
  const currentSelection = findCurrent(applicationId, content);

  const onClickItem = (id: string) => {
    if (id !== currentSelection?.id) {
      onChange(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      <DrawerTrigger
        setIsOpen={setIsOpen}
        currentSelection={currentSelection}
      />

      <Drawer
        className={styles.drawer}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader className={styles.header}>
          <GridDots20Regular color={tokens.colorNeutralForegroundDisabled} />
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
            <div className={styles.title}>{title}</div>
            <Divider />
            {content?.map((c) => {
              return (
                <div key={c.id}>
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
