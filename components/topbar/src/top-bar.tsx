import { Divider, mergeClasses } from "@fluentui/react-components";
import React, { ForwardedRef, forwardRef } from "react";
import { ApplicationMenu } from "./application-menu";
import { OrganizationMenu } from "./organization-menu";
import { ProfileMenu } from "./profile-menu";
import { topBarClassNames, useTopBarStyles } from "./top-bar.styles";
import { TopBarProps } from "./top-bar.types";
import { TranslationProvider } from "./translation-provider";

export const TopBar = forwardRef(
  (props: TopBarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { appMenu, orgMenu, profileMenu, customContent } = props;
    const styles = useTopBarStyles();

    const rootStyle = mergeClasses(topBarClassNames.root, styles.root);
    const leftSectionStyle = mergeClasses(
      topBarClassNames.left,
      styles.section
    );
    const rightSectionStyle = mergeClasses(
      topBarClassNames.right,
      styles.section
    );

    const language = profileMenu?.language;
    const locale = language?.options?.find(({ id }) => id === language.value)
      ?.id;

    return (
      <TranslationProvider locale={locale}>
        <div className={rootStyle} ref={ref}>
          <div className={leftSectionStyle}>
            {appMenu !== undefined && <ApplicationMenu {...appMenu} />}
          </div>
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
