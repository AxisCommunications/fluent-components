import { Divider, mergeClasses } from "@fluentui/react-components";
import { ForwardedRef, forwardRef } from "react";
import { ApplicationDrawer } from "./application-drawer";
import { ApplicationMenu } from "./application-menu";
import { OrganizationMenu } from "./organization-menu";
import { ProfileMenu } from "./profile-menu";
import { topBarClassNames, useTopBarStyles } from "./top-bar.styles";
import { TopBarProps } from "./top-bar.types";
import { TranslationProvider } from "./translation-provider";

export const TopBar = forwardRef(
  (props: TopBarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      appMenu,
      appDrawer,
      orgMenu,
      profileMenu,
      customContent,
      leftCustomContent,
      applicationArea,
      centerCustomContent,
    } = props;
    const styles = useTopBarStyles();

    const rootStyle = mergeClasses(topBarClassNames.root, styles.root);
    const leftSectionStyle = mergeClasses(
      topBarClassNames.left,
      styles.section,
      styles.leftSection
    );
    const centerSectionStyle = mergeClasses(
      topBarClassNames.center,
      styles.section,
      styles.centerSection
    );
    const rightSectionStyle = mergeClasses(
      topBarClassNames.right,
      styles.section,
      styles.rightSection
    );

    const language = profileMenu?.language;
    const locale = language?.options?.find(
      ({ id }) => id === language.value
    )?.id;

    const ApplicationSelector = () => {
      if (appDrawer) {
        return (
          <ApplicationDrawer
            {...appDrawer}
            applicationArea={applicationArea ?? "mySystems"}
          />
        );
      } else if (appMenu !== undefined) {
        return (
          <ApplicationMenu {...appMenu} applicationArea={applicationArea} />
        );
      }
      return undefined;
    };

    return (
      <TranslationProvider locale={locale}>
        <div className={rootStyle} ref={ref}>
          <div className={leftSectionStyle}>
            {ApplicationSelector() !== undefined && ApplicationSelector()}
            {leftCustomContent !== undefined && (
              <>
                {ApplicationSelector() !== undefined && (
                  <Divider vertical style={{ padding: "0 4px" }} />
                )}
                {leftCustomContent}
              </>
            )}
          </div>
          {centerCustomContent && (
            <div className={centerSectionStyle}>{centerCustomContent}</div>
          )}
          <div className={rightSectionStyle}>
            {orgMenu !== undefined && <OrganizationMenu {...orgMenu} />}
            {customContent !== undefined && (
              <>
                <Divider vertical style={{ padding: "0 4px" }} />
                {customContent}
              </>
            )}
            {profileMenu !== undefined && (
              <>
                <Divider vertical style={{ padding: "0 4px" }} />
                <ProfileMenu {...profileMenu} />
              </>
            )}
          </div>
        </div>
      </TranslationProvider>
    );
  }
);

TopBar.displayName = "TopBar";
