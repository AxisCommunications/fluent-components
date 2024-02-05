import { ApplicationDrawerProps } from "./application-drawer.types";
import { ApplicationMenuProps } from "./application-menu.types";
import { OrganizationMenuProps } from "./organization-menu.types";
import { ProfileMenuProps } from "./profile-menu.types";

export type ApplicationArea =
  | "mySystems"
  | "myAxis"
  | "myBusiness"
  | "myPartners";

export type TopBarProps = {
  /**
   * Dropdown menu to show applications.
   * If appDrawer is set it will override the appMenu.
   */
  readonly appMenu?: ApplicationMenuProps;
  /**
   * Left side drawer to show applications.
   */
  readonly appDrawer?: ApplicationDrawerProps;
  readonly children?: ReadonlyArray<never>;
  readonly customContent?: JSX.Element;
  readonly leftCustomContent?: JSX.Element;
  readonly orgMenu?: OrganizationMenuProps;
  readonly profileMenu?: ProfileMenuProps;
  readonly applicationArea?: ApplicationArea;
  readonly centerCustomContent?: JSX.Element;
};
