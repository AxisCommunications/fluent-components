import {
  Badge,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
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

export const ApplicationMenu = (
  { options, value, onChange }: ApplicationMenuProps
) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const currentSelection = options?.find(({ id }) => id === value);
  const isStandalone = options?.length === 1;

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
            ? (currentSelection.icon ?? appIcon(currentSelection.id))
            : undefined}
          data-testid="application-menu-trigger"
          menuIcon={isStandalone ? null : undefined}
        >
          <span className={styles.applicationLabel}>
            {currentSelection
              ? (currentSelection.label ?? appLabel(t, currentSelection.id))
              // FIXME: use translateable placeholder
              : ""}
          </span>
        </MenuButton>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {options?.map(({ id, icon, label, beta }) => (
            <MenuItem
              data-testid={`application-menu-item-${id}`}
              disabled={id === value}
              icon={icon ?? appIcon(id)}
              key={id}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => {
                if (currentSelection?.id !== id) {
                  onChange?.(id);
                }
              }}
            >
              {label ?? appLabel(t, id)}
              {beta && <BetaBadge disabled={id === value} />}
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
