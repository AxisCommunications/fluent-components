import {
  Badge,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  Text,
} from "@fluentui/react-components";
import React from "react";
import { ApplicationMenuProps } from "./application-menu.types";
import { useApplicationStyles } from "./application.styles";
import { useTranslation } from "./translation-context";
import { ApplicationArea } from "./top-bar.types";
import { appIcon, appLabel } from "./application-utils";

export const ApplicationMenu = ({
  customContent,
  options,
  value,
  onChange,
  applicationArea,
}: ApplicationMenuProps & { applicationArea?: ApplicationArea }) => {
  const { t } = useTranslation();
  const styles = useApplicationStyles();

  const currentSelection = options?.find(({ id }) => id === value);
  const isStandalone = options?.length === 1;

  const onlyCustomContent = !options?.length && !!customContent;

  return (
    <>
      <div
        className={mergeClasses(
          styles.menuRectangle,
          applicationArea === "mySystems" && styles.mySystemsMenuRectangle,
          applicationArea === "myAxis" && styles.myAxisMenuRectangle,
          applicationArea === "myBusiness" && styles.myBusinessMenuRectangle,
          applicationArea === "myPartners" && styles.myPartnersMenuRectangle
        )}
      >
        <div
          className={mergeClasses(
            styles.currentIcon,
            applicationArea !== undefined && styles.applicationAreaIcon
          )}
        >
          {currentSelection
            ? currentSelection.icon
              ?? appIcon(currentSelection.id, applicationArea !== undefined)
            : undefined}
        </div>
      </div>
      <Menu
        positioning={{
          offset: applicationArea !== undefined
            ? { mainAxis: 2, crossAxis: 36 }
            : undefined,
        }}
      >
        <MenuTrigger>
          <MenuButton
            appearance="subtle"
            className={mergeClasses(
              isStandalone && styles.standalone,
              styles.singleLine
            )}
            data-testid="application-menu-trigger"
            menuIcon={isStandalone ? null : undefined}
          >
            <span className={styles.applicationLabel}>
              {currentSelection
                ? currentSelection.label ?? appLabel(t, currentSelection.id)
                // FIXME: use translateable placeholder
                : ""}
              {currentSelection?.beta && <BetaBadge />}
            </span>
          </MenuButton>
        </MenuTrigger>
        <MenuPopover className={styles.menuPopover}>
          <MenuList>
            {customContent !== undefined && (
              <>
                {customContent}
                {!onlyCustomContent && <MenuDivider />}
              </>
            )}
            {options?.map(({ id, icon, label, beta }) => (
              <MenuItem
                data-testid={`application-menu-item-${id}`}
                icon={
                  <div
                    className={mergeClasses(id === value && styles.selectedApp)}
                  >
                    {icon ?? appIcon(id)}
                  </div>
                }
                key={id}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => {
                  if (currentSelection?.id !== id) {
                    onChange?.(id);
                  }
                }}
              >
                <Text
                  className={mergeClasses(
                    id === value && styles.selectedAppLabel
                  )}
                >
                  {label ?? appLabel(t, id)}
                </Text>
                {beta && <BetaBadge />}
              </MenuItem>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

function BetaBadge({ disabled }: { disabled?: boolean }) {
  const styles = useApplicationStyles();
  const { t } = useTranslation();

  return (
    <Badge
      appearance="outline"
      color="success"
      shape="rounded"
      className={mergeClasses(styles.beta, disabled && styles.disabled)}
    >
      {t("beta")}
    </Badge>
  );
}

ApplicationMenu.displayName = "ApplicationMenu";
