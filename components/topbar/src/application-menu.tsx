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
import { BoxFilled, BoxRegular, bundleIcon } from "@fluentui/react-icons";
import React from "react";
import { ApplicationMenuProps } from "./application-menu.types";
import { useStyles } from "./application.styles";
import { defaultMySystemsAppData, isMySystemsAppId } from "./applications";
import { TranslationFn, useTranslation } from "./translation-context";

const ApplicationIcon = bundleIcon(BoxFilled, BoxRegular);

function appLabel(t: TranslationFn, id: string): string {
  if (isMySystemsAppId(id)) {
    return t(defaultMySystemsAppData[id].labelKey);
  }
  return id;
}

function appIcon(id: string): JSX.Element {
  if (isMySystemsAppId(id)) {
    return defaultMySystemsAppData[id].icon;
  }
  return <ApplicationIcon />;
}

export const ApplicationMenu = ({
  customContent,
  options,
  value,
  onChange,
}: ApplicationMenuProps) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const currentSelection = options?.find(({ id }) => id === value);
  const isStandalone = options?.length === 1;

  const onlyCustomContent = !options?.length && !!customContent;

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton
          appearance="subtle"
          className={mergeClasses(
            isStandalone && styles.standalone,
            styles.singleLine
          )}
          icon={currentSelection
            ? currentSelection.icon ?? appIcon(currentSelection.id)
            : undefined}
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
      <MenuPopover>
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
  );
};

function BetaBadge({ disabled }: { disabled?: boolean }) {
  const styles = useStyles();
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
