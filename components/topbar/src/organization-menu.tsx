import {
  InputOnChangeData,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  SearchBox,
  SearchBoxChangeEvent,
} from "@fluentui/react-components";

import {
  BuildingMultipleFilled,
  BuildingMultipleRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import React, { useCallback, useRef, useState } from "react";
import { OrganizationMenuProps } from "./organization-menu.types";
import { useStyles } from "./organization.styles";

const OrganizationIcon = bundleIcon(
  BuildingMultipleFilled,
  BuildingMultipleRegular
);

export const OrganizationMenu = ({
  customContent,
  onChange,
  options,
  value,
  filter,
}: OrganizationMenuProps) => {
  const styles = useStyles();

  const [filterText, setFilterText] = useState<string>("");
  const filterRef = useRef<HTMLInputElement>(null);

  const currentOrganization = options?.find(({ id }) => id === value);
  const checkedValues = { org: [value] };
  const noDropDownContent = options?.length === 1 && !customContent
    && currentOrganization;
  const onlyCustomContent = !options?.length && !!customContent;

  const filteredOptions = options
    ?.filter(
      (opt) =>
        filterText.length === 0
        || opt.label.toLowerCase().indexOf(filterText) >= 0
    )
    .sort(
      (a, b) =>
        a.label.toLowerCase().indexOf(filterText)
        - b.label.toLowerCase().indexOf(filterText)
    );

  const onFilterChange = useCallback(
    (_: SearchBoxChangeEvent, data: InputOnChangeData) => {
      if (data.value.length) {
        setFilterText(data.value.toLowerCase());
      } else {
        setFilterText("");
      }
    },
    []
  );

  return (
    <Menu checkedValues={checkedValues} positioning={"below-end"}>
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
          onClick={() => setFilterText("")}
        >
          <span className={styles.organizationlabel}>
            {currentOrganization?.label ?? value}
          </span>
        </MenuButton>
      </MenuTrigger>
      <MenuPopover>
        {filter?.showFilter && (
          <>
            <SearchBox
              placeholder={filter.placeholderText}
              ref={filterRef}
              value={filterText}
              onChange={onFilterChange}
              appearance="filled-lighter"
              className={styles.searchInput}
              // To not get focus in search on open
              tabIndex={-1}
              // To keep focus on search when hovering menu items
              onBlur={() => {
                // Delay focus change one frame since SearchBox won't be able to react properly e.g.
                // hide/show its X-button
                window.requestAnimationFrame(() => {
                  filterRef.current?.focus();
                });
              }}
            />
            <MenuDivider />
          </>
        )}
        <MenuList>
          {!onlyCustomContent && (
            <div className={styles.organizationSelection}>
              {filteredOptions?.map(({ id, label }) => {
                const match = label.toLowerCase().indexOf(filterText);
                return (
                  <MenuItemRadio
                    data-testid={`organization-menu-item-${id}`}
                    key={id}
                    name="org"
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => onChange(id)}
                    value={id}
                  >
                    {
                      <span>
                        {label.substring(0, match)}
                        <span className={styles.bold}>
                          {label.substring(match, match + filterText.length)}
                        </span>
                        {label.substring(match + filterText.length)}
                      </span>
                    }
                  </MenuItemRadio>
                );
              })}
            </div>
          )}
          {customContent !== undefined && (
            <>
              {!onlyCustomContent && <MenuDivider />}
              {customContent}
            </>
          )}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

OrganizationMenu.displayName = "OrganizationMenu";
