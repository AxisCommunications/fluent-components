import React, { useState } from "react";
import { ApplicationDrawerProps } from "./application-drawer.types";
import { ApplicationArea } from "./top-bar.types";
import {
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
  Dismiss20Regular,
  GridDots20Regular,
} from "@fluentui/react-icons";

const DrawerTrigger = ({ setIsOpen }: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return <Button onClick={() => setIsOpen(true)}>TRIGGER</Button>;
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

  return (
    <>
      <DrawerTrigger setIsOpen={setIsOpen} />

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
                  {c.label}
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
