import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
} from "@fluentui/react-components";
import {
  BuildingMultipleFilled,
  BuildingMultipleRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import React from "react";
import { OrganizationMenuProps } from "./organization-menu.types";
import { useStyles } from "./organization.styles";

const OrganizationIcon = bundleIcon(
  BuildingMultipleFilled,
  BuildingMultipleRegular
);

export const OrganizationMenu = (
  { customContent, onChange, options, value }: OrganizationMenuProps
) => {
  const styles = useStyles();

  const currentOrganization = options?.find(({ id }) => id === value);
  const checkedValues = { org: [value] };
  const noDropDownContent = options?.length === 1 && !customContent
    && currentOrganization;

  return (
    <Menu checkedValues={checkedValues}>
      <MenuTrigger>
        <MenuButton
          appearance="subtle"
          className={mergeClasses(
            noDropDownContent && styles.standalone,
            styles.singleLine
          )}
          data-testid="organization-menu-button"
          icon={<OrganizationIcon />}
          menuIcon={noDropDownContent ? null : undefined}
        >
          <span className={styles.organizationlabel}>
            {currentOrganization?.label ?? value}
          </span>
        </MenuButton>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <div className={styles.organizationSelection}>
            {options?.map(({ id, label }) => {
              return (
                <MenuItemRadio
                  data-testid={`organization-menu-item-${id}`}
                  key={id}
                  name="org"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => onChange(id)}
                  value={id}
                >
                  {label}
                </MenuItemRadio>
              );
            })}
          </div>
          {customContent !== undefined && (
            <>
              <MenuDivider />
              {customContent}
            </>
          )}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

OrganizationMenu.displayName = "OrganizationMenu";
