import React, { useState } from "react";
import {
  ApplicationDrawerProps,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import { ApplicationArea } from "./top-bar.types";
import {
  Body1Strong,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Link,
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
        <DrawerHeader
          className={styles.header}
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.headerTitle}>
            <GridDots20Regular />
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
                <div key={c.id}>
                  <Button
                    as="a"
                    href={c.link ?? undefined}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      onClickItem(c.id);
                    }}
                  >
                    {c.label}
                  </Button>
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
