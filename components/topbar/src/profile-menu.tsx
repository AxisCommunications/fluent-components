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
  CircleFilled,
  CircleRegular,
  SignOutFilled,
  SignOutRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import { useCallback } from "react";
import { LanguageSubmenu } from "./profile-language-submenu";
import { ProfileMenuProps } from "./profile-menu.types";
import { ThemeSubmenu } from "./profile-theme-submenu";
import { UserInformation } from "./profile-user-information";
import { useTranslation } from "./translation-context";

const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);
const NotificationIcon = bundleIcon(CircleRegular, CircleFilled);

export const ProfileMenu = ({
  customContent,
  showCustomContentTopDivider = true,
  language,
  name,
  email,
  initials,
  onSignOut,
  signOutLabel,
  tag,
  theme,
  hasNotification = false,
  notificationIcon,
}: ProfileMenuProps) => {
  const handleSignOut = useCallback(() => onSignOut(), [onSignOut]);
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton
          data-testid="profile-menu-button"
          icon={
            <Avatar
              color="mink"
              name={name}
              initials={initials}
              size={24}
              badge={
                hasNotification
                  ? {
                      icon:
                        notificationIcon !== undefined ? (
                          notificationIcon
                        ) : (
                          <NotificationIcon />
                        ),
                      /*
                    Since this is not a Badge but a PresenceBadge, we only
                    have the option to change the color through "status".
                    "away" gives us the orange color that we want.
                    Can be overriden by user by setting color on the notificationIcon property
                  */
                      status: "away",
                      size: "extra-small",
                    }
                  : undefined
              }
            />
          }
          shape="circular"
          appearance="transparent"
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <UserInformation
            name={name}
            email={email}
            initials={initials}
            tag={tag}
          />
          {(customContent === undefined || showCustomContentTopDivider) && (
            <MenuDivider />
          )}
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
