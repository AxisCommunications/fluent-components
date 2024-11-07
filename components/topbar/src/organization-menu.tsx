import {
  Body2,
  Button,
  InputOnChangeData,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  Popover,
  PopoverSurface,
  PositioningImperativeRef,
  SearchBox,
  SearchBoxChangeEvent,
  Subtitle1,
} from "@fluentui/react-components";

import {
  BuildingMultipleFilled,
  BuildingMultipleRegular,
  bundleIcon,
  DismissRegular,
} from "@fluentui/react-icons";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
  popoverInfo,
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

  const menuListRef = useRef<HTMLInputElement>(null);
  const orgMenuRef = React.useRef<HTMLDivElement>(null);
  const popoverPositioningRef = React.useRef<PositioningImperativeRef>(null);
  const [showSearch, setShowSearch] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const updateShowSearchStatusOnResize = () => {
    // Only look for overflow if the search input is empty
    if (filterText.length <= 0) {
      updateShowSearchStatus();
    }
  };

  const updateShowSearchStatus = () => {
    if (!menuListRef.current) return;
    if (menuListRef.current.clientHeight < menuListRef.current.scrollHeight) {
      setShowSearch(true);
    } else if (
      menuListRef.current.clientHeight >= menuListRef.current.scrollHeight
    ) {
      setShowSearch(false);
      setFilterText("");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateShowSearchStatusOnResize);
    return () =>
      window.removeEventListener("resize", updateShowSearchStatusOnResize);
  }, [filterText]);

  useLayoutEffect(() => {
    updateShowSearchStatus();
  }, [menuListRef, menuOpen, options]);

  useEffect(() => {
    if (filterText.length === 0) updateShowSearchStatus();
  }, [filterText]);

  const [showMenuTriggerPopover, setShowMenuTriggerPopover] = useState(
    !!popoverInfo
  );

  useEffect(() => {
    setShowMenuTriggerPopover(!!popoverInfo);
  }, [popoverInfo]);

  useEffect(() => {
    if (orgMenuRef.current) {
      popoverPositioningRef.current?.setTarget(orgMenuRef.current);
    }
  }, [orgMenuRef, popoverPositioningRef]);

  return (
    <>
      <Menu
        checkedValues={checkedValues}
        positioning={"below-end"}
        onOpenChange={(_, data) => {
          setMenuOpen(data.open);
        }}
      >
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
            onClick={() => {
              setFilterText("");
              setShowMenuTriggerPopover(false);
            }}
          >
            <span className={styles.organizationlabel}>
              {currentOrganization?.label ?? value}
            </span>
            <div ref={orgMenuRef}></div>
          </MenuButton>
        </MenuTrigger>
        <MenuPopover>
          {filter?.showFilter && showSearch && (
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
              <div ref={menuListRef} className={styles.organizationSelection}>
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
      <Popover
        withArrow
        positioning={{
          positioningRef: popoverPositioningRef,
          position: "below",
          align: "end",
          offset: {
            mainAxis: 20,
            crossAxis: 30,
          },
        }}
        open={showMenuTriggerPopover}
        unstable_disableAutoFocus
      >
        <PopoverSurface tabIndex={-1}>
          <div className={styles.popoverRoot}>
            <div className={styles.popoverTitle}>
              <Subtitle1>{popoverInfo?.title}</Subtitle1>
              <Button
                size="small"
                appearance={"transparent"}
                icon={<DismissRegular />}
                onClick={() => setShowMenuTriggerPopover(false)}
              />
            </div>
            <Body2>{popoverInfo?.body}</Body2>
          </div>
        </PopoverSurface>
      </Popover>
    </>
  );
};

OrganizationMenu.displayName = "OrganizationMenu";
