import {
  Menu,
  MenuItem,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuSplitGroup,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  bundleIcon,
  LocalLanguageFilled,
  LocalLanguageRegular,
} from "@fluentui/react-icons";
import React from "react";
import { LanguageSubmenuProps } from "./profile-menu.types";
import { useTranslation } from "./translation-context";
import { useProfileLanguageSubmenuStyles } from "./profile-language-submenu.styles";

const LanguageIcon = bundleIcon(LocalLanguageFilled, LocalLanguageRegular);

export const LanguageSubmenu = (
  { options, value, onChange }: LanguageSubmenuProps
) => {
  const selection = options?.find(({ id }) => id === value);
  const { tLocale } = useTranslation();
  const styles = useProfileLanguageSubmenuStyles();

  return (
    <Menu
      hasCheckmarks={true}
      checkedValues={{ language: value ? [value] : [] }}
    >
      <MenuSplitGroup>
        <MenuTrigger>
          <MenuItem icon={<LanguageIcon />} data-testid="language-menu-trigger">
            {selection?.label ?? tLocale(selection?.id)}
          </MenuItem>
        </MenuTrigger>
      </MenuSplitGroup>
      <MenuPopover>
        <div className={styles.languageSelection}>
          <MenuList>
            {options?.map(({ id, label }) => (
              <MenuItemRadio
                name={"language"}
                data-testid={`language-menu-item-${id}`}
                key={id}
                value={id}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => onChange(id)}
              >
                {label ?? tLocale(id)}
              </MenuItemRadio>
            ))}
          </MenuList>
        </div>
      </MenuPopover>
    </Menu>
  );
};
