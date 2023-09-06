import { ApplicationMenuProps } from "./application-menu.types";
import { OrganizationMenuProps } from "./organization-menu.types";
import { ProfileMenuProps } from "./profile-menu.types";

export type TopBarProps = {
  readonly appMenu?: ApplicationMenuProps;
  readonly children?: ReadonlyArray<never>;
  readonly customContent?: JSX.Element;
  readonly orgMenu?: OrganizationMenuProps;
  readonly profileMenu?: ProfileMenuProps;
};
