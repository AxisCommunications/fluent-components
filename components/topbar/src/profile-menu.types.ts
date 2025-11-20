import { ReactElement } from "react";

export type LanguageOption = {
  readonly id: string;
  readonly label?: string;
};

export type LanguageSubmenuProps = {
  readonly onChange: (id: string) => void;
  readonly options?: LanguageOption[];
  readonly value: string;
};

export type ThemeOption = {
  readonly id: string;
  readonly label?: string;
};

export type ThemeSubmenuProps = {
  readonly onChange: (id: string) => void;
  readonly options?: ThemeOption[];
  readonly value: string;
};

export type UserInformationProps = {
  readonly name: string;
  readonly email: string;
  // Optional third tagline (for extra information)
  readonly tag?: string;
  // Optional custom initials for avatar
  readonly initials?: string;
};

export type ProfileMenuProps = UserInformationProps & {
  readonly customContent?: ReactElement;
  readonly showCustomContentTopDivider?: boolean;
  readonly hasNotification?: boolean;
  readonly notificationIcon?: ReactElement;
  readonly language: LanguageSubmenuProps;
  readonly onSignOut: () => void;
  readonly signOutLabel?: string;
  readonly theme: ThemeSubmenuProps;
};
