import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  bundleIcon,
  SignOutFilled,
  SignOutRegular,
} from "@fluentui/react-icons";
import React, { useCallback } from "react";
import { LanguageSubmenu } from "./profile-language-submenu";
import { ProfileMenuProps } from "./profile-menu.types";
import { ThemeSubmenu } from "./profile-theme-submenu";
import { useTranslation } from "./translation-context";
import { UserInformation } from "./profile-user-information";

const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);

export const ProfileMenu = ({
  customContent,
  language,
  name,
  email,
  onSignOut,
  signOutLabel,
  tag,
  theme,
}: ProfileMenuProps) => {
  const handleSignOut = useCallback(() => onSignOut(), [onSignOut]);
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton
          data-testid="profile-menu-button"
          icon={<Avatar name={name} size={24} />}
          shape="circular"
          appearance="transparent"
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <UserInformation name={name} email={email} tag={tag} />
          <MenuDivider />
          {customContent !== undefined && (
            <>
              {customContent}
              <MenuDivider />
            </>
          )}
          <ThemeSubmenu {...theme} />
          <LanguageSubmenu {...language} />
          <MenuDivider />
          <MenuItem
            onClick={handleSignOut}
            icon={<SignOutIcon />}
            data-testid="profile-menu-logout"
          >
            {signOutLabel ?? t("logout")}
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

ProfileMenu.displayName = "ProfileMenu";
