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
  Tab,
  TabList,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowRightRegular,
  Dismiss20Regular,
  DividerTall16Filled,
  GridDots20Filled,
  GridDots20Regular,
  bundleIcon,
} from "@fluentui/react-icons";
import { ReactElement, useState } from "react";
import { useApplicationDrawerV2Styles } from "./application-drawer-v2.styles";
import {
  ApplicationDrawerContent,
  ApplicationDrawerProps,
  SingleApplicationDrawerContent,
} from "./application-drawer.types";
import { findCurrent } from "./application-utils";
import { ApplicationArea } from "./top-bar.types";

const GridDots20 = bundleIcon(GridDots20Filled, GridDots20Regular);

const DrawerTrigger = ({
  setIsOpen,
  currentSelection,
}: {
  setIsOpen: (isOpen: boolean) => void;
  currentSelection: SingleApplicationDrawerContent | undefined;
}) => {
  const styles = useApplicationDrawerV2Styles();
  return (
    <div
      className={styles.drawerTriggerRoot}
      data-testid="application-drawer-label"
    >
      <Button
        data-testid="application-drawer-trigger"
        appearance="subtle"
        icon={<GridDots20 />}
        onClick={() => setIsOpen(true)}
      />
      <div className={styles.drawerTriggerGap}></div>
      {currentSelection === undefined ? null : (
        <>
          {currentSelection?.triggerGroupShortName ? (
            <>
              <Body1Strong>
                {currentSelection?.triggerGroupShortName}
              </Body1Strong>
              <DividerTall16Filled />
            </>
          ) : null}

          {currentSelection.icon}
          <Body1Strong className={styles.drawerTriggerLabel}>
            {currentSelection.label}
          </Body1Strong>
        </>
      )}
    </div>
  );
};

const ApplicationGroupTitle = ({
  application,
}: {
  application: ApplicationDrawerContent;
}): ReactElement => {
  const styles = useApplicationDrawerV2Styles();
  return (
    <Caption1Stronger block className={styles.applicationGroupTitleText}>
      {application.label.toLocaleUpperCase()}
    </Caption1Stronger>
  );
};

const SingleApplication = ({
  application,
  onChange,
  isSelected,
}: {
  application: SingleApplicationDrawerContent;
  onChange: (id: string) => void;
  isSelected: boolean;
}): ReactElement => {
  const styles = useApplicationDrawerV2Styles();

  const AppIcon = (): ReactElement => {
    return (
      <div className={mergeClasses(isSelected && styles.filledIcon)}>
        {application.icon}
      </div>
    );
  };

  const AppLabel = (): ReactElement => {
    return isSelected ? (
      <Body1Strong>{application.label}</Body1Strong>
    ) : (
      <Body1>{application.label}</Body1>
    );
  };

  return (
    <div className={styles.tabWrap}>
      <Tab value={application.id} className={styles.tab}>
        <Button
          className={mergeClasses(
            styles.contentButton,
            !isSelected && styles.regularIconOnHover
          )}
          data-testid={`application-drawer-item-${application.id}`}
          as="a"
          href={application.link ?? undefined}
          icon={<AppIcon />}
          appearance="transparent"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            onChange(application.id);
          }}
        >
          <AppLabel />
        </Button>
      </Tab>
    </div>
  );
};

const ApplicationWithChildren = ({
  application,
  onChange,
  selectedId,
}: {
  application: ApplicationDrawerContent;
  onChange: (id: string) => void;
  selectedId: string;
}): ReactElement => {
  return (
    <>
      <ApplicationGroupTitle application={application} />
      {application.children?.map((child) => {
        return (
          <SingleApplication
            key={child.id}
            application={child}
            onChange={onChange}
            isSelected={child.id === selectedId}
          />
        );
      })}
    </>
  );
};

export const ApplicationDrawerV2 = ({
  link,
  title,
  applicationId,
  content,
  onChange,
  onChangeAndClose,
}: ApplicationDrawerProps & { applicationArea: ApplicationArea }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useApplicationDrawerV2Styles();
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
        setIsOpen={setIsOpen}
        currentSelection={currentSelection}
      />

      <Drawer
        className={styles.drawer}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader className={styles.header}>
          <Button
            size="small"
            appearance="subtle"
            icon={
              <GridDots20Regular
                color={tokens.colorNeutralForegroundDisabled}
              />
            }
            onClick={() => setIsOpen(false)}
          />
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
            <TabList
              defaultSelectedValue={currentSelection?.id}
              reserveSelectedTabSpace={false}
              vertical
              className={styles.tabList}
              appearance="subtle"
            >
              {content?.map((c) => {
                return (
                  <div key={c.id}>
                    <Divider className={styles.contentDivider} />

                    {c.children ? (
                      <ApplicationWithChildren
                        application={c}
                        onChange={onClickItem}
                        selectedId={currentSelection?.id ?? ""}
                      />
                    ) : (
                      <SingleApplication
                        application={c}
                        onChange={onClickItem}
                        isSelected={c.id === currentSelection?.id}
                      />
                    )}
                  </div>
                );
              })}
            </TabList>
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
};
